import React from "react";
import Footer from "../components/Footer";

function StoryPage() {
  return (
    <div className="story-container">
      <div className="story-title">
        <img src="/images/story_title.png" alt="" />
      </div>
      <div className="story-book">
        <img src="/images/story_book.png" alt="" />
      </div>
      <div className="story-cloud-container-right">
        <img src="/images/story_cloud.png" alt="" />
      </div>
      <Footer
        footerImageFront="\images\fields_front_2.png"
        footerImageBack="\images\fields_back_2.png"
      />
    </div>
  );
}

export default StoryPage;
