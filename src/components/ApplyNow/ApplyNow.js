import React, { useState } from "react";
import "./ApplyNow.css";
import Loader from "../Loader/Loader";
import { FaArrowRightLong } from "react-icons/fa6";

function ApplyNow() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isApplied, setIsApplied] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const isMobileValid = mobileNumber.length === 10;
  const [isApplyClicked, setIsApplyClicked] = useState(false);

  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  const handleCheckboxChange = () => setIsCheckBoxChecked(!isCheckBoxChecked);

  const handleMobileNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 10) {
      setMobileNumber(input);
    }
  };

  const handleApplyClick = () => {
    setIsApplyClicked(true);
    setShowLoader(true);
    setTimeout(() => setIsApplied(true), 700);
  };

  const handleDownloadClick = () => {
    const openLink =
      "https://play.google.com/store/apps/details?id=cards.uni.app.credit&hl=en_IN&gl=IN";
    window.open(openLink);
  };

  return (
    <div className="applynow-container">
      <div className="register-phone">
        {isApplied ? (
          <button id="download-btn" onClick={handleDownloadClick}>
            Download{" "}
          </button>
        ) : (
          <div
            className="input-container"
            id={isApplyClicked ? "remove-padding" : ""}
          >
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              pattern="[0-9]*"
              id="mobile-number"
              className={isApplyClicked ? "disable" : ""}
            />
            {!isApplyClicked &&
              mobileNumber?.length > 0 &&
              (isMobileValid ? (
                <span className="icon valid-icon">✅</span>
              ) : (
                <span className="icon invalid-icon">❌</span>
              ))}

            <button
              disabled={!isCheckBoxChecked || !isMobileValid}
              id="apply"
              onClick={handleApplyClick}
            >
              {showLoader ? <Loader /> : null}
              <div className="apply-arrow-mobile-version">
                {showLoader ? <p> Applying...</p> : <p>Apply Now</p>}
                <FaArrowRightLong className="arrow" />
              </div>
            </button>
          </div>
        )}
      </div>

      <div>
        {isApplied ? (
          <div className="download-text">
            <p>Thank you for your interest in the Uni Card.</p>
            <p>
              Download the Uni Cards app now and get your Uni Card in minutes.{" "}
            </p>
          </div>
        ) : (
          <label id="check-box">
            <input
              type="checkbox"
              checked={isCheckBoxChecked}
              onChange={handleCheckboxChange}
            />
            You agree to be contacted by Uni Cards over Call, SMS, Email or
            WhatsApp to guide you through your application.
          </label>
        )}
      </div>
    </div>
  );
}

export default ApplyNow;
