import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Shared/Firebase/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OrderForm = ({ data }) => {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const email = user?.email;
  const name = user?.displayName;
  const onSubmit = (data, e) => {
    const phone = data.phone;
    const address = data.address;
    const quantity = data.quantity;
    // save order information in database
    fetch("http://localhost:5000/purchase/order", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone,
        address: address,
        quantity: quantity,
        email,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // endsave order information in database
    let from = "/";
    navigate(from, { replace: true });
    toast("Place order Successfully");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div className="form-group mt-3 mb-3">
            <label className="col-md-12 control-label" htmlFor="phone">
              phone
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
            <label className="col-md-12 control-label" htmlFor="address">
              address
            </label>
            <div className="col-md-12">
              <textarea
                {...register("address")}
                name="address"
                placeholder="address"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group mt-3 mb-3">
            <label className="col-md-12 control-label" htmlFor="quantity">
              Quantity
            </label>
            <div className="col-md-12">
              <input
                type="number"
                step={data.minimumquantity}
                min={data.minimumquantity}
                max={data.availablequantity}
                {...register("quantity")}
                name="quantity"
                placeholder="quantity"
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
                value={user?.email}
                placeholder="email"
                className="form-control input-md"
                disabled
              />
            </div>
          </div>
          <div className="form-group mt-3 mb-3">
            <label className="col-md-12 control-label" htmlFor="name">
              Name
            </label>
            <div className="col-md-12">
              <input
                {...register("name")}
                name="name"
                value={user?.displayName}
                placeholder="name"
                className="form-control input-md"
                disabled
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-4">
              <input
                type="submit"
                value="Place Order"
                className="btn btn-primary"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default OrderForm;
