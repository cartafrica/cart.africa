import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { auth, setAuth } = useAuth();
  const checkLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    const verifyAuth = () => {
      console.log("response");
      setAuth(checkLoggedIn);
      setIsLoading(false);
    };
    !auth ? verifyAuth() : setIsLoading(false);
  }, []);

  return isLoading ? "Loading" : <Outlet />;
};

export default PersistLogin;
