import React from "react";
import "./ToolsPart.css";
import SingleTools from "./SingleTools/SingleTools";
const ToolsPart = () => {
  return (
    <div className="featureProduct">
      <h2 className="featureTitle">
        Tools <span>Parts</span>
      </h2>
      <div className="container">
        <div className="row">
          <SingleTools></SingleTools>
          <SingleTools></SingleTools>
          <SingleTools></SingleTools>
          <SingleTools></SingleTools>
          <SingleTools></SingleTools>
          <SingleTools></SingleTools>
        </div>
      </div>
    </div>
  );
};

export default ToolsPart;
