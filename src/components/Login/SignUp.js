import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("SignUp");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        setLoading(false);
        const user = result.user;
        console.log(user);
        form.reset("");
        handleUpdateUserProfile(name, photoURL);
        toast.success("Registration successful");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setLoading(false);
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <p className="flex justify-center items-center mt-4">
        {loading ? (
          loading
        ) : (
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-600 "></div>
        )}
      </p>

      <div className=" lg:flex my-20 w-[90%] mx-auto">
        <div className="lg:w-1/2">
          <img
            className="  m-auto"
            src="https://img.freepik.com/premium-vector/enter-account-registration-verification-number_18660-2989.jpg?w=996"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 max-w-md p-4 rounded-md shadow sm:p-8 bg-pink-100 mx-auto">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Signup your account
          </h2>
          <p className="text-center">
            Do you have account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              className="focus:underline hover:underline text-pink-500"
            >
              Login here
            </Link>
          </p>
          <div className="my-6 space-y-4">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Sign up with Google</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full bg-black" />
            <p className="px-3">OR</p>
            <hr className="w-full bg-black" />
          </div>
          <form
            onSubmit={handleSubmit}
            novalidate=""
            action=""
            className="space-y-8 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label for="name" className="block text-sm">
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id=""
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label for="photoURL" className="block text-sm">
                  photoURL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  id=""
                  placeholder="photoURL"
                  className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label for="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-100 focus:border-violet-400"
                />
              </div>
            </div>
            <p className="text-red-700">{error}</p>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-pink-300 text-gray-900"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
