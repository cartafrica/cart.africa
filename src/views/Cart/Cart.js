import React from "react";
import PropTypes from "prop-types";
import "./Cart.css";
import { CreditCardIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Cart = () => (
  <div className="bg-white flex flex-grow lg:p-24 justify-center items-start">
    <div className="w-full lg:w-96">
      <div className="flex items-center p-6">
        <h1 className="text-2xl text-left italic flex-1">Cart.africa</h1>
        <div className="text-right">
          <p className="text-gray-700 font-bold">Sneaklin Store</p>
          <a href="button" className="text-gray-700 text-sm">
            Return Policy
          </a>
        </div>
      </div>
      <ul className="bg-slate-100">
        <li className="flex items-center space-x-4 p-4 border-b border-slate-300">
          <div className="shrink-0">
            <img
              src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
              className="rounded-full w-16 h-16"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h4 className="text-gray-800">The Essential Kit</h4>
            <small>Qty: 3</small>
          </div>
          <h4 className="text-gray-800">N3,000,000</h4>
        </li>
      </ul>
      <div className="p-6">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-200 p-1 text-century">
              <LocationMarkerIcon className="h-6 w-6 text-century" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                5 Ola Adebiyi Street, Ifako, Gbagada
              </p>
              <p className="text-xs text-gray-600">+234 81 0090 8752</p>
            </div>
            <a href="shipping.html" className="text-sm text-red-600">
              Change
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-200 p-1 text-century">
              <CreditCardIcon className="h-6 w-6 text-century" />
            </div>
            <p className="text-sm text-gray-600 flex-1">**** **** **** 4920</p>
            <a href="payment.html" className="text-sm text-red-600">
              Change
            </a>
          </li>
          <li className="flex border-t pt-2 border-slate-200">
            <p className="text-sm text-gray-600 flex-1">Subtotal</p>
            <p className="text-sm text-gray-600">N3,030,000</p>
          </li>
          <li className="flex border-b pb-2 border-slate-200">
            <p className="text-sm text-gray-600 flex-1">Shipping Fee</p>
            <p className="text-sm text-gray-600">N1,000</p>
          </li>
          <li className="flex">
            <p className="text-sm text-gray-600 flex-1 font-bold">Total</p>
            <p className="text-sm text-gray-600">N3,031,000</p>
          </li>
        </ul>
        <Link to="/dashboard/orders">
          <button
            className="bg-century w-full text-white my-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Checkout
          </button>
        </Link>
        <p className="text-gray-500 text-sm text-center">
          We'll attempt to charge your selected payment method and send your
          order details to vendor to process your order.
        </p>
      </div>
    </div>
  </div>
);

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
