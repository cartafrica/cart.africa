import React from "react";
import PropTypes from "prop-types";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import empty from "assets/empty.png";
import { Link } from "react-router-dom";

const Orders = () => {
  var orders = [
    {
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
    },
    {
      id: "0",
      order: "#123567",
      date: "22/01/2021",
      customer: "Patricia Semklo",
      total: "₦129.00",
      store: { name: "Sneaklin" },
      status: "In transit",
      items: "1",
      cart: [
        {
          product: "The Essential Kit",
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/essential-kit_720x.png?v=1646152940",
          quantity: 2,
          amount: 2000,
        },
        {
          product: "Quick Wipes",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/quick-wipes-box_720x.png?v=1646152929",
          amount: 2000,
        },
        {
          product: "170ml Sneaker Cleaner",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/solution_720x.jpg?v=1646152925",
          amount: 2000,
        },
      ],
    },
    {
      id: "0",
      order: "#123567",
      date: "22/01/2021",
      customer: "Patricia Semklo",
      total: "₦129.00",
      store: { name: "Sneaklin" },
      status: "Refunded",
      items: "1",
      cart: [
        {
          product: "The Essential Kit",
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/essential-kit_720x.png?v=1646152940",
          quantity: 2,
          amount: 2000,
        },
        {
          product: "Quick Wipes",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/quick-wipes-box_720x.png?v=1646152929",
          amount: 2000,
        },
      ],
    },
    {
      id: "0",
      order: "#123567",
      date: "22/01/2021",
      customer: "Patricia Semklo",
      total: "₦129.00",
      store: { name: "Sneaklin" },
      status: "Delivered",
      items: "1",
      cart: [
        {
          product: "The Essential Kit",
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/essential-kit_720x.png?v=1646152940",
          quantity: 2,
          amount: 2000,
        },
        {
          product: "Quick Wipes",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/quick-wipes-box_720x.png?v=1646152929",
          amount: 2000,
        },
        {
          product: "170ml Sneaker Cleaner",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/solution_720x.jpg?v=1646152925",
          amount: 2000,
        },
        {
          product: "170ml Sneaker Cleaner",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/solution_720x.jpg?v=1646152925",
          amount: 2000,
        },
      ],
    },
    {
      id: "0",
      order: "#123567",
      date: "22/01/2021",
      customer: "Patricia Semklo",
      total: "₦129.00",
      store: { name: "Sneaklin" },
      status: "Delivered",
      items: "1",
      cart: [
        {
          product: "The Essential Kit",
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/essential-kit_720x.png?v=1646152940",
          quantity: 2,
          amount: 2000,
        },
        {
          product: "Quick Wipes",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/quick-wipes-box_720x.png?v=1646152929",
          amount: 2000,
        },
        {
          product: "170ml Sneaker Cleaner",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/solution_720x.jpg?v=1646152925",
          amount: 2000,
        },
      ],
    },
    {
      id: "0",
      order: "#123567",
      date: "22/01/2021",
      customer: "Patricia Semklo",
      total: "₦129.00",
      store: { name: "Sneaklin" },
      status: "Delivered",
      items: "1",
      cart: [
        {
          product: "The Essential Kit",
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/essential-kit_720x.png?v=1646152940",
          quantity: 2,
          amount: 2000,
        },
        {
          product: "Quick Wipes",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/quick-wipes-box_720x.png?v=1646152929",
          amount: 2000,
        },
        {
          product: "170ml Sneaker Cleaner",
          quantity: 2,
          photo:
            "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/solution_720x.jpg?v=1646152925",
          amount: 2000,
        },
      ],
    },
  ];
  // orders = []

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
    <>
      {orders.length < 1 ? (
        <div className="flex items-center justify-center flex-col h-full">
          <img src={empty} alt="No purchase yet" className="mb-4" />
          <p>
            <strong>Uh-oh!</strong> You have not made any purchase.
          </p>
        </div>
      ) : (
        <div className="">
          <ul className="divide-y divide-gray-200">
            {orders.map((order, index) => {
              return (
                <li className="" key={index}>
                  <Link to={"/dashboard/orders/" + order.id}>
                    <div className="flex p-5" key={index}>
                      <div className="flex-none">
                        <div
                          className={`grid ${
                            order.cart.length > 1 && "grid-cols-2"
                          } gap-1 rounded-xl w-20`}
                        >
                          {order.cart.slice(0, 4).map((item, index) => {
                            let height;
                            if (order.cart.length < 3) height = "h-20";
                            if (order.cart.length === 3)
                              height = "h-10 last:col-span-2";
                            if (order.cart.length > 3) height = "h-10";
                            return (
                              <div
                                className={`w-full bg-yellow-300 ` + height}
                                key={index}
                              >
                                <img
                                  src={item.photo}
                                  alt="s"
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="px-3 flex flex-col justify-center">
                        <p
                          className={
                            `text-sm flex items-center ` +
                            statusColor(order.status)
                          }
                        >
                          {order.status}
                        </p>
                        <p className="text-gray-900 font-bold text-sm line-clamp-2">
                          {order.store.name} -{" "}
                          {order.cart.map((item, index) => {
                            return (
                              <span key={index}>
                                {item.product}
                                {index < order.cart.length - 1 && ", "}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

Orders.propTypes = {};

Orders.defaultProps = {};

export default Orders;
