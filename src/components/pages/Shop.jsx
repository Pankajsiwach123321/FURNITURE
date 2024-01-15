import React from "react";
import OurStory from "../OurStory";
import Trending from "../Trending";
import OurProduct from "../OurProduct";
import WoodenSofa from "../WoodenSofa";
import Latest from "../Latest";
import Offer from "../Offer";
import Testimonial from "../Testimonial";
import Header from "../Header";
import Footer from "../Footer";

const Shop = () => {
  return (
    <div>
      <Header />
      <Offer />
      <Latest />
      <div className=" overflow-hidden">
        <Trending />
      </div>
      <OurStory />
      <OurProduct />
      <WoodenSofa />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Shop;
