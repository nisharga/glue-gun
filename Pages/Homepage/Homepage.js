import React from "react";
import "./Homepage.css";
import Banners from "./Banners/Banners";
import BusinessSummary from "./BusinessSummary/BusinessSummary";

const Homepage = () => {
  return (
    <div>
      <Banners></Banners>
      <BusinessSummary></BusinessSummary>

      <h2>Hello</h2>
    </div>
  );
};

export default Homepage;
