import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../hooks/useTitle";
import ReviewRowData from "./ReviewRowData";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [result, setResult] = useState(false);
  useTitle("MyReviews");

  useEffect(() => {
    fetch(
      `https://shathys-kitchen-server-sheuliaktershathy.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
          localStorage.removeItem("token");
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
        if (data.length) {
          setResult(true);
        }
      });
  }, [user?.email, result, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(
        `https://shathys-kitchen-server-sheuliaktershathy.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            const remaining = myReviews.filter((odr) => odr._id !== id);
            setMyReviews(remaining);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className=" mt-8">
      {result ? (
        <>
          {myReviews.map((reviewRowData) => (
            <ReviewRowData
              reviewRowData={reviewRowData}
              handleDelete={handleDelete}
            ></ReviewRowData>
          ))}
        </>
      ) : (
        <>
          <p className=" w-full h-[80vh] text-5xl font-bold text-red-400 flex justify-center items-center">
            No reviews are found
          </p>
        </>
      )}
    </div>
  );
};

export default MyReviews;
