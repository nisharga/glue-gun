import React from "react";
import "../Signup/Signup.css";
import glugunImage from "../Signup/glu.png";
import GoogleSignIn from "./GoogleSignIn/GoogleSignIn";
import SigninForm from "./SigninForm/SigninForm";
import { Link } from "react-router-dom";
import PageTitle from "./../../Shared/PageTitle/PageTitle";
const Signin = () => {
  return (
    <>
      <PageTitle pagetitle="Signin"></PageTitle>
      <div className="signupsection">
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container brand_logo">
                  <img src={glugunImage} alt="glugan" />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <SigninForm></SigninForm>
              </div>

              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Don't have an account?
                  <Link to="/Signup" className="ml-2">
                    Sign Up
                  </Link>
                </div>
                <div className="d-flex justify-content-center links">
                  <Link to="/forgotpass">Forgot your password?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </>
  );
};

export default Signin;
