import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Shared/Firebase/Auth";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./Dashboard.css";
import dashboard from "./Dashboard.png";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <PageTitle pagetitle="Dashboard"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="sidebar sidebar-md">
              {user?.email === "kabirnisharga@gmail.com" ? (
                <ul className="list-menu">
                  <li className="active">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/manageallorder">Manage All Orders</Link>
                  </li>
                  <li>
                    <Link to="/addproduct">Add A Product</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myprofile">My Profile</Link>
                  </li>
                </ul>
              ) : (
                <ul className="list-menu">
                  <li className="active">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myorders">My Orders</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addareview">Add A Review</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myprofile">My Profile</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="content">
              <img src={dashboard} alt="dashboard" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
