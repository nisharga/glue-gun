import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Shared/Firebase/Auth";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import AddreviewForm from "./AddreviewForm/AddreviewForm";

const Addareview = () => {
  const [user] = useAuthState(auth);
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
                <li className="active">
                  <Link to="/dashboard/addareview">Add A Review</Link>
                </li>
                <li>
                  <Link to="/dashboard/myprofile">My Profile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="content">
              <AddreviewForm email={user.email}></AddreviewForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addareview;
