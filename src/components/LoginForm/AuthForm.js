import React, { useState, createRef, useEffect } from "react";
import "./LoginForm.css";

const AuthForm = (props) => {
  const lineIndex = props.index;
  const numerOfInputs = props?.numerOfInputs || 4;

  const [inputRefsArray] = useState(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [letters, setLetters] = useState(() =>
    Array.from({ length: numerOfInputs }, () => "")
  );

  const handleKeyPress = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex < numerOfInputs - 1 ? prevIndex + 1 : 0;
      const nextInput = inputRefsArray?.[nextIndex]?.current;
      if (prevIndex === numerOfInputs - 1) return;
      nextInput.focus();
      nextInput.select();
      return nextIndex;
    });
  };
  //   useEffect(() => {
  //     if (inputRefsArray?.[0]?.current) {
  //       inputRefsArray?.[0]?.current?.focus();
  //     }

  //     window.addEventListener("keyup", handleKeyPress, false);
  //     return () => {
  //       window.removeEventListener("keyup", handleKeyPress);
  //     };
  //   }, []);
  return (
    <div className="w-full lg:w-96">
      <h1 className="text-3xl text-center">Confirm It's You</h1>

      <p className="text-gray-500 text-sm text-center mt-2">
        We've sent a One Time Password to your phone, type it here.
      </p>
      <form className="mt-4">
        <div className="mb-4">
          <label id="listbox-label" className="block text-sm text-gray-700">
            Code
          </label>
          <div className="mt-1 flex space-x-3 h-20 rounded-md shadow-sm">
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
        </div>

        <button
          className="bg-century w-full text-white mb-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={props.login}
        >
          Sign In
        </button>

        <small className="text-gray-500">
          Didn't receive a code?{" "}
          <span
            className="font-semibold underline cursor-pointer"
            onClick={props.code}
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
