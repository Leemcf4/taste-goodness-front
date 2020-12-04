import React from "react";

function Footer({ footerImageFront, footerImageBack }) {
  return (
    <div className="footer-container">
      <div className="footer-images">
        <div className="footer-front">
          <img src={footerImageFront} alt="FooterFront" />
        </div>
        <div className="footer-back">
          <img src={footerImageBack} alt="FooterBack" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
