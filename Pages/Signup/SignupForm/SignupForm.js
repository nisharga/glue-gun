import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import auth from "../../../Shared/Firebase/Auth";
import { useForm } from "react-hook-form";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { useSendEmailVerification } from "react-firebase-hooks/auth";

import { toast } from "react-toastify";
import Spinner from "./../../../Shared/Spinner/Spinner";

const SignupForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending, errorEmailVerify] =
    useSendEmailVerification(auth);
  const { register, handleSubmit } = useForm();
  const [updateProfile] = useUpdateProfile(auth);

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const username = data.username;
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    await updateProfile({ displayName: username });
    // save signup information in database
    fetch("https://glacial-sierra-36711.herokuapp.com/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, username: username }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // endsave signup information in database
  };
  if (user) {
    toast("Account Successfully create, check email for verify");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group mb-3">
        <div className="input-group-append emailicon">
          <span className="input-group-text">
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </span>
        </div>
        <input
          {...register("username", { required: true })}
          type="text"
          name="username"
          className="form-control input_user"
          placeholder="username"
        />
      </div>
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
