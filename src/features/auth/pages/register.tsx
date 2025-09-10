import { memo, useEffect, useRef } from "react";
import type { FormProps, InputRef } from "antd";
import { Alert, Button, Form, Input } from "antd";
import { useAuth } from "../services/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setKey, setUser } from "../store/authSlice";

type FieldType = {
  id?: string;
  fname: string;
  lname?: string;
  address?: string;
  email: string;
  password: string;
};

const Register = () => {
  const { signUp } = useAuth();
  const inputRef = useRef<InputRef>(null);
  const dis = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signUp.mutate(values, {
      onSuccess: (res) => {
        console.log(res);
        dis(setUser(values));
        dis(setKey(res.verificationKey));
        nav("/otp");
      },
    });
  };

  const message = signUp.error?.response?.data?.message;
  const errorMessage =
    typeof message === "string"
      ? message
      : message?.map((item: string, inx: number) => <p key={inx}>{item}</p>);

  return (
    <section className="bg-blue-500 w-full h-screen grid place-items-center">
      <title>Dashboard | Register</title>
      <div className="max-w-sm w-full bg-white p-6 rounded">
        <h2 className="text-3xl font-bold text-center text-blue-500">
          Register
        </h2>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="First Name"
            name="fname"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input ref={inputRef} style={{ height: "40px" }} />
          </Form.Item>

          <Form.Item<FieldType> label="Last Name" name="lname" rules={[]}>
            <Input ref={inputRef} style={{ height: "40px" }} />
          </Form.Item>

          <Form.Item<FieldType> label="Address" name="address">
            <Input ref={inputRef} style={{ height: "40px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input ref={inputRef} style={{ height: "40px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password style={{ height: "40px" }} />
          </Form.Item>

          {signUp.isError && (
            <div className="mb-5">
              <Alert message={errorMessage} type="error" />
            </div>
          )}

          <Form.Item label={null}>
            <Button
              loading={signUp.isPending}
              style={{ width: "100%", height: "40px" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            <Link
              className="w-full rounded-md h-10 border border-blue-500 mt-2 grid place-items-center"
              to={"/login"}
            >
              Login
            </Link>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default memo(Register);
