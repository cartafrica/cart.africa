import React from "react";
import PropTypes from "prop-types";
import { LogoutIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="py-5 px-5 flex items-center justify-between">
    <div>
      <p className=" font-bold">
        {props.page === "orders" && "Orders"}
        {props.page === "account" && "Account"}
      </p>
      <p className="text-gray-500 text-sm">tife@sneaklin.com</p>
    </div>
    <Link to="/auth">
      <LogoutIcon className="h-6 w-6" />
    </Link>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
