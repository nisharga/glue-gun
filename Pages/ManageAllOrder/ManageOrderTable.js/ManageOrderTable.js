import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageOrderTable = ({ val, index }) => {
  const {
    _id,
    productName,
    quantity,
    phone,
    totalPrice,
    paymentStatus,
    name,
    address,
    shipping,
  } = val;
  const handleDelivered = (id) => {
    toast("Delivery Sucessfull");
    fetch(`https://glacial-sierra-36711.herokuapp.com/deliverystatus/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        shipping: "Delivered",
      }),
    })
      .then((response) => response.json())
      .then((json) => {});
  };
  const handleDelet = (id) => {
    confirmAlert({
      title: "Confirm to Cancel Order",
      message: "Are you sure to Cancel this order?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(`https://glacial-sierra-36711.herokuapp.com/myitems/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((val) => {
                if (val.deletedCount > 0) {
                  console.log(val, "val deleted");
                  window.location.reload();
                }
              });
          },
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };
  return (
    <tr>
      <td>{index}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{phone}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{paymentStatus}</td>
      {/* <td>{shipping === "pending_shipping" ? "pending_shipping" : ""}</td> */}
      <td className="">
        <div class="input-group mb-3 d-flex justify-content-center">
          <select class="custom-select" id="inputGroupSelect01">
            <option value="pending">Pending_Shipping</option>
            <option value="delivered" onClick={() => handleDelivered(_id)}>
              Delivered
            </option>
          </select>
        </div>
      </td>
      <td>
        <button onClick={() => handleDelet(_id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderTable;
