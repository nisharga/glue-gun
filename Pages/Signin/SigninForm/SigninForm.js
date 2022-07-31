import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import auth from "../../../Shared/Firebase/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const SigninForm = () => {
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();
  const [userEmail] = useAuthState(auth);
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    toast(" Successfully login");
  }

  // Redirect to that from page
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user || userEmail) {
    navigate(from, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group mb-3">
        <div className="input-group-append emailicon">
          <span className="input-group-text">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </span>
        </div>
        <input
          {...register("email", { required: true })}
          type="text"
          name="email"
          className="form-control input_user"
          placeholder="Email"
        />
      </div>
      <div className="input-group mb-2">
        <div className="input-group-append passicon">
          <span className="input-group-text">
            <FontAwesomeIcon icon="fa-solid fa-key" />
          </span>
        </div>
        <input
          type="password"
          name="password"
          className="form-control input_pass"
          placeholder="password"
          {...register("password", { required: true })}
        />
      </div>
      <div className="d-flex justify-content-center mt-3 login_container">
        <input
          type="submit"
          value="SignIn"
          name="button"
          className="btn login_btn"
        />
      </div>
    </form>
  );
};

export default SigninForm;
