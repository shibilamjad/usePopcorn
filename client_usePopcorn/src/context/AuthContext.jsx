import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const isAuth = localStorage.getItem("isLoggedIn");
    if (isAuth) {
      return JSON.parse(isAuth);
    } else {
      return false;
    }
  });

  useEffect(
    function () {
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    },
    [isLoggedIn]
  );
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used with a AuthProvider");
  }
  return context;
}
export { AuthProvider, useAuth };
