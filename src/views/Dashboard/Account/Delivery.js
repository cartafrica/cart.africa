import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AccountHeader from "components/AccountHeader/AccountHeader";
import DeliveryList from "components/DeliveryList/DeliveryList";
import { Link } from "react-router-dom";
import { getAddresses } from "services/network/lib/profile";

const Delivery = () => {
  const [isLoading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getAddresses()
      .then((response) => {
        console.log("response ", response.data);
        setAddresses(response.data.addresses);
      })
      .finally(() => {
        setLoading(false);
      });
  });
  return (
    <div className="">
      <AccountHeader name="Delivery Addresses" />
      {!isLoading ? (
        <div className="flex flex-col items-center justify-center p-5">
          <div className="w-full lg:w-3/4 xl:w-1/2 m-auto">
            <DeliveryList data={addresses} />
            <Link to="/account/add-delivery">
              <button className="bg-black w-full text-white my-3 py-3 rounded focus:outline-none focus:shadow-outline">
                Add Address
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <svg
            className="animate-spin mx-auto h-10 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

Delivery.propTypes = {};

Delivery.defaultProps = {};

export default Delivery;
