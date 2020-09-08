import React, { Fragment } from "react";
import BannerImg from "../../images/showcaseImg.jpg";
import BannerImgOne from "../../images/showcaseImg_1x.jpg";
import BannerImgTwo from "../../images/showcaseImg_1x.jpg";
const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        <div className="banner--image">
          <img
            src={BannerImg}
            srcSet={`${BannerImgOne} 600w`}
            alt="banner"
            className="banner--image__show"
          />
        </div>
        <div className="banner--content">
          <div>
            <h1 className="banner--content-heading mtb-half">Company Name</h1>
            <p className="banner--content-caption mtb-half">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              nesciunt?
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// const bannerImg = {
//   border: "1px solid blue",
//   width: "100vw",
//   height: "90vh",
//   padding: "1rem",
//   objectFit: "cover",
// backgroundImage:"linear-gradient(135deg, #50A68480 30%, #115E6780 90%), url()",
//   backgroundRepeat:"no-repeat",
//   backgroundPosition:"50%"
// };

// leftAdArea:{
//   width: 200px,
//   height: 200px,
//   background-image:"linear-gradient(135deg, #50A68480 30%, #115E6780 90%), url('https://www.mahealthcare.com/assets/images/clinic/NursePhone.jpg')";
//   background-repeat:no-repeat;
//   background-position:50%;
//   }

export default Banner;
