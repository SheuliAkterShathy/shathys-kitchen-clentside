import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const LimitService = ({ limitService }) => {
  return (
    <div className="w-96 rounded-md shadow-md bg-pink-00 mx-auto">
       <PhotoProvider>
      <PhotoView src={limitService.img}>
      <img
        src={limitService.img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 cursor-pointer"
      />
      </PhotoView>
    </PhotoProvider>
      {/* <img
        src={limitService.img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      /> */}
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {limitService.name}
          </h2>
          <p className="text-xl text-pink-500">Price:{limitService.price}tk</p>
          <p className="">{limitService.details.slice(0, 100)}...</p>
        </div>
        <Link to={`/services/${limitService._id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-pink-300 text-gray-900 hover:bg-pink-400"
          >
            View Details
          </button></Link>
      </div>
    </div>
  );
};

export default LimitService;
