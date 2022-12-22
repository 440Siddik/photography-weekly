import React from 'react';
import { Link } from 'react-router-dom';
import signuplogo from '../../assests/Mobile signup-amico.png'
const Signup = () => {
  return (
    <div className="lg:flex w-full px-4 py-4 items-center">
      <div className="lg:w-1/2">
        <img src={signuplogo} className="w-full" alt="" />
      </div>
      <div className="lg:w-1/2 lg:ml-[170px] my-4">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-fuchsia-800">
          <h1 className="text-3xl font-bold text-center text-white">Signup</h1>
          <form className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1 text-sm">
              <label for="username" className="block text-white">
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
              <label htmlFor="image" className="block mb-2 text-sm text-white">
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className='text-white'
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="username" className="block text-white">
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
              <label for="password" className="block text-white">
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
          <p className="text-xs text-center sm:px-6 text-white">
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