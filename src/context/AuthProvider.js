import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState({});
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, error, setError, profile, setProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
