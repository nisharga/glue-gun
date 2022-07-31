import React, { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Spinner from "../../Shared/Spinner/Spinner";
import ManageOrderTable from "./ManageOrderTable.js/ManageOrderTable";

const ManageAllOrder = () => {
  const [order, setOrder] = useState();
  useEffect(() => {
    fetch("https://glacial-sierra-36711.herokuapp.com/manageallorder")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order]);
  return (
    <div>
      <PageTitle pagetitle="Manage All Order"></PageTitle>

      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-dark">
              <thead className="text-center">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Shiping</th>
                  <th scope="col">Cancel</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {order?.map((val, index) => (
                  <ManageOrderTable
                    val={val}
                    index={index + 1}
                    key={val._id}
                  ></ManageOrderTable>
                )) || <Spinner></Spinner>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrder;
