import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";
import {
  ShoppingBagIcon as ShoppingBagIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/solid";
const FooterNav = (props) => (
  <footer className="py-6 px-6 lg:px-96 flex items-center justify-center">
    <div className="flex-1 w-1/2 items-center justify-center flex">
      {props.page === "orders" ? (
        <ShoppingBagIconSolid className="h-7 w-7 text-black " />
      ) : (
        <Link to={"/dashboard/orders"}>
          <ShoppingBagIcon className="h-7 w-7 text-gray-500" />
        </Link>
      )}
    </div>
    <div className="flex-1 w-1/2 items-center justify-center flex">
      {props.page === "account" ? (
        <Link to={"/dashboard/account"}>
          <UserIconSolid className="h-7 w-7 text-black " />
        </Link>
      ) : (
        <Link to={"/dashboard/account"}>
          <UserIcon className="h-7 w-7 text-gray-500" />
        </Link>
      )}
    </div>
  </footer>
);

FooterNav.propTypes = {};

FooterNav.defaultProps = {};

export default FooterNav;
