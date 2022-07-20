import React, { useState, createRef, useEffect } from "react";
import "./LoginForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { completeLogin } from "services/network/lib/auth";
import useAuth from "hooks/useAuth";
const AuthForm = (props) => {
  const { setAuth, setError } = useAuth();
  const numerOfInputs = props?.numerOfInputs || 6;
  const [loading, setLoading] = useState(false);

  const [inputRefsArray] = useState(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [letters, setLetters] = useState(() =>
    Array.from({ length: numerOfInputs }, () => "")
  );
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/orders";

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
        challenge_id: props.challenge,
      })
        .then((response) => {
          if (!response.data.token) {
            setError("Error");
            setLoading(false);
          } else {
            setAuth(response.data);
            localStorage.setItem("isLoggedIn", true);
            navigate(from, { replace: true });
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
        handleCompleteLogin();
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
  return (
    <div className="w-full lg:w-96">
      <h1 className="text-3xl text-center">Confirm It's You</h1>

      <p className="text-gray-500 text-sm text-center mt-2">
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
                max={"1"}
              />
            );
          })}
        </div>

        <button
          className="bg-century w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
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
            onClick={() => props.setChallenge("")}
          >
            Try again
          </span>
        </small>
      </form>
    </div>
  );
};

AuthForm.propTypes = {};

AuthForm.defaultProps = {};

export default AuthForm;
