import React from "react";
import Footer from "../components/Footer";

function Hive() {
  return (
    <div className="hive-container">
      <div className="hive-title">
        <img src="/images/hive_title.png" alt="" />
      </div>
      <div className="hive-book">
        <img src="/images/hive_book.png" alt="" />
      </div>
      <Footer
        footerImageFront="\images\fields_front_1.png"
        footerImageBack="\images\fields_back_4.png"
      />
    </div>
  );
}

export default Hive;
