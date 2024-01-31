import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function ProtectedRouterLogin({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(
    function () {
      if (isLoggedIn) navigate("/");
    },
    [isLoggedIn, navigate]
  );

  console.log(isLoggedIn);
  if (isLoggedIn === false) return children;
}
