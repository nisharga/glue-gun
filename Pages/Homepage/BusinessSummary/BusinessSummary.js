import React from "react";
import "./BusinessSummary.css";
import Item from "./Item/Item";
const BusinessSummary = () => {
  const itemsALL = [
    {
      id: 1,
      icon: "smile",
      counter: 100,
      itemtext: "Customers we served ",
      quantity: "+",
    },
    {
      id: 2,
      icon: "sack-dollar",
      counter: 120,
      itemtext: "Annual revenue",
      quantity: "M+",
    },
    { id: 3, icon: "star", counter: 35, itemtext: "Reviews", quantity: "K+" },
    {
      id: 4,
      icon: "tools",
      counter: 50,
      itemtext: "tools",
      quantity: "+",
    },
  ];
  return (
    <div className="sectionBusinessSummary">
      <div className="fullWidth">
        <div className="projectFactsWrap ">
          {itemsALL?.map((data) => (
            <Item items={data} key={data.id}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
