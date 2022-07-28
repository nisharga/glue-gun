import React from "react";
import "./SingleReview.css";
import userImage from "./Unknown_person.jpg";
import ReactStars from "react-stars";
const SingleReview = ({ data }) => {
  return (
    <div className="heroareaContent col-md-4 col-xs-6 ">
      <div class="comment mt-4 pt-3 pb-3">
        <div className="d-flex mb-2">
          <img
            src={userImage}
            alt="userImage"
            className="rounded-circle"
            width="40"
            height="40"
          />
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={data?.rating}
          />
        </div>

        <h4>{data?.reivewtitle}</h4>
        <p>{data?.reivewcomments}</p>
      </div>
    </div>
  );
};

export default SingleReview;
