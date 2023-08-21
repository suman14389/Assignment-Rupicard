import React, { useState } from "react";
import "./Home.css";
import ApplyNow from "../ApplyNow/ApplyNow";
import NxCardImage from "../../Images/nx-wave-image.png";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
  const [showUNITab, setShowUNITab] = useState(false);

  // const handleCheckboxChange = () => setIsCheckBoxChecked(!isCheckBoxChecked);

  const handleMenuClick = () => setShowUNITab(!showUNITab);

  return (
    <div className="home-container">
      <header>
        <h1> UNI</h1>
        <a href="https://paychek.uni.club/"> Uni Paycheck</a>
        <div className="menu-icon" onClick={handleMenuClick}>
          {!showUNITab ? <AiOutlineMenu /> : <GrClose />}
        </div>
      </header>
      <div className="main-body">
        <div className="left-body">
          <div id="about">
            <span>NXT Wave.</span> The next-gen credit card for those who love
            rewards
          </div>
          <div id="offers"> 1% Cashback5x + RewardsZero + Forex Markup</div>
          <ApplyNow />
        </div>

        <div className="right-body">
          <img src={NxCardImage} alt="nx-card-image" />
        </div>
        {showUNITab && (
          <a
            href="https://paychek.uni.club/"
            className="mobile-version-UNI-link"
          >
            {" "}
            <span>Uni Paycheck</span>
            {showUNITab && <FaArrowRightLong className="arrow" />}
          </a>
        )}
      </div>
    </div>
  );
}

export default Home;
