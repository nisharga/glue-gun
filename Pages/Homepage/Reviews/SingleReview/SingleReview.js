import React from "react";

const SingleReview = () => {
  return (
    <div class="comment mt-4">
      <img
        src={userImage}
        alt="userImage"
        className="rounded-circle"
        width="40"
        height="40"
      />
      <h4>{name}</h4>
      <ReactStars {...firstExample} />
      <p>{review_message}</p>
    </div>
  );
};

export default SingleReview;
