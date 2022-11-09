import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/UserContext";
import ReviewRowData from "./ReviewRowData";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [result, setResult] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        if(data.length){
            setResult(true);
        }
    });
  }, [user?.email,result]);

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
            .catch(err=>console.log(err))
    }
}

  return (
    <div className="h-[80vh]">
      {
        result ? <>


{myReviews.map((reviewRowData) => 
        <ReviewRowData reviewRowData={reviewRowData} handleDelete={handleDelete}></ReviewRowData>
      )} 
            </>:
            <>
           <p className=" w-full h-[80vh] text-5xl font-bold text-red-400 flex justify-center items-center">No reviews are found</p>
            </>
      }

      </div>
     
   
      
    


// {myReviews.map((reviewRowData) => 
//     <ReviewRowData reviewRowData={reviewRowData} handleDelete={handleDelete}></ReviewRowData>
//   )}
  );
};

export default MyReviews;
