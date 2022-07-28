import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Portfolio = () => {
  return (
    <div>
      <PageTitle pagetitle="Portfolio"></PageTitle>
      <div className="featureProduct">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <h2>
                Name: <b>Nisharga</b>
              </h2>
              <h2>
                Email Address: <b>Kabirnisharga@gmail.com</b>
              </h2>
              <h2>
                Educational background: <b>Dropping out from high school.</b>
              </h2>
              <h2>
                Skills I have:{" "}
                <b>
                  html, css, js, mongodb, express, node. js firebase, react,
                  react router
                </b>
              </h2>
              <h2> portfolio site: </h2>
              {/* <a to="https://kabir-convention-center.netlify.app/">
                Convention Center
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
