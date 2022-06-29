import React from "react";
import PropTypes from "prop-types";
import AccountHeader from "components/AccountHeader/AccountHeader";
import DeliveryList from "components/DeliveryList/DeliveryList";
import { Link } from "react-router-dom";

const Delivery = () => {
  const addresses = [
    {
      address: "5 Ola Adebiyi Street, Ifako, Gbagada",
      name: "Boluwatife Pariola",
      phone: "+2348100908752",
    }, {
      address: "3 Ayinke Street, Akoka, Yaba",
      name: "Blessing Pariola",
      phone: "+23481091938834",
    }, {
      address: "24 Murtala Mohammed Way, Ilorin, Kwara",
      name: "Lolade Pariola",
      phone: "+2348100908752",
    },
  ];
  return (
    <div className="">
      <AccountHeader name="Delivery Addresses" />
      <div className="flex flex-col items-center justify-center p-5">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <DeliveryList data={addresses} />
          <Link to="/dashboard/account/add-delivery">
          <button
            className="bg-century w-full text-white my-3 py-3 rounded focus:outline-none focus:shadow-outline"
          >
            Add Address
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Delivery.propTypes = {};

Delivery.defaultProps = {};

export default Delivery;
