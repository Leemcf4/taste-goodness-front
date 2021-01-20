import React from "react";
import Footer from "../components/Footer";

function WhereToFind() {
  return (
    <div className="where-container">
      <div className="where-search">
        <img src="/images/where_magnifying_glass.png" alt="" />

        <div className="where-title">
          <img src="/images/where_title.png" alt="" />
        </div>
      </div>
      <div className="where-news">
        <img src="/images/where_news.png" alt="" />
      </div>
      <div className="where-fsdu">
        <img src="/images/where_fsdu_full.png" alt="" />
      </div>
      <Footer
        footerImageFront="\images\fields_front_5.png"
        footerImageBack="\images\fields_back_5.png"
      />
    </div>
  );
}

export default WhereToFind;
