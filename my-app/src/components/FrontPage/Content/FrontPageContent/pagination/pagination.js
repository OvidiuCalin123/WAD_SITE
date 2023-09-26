import React, { useState } from "react";
import { data } from "../../mockData";

const itemsPerPage = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => handleClick(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  const listItemStyles = {
    listStyleType: "none", // Remove bullets
    marginBottom: "10px", // Add space between list items
    fontSize: "16px", // Adjust text size
  };

  return (
    <div>
      <ol className="list-group list-group-numbered">
        {currentItems.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.company}</div>
              {item.position}
            </div>
            <span className="badge bg-primary rounded-pill">
              {item.location}
            </span>
          </li>
        ))}
      </ol>
      <div>{renderPaginationButtons()}</div>
    </div>
  );
};

export default Pagination;
