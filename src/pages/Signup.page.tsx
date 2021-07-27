import { useFormik } from "formik";
import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import MyInput from "../components/MyInput/MyInput";
import * as yup from "yup";
import Button from "../components/Button/Button";
import ToggleButton from "../components/ToggleButton";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface Props {}

const Signup: FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const History = useHistory();
  const FormHandler = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Usename is required field").min(6),
      password: yup.string().required("Password is required field").min(6),
      email: yup.string().email().required("Email is required field"),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        History.push("/dashboard");
      }, 3000);
    },
  });
  return (
    <div className="flex justify-center w-full lg:w-1/2">
      <div className="w-3/4 h-screen px-11 flex items-center">
        <div className="h-3/4 w-full">
          <form onSubmit={FormHandler.handleSubmit}>
            <h1 className="text-4xl font-medium mb-2">
              Get started with a free account
            </h1>
            <p className="text-sm font-bold mb-12">
              Already have an account?{" "}
              <Link
                className="text-primary border-primary border-b"
                to="/login"
              >
                Log in
              </Link>{" "}
            </p>
            <MyInput
              type="text"
              error={FormHandler.errors.username}
              touched={FormHandler.touched.username}
              required
              id="username"
              {...FormHandler.getFieldProps("username")}
              icon={
                <svg
                  className="text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              }
            >
              Username
            </MyInput>
            <MyInput
              type="email"
              error={FormHandler.errors.email}
              touched={FormHandler.touched.email}
              required
              id="email"
              {...FormHandler.getFieldProps("email")}
              icon={
                <svg
                  className="text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
              }
            >
              Email
            </MyInput>
            <MyInput
              type={showPassword ? "text" : "password"}
              error={FormHandler.errors.password}
              touched={FormHandler.touched.password}
              required
              id="password"
              {...FormHandler.getFieldProps("password")}
              icon={
                <svg
                  className="text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              }
            >
              Password
            </MyInput>
            <div className="flex items-center mt-10">
              <input className="mr-3 h-4 w-4" type="checkbox" />
              <p className="text-sm font-thin">
                I agree to the{" "}
                <Link className="text-primary" to="#">
                  terms and conditions
                </Link>
              </p>
            </div>
            <div className="flex justify-between mt-5 items-center">
              <div className="flex items-center">
                <p className="mr-2 font-semibold">Show Password</p>
                <ToggleButton
                  checked={showPassword}
                  onChange={setShowPassword}
                />
              </div>
              <div className="flex items-center">
                {FormHandler.isSubmitting && (
                  <FaSpinner className="animate-spin mr-2"></FaSpinner>
                )}
                <Button theme="primary" fill="solid">
                  Get Started
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-24">
            <p className="text-sm font-semibold text-center">
              © 2020 All Rights Reserved.{" "}
              <Link className="text-primary" to="#">
                CORK
              </Link>{" "}
              is a product of Designreset.
              <Link className="text-primary" to="#">
                Cookie Preferences
              </Link>
              ,{" "}
              <Link className="text-primary" to="#">
                Privacy
              </Link>
              , and{" "}
              <Link className="text-primary" to="#">
                Terms
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
