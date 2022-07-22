import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const LogoArea = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="footer-about">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon="gun" /> GLUE GUN
        </Link>
        <p>
          inventory management combines varying software packages to track stock
          levels and stock movements. The solution can integrate with
          multichannel sales systems or shipping systems.
        </p>
      </div>
    </div>
  );
};

export default LogoArea;
