import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <MDBContainer>{children}</MDBContainer>
      <Footer />
    </>
  );
};

export default Container;
