import React from "react";
import "./Homepage.css";
import Banners from "./Banners/Banners";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import ToolsPart from "./ToolsPart/ToolsPart";
import Reviews from "./Reviews/Reviews";
import AskQuestion from "./AskQuestion/AskQuestion";
import Newsletter from "./Newsletter/Newsletter";

const Homepage = () => {
  return (
    <div>
      <Banners></Banners>
      <ToolsPart></ToolsPart>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <AskQuestion></AskQuestion>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Homepage;
