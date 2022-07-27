import React from "react";
import { Link } from "react-router-dom";
import image from "../../../../img/blue.jpg";
import "./SingleTools.css";
const SingleTools = () => {
  return (
    <div className="col-md-4 col-sm-6 mt-3 mb-4">
      <div className="thumb-wrapper">
        <div className="img-box">
          <img src={image} alt="d" />
        </div>
        <div className="thumb-content">
          <h4>NAme</h4>
          <p className="short_des">short_description</p>
          <div className="d-flex justify-content-center">
            <p className="quantity">Quantity: 2</p>
            <p className="supplier">Supplier: Kab</p>
          </div>
          <p className="item-price">
            <strike> 22</strike> <b> 2</b>
          </p>
          <Link to={`/product/`} className="btn btn-primary">
            Updated
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTools;
