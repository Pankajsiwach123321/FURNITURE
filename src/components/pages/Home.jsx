import React from "react";
import Header from "../Header";
import OurStory from "../OurStory";
import OurProduct from "../OurProduct";
import WoodenSofa from "../WoodenSofa";
import Offer from "../Offer";
import Footer from "../Footer";
import Trending from "../Trending";
import Latest from "../Latest";
import Testimonial from "../Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <OurStory />
      <Trending />
      <OurProduct />
      <WoodenSofa />
      <Latest />
      <Offer />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
