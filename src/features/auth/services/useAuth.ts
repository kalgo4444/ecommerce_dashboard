import { useMutation } from "@tanstack/react-query";
import { API } from "../../../shared/api";

export const useAuth = () => {
  const signIn = useMutation<any, any, { email: string; password: string }>({
    mutationFn: (body) => API.post("auth/signin", body).then((res) => res.data),
  });

  return { signIn };
};
