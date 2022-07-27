import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const LogoArea = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="footer-about">
        <Link to="/" className="navbar-brand">
          <h3 className="mb-2">
            <FontAwesomeIcon icon="gun" /> GLUE GUN
          </h3>
        </Link>
        <p>
          glue guns are used in small joint attachment, surface lamination, and
          other product assembly applications in appliances, HVAC units, and
          mattresses.
        </p>
      </div>
    </div>
  );
};

export default LogoArea;
