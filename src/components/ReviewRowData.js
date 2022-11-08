import React from 'react';

const ReviewRowData = ({reviewRowData}) => {
    console.log(reviewRowData)
    const {_id,serviceImg,message,serviceName} = reviewRowData;
    return (
     <div className='mb-8 w-3/4 mx-auto bg-pink-200 flex gap-16'>
        <img className='w-12 ' src={serviceImg} alt="" />
        <p >{serviceName}</p>
        <p>{message}</p>
         <button>Edit</button>
         <button>Delete</button>
     </div>
    
       
    );
};

export default ReviewRowData;