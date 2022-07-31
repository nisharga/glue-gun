import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

const OrderTable = ({ val, index }) => {
  const { _id, productName, totalPrice, paymentStatus, shipping } = val;
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
      <td>{totalPrice}</td>
      <td>
        {paymentStatus === "paid" ? (
          "Paid"
        ) : (
          <Link to={`/dashboard/myorders/payment/${totalPrice}/${_id}`}>
            Pay Now
          </Link>
        )}
      </td>
      <td>
        {paymentStatus !== "paid" ? (
          <button onClick={() => handleDelet(_id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        ) : (
          shipping
        )}
      </td>
    </tr>
  );
};

export default OrderTable;
