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

const Cart = () => {
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
            navigate("/cart/" + cartId + "/thankyou");
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
      <div className="w-full lg:w-96">
        <div className="text-center p-6">
          <Link to="/orders" className="">
            <img
              src={logo}
              alt="cart.africa"
              className="h-8 mx-auto text-3xl font-bold text-center text-white italic"
            />
          </Link>
        </div>
        <div className="ml-5 mb-3">
          <p className="text-gray-700 font-bold">{cartDetails?.seller.name}</p>
          <a href="button" className="text-gray-700 text-sm">
            Return Policy
          </a>
        </div>
        {cartDetails?.items.map((item, index) => (
          <ul key={index} className="bg-gray-200">
            <li className="flex items-center space-x-4 p-4 border-b border-gray-300">
              <div className="shrink-0">
                <img
                  src={
                    item.photo ||
                    `https://placehold.co/120x120?text=${getInitials(
                      item.name
                    )}&font=roboto`
                  }
                  className="rounded-full w-16 h-16"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-800">{item.name}</h4>
                <small>Qty: {item.quantity}</small>
              </div>
              <h4 className="text-gray-800">
                {formatValue(item.price * item.quantity)}
              </h4>
            </li>
          </ul>
        ))}
        <div className="p-6">
          <AddressForm
            deliveryAddress={deliveryAddress}
            setDeliveryAddress={setDeliveryAddress}
          />
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
          {isLoggedIn ? (
            <>
              <button
                onClick={handleCheckout}
                className="bg-black w-full text-white my-5 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Checkout
              </button>
              <p className="text-gray-500 text-sm text-center">
                We'll attempt to charge your selected payment method and send
                your order details to vendor to process your order.
              </p>

              <p className="font-semibold text-sm text-center mt-3 space-x-3 divide-x-2 divide-gray-400">
                <Link to="/orders">
                  <span className="text-black ">Dashboard</span>
                </Link>
                <span
                  className="text-black pl-3 cursor-pointer"
                  // onClick={logout}
                >
                  Logout
                </span>
              </p>
            </>
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

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
