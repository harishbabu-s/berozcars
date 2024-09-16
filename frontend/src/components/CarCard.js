import React from "react";

function CarCard({ car }) {
  return (
    <div className="card h-100">
      <div className="row">
        <div className="col-md-4">
          <img
            src={car.image}
            className="card-img-top"
            alt={`${car.brand} ${car.model}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">
              {car.brand} {car.model}
            </h3>
            <div className="row">
              <div className="col-md-6">
                <p className="card-text">
                  <b>Year:</b> {car.year}
                  <br />
                  <b>Price:</b> ${car.price.toLocaleString()}
                  <br />
                  <b>Mileage:</b> {car.mileage.toLocaleString()} miles
                  <br />
                </p>
              </div>
              <div className="col-md-6">
                <p className="card-text">
                  <b>Fuel Type:</b> {car.fuelType}
                  <br />
                  <b>Transmission:</b> {car.transmission}
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
