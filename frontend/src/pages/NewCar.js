import React from "react";

import SuggestedForYou from "../components/Suggestion";
import Filters from "../components/SidebarFilters";
import CarList from "../components/CarList";

const NewCar = () => {
  return (
    <div>
      <div>
        <SuggestedForYou />
      </div>
      <div className="d-flex">
        <Filters />
        <CarList />
      </div>
    </div>
  );
};

export default NewCar;
