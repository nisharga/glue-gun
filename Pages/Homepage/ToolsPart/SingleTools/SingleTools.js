import React from "react";
import { Link } from "react-router-dom";
import image from "../../../../img/blue.jpg";
import "./SingleTools.css";
const SingleTools = ({ data }) => {
  return (
    <div className="col-md-4 col-sm-6 mt-3 mb-4">
      <div className="thumb-wrapper">
        <div className="img-box">
          <img src={data.image} alt="d" />
        </div>
        <div className="thumb-content">
          <h4>{data.name}</h4>
          <p className="short_des">{data.shortDescription}</p>
          <div className="d-flex justify-content-center">
            <p className="quantity">MinQuantity: {data.minimumquantity}</p>
            <p className="supplier">
              AvailableQuantity: {data.availablequantity}
            </p>
          </div>
          <p className="item-price">
            <strike>{(data.price / 100) * 120}</strike> <b>{data.price}</b>
          </p>
          <Link to={`/purchase/${data._id}`} className="btn btn-primary">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTools;
