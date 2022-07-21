import React, { useEffect, useState } from "react";
import { LogoutIcon } from "@heroicons/react/outline";
import useAuth from "hooks/useAuth";
import icon from "assets/icon.svg";
import logo from "assets/logo.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { profile, setAuth, setProfile, setError } = useAuth();

  const [pathName, setPathName] = useState("");
  const location = useLocation();
  const logout = () => {
    localStorage.clear();
    setAuth(false);
    setError("You've been logged out!");
    setProfile({});
  };
  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);
  return (
    <header className="py-5 px-5 flex items-center justify-between">
      <div className="flex items-center space-x-2 divide-x divide-gray-300">
        <div>
          <img src={logo} alt="cart.africa" className="h-8 hidden lg:block" />
          <img src={icon} alt="cart.africa" className="h-8 block lg:hidden" />
        </div>
        <div className="pl-2">
          <p className=" font-bold  ">Hi, {profile.firstName}!</p>
          <p className="text-gray-500 text-sm">
            {pathName.includes("orders") && "Orders"}
            {pathName.includes("account") && "Account"}
          </p>
        </div>
      </div>
      <LogoutIcon className="h-6 w-6   cursor-pointer" onClick={logout} />
    </header>
  );
};

export default Header;
