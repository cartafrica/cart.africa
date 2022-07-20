import React, { useEffect, useState } from "react";
import useAuth from "hooks/useAuth";
import { getProfile, updateProfile } from "services/network/lib/profile";
import { XCircleIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const [loading, setLoading] = useState(true);
  const { setProfile } = useAuth();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    console.log(state);
  };

  useEffect(() => {
    getProfile()
      .then((response) => {
        console.log("response ", response.data);
        setState({
          firstName: !response.data.FirstName ? "" : response.data.FirstName,
          lastName: !response.data.LastName ? "" : response.data.LastName,
          email: !response.data.Email ? "" : response.data.Email,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if (typeof state.firstName !== "undefined") {
      if (!state.firstName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Only letters";
      }
    }
    if (!state.firstName) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    }

    if (typeof state.lastName !== "undefined") {
      if (!state.lastName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastName"] = "Only letters";
      }
    }
    if (!state.lastName) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    }

    //Email
    if (state.email) {
      if (typeof state.email !== "undefined") {
        let lastAtPos = state.email.lastIndexOf("@");
        let lastDotPos = state.email.lastIndexOf(".");

        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            state.email.indexOf("@@") === -1 &&
            lastDotPos > 2 &&
            state.email.length - lastDotPos > 2
          )
        ) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }
    }
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log("response ", state);
    if (handleValidation()) {
      setLoading(true);
      updateProfile(state)
        .then((response) => {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data));
          setProfile(response.data);
          navigate("/onboarding/delivery");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setSubmitError(err.message);
        });
    }
  };

  return loading ? (
    <div className="flex items-center">
      <svg
        className="animate-spin mx-auto h-10 text-century"
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
    </div>
  ) : (
    <form
      className="w-full lg:w-3/4 xl:w-1/2 m-auto"
      onSubmit={(e) => handleSubmit(e)}
    >
      {submitError && (
        <div className="bg-red-500 text-white rounded-lg p-3 flex space-x-2 shadow-md my-4">
          <XCircleIcon className="h-6" />
          <div className="flex flex-col">{submitError}</div>
        </div>
      )}
      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-2">First Name</label>
        <input
          className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
          name="firstName"
          type="text"
          value={state.firstName}
          onChange={handleChange}
        />

        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors["firstName"]}
        </span>
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-2">Last Name</label>
        <input
          className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
          name="lastName"
          type="text"
          value={state.lastName}
          onChange={handleChange}
        />
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors["lastName"]}
        </span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm mb-2">
          Email Address
        </label>
        <input
          className="appearance-none border-0 border-b border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-century focus:border-century"
          name="email"
          type="text"
          value={state.email}
          onChange={handleChange}
        />
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors["email"]}
        </span>
      </div>
      <button
        className="bg-century w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        disabled={loading || !state}
      >
        Save
      </button>
    </form>
  );
};

ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;
