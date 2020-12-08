import React from "react";
import ProductDetails from "../components/ProductDetails";
import ProductRow from "../components/ProductRow";

const products = [
  {
    position: 1,
    productName: "Cajun",
    productFamilyImage: "/images/family_bottle_cajun.png",
    productLabel: "/images/label_cajun.png",
    productDetails: "",
    productDetailsImage: "",
    productCloud: "",
  },
  {
    position: 2,
    productName: "Piri Piri",
    productFamilyImage: "/images/family_bottle_piri.png",
    productLabel: "/images/label_piri.png",
    productDetails: "/images/piri_textboard_full.png",
    productDetailsImage: "/images/piri_bottle.png",
    productCloud: "",
  },
  {
    position: 3,
    productName: "Garlic Mayo",
    productFamilyImage: "/images/family_bottle_garlic.png",
    productLabel: "/images/label_garlic.png",
    productDetails: "/images/garlic_textboard_full.png",
    productDetailsImage: "/images/garlic_bottle.png",
    productCloud: "",
  },
  {
    position: 4,
    productName: "Southwest",
    productFamilyImage: "/images/family_bottle_southwest.png",
    productLabel: "/images/label_southwest.png",
    productDetails: "/images/southwest_textboard_full.png",
    productDetailsImage: "/images/southwest_bottle.png",
    productCloud: "",
  },
  {
    position: 5,
    productName: "Sweet-Chilli",
    productFamilyImage: "/images/family_bottle_sweet.png",
    productLabel: "/images/label_sweet.png",
    productDetails: "/images/sweet_textboard_full.png",
    productDetailsImage: "/images/sweet_bottle.png",
    productCloud: "",
  },
  {
    position: 6,
    productName: "Barbecue",
    productFamilyImage: "/images/family_bottle_barbecue.png",
    productLabel: "/images/label_barbecue.png",
    productDetails: "/images/bbq_textboard_full.png",
    productDetailsImage: "/images/bbq_bottle.png",
    productCloud: "",
  },
  {
    position: 7,
    productName: "Taco",
    productFamilyImage: "/images/family_bottle_taco.png",
    productLabel: "/images/label_taco.png",
    productDetails: "/images/taco_textboard_full.png",
    productDetailsImage: "/images/taco_bottle.png",
    productCloud: "",
  },
  {
    position: 8,
    productName: "Pepper",
    productFamilyImage: "/images/family_bottle_pepper.png",
    productLabel: "/images/label_pepper.png",
    productDetails: "/images/pepper_textboard_full.png",
    productDetailsImage: "/images/pepper_bottle.png",
    productCloud: "",
  },
  {
    position: 9,
    productName: "Secret",
    productFamilyImage: "/images/family_bottle_secret.png",
    productLabel: "/images/label_secret.png",
    productDetails: "/images/secret_textboard_full.png",
    productDetailsImage: "",
    productCloud: "",
  },
  {
    position: 10,
    productName: "Tikka",
    productFamilyImage: "/images/family_bottle_tikka.png",
    productLabel: "/images/label_tikka.png",
    productDetails: "",
    productDetailsImage: "",
    productCloud: "",
  },
];

function StoryPage() {
  return (
    <div className="story-container">
      <div className="story-top"></div>
      <ProductDetails
        productImage={products.productImage}
        productDetailsImage={products.productDetails}
        productDetailsCloud={products.productCloud}
      />
      <div className="story-bottom">
        <div className="product-row">
          <ProductRow
            position={products.position}
            rowImage={products.productFamilyImage}
            label={products.productLabel}
          />
        </div>
      </div>
    </div>
  );
}

export default StoryPage;
