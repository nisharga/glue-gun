import React from "react";
import { useForm } from "react-hook-form";

const AddreviewForm = ({ email }) => {
  // dashboard/addareview
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const reivewtitle = data.reivewtitle;
    const reivewcomments = data.reivewcomments;
    const reivewrating = data.reivewrating;
    const email = data.email;

    // save review information in database
    fetch("http://localhost:5000/dashboard/addareview", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reivewtitle: reivewtitle,
        reivewcomments: reivewcomments,
        reivewrating: reivewrating,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // endsave review information in database
    e.preventDefault();
  };
  return (
    <div>
      <h2>Add Review Email is: {email}</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>ADD A REVIEW</legend>
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
            <label className="col-md-12 control-label" htmlFor="reivewrating">
              Reivew Rating(Out of 5)
            </label>
            <div className="col-md-12">
              <input
                type="number"
                maxlength="0.5"
                min="0"
                max="5"
                {...register("reivewrating")}
                name="reivewrating"
                placeholder="Reivew Rating"
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
