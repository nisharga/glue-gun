import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { toast } from "react-toastify";
import auth from "../../../../Shared/Firebase/Auth";

const Profileform = () => {
  const [user] = useAuthState(auth);

  const [modal, setModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const email = user?.email;
    const education = data.education;
    const location = data.location;
    const phone = data.phone;
    const linkedin = data.linkedIn_profile_link;
    // console.log(education, location, phone, linkedin, email);

    fetch(`https://glacial-sierra-36711.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        education: education,
        location: location,
        phone: phone,
        linkedin: linkedin,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    toast("Profile Update sucessfully");
    e.preventDefault();
  };
  return (
    <div>
      <PureModal
        header="Update Profile"
        isOpen={modal}
        closeButton="X"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>ADD PRODUCTS</legend>
            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="education">
                Education
              </label>
              <div className="col-md-12">
                <input
                  {...register("education")}
                  name="education"
                  placeholder="education"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="location">
                Location (city/district)
              </label>
              <div className="col-md-12">
                <input
                  {...register("location")}
                  name="location"
                  placeholder="Location"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="phone">
                Phone Number
              </label>
              <div className="col-md-12">
                <input
                  {...register("phone")}
                  name="phone"
                  placeholder="phone"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label
                className="col-md-12 control-label"
                htmlFor="linkedIn_profile_link"
              >
                LinkedIn Profile link
              </label>
              <div className="col-md-12">
                <input
                  {...register("linkedIn_profile_link")}
                  name="linkedIn_profile_link"
                  placeholder="linkedIn Profile URL"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-4">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </PureModal>

      <button className="button" onClick={() => setModal(true)}>
        Update your Profile
      </button>
    </div>
  );
};

export default Profileform;
