import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-Icons">
            <i className="fab fa-facebook-square media-icons"></i>
            <i className="fab fa-instagram media-icons"></i>
            <i className="fab fa-twitter-square media-icons"></i>
          </div>
          <div className="footer-Info">
            <p>Address : B-12 - Lorem, ipsum dolor. Lorem ipsum dolor sit.</p>
            <p>
              <i className="fas fa-phone-volume"></i>{" "}
              <span>7396467956/ 8309685710</span>
            </p>

            <p>
              <i className="fas fa-paper-plane"></i>{" "}
              <span>naresh.akaram@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
