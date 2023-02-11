import React from "react";

const Content = () => {
  return (
    <div className="bg-pink-00 mx-4">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase rounded-full bg-teal-accent-400">
              Some Steps
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            Some Important Steps To Visit This Website
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
           This project is service review project.To visit full project one's have to login/register.To add review must have an account.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-52 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-between">
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-pink-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Sign Up / Log In
                </h6>
                <p className=" text-gray-900">
                You must signUp to see details if you are new here or if you already have an account you must LogIn to proceed.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-pink-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  My Review
                </h6>
                <p className=" text-gray-900">
                You can check review to know how your desired meal tests like and buy it. Everybody can show one's review.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-pink-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Give your valuable feedback
                </h6>
                <p className="text-gray-900">
                If you have tried one of my service. Please give your valuable feedback. Share your experience with everyone.


                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://img.freepik.com/free-photo/healthy-vegetables-kitchen_1303-12897.jpg?w=1380&t=st=1667845225~exp=1667845825~hmac=8b8877971bc7e25ff88b2748c4b1ec5d633eda101c71eae84f4cd4a0987a3416"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=1060&t=st=1676041480~exp=1676042080~hmac=5c8e349fc59732dfe4726dba37f21edd32ba64a58665ab9f51c7c8ea6f69fe71"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?w=900"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
