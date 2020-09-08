import React, { Fragment } from "react";
import ShowCaseImageFour from "../../images/showcaseImg4.jpg";
import ProposalImgSmall from "../../images/showcaseImg1_1x.jpg";
const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="header-imgCont">
          <img
            className="header-imgCont--img"
            src={ShowCaseImageFour}
            srcSet={`${ProposalImgSmall} 900w`}
            alt="headerbanner"
          />
        </div>
        <div className="header-caption">
          <p>Proposal Request</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
