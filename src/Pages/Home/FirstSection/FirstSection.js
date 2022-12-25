import React from 'react';
import fslogo from '../../../assests/imgs/bn 10.jpeg'
const FirstSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={fslogo} className="rounded-lg shadow-2xl" />
        <div className='lg:text-start text-center'>
          <h1 className="lg:text-5xl text-xl lg:text-start text-center font-bold">
            We are what you are looking for !!!
          </h1>
          <p className="py-6 lg:text-start text-center font-medium">
            I'm expert in product photography, event photography, location
            photography, lifestyle photography, food photography and social
            media photography. <br />
            You can close your eyes and believe me. I'm professional at this work with 2+ years of experience.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;