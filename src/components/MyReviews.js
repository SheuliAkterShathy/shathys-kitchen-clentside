import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('genius-token')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully');
                    const remaining = myReviews.filter(odr => odr._id !== id);
                    setMyReviews(remaining);
                }
            })
    }
}

  return (
    <div>
     
     {myReviews.map((reviewRowData) => 
        <ReviewRowData reviewRowData={reviewRowData} handleDelete={handleDelete}></ReviewRowData>
      )}
    </div>
  );
};

export default MyReviews;
