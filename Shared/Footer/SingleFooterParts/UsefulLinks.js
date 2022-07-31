import React from "react";
import { Link } from "react-router-dom";

const UsefulLinks = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="useful-link">
        <h2>Useful Links</h2>
        <div className="use-links">
          <li>
            <Link to="/">
              <i className="fa-solid fa-angles-right"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/login">
              <i className="fa-solid fa-angles-right"></i> Login
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <i className="fa-solid fa-angles-right"></i> Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <i className="fa-solid fa-angles-right"></i> Blog
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
