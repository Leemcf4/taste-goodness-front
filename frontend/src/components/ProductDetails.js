import React from "react";

function ProductDetails({
  key,
  productImage,
  productDetailsImage,
  productDetailsCloud,
}) {
  return (
    <div key={key} className="product-details-container">
      <div className="product-image">
        <img src="/images/piri_bottle.png" alt="" />
      </div>
      <div className="product-details">
        <img src="/images/piri_textboard_full.png" alt="" />
      </div>
      <div className="product-details-cloud">
        <img src="/images/piri_cloud.png" alt="" />
      </div>
    </div>
  );
}

export default ProductDetails;
