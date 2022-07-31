import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Spinner from "../../../Shared/Spinner/Spinner";
import auth from "./../../../Shared/Firebase/Auth";
import OrderTable from "./OrderTable/OrderTable";

const Myorders = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [myitems, setmyitems] = useState();
  useEffect(() => {
    const url = `https://glacial-sierra-36711.herokuapp.com/myitems/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setmyitems(data));
  }, [setmyitems]);
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
                <li className="active">
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addareview">Add A Review</Link>
                </li>
                <li>
                  <Link to="/dashboard/myprofile">My Profile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="inventoryArea">
              <p className="text-center"></p>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <table className="table table-dark">
                      <thead className="text-center">
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Total Price</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Cancel</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {myitems?.map((val, index) => (
                          <OrderTable
                            val={val}
                            index={index + 1}
                            key={val._id}
                          ></OrderTable>
                        )) || <Spinner></Spinner>}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorders;
