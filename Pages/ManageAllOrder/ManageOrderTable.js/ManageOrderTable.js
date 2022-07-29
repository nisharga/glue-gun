import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

const ManageOrderTable = ({ val, index }) => {
  const { _id, productName, quantity, phone, totalPrice } = val;

  const handleDelet = (id) => {
    confirmAlert({
      title: "Confirm to Cancel Order",
      message: "Are you sure to Cancel this order?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(`http://localhost:5000/myitems/${_id}`, {
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
      <td>
        <Link to={`/dashboard/myorders/payment/${totalPrice}`}>Pay</Link>
      </td>
      <td>
        <button onClick={() => handleDelet("ds")}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderTable;
