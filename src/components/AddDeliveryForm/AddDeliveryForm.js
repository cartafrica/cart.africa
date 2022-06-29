import React from "react";
import PropTypes from "prop-types";

const AddDeliveryForm = (props) => (
  <form className="lg:w-1/3 w-full">
    <div className="mb-3">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
        Fullname
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
      />
    </div>
    <div className="mb-3">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="text"
      />
    </div>
    <div className="mb-3">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
        Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="address"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="city">
        City
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="city"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="state">
        State
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="state"
        type="text"
      />
    </div>
    <button
      className="bg-century w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Save
    </button>
  </form>
);

AddDeliveryForm.propTypes = {};

AddDeliveryForm.defaultProps = {};

export default AddDeliveryForm;
