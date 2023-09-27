import React, { useState } from "react";

const SearchBar = ({ data, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <nav className="navbar bg-body-tertiary" style={{ width: "50vh" }}>
      <div className="container-fluid" style={{ width: "50vh" }}>
        <form className="d-flex" role="search" style={{ width: "50vh" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
