import React from "react";
import Swiper from "react-id-swiper";
import ProductDetails from "./ProductDetails";

const CoverflowEffect = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <Swiper {...params}>
      <div>
        {" "}
        <img src="/images/garlic_bottle.png" alt="" />{" "}
      </div>
      <div
        style={{
          backgroundImage: `url(${require(product.productFamilyImage)})`,
        }}
      />
      <div
        style={{
          backgroundImage: "/images/garlic_bottle.png",
        }}
      />
      <div
        style={{
          backgroundImage: "/images/garlic_bottle.png",
        }}
      />
      <div
        style={{
          backgroundImage: "/images/garlic_bottle.png",
        }}
      />
    </Swiper>
  );
};
export default CoverflowEffect;
