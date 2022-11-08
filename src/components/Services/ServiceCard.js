import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {name,price,img,details,_id}=service;
    return (
        <div className="w-96 rounded-md shadow-md bg-pink-100 mx-auto">

<PhotoProvider>
      <PhotoView  src={img}>
      <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 cursor-pointer"
        />
      </PhotoView>
    </PhotoProvider>

        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {name}
            </h2>
            <p className="text-xl text-pink-500">Price:{price}tk</p>
            <p className="">{details.slice(0,100)}...</p>
          </div>
          <Link to={`/services/${_id}`}>
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

export default ServiceCard;