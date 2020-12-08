import React from "react";

function ProductRow(position, rowImage, label, setProductSelected) {
  return (
    <div className="product-row-container">
      <div className={`product-position ${position}`}>
        <div className="label">
          <img src={label} alt="" />
        </div>
        <div className="details-image">
          <img
            src={rowImage}
            alt=""
            onClick={() => {
              setProductSelected(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductRow;
