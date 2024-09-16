// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { fetchCars } from "../services/carService";

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getCars = async () => {
//       try {
//         const carData = await fetchCars();
//         setCars(carData);
//       } catch (error) {
//         console.error("Failed to load cars:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getCars();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="car-list">
//       <h1>Heyyyoooo</h1>
//       {cars.map((car) => (
//         <div className="car-item" key={car.id}>
//           <img src={car.image} alt={car.name} className="car-image" />
//           <div className="car-details">
//             <h5>{car.name}</h5>
//             <p>Price: {car.price}</p>
//             <p>Seats: {car.seats}</p>
//             <p>Engine: {car.engineDisplacement}</p>
//             <Link to={`/car/${car.id}`} className="btn btn-secondary">
//               View More
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//     // <div>
//     //   <h2>Available Cars</h2>
//     //   {cars.length > 0 ? (
//     //     <ul>
//     //       {cars.map((car) => (
//     //         <li key={car._id}>
//     //           {car.name} - ${car.price}
//     //         </li>
//     //       ))}
//     //     </ul>
//     //   ) : (
//     //     <p>No cars available</p>
//     //   )}
//     // </div>
//   );
// };

// export default CarList;

import React from "react";
import CarCard from "./CarCard";

function CarList({ cars }) {
  return (
    <div>
      <div className="row row-cols-1 g-4">
        {cars.map((car) => (
          <div key={car.id} className="col">
            <CarCard car={car} />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-secondary">Load More</button>
      </div>
    </div>
  );
}

export default CarList;
