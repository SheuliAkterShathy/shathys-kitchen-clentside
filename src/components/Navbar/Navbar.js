import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
 
  const [navbar, setNavbar] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <nav className="w-full bg-pink-400 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex items-center text-white ">
                <img
                  className="w-10 mr-2 rounded-full"
                  src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png"
                  alt=""
                />

                <NavLink to="">
                  <h2 className="text-3xl font-bold text-white mr-3">
                    Shathy's Kitchen
                  </h2>
                </NavLink>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-pink-500 px-2 py-1 rounded-md" : undefined
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-pink-500 px-2 py-1 rounded-md" : undefined
                    }
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-pink-500 px-2 py-1 rounded-md" : undefined
                    }
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                {user?.uid ? (
                  <>
                    <li className="text-white hover:text-indigo-200">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "bg-pink-500 px-2 py-1 rounded-md"
                            : undefined
                        }
                        to="/myreviews"
                      >
                        My Reviews
                      </NavLink>
                    </li>
                    <li className="text-white hover:text-indigo-200">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "bg-pink-500 px-2 py-1 rounded-md"
                            : undefined
                        }
                        to="/addservices"
                      >
                        Add Services
                      </NavLink>
                    </li>

                    <li>
                      <button onClick={handleSignOut} className="text-white">
                        logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <>
                      <li>
                        <NavLink  className={({ isActive }) =>
                          isActive
                            ? "bg-pink-500 px-2 py-1 rounded-md text-white"
                            : 'text-white'
                        } to="/login">
                          log in
                        </NavLink>
                      </li>
                    </>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
