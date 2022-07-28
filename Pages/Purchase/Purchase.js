import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Spinner from "../../Shared/Spinner/Spinner";
import ProductImage from "./ProductImage/ProductImage";
import "./Purchase.css";
import ProductDetails from "./ProductDetails/ProductDetails";
const Purchase = () => {
  let { id } = useParams();
  const [singleProduct, setsingleProduct] = useState();
  useEffect(() => {
    const url = `https://glacial-sierra-36711.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setsingleProduct(data));
  }, [setsingleProduct]);
  return (
    <div>
      <PageTitle pagetitle="Purchase"></PageTitle>
      <div className="productPage">
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                {singleProduct?.map((data) => (
                  <ProductImage data={data} key={data._id} />
                )) || <Spinner></Spinner>}
                {singleProduct?.map((data) => (
                  <ProductDetails data={data} key={data._id} />
                )) || <Spinner></Spinner>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
