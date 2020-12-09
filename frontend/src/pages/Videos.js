import React from "react";

function Videos() {
  return (
    <div className="video-container">
      <iframe
        title="bbq"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XmCzAhpA9XM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        title="bacon"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0gwSA43o2kY"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        title="pepper"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5nCzRmLtHeQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        title="piri"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-3dE8WTZ1eA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Videos;
