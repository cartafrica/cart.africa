import React from "react";
import PropTypes from "prop-types";

const AddDeliveryForm = (props) => (
  <form className="lg:w-1/2 m-auto w-full">
    <div className="mb-3">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
        Fullname
      </label>
      <input
        className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
        id="name"
        type="text"
      />
    </div>
    <div className="mb-3">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input
        className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
        id="phone"
        type="text"
      />
    </div>
    <div className="mb-3">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
        Address
      </label>
      <input
        className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
        id="address"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="city">
        City
      </label>
      <input
        className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
        id="city"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="state">
        State
      </label>
      <input
        className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
        id="state"
        type="text"
      />
    </div>
    <button
      className="bg-black w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={props.handle}
    >
      Save
    </button>
  </form>
);

AddDeliveryForm.propTypes = {};

AddDeliveryForm.defaultProps = {};

export default AddDeliveryForm;
