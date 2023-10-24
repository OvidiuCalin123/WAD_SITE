import React from "react";
import "./stylesd.css";

export const SaveChangesModal = ({
  setShowPositionDetailModal,
  getData,
  itemId,
  modalInfo,
}) => {
  const updateJobPosting = () => {
    console.log(modalInfo);
    fetch(`https://localhost:7171/api/JobPostings/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modalInfo),
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
          return response.json().then((data) => {
            throw new Error(
              `Unexpected status code: ${response.status}, Message: ${data.message}`
            );
          });
        }
      })
      .catch((error) => {
        console.error("Update error:", error.message);
      });
  };

  return (
    <div className="modal-overly">
      <div className="modad-save">
        <div>
          <h4 style={{ paddingBottom: "2rem" }}>Save Changes</h4>
        </div>
        <p style={{ paddingBottom: "2rem" }}>Are you sure you want to save ?</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button onClick={() => setShowPositionDetailModal(false)}>
              No
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                updateJobPosting();
                getData();
                setShowPositionDetailModal(false);
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
