import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";

export interface SignUp {
  fname: string;
  lname?: string;
  address?: string;
  email: string;
  password: string;
}

const authKey: string = "authKey";

export const useAuth = () => {
  const getAuthMe = () =>
    useQuery<any, any>({
      queryKey: [authKey],
      queryFn: () => API.get("auth/me").then((res) => res.data),
      retry: 0,
    });

  const signIn = useMutation<any, any, { email: string; password: string }>({
    mutationFn: (body) => API.post("auth/signin", body).then((res) => res.data),
  });

  const signUp = useMutation<any, any, SignUp>({
    mutationFn: (body) => API.post("auth/signup", body).then((res) => res.data),
  });

  const confirmOtp = useMutation<
    any,
    any,
    { otp: string; verificationKey: string; email: string }
  >({
    mutationFn: (body) =>
      API.post("auth/confirm-otp", body).then((res) => res.data),
  });

  const sendNewOtpCode = useMutation<any, any, { email: string }>({
    mutationFn: (body) =>
      API.post("auth/new-opt", body).then((res) => res.data),
  });

  return { getAuthMe, signIn, signUp, confirmOtp, sendNewOtpCode };
};
