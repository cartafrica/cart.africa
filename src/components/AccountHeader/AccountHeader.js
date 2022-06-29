import React from "react";
import PropTypes from "prop-types";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";

const AccountHeader = (props) => {
  const navigate = useNavigate();

  return (
    <header className="py-1 px-5 flex">
      <ChevronLeftIcon
        onClick={() => navigate(-1)}
        className="h-6 w-6 lg:hidden mr-4"
      />
      <p className=" font-semibold">{props.name}</p>
    </header>
  );
};

AccountHeader.propTypes = {};

AccountHeader.defaultProps = {};

export default AccountHeader;
