import React, { useEffect, useState } from "react";

import SearchBar from "../SearchBar/searchBar";
import { PositionDetailModal } from "../PositionDetailModal/positionDetailModal";
import { EditPositionAction } from "../EditPositionAction/editPositionAction";
import { ButtonStyle } from "./stylesPagination";
import { FilterPanel } from "../Filter/filterPanel";
import { ContentBackground } from "./styleContentEntry";

import EditIcon from "../../../../../icons/edit.svg";
import FilePlusIcon from "../../../../../icons/file-plus.svg";
import DeleteIcon from "../../../../../icons/trash-2.svg";
import { DeleteModal } from "../DeletePositionAction/SaveChangesModal/deleteModal";

import { useNavigate } from "react-router-dom";

const itemsPerPage = 9;

export const Pagination = () => {
  const navigate = useNavigate();
  const goToAddPostingScreen = () => navigate(`/add-job-posting`);

  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  const [sortedData, setSortedData] = useState([]);
  const [showPositionDetailModal, setShowPositionDetailModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [checkIsAdmin, setCheckIsAdmin] = useState(false);
  const [editShowPosition, setEditShowPosition] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [itemId, setItemId] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (sortedData?.length > 0) {
      setFilteredData(sortedData);
    } else {
      setFilteredData(data);
    }
  }, [sortedData]);

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

  const getData = () => {
    const token = localStorage.getItem("accessToken");

    fetch(`https://localhost:7171/api/JobPostings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          setItemId("");
          return response.json();
        } else if (response.status === 404) {
          throw new Error("Resource not found");
        } else if (response.status === 500) {
          throw new Error("Internal server error");
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      })
      .then((data) => {
        setFilteredData(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    getData();

    fetch(`https://localhost:7171/api/CheckUserIfAdmin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          throw new Error("Resource not found");
        } else if (response.status === 500) {
          throw new Error("Internal server error");
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      })
      .then((isAdmin) => {
        setCheckIsAdmin(isAdmin);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <FilterPanel
        filteredData={filteredData}
        sortedData={sortedData}
        setFilteredData={setFilteredData}
        setSortedData={setSortedData}
      />
      <ContentBackground>
        {showPositionDetailModal && (
          <PositionDetailModal
            setShowPositionDetailModal={setShowPositionDetailModal}
            modalInfo={modalInfo}
          />
        )}

        {editShowPosition && (
          <EditPositionAction
            setShowPositionDetailModal={setEditShowPosition}
            setModalInfo={setModalInfo}
            modalInfo={modalInfo}
            itemId={itemId}
            getData={getData}
          />
        )}

        {showDeleteModal && (
          <DeleteModal
            setShowDeleteModal={setShowDeleteModal}
            deleteFlag={itemId}
            getData={getData}
          />
        )}

        <div>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SearchBar onSearch={handleSearch} />
              {checkIsAdmin && (
                <div style={{ paddingLeft: "3rem" }}>
                  <button
                    class="btn btn-info"
                    type="button"
                    onClick={goToAddPostingScreen}
                  >
                    <img src={FilePlusIcon} />
                  </button>
                </div>
              )}
            </div>
            <ol className="list-group list-group-numbered">
              {currentItems?.map((item, index) => (
                <ButtonStyle
                  onClick={() => {
                    setModalInfo({
                      CompanyName: item.company,
                      JobTitle: item.position,
                      location: item.location,
                      dateEntered: item.dateEntered,
                      description: item.description,
                    });
                    setShowPositionDetailModal(true);
                  }}
                >
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-start"
                  >
                    <div
                      className="ms-2 me-auto mb-1"
                      style={{ paddingBottom: "1px" }}
                    >
                      <div>
                        <div className="fw-bold">{item.company}</div>
                        {item.position}
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {checkIsAdmin && (
                        <div style={{ paddingRight: "5rem", display: "flex" }}>
                          <div style={{ paddingRight: "2rem" }}>
                            <button
                              class="btn"
                              type="button"
                              style={{ backgroundColor: "#fff9c0" }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalInfo({
                                  CompanyName: item.company,
                                  JobTitle: item.position,
                                  location: item.location,
                                  dateEntered: item.dateEntered,
                                  description: item.description,
                                  salary: item.salary,
                                  jobType: item.jobType,
                                });
                                setItemId(item.id);
                                setEditShowPosition(true);
                              }}
                            >
                              <img src={EditIcon} />
                            </button>
                          </div>
                          <div>
                            <button
                              class="btn"
                              type="button"
                              style={{ backgroundColor: "#ffa9a9" }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setItemId(item.id);
                                setShowDeleteModal(true);
                              }}
                            >
                              <img src={DeleteIcon} />
                            </button>
                          </div>
                        </div>
                      )}
                      <div>
                        <div>
                          <h5>
                            {item.salary === null ? "-" : item.salary + " $"}
                          </h5>
                        </div>

                        <div>
                          <span className="badge bg-primary rounded-pill">
                            {item.location}
                          </span>
                        </div>
                        <span className="badge bg-primary rounded-pill ">
                          {item.jobType}
                        </span>
                      </div>
                    </div>
                  </li>
                </ButtonStyle>
              ))}
            </ol>
          </div>
        </div>
        <div style={{ transform: "translate(0,0.82rem)" }}>
          <nav aria-label="...">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
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
      </ContentBackground>
    </div>
  );
};
