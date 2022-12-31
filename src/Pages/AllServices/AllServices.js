import React, { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [allservices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("https://photography-weekly-server.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10">
      {allservices.map((als) => (
        <AllServicesCard key={als._id} als={als}></AllServicesCard>
      ))}
    </div>
  );
};

export default AllServices;
