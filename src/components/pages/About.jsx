import React from "react";
import Header from "../Header";
import OurStory from "../OurStory";
import Trending from "../Trending";
import OurProduct from "../OurProduct";
import WoodenSofa from "../WoodenSofa";
import Latest from "../Latest";
import Offer from "../Offer";
import Testimonial from "../Testimonial";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className=" overflow-hidden">
        <Trending />
      </div>
      <OurStory />
      <Offer />
      <Latest />
      <OurProduct />
      <WoodenSofa />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default About;
