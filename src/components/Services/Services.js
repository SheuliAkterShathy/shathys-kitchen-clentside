import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  // const services = useLoaderData();
  useTitle("Services");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://shathys-kitchen-server-sheuliaktershathy.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <p className="flex justify-center items-center mt-4">
        {loading ? (
          loading
        ) : (
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-600 "></div>
        )}
      </p>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 my-12">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
