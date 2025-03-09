import React from "react";
import bahce from "../images/bahce.webp";
import dismekan from "../images/dismekan.webp";
import hamam from "../images/hamam.webp";
import lobi from "../images/lobi.webp";
import restoran from "../images/restoran.webp";
import sinema from "../images/sinema.webp";

const Gallery = () => {
  const images = [bahce, dismekan, hamam, lobi, restoran, sinema];
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mt-10">
      {images &&
        images.map((image, index) => (
          <div key={index} className="w-80">
            <img
              src={image}
              alt=""
              className="w-full rounded-lg hover:scale-105 transition duration-300 hover:shadow-lg"
            />
          </div>
        ))}
    </div>
  );
};

export default Gallery;
