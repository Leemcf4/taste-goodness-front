import React from "react";
import Footer from "../components/Footer";

function CallUs() {
  return (
    <div className="call-container">
      <div className="call-title">
        <img src="/images/callme_title.png" alt="" />
      </div>

      <div className="call-text-left">
        <img src="/images/callus_textboard1.png" alt="" />
      </div>

      <div className="call-text-right">
        <img src="/images/callus_textboard2.png" alt="" />
      </div>
      <Footer
        footerImageFront="\images\fields_front_6.png"
        footerImageBack="\images\fields_back_6.png"
      />
    </div>
  );
}

export default CallUs;
