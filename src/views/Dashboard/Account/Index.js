import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import AccountMenu from "components/AccountMenu/AccountMenu";
import { InformationCircleIcon } from "@heroicons/react/outline";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import About from "./About";
import Faq from "./Faq";
import ManageProfile from "./ManageProfile";
import Delivery from "./Delivery";
import AddDelivery from "./AddDelivery";
import Payment from "./Payment";
import useAuth from "hooks/useAuth";
import { Outlet, useLocation, useParams } from "react-router-dom";

const AccountIndex = () => {
  const { profile, setAuth, setProfile, setError } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const profileMenu = [
    {
      to: "/account/profile",
      name: "Manage Profile",
    },
    {
      to: "/account/delivery",
      name: "Delivery Addresses",
    },
    {
      to: "/account/payment",
      name: "Payment Methods",
    },
  ];
  const supportMenu = [
    {
      to: "https://google.com",
      name: "Help and Support",
    },
    {
      to: "/account/faq",
      name: "FAQ",
    },
    {
      to: "/account/about",
      name: "About",
    },
  ];
  const legalMenu = [
    {
      to: "/account/privacy",
      name: "Privacy Policy",
    },
    {
      to: "/account/terms",
      name: "Terms and Conditions",
    },
  ];

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    setError("You've been logged out!");
    setProfile({});
  };
  useEffect(() => {
    console.log(location.pathname);
    location.pathname === "/account" ? setShowMenu(true) : setShowMenu(false);
  }, [location]);

  return (
    <div className="flex">
      <div
        className={`flex flex-col ${
          showMenu ? "w-full flex" : "hidden"
        } lg:flex lg:w-1/3`}
      >
        <AccountMenu menu={profileMenu} />
        <h3 className="text-md font-bold ml-5 mt-5 mb-3 ">Support</h3>
        <AccountMenu menu={supportMenu} />
        <h3 className="text-md font-bold ml-5 mt-5 mb-3 ">Legal</h3>
        <AccountMenu menu={legalMenu} />
        <div className="p-4">
          <button
            className="bg-black w-full text-white py-3 rounded"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>

      {showMenu ? (
        <div
          className={`flex-1 p-5 flex-col items-center justify-center ${
            !showMenu ? "w-full flex" : "hidden"
          } lg:flex`}
        >
          <InformationCircleIcon className="h-10 w-10" />
          Welcome to your account, please select an account menu.
        </div>
      ) : (
        <div className="w-full lg:w-2/3">
          <Outlet />
        </div>
      )}
    </div>
  );
};

AccountIndex.propTypes = {};

AccountIndex.defaultProps = {};

export default AccountIndex;
