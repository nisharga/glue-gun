import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import CountUp from "react-countup";

const Item = (props) => {
  const { icon, counter, itemtext, quantity } = props.items;
  return (
    <div className="item">
      <div className="itemicon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className="number">
        <CountUp delay={2} end={counter} />
        <span className="quantity">{quantity}</span>
      </p>
      <span></span>
      <p>{itemtext}</p>
    </div>
  );
};

export default Item;
