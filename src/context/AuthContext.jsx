import React from "react";
import { createContext, useState } from "react";
export const AuthContext = createContext({
  token: "",
  handleTokenChange: () => {},
});
export function AuthContextProvider({ children }) {
  const [token, setToken] = useState({});
  const handleTokenChange = (token) => {
    setToken(token);
  };
  return (
    <div>
      <AuthContext.Provider value={{ token, handleTokenChange }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
