import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProviderContext';

const ReviewCard = ({review, handleDelete}) => {

  const { user } = useContext(AuthContext);
  const { _id, serviceName, customar } = review;

  return (
    <div className="mb-12">
      <div className="card w-96 bg-base-100 h-full shadow-xl">
        <figure className="px-10 pt-10">
          {user?.photoURL ? (
            <img src={user?.photoURL} className="rounded-xl" alt="" />
          ) : (
            ""
          )}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Service Name : {serviceName}</h2>
          <p>Customar User Name : {customar}</p>
          <p>Review : {review.review}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Edit Review</button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;