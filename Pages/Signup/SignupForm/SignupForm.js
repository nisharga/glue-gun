import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import auth from "../../../Shared/Firebase/Auth";
import { useForm } from "react-hook-form";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { useSendEmailVerification } from "react-firebase-hooks/auth";

import { toast } from "react-toastify";
import Spinner from "./../../../Shared/Spinner/Spinner";

const SignupForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending, errorEmailVerify] =
    useSendEmailVerification(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification();
    if (user) {
      toast("Account Successfully create");
    }
    toast("Check Email for Verification");
  };

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
      {sending || loading ? <Spinner></Spinner> : ""}
      {error ? <p>{error.message}</p> : ""}
      {errorEmailVerify ? <p>{errorEmailVerify.message}</p> : ""}
      <div className="d-flex justify-content-center mt-3 login_container">
        <input
          type="submit"
          value={`SignUp`}
          name="button"
          className="btn login_btn"
        />
      </div>
    </form>
  );
};

export default SignupForm;
