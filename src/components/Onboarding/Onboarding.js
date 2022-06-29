import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Onboarding = (props) => {
  let navigate = useNavigate();
const handleSubmit = () => {
  navigate("/cart");
}
  return (
    <div className="w-full lg:w-96">
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="first"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="last">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="last"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="last"
            type="text"
          />
        </div>
        <button
          className="bg-century w-full text-white my-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Continue
        </button>
        <button
          className="bg-transparent w-full text-century my-1 py-3 px-4 focus:outline-none focus:shadow-outline"
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
