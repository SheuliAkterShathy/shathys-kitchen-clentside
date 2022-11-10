import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {

    const storedUser = useLoaderData();
    
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event =>{
        event.preventDefault();
        fetch(`https://shathys-kitchen-server-sheuliaktershathy.vercel.app/review/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                toast.success('user updated')
                console.log(data);
            }
            
        })

    }
    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
   
    return (
        <div className='mx-auto w-3/4 bg-pink-200'>
         <form className='' onSubmit={handleUpdateUser}>
                <div className='text-center '>
                <input onChange={handleInputChange}  className='text-center'  type="text" name='name' placeholder='name' required defaultValue={storedUser.customer} />
                </div>
                <br />
               <div className='text-center'>
               <input onChange={handleInputChange}  type="text"name='message' placeholder='message'  required defaultValue={storedUser.message} />
               </div>
                <br />
               {/* <div className='text-center'>
               <input onChange={handleInputChange} type="email" name="email" id="" placeholder='email' required />
               </div> */}
                
               <div className='text-center'>
               <button type="submit" className=''>Update User</button>
               </div>
            </form>
        </div>
    );
};

export default Update;