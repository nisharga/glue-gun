import React from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import OrderForm from "./OrderForm";
const Order = ({ data }) => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <PureModal
        header="Order Details"
        isOpen={modal}
        closeButton="x"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <OrderForm data={data} />
      </PureModal>
      ;
      <button className="button btn btn-primary" onClick={() => setModal(true)}>
        Buy Now
      </button>
    </div>
  );
};

export default Order;
