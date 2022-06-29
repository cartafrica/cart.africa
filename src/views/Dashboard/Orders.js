import React from "react";
import PropTypes from "prop-types";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import empty from "assets/empty.png";

const Orders = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <img src={empty} alt="No purchase yet" className="mb-4" />
      <p>
        <strong>Uh-oh!</strong> You have not made any purchase.
      </p>
    </div>
  );
};

Orders.propTypes = {};

Orders.defaultProps = {};

export default Orders;
