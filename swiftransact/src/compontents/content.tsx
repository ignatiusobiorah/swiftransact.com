import React from "react";
import bitcoin from "../img/hero-banner-bitcoin.png";

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="contentText">
        <h4>SAFE AND SECURE</h4>
        <h2>Buy and sell crypto currencies</h2>
        <h6>
          Swiftransact is a user friendly crypto exchange platform, designed for
          you to easily manage your digital assets
        </h6>
        <button className="contentBtn">
          SIGN UP<i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
      <div className="contentImg">
        <img src={bitcoin} alt="bitcoinImg" />
      </div>
    </div>
  );
};

export default Content;
