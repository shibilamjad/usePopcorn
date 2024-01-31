import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRouter({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  useEffect(
    function () {
      if (!isLoggedIn) navigate("/sign-in");
    },
    [isLoggedIn, navigate]
  );

  if (isLoggedIn) return children;
}
