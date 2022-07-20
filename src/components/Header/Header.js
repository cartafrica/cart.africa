import React from "react";
import { LogoutIcon } from "@heroicons/react/outline";
import useAuth from "hooks/useAuth";

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
      <div>
        <p className=" font-bold  dark:text-white">Hi, {profile.FirstName}!</p>
        <p className="text-gray-500  dark:text-gray-300 text-sm">
          {props.page === "orders" && "Orders"}
          {props.page === "account" && "Account"}
        </p>
      </div>
      <LogoutIcon
        className="h-6 w-6  dark:text-white cursor-pointer"
        onClick={logout}
      />
    </header>
  );
};


export default Header;
