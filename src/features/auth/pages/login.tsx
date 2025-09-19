import { memo, useEffect, useRef } from "react";
import type { FormProps, InputRef } from "antd";
import { Alert, Button, Form, Input } from "antd";
import { useAuth } from "../services/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setToken } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import type { RootState } from "../../../app/store";
import { PRODUCTION_URL } from "../../../shared/links";

type FieldType = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn } = useAuth();
  const dis = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signIn.mutate(values, {
      onSuccess: (res) => {
        dis(setToken(res.data.accessToken));
        if (res.data.user.role === "user") {
          open(
            `${PRODUCTION_URL}/verify?q=${btoa(JSON.stringify(values))}`,
            "_self"
          );
          dis(removeUser());
        } else {
          nav("/");
          dis(removeUser());
        }
      },
    });
  };

  const message = signIn.error?.response?.data?.message;
  const errorMessage =
    typeof message === "string"
      ? message
      : message?.map((item: string, inx: number) => <p key={inx}>{item}</p>);

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
          initialValues={
            user ? { email: user.email, password: user.password } : {}
          }
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

          {signIn.isError && (
            <div className="mb-5">
              <Alert message={errorMessage} type="error" />
            </div>
          )}

          <Form.Item label={null}>
            <Button
              loading={signIn.isPending}
              style={{ width: "100%", height: "40px" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            <Link
              className="w-full rounded-md h-10 border border-blue-500 mt-2 grid place-items-center"
              to={"/register"}
            >
              Register
            </Link>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default memo(Login);
