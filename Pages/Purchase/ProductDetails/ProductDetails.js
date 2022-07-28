import React from "react";
import Order from "./Order/Order";

const ProductDetails = ({ data }) => {
  return (
    <div className="details col-md-6">
      <h3 className="product-title">{data.name}</h3>
      <p className="product-description">
        <strong>({data.shortDescription})</strong>
      </p>
      <p className="product-description">{data.description}</p>
      <h4 className="price">
        current price: <span>{data.price}</span>
      </h4>
      <div className="quantity_seller d-flex">
        <h5 className="quantity">
          Minimum Quantity: <strong>{data.minimumquantity}</strong>
        </h5>
        <h5>
          Available Quantity: <strong>{data.availablequantity}</strong>
        </h5>
      </div>
      <hr /> <hr />
      <Order data={data} />
    </div>
  );
};

export default ProductDetails;
