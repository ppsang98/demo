import React from "react";
import PropTypes from "prop-types";
import "./Search.css";

const Search = (props) => {
  const { keyword, updateKeyword } = props;

  return (
    <div className="search_wrapper">
      <label htmlFor="search" className="d-flex align-items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Icon"
          value={keyword || ""}
          className="search_wrapper_input"
          onChange={(e) => updateKeyword(e.target.value)}
        />
        <span className="search_wrapper_button">
          <i className="ai-magnifying-glass-a"></i>{" "}
        </span>
      </label>
    </div>
  );
};

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  updateKeyword: PropTypes.func.isRequired
};

export default Search;
