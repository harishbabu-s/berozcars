import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CarInfo from "../components/CarInfo";
import { fetchCars } from "../services/carService";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const carData = await fetchCars();
        setCars(carData);
      } catch (error) {
        console.error("Failed to load cars:", error);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    // <div className="car-list">
    //   {cars.map((car) => (
    //     <div className="car-item" key={car.id}>
    //       <img src={car.image} alt={car.name} className="car-image" />
    //       <div className="car-details">
    //         <h5>{car.name}</h5>
    //         <p>Price: {car.price}</p>
    //         <p>Seats: {car.seats}</p>
    //         <p>Engine: {car.engineDisplacement}</p>
    //         <Link to={`/car/${car.id}`} className="btn btn-secondary">
    //           View More
    //         </Link>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      <ul>
        <li>
          <CarInfo />
        </li>
        <li>
          <CarInfo />
        </li>
      </ul>
    </div>
  );
};

export default CarList;
