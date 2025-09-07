import { useMutation } from "@tanstack/react-query";
import { API } from "../../../shared/api";

export const useAuth = () => {
  const signIn = useMutation({
    mutationFn: (body: { email: string; password: string }) =>
      API.post("auth/signin", body).then((res) => res.data),
  });

  return { signIn };
};
