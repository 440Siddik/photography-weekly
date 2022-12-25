import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const SecSectionCard = ({ lmservice }) => {
  const {_id, img, description, serviceName } = lmservice;
  return (
    <div className="card w-96 shadow-xl h-[600px] mx-auto bg-gradient-to-r from-pink-400 to-indigo-700">
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
        <h2 className="card-title font-extrabold text-2xl text-white">{serviceName}</h2>
        <p className="font-bold text-white">{description.slice(0, 100) + "..."}</p>
        <div className="card-actions">
          <Link to={`/service/${_id}`}>
            <button className="btn border-none bg-rose-600 text-white font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecSectionCard;
