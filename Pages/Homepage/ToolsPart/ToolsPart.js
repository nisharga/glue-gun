import React from "react";
import "./ToolsPart.css";
import SingleTools from "./SingleTools/SingleTools";
import useProduct from "../../../Hooks/useProduct/useProduct";
const ToolsPart = () => {
  const [product] = useProduct();

  return (
    <div className="featureProduct">
      <h2 className="featureTitle">
        Tools <span>Parts</span>
      </h2>
      <div className="container">
        <div className="row">
          {product?.map((data) => (
            <SingleTools key={data._id} data={data}></SingleTools>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsPart;
