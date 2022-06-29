import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Auth.css";
import onboard1 from "assets/onboard-1.png";
import LoginForm from "components/LoginForm/LoginForm";
import Onboarding from "components/Onboarding/Onboarding";

const Auth = () => {
  const loginData = false;
  const [login, setLogin] = useState(loginData);

  const handleLogin = () => {
    setLogin(!login);
    console.log("true");
  };
  return (
    <div className="Auth">
      <div className="bg-century flex flex-col h-screen">
        <div
          className={`bg-century flex flex-col ${
            login ? "p-4" : "p-10"
          } lg:p-24 justify-center items-center lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-120 lg:overflow-y-auto`}
        >
          <h1
            className={`text-3xl font-bold text-center text-white ${
              login ? "lg:mb-3" : "mb-3"
            } italic`}
          >
            Cart.africa
          </h1>
          <div className={login ? "hidden lg:block" : ""}>
            <h1 className="text-2xl font-bold text-center text-white">
              Track your mood and reflect on your day
            </h1>
            <p className="text-white text-center">
              Impeet viverra vivamus porttior ules ac vulte lectus velit sen
              lectus ue
            </p>
            <img src={onboard1} alt="onboarding 1" className="w-full" />
          </div>
        </div>
        <div className="bg-white flex flex-grow p-6 lg:p-24 justify-center items-start rounded-t-3xl lg:flex lg:ml-120 lg:rounded-none">
          {!login ? (
            <LoginForm login={handleLogin} />
          ) : (
            <Onboarding login={handleLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

Auth.propTypes = {};

Auth.defaultProps = {};

export default Auth;
