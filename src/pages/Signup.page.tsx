import { useFormik } from "formik";
import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import MyInput from "../components/MyInput";
import * as yup from "yup";

interface Props {}

const Signup: FC<Props> = (props) => {
  const History = useHistory();
  const FormHandler = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required().min(6),
      password: yup.string().required().min(6),
      email: yup.string().email().required(),
    }),
    onSubmit: (data) => {
      History.push("/dashboard");
    },
  });
  return (
    <div className="flex justify-center w-full lg:w-1/2">
      <div className="w-3/4 h-screen px-11 flex items-center">
        <div className="bg-pink-100 h-3/4 w-full">
          <form onSubmit={FormHandler.handleSubmit}>
            <h1>Get started with a free account</h1>
            <p>
              Already have an account? <Link to="/login">Log in</Link>{" "}
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
              type="text"
              error={FormHandler.errors.email}
              touched={FormHandler.touched.email}
              required
              id="email"
              {...FormHandler.getFieldProps("email")}
              icon={
                <svg
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
              type="text"
              error={FormHandler.errors.password}
              touched={FormHandler.touched.password}
              required
              id="password"
              {...FormHandler.getFieldProps("password")}
              icon={
                <svg
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
              Password
            </MyInput>

            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
