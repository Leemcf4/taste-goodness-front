import React from "react";
import Awards from "../components/Awards";
import Balloons from "../components/Balloons";
import Basket from "../components/Basket";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="logo-container">
          <img src="\images\tog_logo_full.png" alt="" />
        </div>
      </div>

      <div className="cloud-container-left">
        <img src="\images\hello_cloud1.png" alt="" />
      </div>

      <div className="cloud-container-right">
        <img src="\images\hello_cloud2.png" alt="" />
      </div>
      <div className="home-awards-container">
        <Awards />
      </div>
      <div className="basket-container">
        <img src="\images\hello_basket.png" alt="" />
      </div>
      <Footer
        footerImageFront="\images\fields_front_1.png"
        footerImageBack="\images\fields_back_1.png"
      />
    </div>
  );
}

export default HomePage;
