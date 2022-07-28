import React from "react";
const ProductImage = ({ data }) => {
  return (
    <div className="col-md-6">
      <div className="preview">
        <img src={data.image} alt="img" />
      </div>
    </div>
  );
};

export default ProductImage;
