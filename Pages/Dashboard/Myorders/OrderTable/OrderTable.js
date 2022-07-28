import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const OrderTable = ({ val, index }) => {
  const { _id, productName, totalPrice } = val;

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
      <td>{totalPrice}</td>
      <td>PENDING</td>
      <td>
        <button onClick={() => handleDelet("ds")}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;
