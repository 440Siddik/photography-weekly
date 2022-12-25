import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProviderContext";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { _id, img, description, serviceName, rating, price } = serviceDetails;
  const { user } = useContext(AuthContext);
  const [allreviews, setAllReviews] = useState([]);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregisterd";
    const review = form.review.value;

    const reviews = {
      service: _id,
      serviceName: serviceName,
      price,
      customar: name,
      email,
      review,
      photo: user?.photoURL,
    };

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added Successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("http://localhost:5000/allreviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-2 mx-auto">
      <div className="card w-96 shadow-xl h-[800px] bg-gradient-to-r from-pink-400 to-indigo-700 my-10 ml-4 mx-auto">
        <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt="Shoes"
                className="rounded-xl h-[320px] w-full"
              />
            </PhotoView>
          </PhotoProvider>
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title font-extrabold text-2xl text-white">
            {serviceName}
          </h2>
          <p className="font-bold text-white">{description}</p>
          <p className="text-center font-bold text-white">Rating : {rating}</p>
          <p className="text-center font-bold text-white">Price : ${price}</p>
          <div className="card-actions">
            <Link to="/">
              <button className="btn border-none bg-rose-600 text-white font-semibold">
                Back To Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {user ? (
          <h1 className="z-10 text-center text-4xl font-medium mt-4">
            Service Reviews
          </h1>
        ) : (
          <h1 className="text-3xl text-center text-sky-600 font-semibold">
            Please login to add a review{" "}
            <Link to="/login">
              <span className="text-red-600 font-semibold text-4xl underline">
                Login
              </span>
            </Link>
          </h1>
        )}
        <div>

          {allreviews.map((alr) => (
            <div key={alr._id}>
              <div className="overflow-x-auto">
                <table className="table mx-auto mt-8">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Reviews</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={alr.photo} alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{alr.customar}</div>
                          </div>
                        </div>
                      </td>
                      <td>{alr.email}</td>
                      <td>{alr.review}</td>
                     
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Reviews</th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto lg:mx-4">
        <div>
          {user ? (
            <h1 className="text-3xl text-center font-semibold text-blue-400 mt-8 mb-4">
              Add Your Review
            </h1>
          ) : (
            ""
          )}
          {user ? (
            <div className="border-2 rounded-md border-orange-300 mb-10 px-6 py-2">
              <form onSubmit={handleReview}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered rounded-lg w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={user ? user?.email : ""}
                    readOnly
                    className="input input-bordered rounded-lg w-full max-w-xs"
                  />
                </div>
                <textarea
                  name="review"
                  className="textarea textarea-secondary my-4 rounded-lg w-[280px] lg:w-[400px] h-[100px]"
                  placeholder="Add Your Review"
                ></textarea>
                <button className="btn btn-success rounded-md block mb-3">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
