import React from "react";
import "./stylesd.css";

export const DeleteModal = ({ setShowDeleteModal, deleteFlag, getData }) => {
  const deleteJobPost = () => {
    fetch(`https://localhost:7171/api/JobPostings/${deleteFlag}`, {
      method: "DELETE",
      mode: "cors",
    })
      .then((response) => {
        if (response.status === 200) {
          getData();
          return response.json();
        } else if (response.status === 404) {
          throw new Error("Resource not found");
        } else if (response.status === 500) {
          throw new Error("Internal server error");
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  };

  return (
    <div className="modal-overly">
      <div className="modad-save">
        <div>
          <h4 style={{ paddingBottom: "2rem" }}>Delete</h4>
        </div>
        <p style={{ paddingBottom: "2rem" }}>
          Are you sure you want to delete ?
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button onClick={() => setShowDeleteModal(false)}>No</button>
          </div>
          <div>
            <button
              onClick={() => {
                deleteJobPost();
                setShowDeleteModal(false);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
