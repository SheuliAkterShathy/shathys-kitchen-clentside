import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 my-12'>
            {
                services.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
            }
        </div>
    );
};

export default Services;