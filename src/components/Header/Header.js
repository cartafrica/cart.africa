import React from "react";
import { LogoutIcon } from "@heroicons/react/outline";
import useAuth from "hooks/useAuth";
import icon from "assets/icon.svg";
import logo from "assets/logo.svg";

const Header = (props) => {
  const { profile, setAuth, setProfile, setError } = useAuth();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    setError("You've been logged out!");
    setProfile({});
  };
  return (
    <header className="py-5 px-5 flex items-center justify-between">
      <div className="flex items-center space-x-2 divide-x divide-gray-300">
        <div>
          <img src={logo} alt="cart.africa" className="h-8 hidden lg:block" />
          <img src={icon} alt="cart.africa" className="h-8 block lg:hidden" />
        </div>
        <div className="pl-2">
          <p className=" font-bold  ">Hi, {profile.FirstName}!</p>
          <p className="text-gray-500 text-sm">
            {props.page === "orders" && "Orders"}
            {props.page === "account" && "Account"}
          </p>
        </div>
      </div>
      <LogoutIcon className="h-6 w-6   cursor-pointer" onClick={logout} />
    </header>
  );
};

export default Header;
