import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Shared/Firebase/Auth";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import verifed from "./verify.svg";
import notverifed from "./notverify.png";
import Spinner from "../../../Shared/Spinner/Spinner";
const Myprofile = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
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
              <p>
                My profile the needle inclusive improve the world white paper
                uplift co-create NGO thought provoking strengthening
                infrastructure. Leverage external partners move the needle
                energize save the world changemaker shared unit of analysis our
                work communities. Capacity building save the world shine
                commitment; deep dive low-hanging fruit innovate, indicators
                thought leader co-create because disrupt game-changer.
              </p>

              <p>
                Energize; energize global, social entrepreneurship social
                entrepreneur. Outcomes citizen-centered empathetic boots on the
                ground design thinking thought partnership but leverage
                co-creation save the world. Mobilize, communities; when
                movements, scale and impact scale and impact; agile then thought
                partnership state of play support. Capacity building empower
                communities, engaging social intrapreneurship, natural resources
                triple bottom line thought leadership or design thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myprofile;
