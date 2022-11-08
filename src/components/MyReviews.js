import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import ReviewRowData from "./ReviewRowData";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  return (
    <div>
     
     {myReviews.map((reviewRowData) => 
        <ReviewRowData reviewRowData={reviewRowData}></ReviewRowData>
      )}
    </div>
  );
};

export default MyReviews;
