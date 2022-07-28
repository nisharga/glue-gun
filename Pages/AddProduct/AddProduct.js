import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Shared/Firebase/Auth";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./AddProduct.css";
const AddProduct = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const name = data.product_name;
    const image = data.product_img_url;
    const shortDescription = data.short_description;
    const price = parseInt(data.price);
    const minimumquantity = parseInt(data.minimumquantity);
    const availablequantity = parseInt(data.availablequantity);
    const email = user.email;
    const description = data.description;
    console.log(
      name,
      image,
      price,
      shortDescription,
      minimumquantity,
      availablequantity,
      email,
      description
    );
    // save signup information in database
    fetch("https://glacial-sierra-36711.herokuapp.com/addproduct", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
        shortDescription: shortDescription,
        minimumquantity: minimumquantity,
        availablequantity: availablequantity,
        email: email,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // endsave signup information in database
    e.target.reset();
  };
  return (
    <>
      <PageTitle pagetitle="Add-Inventory"></PageTitle>
      <div className="AddInventory">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 ">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                  <legend>ADD PRODUCTS</legend>
                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="product_name"
                    >
                      PRODUCT NAME
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("product_name")}
                        name="product_name"
                        placeholder="Product Name"
                        className="form-control input-md"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="product_img_url"
                    >
                      PRODUCT IMAGE URL
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("product_img_url")}
                        name="product_img_url"
                        placeholder="Product Image Url"
                        className="form-control input-md"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="short_description"
                    >
                      PRODUCT SHORT DESCRIPTION
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("short_description")}
                        name="short_description"
                        placeholder="Product Short Description"
                        className="form-control input-md"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label className="col-md-4 control-label" htmlFor="price">
                      Price
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("price")}
                        name="price"
                        placeholder="Price"
                        className="form-control input-md"
                        type="number"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="minimumquantity"
                    >
                      Minimum Quantity
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("minimumquantity")}
                        name="minimumquantity"
                        placeholder="Minimum Quantity"
                        className="form-control input-md"
                        type="number"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="availablequantity"
                    >
                      Available quantity
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("availablequantity")}
                        name="availablequantity"
                        placeholder="Available Quantity"
                        className="form-control input-md"
                        type="number"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label className="col-md-4 control-label" htmlFor="email">
                      Email
                    </label>
                    <div className="col-md-4">
                      <input
                        {...register("email")}
                        name="email"
                        placeholder=" Email"
                        className="form-control input-md"
                        value={user?.email || ""}
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="description"
                    >
                      Product Description
                    </label>
                    <div className="col-md-4">
                      <textarea
                        {...register("description")}
                        name="description"
                        placeholder="Product Description"
                        className="form-control input-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-4">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
