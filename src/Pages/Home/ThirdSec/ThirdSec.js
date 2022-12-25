import React from "react";
import bos1 from '../../../assests/imgs/s7.jpeg'
import bos2 from '../../../assests/imgs/s2.jpeg'
import bos3 from '../../../assests/imgs/s1.jpeg'
import bos4 from '../../../assests/imgs/s4.webp'
import bos5 from '../../../assests/imgs/s6.jpeg'
import bos6 from '../../../assests/imgs/s5.webp'
import { Link } from "react-router-dom";

const ThirdSec = () => {
  return (
    <div className="text-center mb-10">
      <Link to='/allservices'>
        <button className="btn bg-gradient-to-r border-none from-blue-500 to-pink-600 px-6 text-xl text-white font-semibold">
          See All
        </button>
      </Link>
      <div className="my-10">
        <h1 className="text-center font-bold text-4xl mb-8">Best Of Six</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="h-[450px] w-[400px] mx-auto bg-gradient-to-r from-violet-600 to-pink-600">
            <img
              src={bos1}
              className="w-full h-full p-3 rounded-lg
            "
              alt=""
            />
          </div>
          <div className="h-[450px] w-[400px] mx-auto bg-gradient-to-r from-violet-600 to-pink-600">
            <img src={bos2} className="w-full h-full p-3" alt="" />
          </div>
          <div className="h-[450px] w-[400px] mx-auto bg-gradient-to-r from-violet-600 to-pink-600">
            <img src={bos3} className="w-full h-full p-3" alt="" />
          </div>
          <div className="h-[450px] w-[400px] mx-auto bg-gradient-to-r from-violet-600 to-pink-600">
            <img src={bos4} className="w-full h-full p-3" alt="" />
          </div>
          <div className="h-[450px] w-[400px] mx-auto bg-gradient-to-r from-violet-600 to-pink-600">
            <img src={bos5} className="w-full h-full p-3" alt="" />
          </div>
          <div className="h-[450px] w-[400px] mx-auto bg-gradient-to-r from-violet-600 to-pink-600">
            <img src={bos6} className="w-full h-full p-3" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSec;
