import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/Global.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { MovieUpdateProvider } from "./context/MovieUpdateContext.jsx";
// import { MovieProvider } from "./context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <MovieProvider>
  <AuthProvider>
    <MovieUpdateProvider>
      <App />
    </MovieUpdateProvider>
  </AuthProvider>

  // </MovieProvider>
);
