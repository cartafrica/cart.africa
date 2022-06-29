import React from "react";
import PropTypes from "prop-types";
import AccountHeader from "components/AccountHeader/AccountHeader";
import AddDeliveryForm from "components/AddDeliveryForm/AddDeliveryForm";

const AddDelivery = (props) => (
  <div className="AddDelivery">
    <AccountHeader name={`${props.edit ? "Edit" : "Add"} Delivery Address`} />
    <div className="flex items-center justify-center p-5">
      <AddDeliveryForm edit={true} />
    </div>
  </div>
);

AddDelivery.propTypes = {};

AddDelivery.defaultProps = {};

export default AddDelivery;
