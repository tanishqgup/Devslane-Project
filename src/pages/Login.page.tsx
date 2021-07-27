import { useFormik } from "formik";
import { FC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import * as yup from "yup";
import MyInput from "../components/MyInput";
import { setTimeout } from "timers";
import Button from "../components/Button";

interface Props {}

const Login: FC<Props> = (props) => {
  const History = useHistory();
  const FormHandler = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Email is a required field").email(),
      password: yup.string().required("Password is a required field").min(6),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        History.push("/dashboard");
      }, 2000);
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center w-full lg:w-1/2 font-primary">
      <div className="w-3/4 h-screen px-11 flex items-center">
        <div className=" h-3/4 w-full">
          <h1 className="text-4xl font-medium mb-2">
            Log In to <span className="text-primary font-semibold">CORK</span>
          </h1>
          <p className="mb-12 font-bold text-sm">
            New Here?{" "}
            <Link className="border-b border-primary text-primary" to="/signup">
              Create an account
            </Link>
          </p>
          <form onSubmit={FormHandler.handleSubmit}>
            <MyInput
              type="email"
              error={FormHandler.errors.email}
              touched={FormHandler.touched.email}
              id="email"
              required
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              }
            >
              Email
            </MyInput>

            <MyInput
              type={showPassword === true ? "text" : "password"}
              error={FormHandler.errors.password}
              touched={FormHandler.touched.password}
              id="password"
              required
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Show Password</p>
              </div>
              <div>
                <Button theme="primary" fill="solid">
                  Log In
                </Button>
              </div>
            </div>
            {FormHandler.isSubmitting && (
              <FaSpinner className="animate-spin"></FaSpinner>
            )}
            <div className="w-full flex justify-center mb-2 mt-16">
              <p className="text-sm font-thin text-gray-700">
                Keep me logged in
              </p>
            </div>
            <div className="w-full flex justify-center mt-4">
              <Link className="text-base font-bold text-primary" to="#">
                Forgot Password?
              </Link>
            </div>
          </form>
          <div className="mt-24">
            <p className="text-sm font-semibold">
              © 2020 All Rights Reserved. CORK is a product of Designreset.
              Cookie Preferences, Privacy, and Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
