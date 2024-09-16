import React from "react";

const SellCar = () => {
  return (
    <div className="container mt-5 pt-5">
      <h2>Sell Your Car</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Brand
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            placeholder="Enter car brand"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">
            Model
          </label>
          <input
            type="text"
            className="form-control"
            id="model"
            placeholder="Enter car model"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            type="number"
            className="form-control"
            id="year"
            placeholder="Enter car year"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter asking price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter car description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Car Images
          </label>
          <input type="file" className="form-control" id="image" multiple />
        </div>
        <button type="submit" className="btn btn-primary">
          List Car for Sale
        </button>
      </form>
    </div>
  );
};

export default SellCar;
