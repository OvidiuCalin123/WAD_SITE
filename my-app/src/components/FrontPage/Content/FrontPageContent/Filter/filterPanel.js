import "./stylesd.css";

import { React } from "react";

export const FilterPanel = ({ setSortedData, filteredData }) => {
  const handleRadioChange = (event) => {
    const sortedFilteredData = filteredData?.filter(
      (data) => data.jobType === event.target.defaultValue
    );
    setSortedData(sortedFilteredData);
  };

  return (
    <div className="modal-filter">
      <h2>Filter Options</h2>
      <div className="job-type">
        <h5>JobType: </h5>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            value="Remote"
            onChange={handleRadioChange} // Add onChange handler
          />
          <label class="btn btn-outline-primary" for="btnradio1">
            Remote
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
            value="On-site"
            onChange={handleRadioChange} // Add onChange handler
          />
          <label class="btn btn-outline-primary" for="btnradio2">
            On-Site
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
            value="Hybrid"
            onChange={handleRadioChange} // Add onChange handler
          />
          <label class="btn btn-outline-primary" for="btnradio3">
            Hybrid
          </label>
        </div>
      </div>
      <div>
        <div className="job-type">
          <h5>Company: </h5>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Company
            </button>
            <ul class="dropdown-menu">
              {filteredData?.map((jobPost) => (
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    style={{ overflowY: "auto" }}
                  >
                    {jobPost.company}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ paddingTop: "3rem" }}>
          <p>Work in progress..</p>
        </div>
      </div>
    </div>
  );
};
