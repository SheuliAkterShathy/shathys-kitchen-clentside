import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import LimitService from "../LimitService/LimitService";

const Home = () => {
  const limitServices = useLoaderData();

  return (
    <div>
      <section className="">
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
        {limitServices.map((limitService) => (
          <LimitService
            limitService={limitService}
            key={limitService._id}
          ></LimitService>
        ))}
      </section>
      <div className="text-center my-12">
        <Link to="/services">
          {" "}
          <button className="btn bg-pink-400 mx-auto w-1/2  my-6 p-4">
            See More
          </button>
        </Link>
      </div>

      {/* quality section */}
      <section className="w-[97%] mx-auto">
        <div className="grid lg:grid-cols-3 gap-10 ">
          <div className="bg-pink-200 p-4">
            <img className="w-20" src="https://img.freepik.com/premium-vector/king-food-logo-template-design-vector_20029-1410.jpg?size=626&ext=jpg&uid=R59678187&ga=GA1.2.258402809.1666072521&semt=sph" alt="" />
            <h2 className="font-bold text-2xl">Quality Foods</h2>
            <p>
              Our main prayority to deliver quality foods.The term food quality
              represents the sum of all properties and attributes of a food item
              that are acceptable to the customer. 
            </p>
          </div>
          <div className="bg-pink-200 p-4">
            <img className="w-20" src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?w=1060&t=st=1667992031~exp=1667992631~hmac=32bf9a2e3dfa5ddbaf155b61fcceff37cdbbafe411e591c16ea286dfde174a69" alt="" />
            <h2 className="font-bold text-2xl">Fastest Delivery</h2>
            <p>jI try to delivery food as much as earlier possible.Order your favourite  Food in Dhaka with Shathys kitchen✓ Super fast food delivery to your home or office ✓ Safe & easy payment options.</p>
          </div>
          <div className="bg-pink-200 p-4">
            <img className="w-20" src="https://img.freepik.com/free-vector/modern-various-kitchen-tools-flat-icon-set_74855-6572.jpg?w=1060&t=st=1667992300~exp=1667992900~hmac=4efc5130cd2ed799c79b0725333a0b0fbb3a4b4cfe273d9eca5263a2138d9091" alt="" />
            <h2 className="font-bold text-2xl">Clean Kitchen</h2>
            <p>I want to provide
              Texture,Flavour, Nutritional content, Ethical and sustainable
              production foods.So clean kitchen is fundamental for this.</p>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section>
        <section className="py-6 bg-pink-200 mx-4 mx-auto my-8">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Shathy's kitchen</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Mirpur 10,dhaka,bangladesh</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>01771196084</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>sheuliakter85@gmail.com.com</span>
                </p>
              </div>
            </div>
            <form
              novalidate=""
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
            >
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  placeholder="Leroy Jenkins"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  placeholder="leroy@jenkins.com"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                ></textarea>
              </label>
              <button
                type="button"
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
