import React from 'react';
import toast, { Toaster } from "react-hot-toast";
const AddService = () => {

  const handleService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const image = form.img.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;

    const addService = {
      serviceName,
      img: image,
      rating,
      price,
      description,
    };
    fetch("https://photography-weekly-server.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
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

  return (
    <form
      onSubmit={handleService}
      className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-4 border-2 border-orange-400 p-10"
    >
      <input
        type="text"
        name="serviceName"
        placeholder="Service Name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        name="img"
        placeholder="Image Url"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        name="rating"
        placeholder="Rating"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="input input-bordered w-full max-w-xs"
      />
      <input type="submit" className="btn btn-ghost" value="Submit" />
      <Toaster />
    </form>
  );
};

export default AddService;