import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";



const Review = ({ review, handleReviewSubmit }) => {
  // const {user} = useContext(AuthContext)
  console.log(review);
  const { message, customer, photoURL,time } = review;
  return (
    <div className="bg-pink-300 m-5 p-4">
      <div className="flex items-center">
        <div>
          <img className="w-12 rounded-full" src={photoURL} alt="" />
        </div>
        <h3>Name:{customer}</h3>
      </div>
      <p>Review:{message}</p>
      <p>Time:{time}</p>
    </div>
  );
};

export default Review;
