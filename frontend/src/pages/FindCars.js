import React, { lazy, Suspense } from "react";

import CarFilters from "../components/CarFilters";
import { sampleCars } from "../sampleData";

const CarList = lazy(() => import("../components/CarList"));
const FindCars = () => {
  return (
    <div className="container mt-5 pt-1">
      <div className="row">
        <div className="col-md-3">
          <CarFilters />
        </div>
        <div className="col-md-9">
          <Suspense fallback={<div>Loading...</div>}>
            <CarList cars={sampleCars} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FindCars;
