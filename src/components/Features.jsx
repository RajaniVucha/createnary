import React from "react";
import SliderComponent from "./SliderComponent";
function Features() {
  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    // Add more image URLs as needed
  ];
  return (
    <div className="features">
      <SliderComponent images={images} />
    </div>
  );
}

export default Features;
