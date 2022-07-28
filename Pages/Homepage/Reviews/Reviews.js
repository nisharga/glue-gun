import React, { useState } from "react";
import "./Reviews.css";
import SingleReview from "./SingleReview/SingleReview";
const Reviews = () => {
  const [review, setReview] = useState();
  fetch("http://localhost:5000/review")
    .then((response) => response.json())
    .then((data) => setReview(data));
  return (
    <div className="featureProduct">
      <h2 className="featureTitle">Reviews</h2>
      <div className="container">
        <div className="row">
          {review?.map((data) => (
            <SingleReview data={data} key={data._id}></SingleReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
