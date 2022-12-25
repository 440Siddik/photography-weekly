import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const AllServicesCard = ({ als }) => {
  const { _id, img, description, rating, price, serviceName } = als;
  return (
    <div className="card w-96 bg-gradient-to-r from-amber-300 to-red-600 shadow-xl h-[600px] mx-auto">
      <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              src={img}
              alt="Shoes"
              className="rounded-xl h-[300px] w-full"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title font-extrabold text-2xl">{serviceName}</h2>
        <p className="font-bold">{description.slice(0, 100) + "..."}</p>
        <p className="text-center font-bold">Rating : {rating}</p>
        <p className="text-center font-bold">Price : {price}</p>
        <div className="card-actions">
          <Link to={`/service/${_id}`}>
            <button className="btn bg-rose-800 border-none text-white font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
