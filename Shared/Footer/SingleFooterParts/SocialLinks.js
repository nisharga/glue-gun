import React from "react";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="social-links">
        <h2>Follow Us</h2>
        <img src="./assets/images/about/home_line.png" alt="" />
        <div className="social-icons">
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Linkedin</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
