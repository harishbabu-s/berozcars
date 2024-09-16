// import React from "react";

// const SidebarFilters = () => {
//   return (
//     <div className="sidebar">
//       <h5>Filters</h5>
//       <div className="filter-section">
//         <h6>Price</h6>
//         <input type="range" min="0" max="100000" className="price-range" />
//       </div>
//       <div className="filter-section">
//         <h6>Brand</h6>
//         <select className="form-control">
//           <option>Select Brand</option>
//           {/* Dynamically populate brands */}
//         </select>
//       </div>
//       {/* Add other filter sections similarly */}
//     </div>
//   );
// };

// export default SidebarFilters;

import React from "react";
import {
  sampleBrands,
  sampleFuelTypes,
  sampleTransmissions,
} from "../sampleData";

function CarFilters({ onFilterChange }) {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="priceRange" className="form-label">
          Price Range
        </label>
        <input type="range" className="form-range" id="priceRange" />
      </div>
      <div className="mb-3">
        <label htmlFor="brand" className="form-label">
          Brand
        </label>
        <select className="form-select" id="brand">
          <option value="">All Brands</option>
          {sampleBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="fuelType" className="form-label">
          Fuel Type
        </label>
        <select className="form-select" id="fuelType">
          <option value="">All Fuel Types</option>
          {sampleFuelTypes.map((fuelType) => (
            <option key={fuelType} value={fuelType}>
              {fuelType}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="transmission" className="form-label">
          Transmission
        </label>
        <select className="form-select" id="transmission">
          <option value="">All Transmissions</option>
          {sampleTransmissions.map((transmission) => (
            <option key={transmission} value={transmission}>
              {transmission}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Apply Filters
      </button>
    </form>
  );
}

export default CarFilters;
