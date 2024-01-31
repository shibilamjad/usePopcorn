import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/Global.css";
// import { MovieProvider } from "./context/MovieContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <MovieProvider>
  <AuthProvider>
    <App />
  </AuthProvider>
  // </MovieProvider>
);
