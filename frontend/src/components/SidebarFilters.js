import React from "react";

const SidebarFilters = () => {
  return (
    <div className="sidebar">
      <h5>Filters</h5>
      <div className="filter-section">
        <h6>Price</h6>
        <input type="range" min="0" max="100000" className="price-range" />
      </div>
      <div className="filter-section">
        <h6>Brand</h6>
        <select className="form-control">
          <option>Select Brand</option>
          {/* Dynamically populate brands */}
        </select>
      </div>
      {/* Add other filter sections similarly */}
    </div>
  );
};

export default SidebarFilters;
