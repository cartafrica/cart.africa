import React, { useState, useEffect, useRef } from "react";
import "./Auth.css";
import LoginForm from "components/LoginForm/LoginForm";
import AuthForm from "components/LoginForm/AuthForm";
import useAuth from "hooks/useAuth";
import { XCircleIcon } from "@heroicons/react/outline";
import logoW from "assets/logo-w.svg";

const Auth = () => {
  const { error } = useAuth();
  const [challenge, setChallenge] = useState("");
  const [phone, setPhone] = useState("");
  const errorRef = useRef(null);

  useEffect(() => {
    errorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [error]);
  return (
    <div className="Auth">
      <div className="bg-black flex flex-col h-screen sidebar">
        <div
          className={`bg-black flex flex-col p-10 lg:p-24 justify-center items-center lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-120 lg:overflow-y-auto`}
        >
          <img
            className={`text-3xl font-bold text-center text-white mb-3 italic h-8 lg:mb-10`}
            src={logoW}
            alt="cart.africa"
          />
          <div className="">
            <h1 className="text-2xl font-bold text-center text-white mb-2">
              Track your mood and reflect on your day
            </h1>
            <p className="text-white text-center">
              Impeet viverra vivamus porttior ules ac vulte lectus velit sen
              lectus ue
            </p>
          </div>
        </div>
        <div className="bg-white flex-grow p-6 lg:p-24 justify-center items-start rounded-t-3xl lg:flex lg:ml-120 lg:rounded-none">
          <div className="flex flex-col mx-auto">
            {challenge === "" ? (
              <LoginForm
                setChallenge={setChallenge}
                phone={phone}
                setPhone={setPhone}
              />
            ) : (
              <AuthForm setChallenge={setChallenge} challenge={challenge} />
            )}
            {error && (
              <div
                ref={errorRef}
                className="bg-red-500 text-white rounded-lg p-3 flex space-x-2 shadow-md my-4"
              >
                <XCircleIcon className="h-6" />
                <div className="flex flex-col">{error}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Auth.propTypes = {};

Auth.defaultProps = {};

export default Auth;
