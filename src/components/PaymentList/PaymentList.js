import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PaymentList = (props) => {
  const methodItems = props.data.map((method, index) => (
    <li
      className="flex items-center space-x-4 py-4 border-b border-gray-300 first:pt-0"
      key={index}
    >
      <div className="flex-1">
        <h4 className="text-gray-800 text-lg">**** **** **** {method.last4}</h4>
        <small className="text-xs text-gray-600">{method.expiry}</small>
      </div>
      <div>
        <a href="#" className="text-sm text-red-500">
          Remove
        </a>
      </div>
    </li>
  ));
  return <ul className="w-full">{methodItems}</ul>;
};

PaymentList.propTypes = {};

PaymentList.defaultProps = {};

export default PaymentList;
