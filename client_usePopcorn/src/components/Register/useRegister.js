import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserApi } from "../../service/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: createUserApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("Succesfully created account");

      navigate("/");
    },
    onError: () => {
      toast.error("Provided email or userName are alredy exist");
    },
  });
  return { signUp, isLoading };
}
