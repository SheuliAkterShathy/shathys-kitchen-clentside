import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const {img,name,_id,price,ratings,details}=useLoaderData()
    
    return (
        <div className='flex w-4/5 mx-auto bg-pink-200 mt-20'>
           <div className='w-1/2'>
            <img  src={img} alt="" />
           </div>

            <div className='p-4 w-1/2'>
              <h2>Name: {name}</h2>
              <p>Price: {price}</p>
              <p>Price: {ratings}</p>
              <p>Details: {details}</p>
            </div>
        </div>
    );
};

export default ServicesDetails;