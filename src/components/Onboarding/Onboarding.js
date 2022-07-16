import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Onboarding = (props) => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/cart");
  };
  return (
    <div className="w-full lg:w-96">
      <div class="w-full py-6">
        <div class="flex">
          <div class="w-1/3">
            <div class="relative mb-2">
              <div class="w-10 h-10 mx-auto bg-century rounded-full text-lg text-white flex items-center">
                <span class="text-center text-white w-full">1</span>
              </div>
            </div>
          </div>

          <div class="w-1/3">
            <div class="relative mb-2">
              <div
                class="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(100% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div class="w-1/2 border-gray-300 border rounded"></div>
                </div>
              </div>

              <div class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                <span class="text-center text-gray-600 w-full">2</span>
              </div>
            </div>
          </div>

          <div class="w-1/3">
            <div class="relative mb-2">
              <div
                class="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(100% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div class="w-0 border-gray-300 border"></div>
                </div>
              </div>

              <div class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                <span class="text-center text-gray-600 w-full">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center">Complete Your Profile</h1>
      <p className="text-gray-500 text-sm text-center m-3">
        We need these information now, so you don't have to enter them again.
      </p>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="first">
            First Name
          </label>
          <input
            className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
            id="first"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="last">
            Last Name
          </label>
          <input
            className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
            id="last"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
            id="email"
            type="email"
          />
        </div>
        <button
          className="bg-century w-full text-white my-3 py-3 px-4 rounded focus:outline-none focus:ring-0 focus:ring-century"
          type="submit"
        >
          Continue
        </button>
        <button
          className="bg-transparent w-full text-century my-1 py-3 px-4 focus:outline-none focus:ring-0 focus:ring-century"
          type="button"
          onClick={props.login}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

Onboarding.propTypes = {};

Onboarding.defaultProps = {};

export default Onboarding;
