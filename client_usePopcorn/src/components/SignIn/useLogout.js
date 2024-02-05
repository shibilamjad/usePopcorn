import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { logout as logoutApi } from "../../service/userApi";
import { useAuth } from "../../context/AuthContext";

export function useLogout() {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("Succesfully Logout");
      navigate("/sign-in", { replace: true });
      setIsAuthenticated(false);
    },
  });

  return { logout, isLoading };
}
