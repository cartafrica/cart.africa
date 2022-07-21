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

const Cart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const checkLoggedIn = localStorage.getItem("isLoggedIn");
  const [challenge, setChallenge] = useState("");

  const { setProfile, auth, setAuth, setError } = useAuth();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    setError("You've been logged out!");
    setIsLoggedIn(false);
    setChallenge("");
    setProfile({});
  };
  const handleLoginBtn = () => {
    navigate("/auth", {
      replace: true,
      state: { from: location },
    });
  };
  useEffect(() => {
    const user = () =>
      getProfile()
        .then((response) => {
          let user = response.data;
          if (!user) {
            setIsLoggedIn(false);
          }
          if (user.Status === "onboarding") {
            navigate("/onboarding/profile");
          }
          setProfile(user);
        })
        .finally(() => {
          setIsLoading(false);
        });
    const verifyAuth = () => {
      console.log("response");
      if (checkLoggedIn) {
        setAuth(checkLoggedIn);
        setIsLoggedIn(true);
        user();
      } else {
        setIsLoading(false);
      }
    };
    if (!auth) {
      verifyAuth();
    } else {
        user();
        setIsLoggedIn(true);
      setIsLoading(false);
    }
  }, [auth]);

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
          <p className="text-gray-700 font-bold">Sneaklin Store</p>
          <a href="button" className="text-gray-700 text-sm">
            Return Policy
          </a>
        </div>
        <ul className="bg-gray-200">
          <li className="flex items-center space-x-4 p-4 border-b border-gray-300">
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
          {isLoggedIn && (
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
          )}
          {isLoggedIn ? (
            <>
              <Link to="/orders">
                <button
                  className="bg-black w-full text-white my-5 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Checkout
                </button>
              </Link>
              <p className="text-gray-500 text-sm text-center">
                We'll attempt to charge your selected payment method and send
                your order details to vendor to process your order.
              </p>

              <p className="font-semibold text-sm text-center mt-3 space-x-3 divide-x-2 divide-gray-400">
                <span className="text-black ">Dashboard</span>
                <span
                  className="text-black pl-3 cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </span>
              </p>
            </>
          ) : (
            <div className="mt-5">
              {challenge === "" ? (
                <LoginForm setChallenge={setChallenge} page="cart" />
              ) : (
                <AuthForm
                  setChallenge={setChallenge}
                  challenge={challenge}
                  page="cart"
                />
              )}
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
