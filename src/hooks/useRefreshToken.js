import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth from "./useAuth";

const useRefresh = () => {
  const { setAuth } = useAuth();
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const refresh = () => {
    setAuth(getToken());
  };
  return refresh;
};

export default useRefresh;
