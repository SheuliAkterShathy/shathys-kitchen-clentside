import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Update = () => {
  const storedUser = useLoaderData();
  
  const [user, setUser] = useState(storedUser);
   useTitle('update')
  const handleUpdateUser = (event) => {
    event.preventDefault();
    fetch(
      `https://shathys-kitchen-server-sheuliaktershathy.vercel.app/review/${storedUser?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("User updated");
          console.log(data);
        }
      });
  };
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div className="mx-auto w-3/4 bg-pink-100 p-4 mt-16 pt-12 rounded-sm">
      <form className="" onSubmit={handleUpdateUser}>
        <div className="text-center ">
          <input
            onChange={handleInputChange}
            className=" p-3 w-1/2"
            type="text"
            name="name"
            placeholder="name"
            required
            defaultValue={storedUser?.customer}
          />
        </div>
        <br />
        <div className="text-center">
          <input
            onChange={handleInputChange}
            className=" p-3 w-1/2"
            type="text"
            name="message"
            placeholder="message"
            required
            defaultValue={storedUser?.message}
          />
        </div>
        <br />

        <div className="text-center">
          <button type="submit" className="bg-pink-200 p-3 rounded-md hover:bg-pink-300">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
