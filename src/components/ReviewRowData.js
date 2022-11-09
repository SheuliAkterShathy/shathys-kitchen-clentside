import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRowData = ({reviewRowData,handleDelete}) => {
    console.log(reviewRowData)
    const {_id,serviceImg,message,serviceName,customer} = reviewRowData;
    return (
     <div className='mb-8 w-4/5 mx-auto bg-pink-100 p-8'>
       <div>
       <img className='w-12 ' src={serviceImg} alt="" />
        <p >Food Name: {serviceName}</p>
       </div>
       <p>Customer Name: {customer}</p>
        <p>Customer Review:  {message}</p>
         <Link to={`/update/${_id}`}><button className='bg-green-400 mr-5'>Edit</button></Link>
         <button className='bg-red-400' onClick={()=>handleDelete(_id)}>Delete</button>
     </div>
    
       
    );
};

export default ReviewRowData;