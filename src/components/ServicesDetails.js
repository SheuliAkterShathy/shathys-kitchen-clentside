import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../hooks/useTitle";
import Review from "./Review";
import moment from "moment";

const ServicesDetails = () => {
  const { img, name, _id, price, ratings, details } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviewService, setReviewService] = useState([]);
  const [toggle, setToggle] = useState(true);
  useTitle("Service & review details");

  useEffect(() => {
    fetch(
      `https://shathys-kitchen-server-sheuliaktershathy.vercel.app/reviews/${_id}`
    )
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [toggle]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const customer = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const time = `${moment().format("Do MMM YY, h:mm")}`;

    const review = {
      service: _id,
      serviceName: name,
      serviceImg: img,
      time: time,
      customer,
      email,
      photoURL,
      message,
    };

    fetch(
      "https://shathys-kitchen-server-sheuliaktershathy.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem('genius-token')}`
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setToggle(!toggle);
          toast.success("review placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      {/* Details Section */}
      <section>
        <div className="lg:flex w-4/5 mx-auto bg-pink-200 mt-20">
          <div className="p-4 lg:w-1/2">
            <img src={img} alt="" />
          </div>

          <div className="p-4 lg:w-1/2">
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Ratings: {ratings}</p>
            <p>Details: {details}</p>
          </div>
        </div>
      </section>

      {/* Review Section */}
              
      <section className="w-4/5 mx-auto bg-pink-200 my-16 p-5 lg:flex">
        
        <div className="lg:w-2/5 m-5">
          {user?.email ? (
            <>
              <form onSubmit={handleReviewSubmit}>
                <input className="w-full p-6" type="text" name="message" placeholder="write your review" />
                <button className="bg-pink-300 rounded-md mt-3 cursor-pointer hover:bg-pink-400 p-3" type="submit">Add Review</button>
              </form>
            </>
          ) : (
            <>
              <p>
                Add to review?{" "}
                <Link to="/login">
                  <span className="text-pink-600 underline">login first</span>
                </Link>
              </p>
            </>
          )}
        </div>

        <div className="lg:w-3/5">
          {reviewService.map((review) => (
            <Review
              review={review}
              handleReviewSubmit={handleReviewSubmit}
            ></Review>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesDetails;
