import React, { Fragment } from "react";
import CreatorInfo from "./AboutPages/CreatorInfo";
import Approach from "./AboutPages/Approach";
import Footer from "./HomePages/Footer";

const About = () => {
  return (
    <Fragment>
      <CreatorInfo />
      <Approach />
      <Footer />
    </Fragment>
  );
};

export default About;
