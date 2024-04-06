import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Cart.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CreditCardIcon,
  LocationMarkerIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { getProfile } from "services/network/lib/profile";
import { Link } from "react-router-dom";
import useAuth from "hooks/useAuth";
import logo from "assets/logo.svg";
import LoginForm from "components/LoginForm/LoginForm";
import AuthForm from "components/LoginForm/AuthForm";
import { checkout, getCart } from "services/network/lib/commerce";
import { formatValue, getInitials } from "utils/Utils";
import CartAuthForm from "components/LoginForm/CartAuthForm";
import AddDeliveryForm from "components/AddDeliveryForm/AddDeliveryForm";
import AddressForm from "components/AddDeliveryForm/AddressForm";

const ThankYou = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [deliveryAddress, setDeliveryAddress] = useState({});
  const [cartDetails, setCartDetails] = useState(null);

  const { setProfile, auth, setAuth, setError } = useAuth();

  useEffect(() => {
    const cartId = pathname.split("/").pop();
    const getCart = () =>
      getCart(cartId)
        .then((response) => {
          setCartDetails(response.data);
          console.log(response);
          setIsLoading(false);
        })
        .catch((e) => {});
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile()
        .then((response) => {
          let user = response.data;
          setProfile(user);
          setIsLoggedIn(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const handleCheckout = () => {
    const delivery = {
      shippingAddress: {
        ...deliveryAddress,
        country: deliveryAddress.country.code,
      },
    };
    const cartId = pathname.split("/").pop();

    checkout(cartId, delivery).then((response) => {
      const authorizationUrl =
        "https://checkout.paystack.com/" + response.data.authorization;
      console.log(response, authorizationUrl);
      // Open Paystack payment page in a new tab
      const paymentWindow = window.open(authorizationUrl);

      if (paymentWindow) {
        const interval = setInterval(() => {
          if (paymentWindow.closed) {
            // window.location.href = "/checkout-success";
            clearInterval(interval);
          }
        }, 1000);
      } else {
        console.error("Failed to open payment window.");
      }
    });
  };
  return isLoading ? (
    <div className="h-screen flex items-center mx-auto">
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
  ) : (
    <div className="bg-white flex flex-grow lg:p-24 justify-center items-start">
      <div className="w-full lg:w-96 p-6">
        <div className="text-center p-6">
          <Link to="/orders" className="">
            <img
              src={logo}
              alt="cart.africa"
              className="h-6 mx-auto text-xl font-bold text-center text-white italic"
            />
          </Link>
        </div>
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 -mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-700 font-bold text-sm">Store Name</p>
            <p className="text-gray-700 text-sm">Order #18834992</p>
          </div>
        </div>
        <div className="border px-4 py-3 mt-4">
          <p className="text-gray-700 font-medium text-xl">Thank you!</p>
          {/* <p className="text-gray-700 text-xl">Your order is confirmed</p> */}
          <p className="text-gray-700 text-sm">
            Store name is getting your order ready. Come back to this page for
            updates on your order status.
          </p>
        </div>
        <div className="border px-4 py-3 mt-4">
          <p className="text-gray-700 font-medium text-xl">
            Shipping Information
          </p>
          <ul>
            <li>Contact name</li>
            <li>Phone number</li>
            <li>Street name</li>
            <li>City</li>
            <li>Posta code</li>
            <li>State</li>
            <li>Country</li>
          </ul>
        </div>
        <div className="">
          {/* {isLoggedIn && (
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <div className="rounded-full bg-gray-200 p-1 text-black">
                  <LocationMarkerIcon className="h-6 w-6 text-black" />
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
              <li className="flex items-center space-x-2 border-b border-gray-200 pb-5">
                <div className="rounded-full bg-gray-200 p-1 text-black">
                  <CreditCardIcon className="h-6 w-6 text-black" />
                </div>
                <p className="text-sm text-gray-600 flex-1">
                  **** **** **** 4920
                </p>
                <a href="payment.html" className="text-sm text-red-600">
                  Change
                </a>
              </li>
              <li className="flex">
                <p className="text-sm text-gray-600 flex-1">Subtotal</p>
                <p className="text-sm text-gray-600">N3,030,000</p>
              </li>
              <li className="flex border-b pb-4 border-gray-200">
                <p className="text-sm text-gray-600 flex-1">Shipping Fee</p>
                <p className="text-sm text-gray-600">N1,000</p>
              </li>
              <li className="flex">
                <p className="text-sm text-gray-600 flex-1 font-bold">Total</p>
                <p className="text-sm text-gray-600">N3,031,000</p>
              </li>
            </ul>
          )} */}
          <button
            onClick={() => navigate("/orders")}
            className="bg-black w-full text-white my-5 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go to Dashboard
          </button>
          {isLoggedIn ? (
            <p className="font-semibold text-sm text-center space-x-3 divide-x-2 divide-gray-400">
              
              <span
                className="text-black cursor-pointer"
                // onClick={logout}
              >
                Logout
              </span>
            </p>
          ) : (
            <div className="mt-5">
              <CartAuthForm setIsLoggedIn={setIsLoggedIn} />
              {/* <button
                className="bg-black w-full text-white font-semibold my-5 py-3 px-4 rounded flex space-x-1 items-center justify-center"
                type="button"
                onClick={handleLoginBtn}
              >
                <LockClosedIcon className="h-5" />
                <span>Login</span>
              </button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ThankYou.propTypes = {};

ThankYou.defaultProps = {};

export default ThankYou;
