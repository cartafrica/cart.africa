import React from "react";
import PropTypes from "prop-types";
import {
  CreditCardIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ChevronLeftIcon,
  LocationMarkerIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import empty from "assets/empty.png";
import { Link, useNavigate } from "react-router-dom";

const Order = (props) => {
  const navigate = useNavigate();

  var order = {
    id: "0",
    order: "#123567",
    date: "22/01/2021",
    customer: "Patricia Semklo",
    total: "₦129.00",
    store: { name: "Sneaklin" },
    status: "Paid",
    items: "1",
    cart: [
      {
        product: "The Essential Kit",
        photo:
          "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/essential-kit_720x.png?v=1646152940",
        quantity: 2,
        amount: 2000,
      },
    ],
  };
  // orders = [];

  const statusColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-green-800";
      case "Delivered":
        return "text-gray-500";
      case "Refunded":
        return "text-yellow-600";
      case "In transit":
        return "text-green-600 font-semibold";
      default:
        return "text-gray-500";
    }
  };
  return (
    <div className="h-full">
      <header className="py-1 px-5 flex">
        <Link to="/dashboard/orders">
          <ChevronLeftIcon className="h-6 w-6 mr-4" />
        </Link>
        <p className=" font-semibold">
          Order details{" "}
          <span className={`text-sm font-normal ${statusColor("In transit")}`}>
            In transit
          </span>
        </p>
      </header>
      <div className="w-full lg:w-96 mx-auto mt-2">
        <ul className="divide-y divide-slate-300">
          <li className="flex items-center space-x-4 p-4">
            <div className="shrink-0">
              <img
                src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
                className="rounded-full w-16 h-16"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-800">The Essential Kit</h4>
              <small>Qty: 3</small>
            </div>
            <h4 className="text-gray-800">N3,000</h4>
          </li>
          <li className="flex items-center space-x-4 p-4">
            <div className="shrink-0">
              <img
                src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
                className="rounded-full w-16 h-16"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-800">The Essential Kit</h4>
              <small>Qty: 3</small>
            </div>
            <h4 className="text-gray-800">N3,000</h4>
          </li>
        </ul>
        <div className="p-6">
          <ul className="space-y-4">
            <li className="flex border-t pt-2 border-slate-200">
              <p className="text-sm text-gray-600 flex-1">Subtotal</p>
              <p className="text-sm text-gray-600">N3,030,000</p>
            </li>
            <li className="flex border-b pb-2 border-slate-200">
              <p className="text-sm text-gray-600 flex-1">Shipping Fee</p>
              <p className="text-sm text-gray-600">N1,000</p>
            </li>
            <li className="flex">
              <p className="text-sm text-gray-600 flex-1 font-bold">Total</p>
              <p className="text-sm text-gray-600">N3,031,000</p>
            </li>

            <li className="">
              <h3 className="text-xs text-gray-500">Payment Method</h3>
              <p>**** **** **** 3292</p>
              <p>10/23</p>
            </li>
            <li className="">
              <h3 className="text-xs text-gray-500">Delivery Address</h3>
              <p>Tife Pariola</p>
              <p>5 Ola Adebiyi Street,</p>
              <p>Gbagada, Lagos</p>
              <p>Nigeria</p>
              081 0090 8752
            </li>
          </ul>

          <Link to="/dashboard/orders">
            <button
              className="bg-century w-full text-white my-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Raise Dispute
            </button>
          </Link>
          <p className="font-semibold text-sm text-center">
            <span className="text-century ">View Return Policy</span> | {" "}
            <span className="text-century ">Contact Sneaklin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {};

Order.defaultProps = {};

export default Order;
