import React from "react";
import Banner from "./pages/Banner";
import GenInfo from "./HomePages/GenInfo";
import WhyWe from "./HomePages/WhyWe";
import Technologies from "./HomePages/Technologies";
import Footer from "./HomePages/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <GenInfo />
      <WhyWe />
      <Technologies />
      <Footer />
    </div>
  );
};

export default Home;
