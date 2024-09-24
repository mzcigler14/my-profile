import React, { useState, useEffect } from "react";
import heic2any from "heic2any";
import "../styles.css";

const images = require.context("../../photos", true);
const imageList = images.keys().map((image) => images(image));

function Photos() {
  return (
    <div className="image-container">
      {imageList.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} />
      ))}
    </div>
  );
}

export default Photos;
