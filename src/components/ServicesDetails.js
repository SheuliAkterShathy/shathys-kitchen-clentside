import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import  { AuthContext } from '../Context/UserContext';

const ServicesDetails = () => {
    const {img,name,_id,price,ratings,details}=useLoaderData()
    const {user} = useContext(AuthContext);

    const handleReviewSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const message = form.message.value;
        console.log(message)
    }
    console.log(user)
    return (
        <div>

      {/* Details Section */}
        <section>
        <div className='lg:flex w-4/5 mx-auto bg-pink-200 mt-20'>
           <div className='p-4 lg:w-1/2'>
            <img  src={img} alt="" />
           </div>

            <div className='p-4 lg:w-1/2'>
              <h2>Name: {name}</h2>
              <p>Price: {price}</p>
              <p>Ratings: {ratings}</p>
              <p>Details: {details}</p>
            </div>
        </div>
        </section>

          {/* Review Section */}
        <section className='w-4/5 mx-auto bg-pink-200 my-16 p-5'>
          <div className='flex gap-5'>
          <div className='bg-pink-300 w-1/2 p-4'>
            
           <div className='flex items-center'>
           <div>
            <img className='w-12 rounded-full' src={user?.photoURL} alt="" />
            </div>
              <h3>Name:{user?.displayName}</h3>
           </div>
             
             <p>Review:hhh</p>
           </div>

           <div className='w-1/2'>
           <form onSubmit={handleReviewSubmit}>
           <input className='w-full p-6' type="text" name='message' />
           <button type='submit'>Add Review</button>
           </form>
           </div>
          </div>
        </section>
        </div>
    );
};

export default ServicesDetails;