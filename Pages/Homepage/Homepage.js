import React from "react";
import "./Homepage.css";
import Banners from "./Banners/Banners";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import ToolsPart from "./ToolsPart/ToolsPart";
import Reviews from "./Reviews/Reviews";

const Homepage = () => {
  return (
    <div>
      <Banners></Banners>
      <ToolsPart></ToolsPart>

      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <h2>Hello</h2>
    </div>
  );
};

export default Homepage;
