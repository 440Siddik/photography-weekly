import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import signuplogo from "../../assests/Mobile signup-amico.png";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProviderContext";
const Signup = () => {
  const { createUser, updateUserPofile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const password = form.password.value;

    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=3833e2aac0a7b1e1fffdd361e88bedfc";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imageUrl = data.data.display_url;
        //createuser
        createUser(email, password)
          .then((result) => {
            updateUserPofile(name, imageUrl).then(
              verifyEmail().then(() => {
                toast.success("Please Check Your Email For Verfication Link");
                navigate('/login')
              })
            );
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="lg:flex w-full px-4 py-4 items-center">
      <div className="lg:w-1/2">
        <img src={signuplogo} className="w-full" alt="" />
      </div>
      <div className="lg:w-1/2 lg:ml-[170px] my-4">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-fuchsia-800">
          <h1 className="text-3xl font-bold text-center text-white">Signup</h1>
          <form
            onSubmit={handleSignup}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label
                htmlFor="username"
                className="block text-white font-semibold"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 focus:dark:border-violet-400 text-fuchsia-500 font-semibold"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm text-white font-semibold"
              >
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="text-white"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="username"
                className="block text-white font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 focus:dark:border-violet-400 text-amber-500 font-semibold"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-white font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-fuchsia-500 font-semibold focus:dark:border-violet-400"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-fuchsia-500 font-bold bg-white my-3">
              Sign Up
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-white font-semibold">
            Already have an account?
            <Link to="/login" className="underline text-white font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
