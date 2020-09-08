import React, { Fragment } from "react";
import showCaseImg from "../../images/showcaseImg.jpg";
import showCaseImg3 from "../../images/showcaseImg3.jpg";
import showCaseImg5 from "../../images/showcaseImage-2.jpg";
import showCaseImg4 from "../../images/showcaseImg4.jpg";

const WhyWeCard = () => {
  return (
    <Fragment>
      <div className="whywe-card">
        <div className="whywe-card--container">
          <img src={showCaseImg4} alt="cardItem" className="whywe-card--img" />
        </div>

        <div className="whywe-card--hidetext">
          <div className="whywe-card--hidetext__p">
            <div className="whywe-card--header">
              <h2 className="whywe-card--header__title">heading</h2>
              <i className="fas fa-angle-double-up whywe-card--header__arrowIcon"></i>
            </div>
            <div className="whywe-card--content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                soluta, blanditiis ratione saepe nisi nesciunt aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="whywe-card">
        <div className="whywe-card--container">
          <img src={showCaseImg3} alt="cardItem" className="whywe-card--img" />
        </div>

        <div className="whywe-card--hidetext">
          <div className="whywe-card--hidetext__p">
            <div className="whywe-card--header">
              <h2 className="whywe-card--header__title">heading</h2>
              <i className="fas fa-angle-double-up whywe-card--header__arrowIcon"></i>
            </div>
            <div className="whywe-card--content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                soluta, blanditiis ratione saepe nisi nesciunt aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="whywe-card">
        <div className="whywe-card--container">
          <img src={showCaseImg5} alt="cardItem" className="whywe-card--img" />
        </div>

        <div className="whywe-card--hidetext">
          <div className="whywe-card--hidetext__p">
            <div className="whywe-card--header">
              <h2 className="whywe-card--header__title">heading</h2>
              <i className="fas fa-angle-double-up whywe-card--header__arrowIcon"></i>
            </div>
            <div className="whywe-card--content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                soluta, blanditiis ratione saepe nisi nesciunt aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*   <div className="whywe-card">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
          minus.
        </p>
      </div>
      <div className="whywe-card ">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
          minus.
        </p>
      </div>
      <div className="whywe-card ">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
          minus.
        </p>
  </div>   */}
    </Fragment>
  );
};

export default WhyWeCard;
