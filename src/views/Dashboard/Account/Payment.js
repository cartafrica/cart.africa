import React from "react";
import PropTypes from "prop-types";
import PaymentList from "components/PaymentList/PaymentList";
import AccountHeader from "components/AccountHeader/AccountHeader";
import { Link } from "react-router-dom";

const Payment = () => {
  const methods = [
    {
      last4: "4120",
      expiry: "10/23",
    }, {
      last4: "4120",
      expiry: "10/23",
    }, {
      last4: "4120",
      expiry: "10/23",
    }, {
      last4: "4120",
      expiry: "10/23",
    }, {
      last4: "4120",
      expiry: "10/23",
    },
  ];
  return (
    <div className="Payment">
      <AccountHeader name="Payment Methods" />
      <div className="flex flex-col items-center justify-center p-5">
        <div className="w-full lg:w-3/4 xl:w-1/2 m-auto">
          <PaymentList data={methods} />
            <button className="bg-century w-full text-white my-3 py-3 rounded focus:outline-none focus:shadow-outline">
              Add Payment Method
            </button>
        </div>
      </div>
    </div>
  );
};

Payment.propTypes = {};

Payment.defaultProps = {};

export default Payment;
