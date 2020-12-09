import React from "react";

function WhatsGood() {
  return (
    <div className="whats-good-container">
      <div className="whats-good-title">
        <img src="/images/good_title.png" alt="" />
      </div>

      <div className="whats-good-cloud-container">
        <div className="cloud-left">
          <img src="/images/good_cloud1.png" alt="" />
        </div>
        <div className="cloud-right">
          <img src="/images/good_cloud2.png" alt="" />
        </div>
      </div>

      <div className="balloon-container">
        <div className="balloon-1">
          <img src="/images/balloon_lactose.png" alt="" />
        </div>
        <div className="balloon-2">
          <img src="/images/balloon_gluten.png" alt="" />
        </div>
        <div className="balloon-3">
          <img src="/images/balloon_shellfish.png" alt="" />
        </div>
        <div className="balloon-4">
          <img src="/images/balloon_suitable.png" alt="" />
        </div>
      </div>
      <div className="sign-container">
        <div className="sign">
          <img src="/images/good_sign.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default WhatsGood;
