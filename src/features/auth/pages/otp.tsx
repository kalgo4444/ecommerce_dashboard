import { memo } from "react";
import { useAuth } from "../services/useAuth";
import { Button, Input } from "antd";
import type { OTPProps } from "antd/es/input/OTP";
import type { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setKey } from "../store/authSlice";

const Otp = () => {
  const { key, user } = useSelector((state: RootState) => state.auth);
  const { confirmOtp, sendNewOtpCode } = useAuth();
  const nav = useNavigate();
  const dis = useDispatch();

  const onChange: OTPProps["onChange"] = (text) => {
    const body = {
      otp: text,
      verificationKey: key,
      email: user.email,
    };
    confirmOtp.mutate(body, {
      onSuccess: () => {
        nav("/login");
      },
    });
  };

  if (!user) {
    return <Navigate replace to={"/register"} />;
  }

  const handleSendOtpCode = () => {
    sendNewOtpCode.mutate(
      { email: user.email },
      {
        onSuccess: (res) => {
          dis(setKey(res.verificationKey));
        },
      }
    );
  };

  const { error, isError, isPending } = confirmOtp;

  return (
    <section className="bg-blue-500 w-full h-screen grid place-items-center">
      <title>Dashboard | Otp</title>
      <div className="max-w-sm w-full bg-white p-6 rounded">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-4">
          Enter Verification key
        </h2>
        <p className="text-center my-4">{user?.email}</p>
        <Input.OTP
          disabled={isPending}
          formatter={(str) => str.toUpperCase()}
          onChange={onChange}
        />
        <Button onClick={handleSendOtpCode} className="w-full block mt-6">
          Send Otp Code
        </Button>
        {isError && (
          <p className="text-red-500 text-center my-4">
            {error?.response?.data?.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default memo(Otp);
