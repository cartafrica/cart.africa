import React from "react";
import PropTypes from "prop-types";

const LoginForm = (props) => {
  return (
    <div className="w-full lg:w-96">
      <h1 className="text-3xl text-center">Get Started</h1>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <button
          className="bg-century w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={props.login}
        >
          Sign In
        </button>
        <small className="text-gray-500">
          No passwords! We'll send a One Time Password to your email and that's
          how we confirm it's really you. Didn't get a mail?{" "}
          <a href="mailto:support@cart.africa" className="text-century font-bold">
            Contact support
          </a>
          .
        </small>
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default LoginForm;
