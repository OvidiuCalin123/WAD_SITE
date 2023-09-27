import React, { useState } from "react";
import { data } from "../../mockData";
import SearchBar from "../SearchBar/searchBar";
import { PositionDetailModal } from "../PositionDetailModal/positionDetailModal";

const itemsPerPage = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [showPositionDetailModal, setShowPositionDetailModal] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchQuery) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filteredItems = data.filter(
      (item) =>
        item.company.toLowerCase().startsWith(lowerCaseQuery) ||
        item.position.toLowerCase().startsWith(lowerCaseQuery)
    );
    setFilteredData(filteredItems);
    setCurrentPage(1);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handleClick(i)}>
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };

  return (
    <>
      <PositionDetailModal />

      <SearchBar onSearch={handleSearch} />
      <div>
        <ol className="list-group list-group-numbered">
          {currentItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div
                className="ms-2 me-auto mb-1"
                style={{ paddingBottom: "1px" }}
              >
                <div className="fw-bold">{item.company}</div>
                {item.position}
              </div>
              <span className="badge bg-primary rounded-pill">
                {item.location}
              </span>
            </li>
          ))}
        </ol>
        <nav aria-label="...">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handleClick(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {renderPaginationButtons()}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handleClick(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
