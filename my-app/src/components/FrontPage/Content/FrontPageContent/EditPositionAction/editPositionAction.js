import React, { useEffect, useRef, useState } from "react";
import { SaveChangesModal } from "./SaveChangesModal/saveChangesModal";
import "./stylesd.css";

export const EditPositionAction = ({
  setShowPositionDetailModal,
  setModalInfo,
  modalInfo,
  getData,
  itemId,
}) => {
  const pRef = useRef(null);
  const [showSaveModal, setShowSaveModal] = useState(false);

  useEffect(() => {
    if (pRef.current) {
      pRef.current.focus();
    }
  }, []);

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.textContent;
    setModalInfo({
      ...modalInfo,
      description: newDescription,
    });
  };

  return (
    <div className="modal-overly">
      <div className="modad">
        {showSaveModal && (
          <SaveChangesModal
            setShowPositionDetailModal={setShowPositionDetailModal}
            getData={getData}
            itemId={itemId}
            modalInfo={modalInfo}
          />
        )}
        <button
          className="close-button"
          onClick={() => {
            console.log(modalInfo);
            setModalInfo({
              id: itemId,
              company: modalInfo.CompanyName,
              salary: modalInfo.salary,
              position: modalInfo.JobTitle,
              location: modalInfo.location,
              jobType: modalInfo.jobType,
              dateEntered: modalInfo.dateEntered,
              description: modalInfo.description,
            });
            setShowSaveModal(true);
          }}
        >
          X
        </button>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ color: "#5d5d5d", opacity: "50%" }}>EDIT MODE</h3>
          </div>
          <div className="title">
            <h2>{modalInfo.CompanyName}</h2>
            <h3>{modalInfo.JobTitle}</h3>
            <h4>{modalInfo.location}</h4>
          </div>
          <div>
            <div>
              <h4>Posted on</h4>
            </div>
            <div>
              <h5>{modalInfo.dateEntered}</h5>
            </div>
          </div>
        </div>
        <div className="job-description">
          <p
            contentEditable={true}
            spellCheck="false"
            ref={pRef}
            onBlur={handleDescriptionChange}
          >
            {modalInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
};
