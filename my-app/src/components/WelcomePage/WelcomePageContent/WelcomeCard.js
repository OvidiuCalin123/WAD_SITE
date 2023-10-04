import React from "react";
import { useNavigate } from "react-router-dom";

export const WelcomeCard = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "70rem",
    height: "40rem",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    position: "relative",
    overflowY: "auto",
    marginTop: "4rem",
  };

  const navigate = useNavigate();
  const handleClick = () => navigate("/job-postings");

  return (
    <div style={containerStyle} className="card-custom">
      <div>
        <h3>Welcome To ByteHire!</h3>
      </div>

      <div>
        <p>
          We are very thankful that you choose ByteHire for your hiring search,
          and we will make sure you have a wonderfull experience with us. Happy
          Hunting!
        </p>
      </div>

      <div>
        <button class="btn btn-primary" type="submit" onClick={handleClick}>
          Got To job postings
        </button>
      </div>
    </div>
  );
};
