import React from "react";
import CarFilters from "../components/CarFilters";
import CarList from "../components/CarList";
import { sampleCars } from "../sampleData";

function FindCars() {
  return (
    <div className="container mt-5 pt-1">
      <div className="row">
        <div className="col-md-3">
          <CarFilters />
        </div>
        <div className="col-md-9">
          <CarList cars={sampleCars} />
        </div>
      </div>
    </div>
  );
}

export default FindCars;
