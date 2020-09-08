import React, { Fragment } from "react";
import WhyWeCard from "./WhyWeCard";

const WhyWe = () => {
  return (
    <Fragment>
      {/*
        <div className="heading-Primary">
         <h1>Why We....???</h1>
      </div> 
      */}

      <div className="whywe">
        <h1>Why We....???</h1>
        <div className="whywe-container">
          <WhyWeCard />
        </div>
      </div>
    </Fragment>
  );
};

export default WhyWe;
