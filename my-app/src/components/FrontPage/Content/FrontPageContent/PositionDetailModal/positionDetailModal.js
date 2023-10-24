import "./stylesd.css";
import { UploadFile } from "./UploadFile/uploadFile";

export const PositionDetailModal = ({
  setShowPositionDetailModal,
  modalInfo,
}) => {
  return (
    <div className="modal-overly">
      <div className="modad">
        <button
          className="close-button"
          onClick={() => setShowPositionDetailModal(false)}
        >
          X
        </button>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
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
          <p>{modalInfo.description}</p>
        </div>
        <h2 style={{ paddingBottom: "2rem" }}>Upload your resume below</h2>
        <UploadFile />
      </div>
    </div>
  );
};
