import React from "react";
import { useNavigate } from "react-router-dom";

export const WelcomeCard = () => {
  const containerStyle = {
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
      <button class="btn btn-primary" type="submit" onClick={handleClick}>
        Button
      </button>
    </div>
  );
};
