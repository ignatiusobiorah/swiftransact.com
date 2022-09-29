import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/swift-logo2.png";

//   interface props {
//     Link: React.ElementType;
// };

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
            <a>Trade</a>
          </li>
          <li>
            <Link to="/wallet">Wallet</Link>
          </li>
          <li>
            <a href="/">For Techies</a>
          </li>
          <li>
            <a>Company</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </div>

      <div className="navBtnContainer">
        <button className="navBtn">Create Account</button>
      </div>
    </div>
  );
};

export default Header;
