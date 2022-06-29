import React from "react";
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

const AccountIndex = (props) => {
  const profileMenu = [
    {
      to: "/dashboard/account/profile",
      name: "Manage Profile",
    },
    {
      to: "/dashboard/account/delivery",
      name: "Delivery Addresses",
    },
    {
      to: "/dashboard/account/payment",
      name: "Payment Methods",
    },
  ];
  const supportMenu = [
    {
      to: "https://google.com",
      name: "Help and Support",
    },
    {
      to: "/dashboard/account/faq",
      name: "FAQ",
    },
    {
      to: "/dashboard/account/about",
      name: "About",
    },
  ];
  const legalMenu = [
    {
      to: "/dashboard/account/privacy",
      name: "Privacy Policy",
    },
    {
      to: "/dashboard/account/terms",
      name: "Terms and Conditions",
    },
  ];
  return (
    <div className="flex">
      <div
        className={`flex flex-col ${
          !props.page ? "w-full flex" : "hidden"
        } lg:flex lg:w-1/4`}
      >
        <AccountMenu menu={profileMenu} />
        <h3 className="text-md font-bold ml-5 mt-5 mb-3">Support</h3>
        <AccountMenu menu={supportMenu} />
        <h3 className="text-md font-bold ml-5 mt-5 mb-3">Legal</h3>
        <AccountMenu menu={legalMenu} />
        <div className="p-4">
          <button className="bg-century w-full text-white py-3 rounded ">
            Logout
          </button>
        </div>
      </div>

      {!props.page ? (
        <div
          className={`flex-1 p-5 flex-col items-center justify-center ${
            props.page ? "w-full flex" : "hidden"
          } lg:flex`}
        >
          <InformationCircleIcon className="h-10 w-10" />
          Welcome to your account, please select an account menu.
        </div>
      ) : (
        <div className="w-full">
          {props.page === "privacy" && <PrivacyPolicy />}
          {props.page === "terms" && <Terms />}
          {props.page === "about" && <About />}
          {props.page === "faq" && <Faq />}
          {props.page === "profile" && <ManageProfile />}
          {props.page === "delivery" && <Delivery />}
          {props.page === "payment" && <Payment />}
          {props.page === "add-delivery" && <AddDelivery />}
          {props.page === "edit-delivery" && <AddDelivery edit={true} />}
        </div>
      )}
    </div>
  );
};

AccountIndex.propTypes = {};

AccountIndex.defaultProps = {};

export default AccountIndex;
