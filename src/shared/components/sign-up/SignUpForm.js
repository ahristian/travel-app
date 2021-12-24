import React, { useState } from 'react';
import { httpConfig } from "../../../utils/httpConfig";
import * as Yup from "yup";
import { Formik } from "formik";
import { SignUpFormContent } from "./SignUpFormContent.js";

export const SignUpForm = () => {
  const signUp = {
    profileEmail: "",
    profilePassword: "",
    profilePasswordConfirm: "",
    profileUserName: "",
  };

  const [status, setStatus] = useState(null);
  const validator = Yup.object().shape({
    profileEmail: Yup.string()
      .email("email must be a valid email")
      .required('email is required'),
    profilePassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least eight characters"),
    profilePasswordConfirm: Yup.string()
      .required("Password Confirm is required")
      .min(8, "Password must be at least eight characters"),
    profileUserName: Yup.string()
      .min(1, "User Name is required")
      .max(32, "User Name is to long")
  });

  const submitSignUp = (values, {setStatus}) => {
    httpConfig.post("/apis/sign-up/", values)
      .then(reply => {
          let {message, type} = reply;
          if (reply.status === 200) {
          }
        setStatus({message, type});

        }
      );
  };

  return (
    <Formik
      initialValues={signUp}
      onSubmit={submitSignUp}
      validationSchema={validator}
    >
      {SignUpFormContent}
    </Formik>

  )
};