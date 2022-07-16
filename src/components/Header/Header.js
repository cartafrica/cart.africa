import React from "react";
import PropTypes from "prop-types";
import { LogoutIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="py-5 px-5 flex items-center justify-between">
    <div>
      <p className=" font-bold  dark:text-white">
        Hi, Boluwatife!
      </p>
      <p className="text-gray-500  dark:text-gray-300 text-sm">
        {props.page === "orders" && "Orders"}
        {props.page === "account" && "Account"}</p>
    </div>
    <Link to="/auth">
      <LogoutIcon className="h-6 w-6  dark:text-white" />
    </Link>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
