import React from "react";
import { Link } from "react-router-dom";

const ReviewRowData = ({ reviewRowData, handleDelete }) => {
  
  const { _id, serviceImg, message, serviceName, customer } = reviewRowData;
  return (
    <div className="mb-8 w-4/5 mx-auto bg-pink-100 p-8">
      <div>
        <img className="w-16 mb-1 " src={serviceImg} alt="" />
        <p className="mb-1">Food Name: {serviceName}</p>
      </div>
      <p className="mb-1">Customer Name: {customer}</p>
      <p className="mb-2">Customer Review: {message}</p>
      <Link to={`/update/${_id}`}>
        <button className="bg-green-400 hover:bg-green-500 mr-5 py-1 px-4 rounded-sm mt-1">Edit</button>
      </Link>
      <button className="bg-red-400 hover:bg-red-500 py-1 px-4 rounded-sm mt-1" onClick={() => handleDelete(_id)}>
        Delete
      </button>
    </div>
  );
};

export default ReviewRowData;
