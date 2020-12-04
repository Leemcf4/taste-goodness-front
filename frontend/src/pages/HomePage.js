import React from "react";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home-container">
      <img src="\images\tog_logo_full.png" alt="" />

      <Footer
        footerImageFront="\images\fields_front_1.png"
        footerImageBack="\images\fields_back_1.png"
      />
    </div>
  );
}

export default HomePage;
