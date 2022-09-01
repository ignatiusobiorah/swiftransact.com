import React from "react";
import logo from "../img/swift-logo2.png";

const Header: React.FC = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="swift-logo" />
        </a>
      </div>

      <div className="nav-list">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Buy</a>
          </li>
          <li>
            <a href="/">Sell</a>
          </li>
          <li>
            <a href="/">Rates</a>
          </li>
          <li>
            <a href="/">NFT</a>
          </li>
          <li>
            <a href="/">Wallet</a>
          </li>
          <li>
            <a href="/">For Techies</a>
          </li>
        </ul>
      </div>

      <div className="navBtnContainer">
        <button className="navBtn">Connect</button>
      </div>
    </div>
  );
};

export default Header;
