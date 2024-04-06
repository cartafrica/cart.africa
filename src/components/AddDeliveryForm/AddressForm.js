import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createAddress } from "services/network/lib/profile";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import countries from "assets/countries.json";
import { useNavigate } from "react-router-dom";

const AddressForm = (props) => {
  const [countrySelect, setCountrySelect] = useState(false);
  let navigate = useNavigate();
  const toggleCountrySelect = () => {
    setCountrySelect(!countrySelect);
  };

  useEffect(() => {
    if (countries)
      props.setDeliveryAddress({
        ...props.deliveryAddress,
        country: countries[0],
      });
  }, [countries]);

  const handleCountrySelect = (selectedCountry) => {
    props.setDeliveryAddress({
      ...props.deliveryAddress,
      country: selectedCountry,
    });
    toggleCountrySelect();
  };
  const handleChange = (evt) => {
    const value = evt.target.value;
    props.setDeliveryAddress({
      ...props.deliveryAddress,
      [evt.target.name]: value,
    });
  };
  return (
    <>
      <label
        className="block text-gray-700 font-bold text-md mb-2"
        htmlFor="name"
      >
        Delivery Information
      </label>
      <div className="mb-3">
        <label
          className="block text-gray-700 text-sm mb-2"
          htmlFor="contactName"
        >
          Contact Name
        </label>
        <input
          className="appearance-none border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
          name="contactName"
          defaultValue={props.deliveryAddress.contactName}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3">
        <label
          className="block text-gray-700 text-sm mb-2"
          htmlFor="contactPhone"
        >
          Contact Phone Number
        </label>
        <input
          className="appearance-none border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
          name="contactPhone"
          defaultValue={props.deliveryAddress.contactPhone}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="appearance-none border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
          name="street"
          defaultValue={props.deliveryAddress.street}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="city">
          City
        </label>
        <input
          className="appearance-none border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
          name="city"
          defaultValue={props.deliveryAddress.city}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="postcode">
          Postal Code
        </label>
        <input
          className="appearance-none border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
          name="postcode"
          defaultValue={props.deliveryAddress.postcode}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="state">
          State
        </label>
        <input
          className="appearance-none border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-black focus:border-black"
          name="state"
          defaultValue={props.deliveryAddress.state}
          onChange={handleChange}
          type="text"
        />
      </div>

      {(countries && props.deliveryAddress.country) && (
        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
            Country
          </label>
          <button
            type="button"
            onClick={toggleCountrySelect}
            className="relative bg-white w-full border-b border-gray-200 focus:ring-0 pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-black focus:border-black sm:text-sm"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
          >
            <span className="flex items-center">
              <img
                src={`https://flagcdn.com/16x12/${props.deliveryAddress.country.code.toLowerCase()}.png`}
                alt={props.deliveryAddress.country.name}
                width={16}
                height={12}
              />
              <span className="ml-3 block truncate">
                {props.deliveryAddress.country.name}
              </span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          </button>

          <ul
            className={`absolute ${
              countrySelect ? "" : "hidden"
            } z-10 w-72 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {countries.map((country, index) => (
              <li
                key={index}
                className={`text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white`}
                onClick={() => handleCountrySelect(country)}
              >
                <div className="flex items-center">
                  <img
                    src={`https://flagcdn.com/16x12/${country.code.toLowerCase()}.png`}
                    alt={country.name}
                    width={16}
                    height={12}
                  />
                  <span className="font-normal ml-3 block truncate">
                    {country.name}
                  </span>
                </div>
                {props.deliveryAddress.country === country && (
                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4 hover:text-white">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

AddressForm.propTypes = {};

AddressForm.defaultProps = {};

export default AddressForm;
