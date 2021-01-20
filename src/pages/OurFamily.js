import React, { useState, useEffect } from "react"
import ProductDetails from "../components/ProductDetails"
import ProductRow from "../components/ProductRow"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import Footer from "../components/Footer"

const products = [
  {
    _id: 1,
    position: 1,
    productName: "Cajun",
    productFamilyImage: "/images/family_bottle_cajun.png",
    productLabel: "/images/label_cajun.png",
    productDetails: "",
    productDetailsImage: "/images/piri_bottle.png",
    productCloud: "",
  },
  {
    _id: 2,
    position: 2,
    productName: "Piri Piri",
    productFamilyImage: "/images/family_bottle_piri.png",
    productLabel: "/images/label_piri.png",
    productDetails: "/images/piri_textboard_full.png",
    productDetailsImage: "/images/piri_bottle.png",
    productCloud: "/images/piri_cloud.png",
  },
  {
    _id: 3,
    position: 3,
    productName: "Garlic Mayo",
    productFamilyImage: "/images/family_bottle_garlic.png",
    productLabel: "/images/label_garlic.png",
    productDetails: "/images/garlic_textboard_full.png",
    productDetailsImage: "/images/garlic_bottle.png",
    productCloud: "/images/garlic_cloud.png",
  },
  {
    _id: 4,
    position: 4,
    productName: "Southwest",
    productFamilyImage: "/images/family_bottle_southwest.png",
    productLabel: "/images/label_southwest.png",
    productDetails: "/images/southwest_textboard_full.png",
    productDetailsImage: "/images/southwest_bottle.png",
    productCloud: "/images/southwest_cloud.png",
  },
  {
    _id: 5,
    position: 5,
    productName: "Sweet-Chilli",
    productFamilyImage: "/images/family_bottle_sweet.png",
    productLabel: "/images/label_sweet.png",
    productDetails: "/images/sweet_textboard_full.png",
    productDetailsImage: "/images/sweet_bottle.png",
    productCloud: "/images/sweet_cloud.png",
  },
  {
    _id: 6,
    position: 6,
    productName: "Barbecue",
    productFamilyImage: "/images/family_bottle_barbecue.png",
    productLabel: "/images/label_barbecue.png",
    productDetails: "/images/bbq_textboard_full.png",
    productDetailsImage: "/images/bbq_bottle.png",
    productCloud: "/images/bbq_cloud.png",
  },
  {
    _id: 7,
    position: 7,
    productName: "Taco",
    productFamilyImage: "/images/family_bottle_taco.png",
    productLabel: "/images/label_taco.png",
    productDetails: "/images/taco_textboard_full.png",
    productDetailsImage: "/images/taco_bottle.png",
    productCloud: "/images/taco_cloud.png",
  },
  {
    _id: 8,
    position: 8,
    productName: "Pepper",
    productFamilyImage: "/images/family_bottle_pepper.png",
    productLabel: "/images/label_pepper.png",
    productDetails: "/images/pepper_textboard_full.png",
    productDetailsImage: "/images/pepper_bottle.png",
    productCloud: "/images/pepper_cloud.png",
  },
  {
    _id: 9,
    position: 9,
    productName: "Secret",
    productFamilyImage: "/images/family_bottle_secret.png",
    productLabel: "/images/label_secret.png",
    productDetails: "/images/secret_textboard_full.png",
    productDetailsImage: "/images/piri_bottle.png",
    productCloud: "",
  },
  {
    _id: 10,
    position: 10,
    productName: "Tikka",
    productFamilyImage: "/images/family_bottle_tikka.png",
    productLabel: "/images/label_tikka.png",
    productDetails: "",
    productDetailsImage: "/images/piri_bottle.png",
    productCloud: "",
  },
]

function OurFamily() {
  const [productShow, setProductShow] = useState(0)

  const clickHandler = (productID) => {
    setProductShow(productID)
    console.log(productShow)
  }

  const params = {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 3,
    centeredSlides: false,
    freeMode: true,
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
      clickable: true,
    },
  }

  return (
    <div className="family-container">
      {productShow === 1 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/piri_bottle.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/piri_bottle.png" alt="" />
          </div>
        </div>
      ) : productShow === 2 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/piri_textboard_full.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/piri_cloud.png" alt="" />
          </div>
        </div>
      ) : productShow === 3 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/garlic_textboard_full.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/garlic_cloud.png" alt="" />
          </div>
        </div>
      ) : productShow === 4 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/southwest_textboard_full.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/southwest_cloud.png" alt="" />
          </div>
        </div>
      ) : productShow === 5 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/sweet_textboard_full.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/sweet_cloud.png" alt="" />
          </div>
        </div>
      ) : productShow === 6 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/bbq_textboard_full.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/bbq_cloud.png" alt="" />
          </div>
        </div>
      ) : productShow === 7 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/taco_textboard_full.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/taco_cloud.png" alt="" />
          </div>
        </div>
      ) : productShow === 8 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/pepper_textboard_full.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/pepper_cloud.png" alt="" />
          </div>
        </div>
      ) : productShow === 9 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="/images/garlic_textboard_full.png" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="/images/garlic_cloud.png" alt="" />
          </div>
        </div>
      ) : productShow === 10 ? (
        <div className="product-details-container">
          <div className="product-details">
            <img src="" alt="" />
          </div>
          <div className="product-details-cloud">
            <img src="" alt="" />
          </div>
        </div>
      ) : (
        <>
          <div className="family-top">
            <div className="family-title">
              <img src="/images/family_title.png" alt="" />
            </div>
            <div className="family-board">
              <img src="/images/family_textboard.png" alt="" />
            </div>
          </div>
        </>
      )}

      <div className="family-bottom">
        <div className="product-row">
          {products.map((product) => (
            <ProductRow
              key={product._id}
              product={product}
              clickHandler={clickHandler}
            />
          ))}
        </div>
        <div className="mobile-product-row">
          <Swiper {...params}>
            {products.map((product) => (
              <div key={product._id} onClick={() => clickHandler(product._id)}>
                {" "}
                <img src={product.productFamilyImage} alt="" />{" "}
              </div>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer
        footerImageFront="\images\fields_front_4.png"
        footerImageBack="\images\fields_back_4.png"
      />
    </div>
  )
}

export default OurFamily
