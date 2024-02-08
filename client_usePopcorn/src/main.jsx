import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/Global.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { MovieUpdateProvider } from "./context/MovieUpdateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <MovieUpdateProvider>
      <App />
    </MovieUpdateProvider>
  </AuthProvider>
);
