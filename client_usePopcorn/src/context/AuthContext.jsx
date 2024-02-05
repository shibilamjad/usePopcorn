// import { createContext, useEffect, useState } from "react";
// import useLocalStorage from "../hooks/useLocalStorage";

// export const AuthContext = createContext(null);

// export const AuthContextProvider = (props) => {
//   const [isAuth, setIsAuth] = useState(false);
//   const [authError, setAuthError] = useState("");
//   const { handleGetLocalStorage } = useLocalStorage("token");

//   useEffect(() => {
//     // const token = localStorage.getItem("token");
//     const token = handleGetLocalStorage("token");
//     token != "" && setIsAuth(true);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuth, authError }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
