import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DeliveryList = (props) => {
  const addressItems = props.data.map((address, index) => (
    <li
      className="flex items-center space-x-4 py-4 border-b border-slate-300 first:pt-0"
      key={index}
    >
      <div className="flex-1">
        <small className="text-xs text-gray-600">{address.name}</small>
        <h4 className="text-gray-800">{address.address}</h4>
        <small className="text-xs text-gray-600">{address.phone}</small>
      </div>
      <div>
        <Link
          to="/dashboard/account/edit-delivery"
          className="text-sm text-yellow-600"
        >
          Edit
        </Link>{" "}
        |{" "}
        <a href="#" className="text-sm text-red-500">
          Remove
        </a>
      </div>
    </li>
  ));
  return <ul className="w-full">{addressItems}</ul>;
};

DeliveryList.propTypes = {};

DeliveryList.defaultProps = {};

export default DeliveryList;
