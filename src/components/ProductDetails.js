import React from "react";

function ProductDetails(props) {
  const { product } = props;

  return (
    <div key={product._id} className="product-details-container">
      <div className="product-image">
        <img src={product.productDetailsImage} alt="" />
      </div>
      <div className="product-details">
        <img src={product.productDetails} alt="" />
      </div>
      <div className="product-details-cloud">
        <img src={product.productCloud} alt="" />
      </div>
    </div>
  );
}
export default ProductDetails;
