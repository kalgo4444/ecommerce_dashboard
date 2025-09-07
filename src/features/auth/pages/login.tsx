import { memo, useEffect, useRef } from "react";
import type { FormProps, InputRef } from "antd";
import { Button, Form, Input } from "antd";
import { useAuth } from "../services/useAuth";
import { useDispatch } from "react-redux";
import { setToken } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn } = useAuth();
  const dis = useDispatch();
  const nav = useNavigate();
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signIn.mutate(values, {
      onSuccess: (res) => {
        dis(setToken(res.data));
        nav("/");
      },
    });
  };

  return (
    <section className="bg-blue-500 w-full h-screen grid place-items-center">
      <title>Dashboard | Login</title>
      <div className="max-w-sm w-full bg-white p-6 rounded">
        <h2 className="text-3xl font-bold text-center text-blue-500">Log In</h2>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
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

          {/* {signIn.isError && (
            <div className="mb-5">
              <Alert
                message={signIn.error?.response?.data?.message}
                type="error"
              />
            </div>
          )} */}

          <Form.Item label={null}>
            <Button
              loading={signIn.isPending}
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default memo(Login);
