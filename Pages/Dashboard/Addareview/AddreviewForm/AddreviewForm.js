import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
const AddreviewForm = ({ email }) => {
  const [reivewrating, setReivewrating] = useState();
  const ratingChanged = (newRating) => {
    setReivewrating(newRating);
  };
  // dashboard/addareview
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const reivewtitle = data.reivewtitle;
    const reivewcomments = data.reivewcomments;
    const rating = reivewrating;
    const useremail = email;
    // save review information in database
    fetch("http://localhost:5000/dashboard/addareview", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reivewtitle: reivewtitle,
        reivewcomments: reivewcomments,
        rating: rating,
        useremail: useremail,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast("Sucessfully Add a review");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // endsave review information in database
    e.preventDefault();
    toast("Review Added succesfully");
    e.target.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>ADD A REVIEW</legend>

          <div className="form-group mt-3 mb-3">
            <label className="col-md-12 control-label" htmlFor="reivewrating">
              Reivew Rating(Out of 5) - You give{reivewrating}
            </label>
            <div className="col-md-12">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group mt-3 mb-3">
            <label className="col-md-12 control-label" htmlFor="reivewtitle">
              Reivew Title
            </label>
            <div className="col-md-12">
              <input
                {...register("reivewtitle")}
                name="reivewtitle"
                placeholder="Reivew Title"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group mt-3 mb-3">
            <label className="col-md-12 control-label" htmlFor="reivewcomments">
              Reivew Comments
            </label>
            <div className="col-md-12">
              <textarea
                {...register("reivewcomments")}
                name="reivewcomments"
                placeholder="Review Comment"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group mt-3 mb-3">
            <label className="col-md-12 control-label" htmlFor="email">
              Email
            </label>
            <div className="col-md-12">
              <input
                {...register("email")}
                name="email"
                placeholder="email"
                className="form-control input-md"
                value={email}
                disabled
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-4">
              <input
                type="submit"
                value="Review Add"
                className="btn btn-primary"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddreviewForm;
