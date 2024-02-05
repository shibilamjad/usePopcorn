import { Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { WatchLater } from "./WatchLater/WatchLater";

export const ProtectedRoutesHomePage = () => {
  const token = localStorage.getItem("token");

  return token ? <HomePage /> : <Navigate to="/sign-in" />;
};
export const ProtectedRoutesWatchLater = () => {
  const token = localStorage.getItem("token");

  return token ? <WatchLater /> : <Navigate to="/sign-in" />;
};
