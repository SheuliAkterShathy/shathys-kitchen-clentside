import React from "react";
import { useLoaderData } from "react-router-dom";
import LimitService from "../LimitService/LimitService";

const Home = () => {
  const limitServices = useLoaderData();
  
  return (
    <div>
      <section>
        <div className="bg-pink-200">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
              All are Welcome to <br /> Shathy's Kitchen
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              I specialize in every-day, home-made food that are simple yet
              finger-licking good!
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50"
              >
                Get started
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/healthy-vegetables-kitchen_1303-12897.jpg?w=1380&t=st=1667845225~exp=1667845825~hmac=8b8877971bc7e25ff88b2748c4b1ec5d633eda101c71eae84f4cd4a0987a3416"
          alt=""
          className="w-4/5  mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
        />
      </section>

    
       {/* limit services */}
      <section className="grid gap-4 grid-cols-1 lg:grid-cols-3 items-center justify-center mx-auto">
          {
            limitServices.map(limitService=><LimitService limitService={limitService}
                key={limitService._id}
            >
            </LimitService>)
          }
      </section>
    </div>
  );
};

export default Home;
