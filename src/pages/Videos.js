import React from "react"
import Footer from "../components/Footer"

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
      <Footer
        footerImageFront="\images\fields_front_2.png"
        footerImageBack="\images\fields_back_3.png"
      />
    </div>
  )
}

export default Videos
