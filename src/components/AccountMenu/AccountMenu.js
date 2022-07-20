import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";

const AccountMenu = (props) => {
  const location  = useLocation();
  const menuItems = props.menu.map((menu, index) => (
    // Only do this if items have no stable IDs
    <li className={`pl-5 py-3 border-b border-gray-300 last:border-0 ${menu.to === location.pathname && 'bg-gray-100'}`} key={index}>
      <Link to={menu.to} className="flex pr-4">
        <p className="flex-1 ">{menu.name}</p>
        <ChevronRightIcon className="h-5 w-5 " />
      </Link>
    </li>
  ));
  return <ul className="border-b border-gray-300">{menuItems}</ul>;
};

AccountMenu.propTypes = {};

AccountMenu.defaultProps = {};

export default AccountMenu;
