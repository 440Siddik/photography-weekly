import React, { useContext, useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProviderContext';
import ReviewCard from './ReviewCard';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

      useEffect(() => {
        fetch(`https://photography-weekly-server.vercel.app/reviews?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => setReviews(data));
      }, [user?.email]);

       const handleDelete = (id) => {
         const proceed = window.confirm(
           "Are you sure, you want to delete this review?"
         );
         if (proceed) {
           fetch(`https://photography-weekly-server.vercel.app/reviews/${id}`, {
             method: "DELETE",
           })
             .then((res) => res.json())
             .then((data) => {
               if (data.deletedCount > 0) {
                 toast.success("Deleted Successfully");
                 const remaining = reviews.filter((rvw) => rvw._id !== id);
                 setReviews(remaining);
               }
             });
         }
       };

  return (
    <div className="h-[100vh]">
      {reviews.length === 0 ? (
        <h1 className="text-5xl text-red-400 font-bold text-center mt-[50vh]">
          'No reviews were added'
        </h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              handleDelete={handleDelete}
            ></ReviewCard>
          ))}
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default MyReviews;