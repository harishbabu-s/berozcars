import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    // <div className="home-container">
    //   <div className="hero-image">
    //     <div className="hero-buttons">
    //       <Link to="/new-car" className="btn btn-primary">
    //         Buy New Car
    //       </Link>
    //       <Link to="/used-car" className="btn btn-primary">
    //         Buy Used Car
    //       </Link>
    //       <Link to="/sell-car" className="btn btn-primary">
    //         Sell Your Car
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid p-0">
      <div
        className="bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: "url('/api/placeholder/1920/1080')",
          height: "100vh", //"auto",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card bg-light bg-opacity-75">
          <div className="card-body">
            <h1 className="card-title text-center mb-5">
              Find Your Perfect Car
            </h1>
            <div className="d-grid gap-5">
              <Link to="/find-cars" className="btn btn-primary fw-bold fs-5">
                Find Cars
              </Link>
              <Link to="/buy-used-car" className="btn btn-primary fw-bold fs-5">
                Buy Used Car
              </Link>
              <Link to="/sell-my-car" className="btn btn-primary fw-bold fs-5">
                Sell My Car
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
