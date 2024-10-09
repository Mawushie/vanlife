import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  return (
    <div className="mt-14 p-6">
      <h1 className="text-center font-bold text-3xl mb-12">
        Sign into your account
      </h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Password required")
            .min(8, "Password must be at least 8 characters")
            .max(15, "Password must be less than 15 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase")
            .matches(/[\W]/, "Password must contain at least one symbol"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 3000);
        }}
      >
        <Form>
          <div className="flex flex-col">
            <ErrorMessage name="email" />
            <Field
              name="email"
              type="email"
              placeholder="Email address"
              className="border solid h-10  rounded-tl-md rounded-tr-md p-2"
            />

            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="border solid h-10 rounded-bl-md rounded-br-md p-2"
            />
            <ErrorMessage name="password" className="text-red-500" />
          </div>

          <button
            className="h-14 text-center text-white font-bold bg-orange-500 rounded mt-6 w-full"
            type="submit"
          >
            Sign in
          </button>
        </Form>
      </Formik>
      <p className="mt-12 text-center">
        Don't have an account?{" "}
        <span className="font-bold text-orange-500 cursor-pointer">
          <Link to="/signup"> Create one now</Link>
        </span>
      </p>
    </div>
  );
}
