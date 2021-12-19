import React from "react";
import "./index.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <img
          className="footer-logo"
          src="https://demo.berighthere.com/assests/img/newlandingpage/bhr.png"
          alt="footer-logo"
        />
        <div className="col">
          <div className="address">
            <p>Singapore Office</p>
            <p>67 UBI Crescent</p>
            <p>#04-01, Techniques Centre</p>
            <p>Singapore</p>
          </div>

          <div className="address nn">
            <p>India Office</p>
            <p>#7, || Floor</p>
            <p>Karunaa Conquest IT Park, Ambattur</p>
            <p>Chennai - 600058</p>
          </div>
          <div className="box-container nn">
            <div className="hello">
              <div className="email">
                <p>Email : support@berighthere.com</p>
                <p>Phone : 044 43031007</p>
              </div>
              <div className="follow">
                <p>Follow us</p>
                <ul className="icon-container">
                  <li>
                    <AiFillFacebook />
                  </li>
                  <li>
                    <AiOutlineInstagram />
                  </li>
                  <li>
                    <AiFillLinkedin />
                  </li>
                  <li>
                    <AiFillTwitterSquare />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="terms">
                <li className="policies">Company |</li>
                <li className="policies">Privacy |</li>
                <li className="policies">Terms |</li>
                <li className="policies">Cookie |</li>
                <li className="policies">Policy |</li>
                <li className="policies">Information |</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="last-row">
        <div>
          <p className="copyright">
            COPYRIGHT @ 2021 BeRightHere.com All Rights Reserved.
          </p>
        </div>
        <div className="version">
          <p>V1.5.0</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
