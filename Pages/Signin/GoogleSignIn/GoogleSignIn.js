import React from "react";
import Glogo from "./G_logo.png";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../../Shared/Firebase/Auth";
import { useLocation, useNavigate } from "react-router-dom";
const GoogleSignIn = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const handleGoogleSignIN = () => {
    signInWithGoogle();
  };

  // Redirect to that from page
  let navigate = useNavigate();
  let location = useLocation();
  const [userEmail] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";
  if (user || userEmail) {
    navigate(from, { replace: true });
  }
  return (
    <div className="other-authentication">
      <div className="or-container">
        <div className="line-separator"></div>
        <div className="or-label">or</div>
        <div className="line-separator"></div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <button
            className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
            onClick={handleGoogleSignIN}
          >
            <img src={Glogo} alt="Google logo" />
            Signin Using Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;