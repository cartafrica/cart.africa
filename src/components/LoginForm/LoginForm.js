import React, { useState, createRef, useEffect, useRef } from "react";
import "./LoginForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { completeLogin, login } from "services/network/lib/auth";
import countries from "assets/countries.json";
import useAuth from "hooks/useAuth";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { getProfile } from "services/network/lib/profile";
const LoginForm = (props) => {
  const { setAuth, setError } = useAuth();
  const numerOfInputs = props?.numerOfInputs || 6;
  const [loading, setLoading] = useState(false);
  const [countrySelect, setCountrySelect] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const inputRef = useRef(null);
  const [challenge, setChallenge] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [inputRefsArray] = useState(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [letters, setLetters] = useState(() =>
    Array.from({ length: numerOfInputs }, () => "")
  );
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/orders";

  const toggleCountrySelect = () => {
    setCountrySelect(!countrySelect);
  };
  const handleCountrySelect = (selectedCountry) => {
    setSelected(selectedCountry);
    toggleCountrySelect();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(selected.dial_code + phone);
    if (phone === "") {
      setError("Phone number is required.");
      inputRef.current.focus();
    } else {
      setLoading(true);
      setError(false);
      login({
        phone: selected.dial_code + phone,
        countryCode: selected.code,
      })
        .then((response) => {
          console.log(response.data.challengeID);
          setChallenge(response.data.challengeID);
          setLoading(false);
        })
        .catch((error) => {
          console.error("error ", error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  const handleCompleteLogin = (e) => {
    e?.preventDefault();
    console.log(letters);
    if (letters.length < 6) {
      setError("Error with code.");
      inputRefsArray?.[0]?.current?.focus();
    } else {
      setLoading(true);
      setError(false);
      completeLogin({
        code: letters.join(""),
        challengeID: challenge,
      })
        .then((response) => {
          console.log(response);
          if (!response.data.token) {
            setError("Error");
            setLoading(false);
          } else {
            setAuth(response.data);
            localStorage.setItem("token", response.data.token);
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.error("error ", error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  const handleKeyPress = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex < numerOfInputs - 1 ? prevIndex + 1 : 0;
      const nextInput = inputRefsArray?.[nextIndex]?.current;
      if (prevIndex === numerOfInputs - 1) {
        // handleCompleteLogin();
        return;
      }
      nextInput.focus();
      nextInput.select();
      return nextIndex;
    });
  };
  useEffect(() => {
    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus();
    }

    //   window.addEventListener("keyup", handleKeyPress, false);
    //   return () => {
    //     window.removeEventListener("keyup", handleKeyPress);
    //   };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile().then((response) => {
        let user = response.data;
        setIsLoggedIn(true);
      });
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/orders");
    }
  }, [isLoggedIn]);
  return !challenge ? (
    <div className="w-full lg:w-96">
      <h1 className="text-xl text-center">Welcome back</h1>

      <form className="mt-4" onSubmit={handleLogin}>
        <div className="mb-4">
          <label id="listbox-label" className="block text-sm text-gray-700">
            Phone Number
          </label>
          <div className="mt-2 flex">
            <button
              type="button"
              onClick={toggleCountrySelect}
              className="relative bg-white border-b border-gray-200 focus:ring-0 pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-black focus:border-black sm:text-sm"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
            >
              <span className="flex items-center">
                <img
                  src={`https://flagcdn.com/16x12/${selected.code.toLowerCase()}.png`}
                  alt={selected.name}
                  width={16}
                  height={12}
                />
                <span className="ml-3 block truncate">
                  {selected.dial_code}
                </span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon className="h-5 w-5" />
              </span>
            </button>

            <input
              type="number"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              ref={inputRef}
              value={phone}
              autoFocus
              className="focus:ring-black focus:border-black sm:text-sm border-b border-gray-200 focus:ring-0 flex-1 border-r-0 border-t-0"
              placeholder=""
            />

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
                  {selected === country && (
                    <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4 hover:text-white">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="bg-black w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin mx-auto h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Next"
          )}
        </button>
        <div className="text-center">
          <small className="text-gray-500">
            We'll send a One Time Password to your phone and that's how we
            confirm it's really you.
          </small>
        </div>
      </form>
    </div>
  ) : (
    <div className="w-full lg:w-96">
      <h1 className="text-xl text-center">Confirm It's You</h1>

      <p className="text-gray-500 text-xs text-center mt-2">
        We've sent a One Time Password to your phone, type it here.
      </p>

      <form className="mt-4" onSubmit={handleCompleteLogin}>
        <div className="flex space-x-2 h-12 mb-4">
          {inputRefsArray.map((ref, index) => {
            return (
              <input
                ref={ref}
                key={index}
                type="number"
                id={`box${index}-1`}
                autoComplete="off"
                data-lpignore="true"
                data-form-type="other"
                onKeyUp={(e) => {
                  var regex = /^[0-9]+$/;
                  if (e.target.value.match(regex)) {
                    handleKeyPress();
                  }
                }}
                className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md w-full text-center text-lg"
                onChange={(e) => {
                  const { value } = e.target;
                  setLetters((letters) =>
                    letters.map((letter, letterIndex) =>
                      letterIndex === index ? value : letter
                    )
                  );
                }}
                onClick={(e) => {
                  setCurrentIndex(index);
                  e.target.select();
                }}
                value={letters[index]}
              />
            );
          })}
        </div>

        <button
          className="bg-black w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin mx-auto h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Authorize"
          )}
        </button>

        <small className="text-gray-500">
          Didn't receive a code?{" "}
          <span
            className="font-semibold underline cursor-pointer"
            onClick={() => setChallenge("")}
          >
            Try again
          </span>
        </small>
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default LoginForm;
