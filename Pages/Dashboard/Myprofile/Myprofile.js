import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Shared/Firebase/Auth";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import verifed from "./verify.svg";
import notverifed from "./notverify.png";
import Spinner from "../../../Shared/Spinner/Spinner";
import Profileform from "./Profileform/Profileform";
import "./Myprofile.css";
const Myprofile = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <PageTitle pagetitle="Dashboard"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="sidebar sidebar-md">
              <ul className="list-menu">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addareview">Add A Review</Link>
                </li>
                <li className="active">
                  <Link to="/dashboard/myprofile">My Profile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="content">
              <h2>Name: {user?.displayName}</h2>
              <div className="email_verify d-flex">
                <h3>Email: {user?.email}</h3>
                {user?.emailVerified ? (
                  <img src={verifed} alt="verifyImage" />
                ) : (
                  <img src={notverifed} alt="notverifedImage" />
                )}
              </div>
              {loading && <Spinner></Spinner>}
              <p>{error && error.message}</p>
              <Profileform></Profileform>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myprofile;
