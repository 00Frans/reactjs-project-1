import React from "react";
import Home from "../pages/Home";
import Carousel from "../pages/Carousel";
import BreadCrumb from "./BreadCrumb";
import Scrollspy from "./Scrollspy";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Home />
      <Carousel className="p-5" />
      <BreadCrumb />
      <Scrollspy />
      <Footer />
    </>
  );
};

export default Layout;
