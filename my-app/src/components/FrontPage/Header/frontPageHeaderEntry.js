import React from "react";

import UserIcon from "../../../icons/user.svg";
import MailIcon from "../../../icons/mail.svg";

import "./frontPageStyle.css";

export const FrontPageHeaderEntry = ({ checkIsAdmin }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ paddingLeft: "3rem" }}>
            <h3>Byte Hire</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ justifyContent: "space-between" }}
          >
            <div class="navbar-nav">
              <a class="nav-link " aria-current="page" href="welcome">
                <h5>Home</h5>
              </a>
              <a class="nav-link " aria-current="page" href="job-postings">
                <h5>Job Postings</h5>
              </a>
            </div>
            <div style={{ display: "flex", paddingRight: "10rem" }}>
              <div style={{ paddingRight: "2rem" }}>
                <button className="user-header">
                  <img src={UserIcon} alt="User Icon" />
                </button>
              </div>
              <div>
                <button className="mail-header">
                  <img src={MailIcon} alt="Mail Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
