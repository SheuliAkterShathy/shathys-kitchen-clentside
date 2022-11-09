import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRowData = ({reviewRowData,handleDelete}) => {
    console.log(reviewRowData)
    const {_id,serviceImg,message,serviceName,customer} = reviewRowData;
    return (
     <div className='mb-8 w-4/5 mx-auto bg-pink-200 lg:flex gap-16'>
       <div>
       <img className='w-12 ' src={serviceImg} alt="" />
        <p >{serviceName}</p>
       </div>
       <p>{customer}</p>
        <p>{message}</p>
         <Link to={`/update/${_id}`}><button>Edit</button></Link>
         <button onClick={()=>handleDelete(_id)}>Delete</button>
     </div>
    
       
    );
};

export default ReviewRowData;