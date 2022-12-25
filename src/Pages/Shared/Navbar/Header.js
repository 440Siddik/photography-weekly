import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo.jpg'
import { AuthContext } from '../../../AuthProvider/AuthProviderContext';
const Header = () => {
  const {user,logout} = useContext(AuthContext)
  const menuItems = (
    <>
      <li className="font-semibold text-lg text-success bg-gray-100 rounded-lg border-2 border-b-green-300 lg:mr-4 mb-3">
        <Link to="/home">Home</Link>
      </li>
      {user?.email ? (
        <li>
          <button
            onClick={logout}
            className="btn btn-error font-semibold text-white border-2 border-b-purple-500 border-t-purple-500"
          >
            Logout
          </button>
        </li>
      ) : (
        <li className="font-semibold text-lg text-success bg-gray-100 rounded-lg border-2 border-b-green-300 lg:mr-4 mb-3">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-full border-2 border-b-purple-300 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 bg-purple-400 text-white rounded items-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-violet-300 rounded-box"
          >
            {menuItems}
          </ul>
        </div>
        <div className='flex items-center my-4'>
          <div className='w-14 h-13 ml-5'>
            <img src={logo} className='w-full h-full border-2 rounded border-y-orange-300 border-x-amber-300' alt="" />
          </div>
          <div className='ml-3 items-center lg:w-[200px] w-[180px]'>
            <Link to="/" className="lg:text-xl font-bold">
              <p>Photography Weekly</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;