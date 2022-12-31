import React, { useEffect, useState } from "react";
import SecSectionCard from "./SecSectionCard";

const SecSection = () => {
  const [limServices, setLimServices] = useState([]);
  useEffect(() => {
    fetch("https://photography-weekly-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setLimServices(data);
      });
  }, []);
  return (
    <div className="my-12">
      <div>
        <h1 className="text-center font-bold text-4xl">My Services</h1>
      </div>
      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {limServices.map((lmservice) => (
          <SecSectionCard
            key={lmservice._id}
            lmservice={lmservice}
          ></SecSectionCard>
        ))}
      </div>
    </div>
  );
};

export default SecSection;
