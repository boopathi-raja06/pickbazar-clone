import React from "react";
import banners from "../data/banners";

const Banner = () => {
  return (
    <div className="banner">
      {banners.map((b, idx) => (
        <img key={idx} src={b.image} alt="banner" />
      ))}
    </div>
  );
};

export default Banner;