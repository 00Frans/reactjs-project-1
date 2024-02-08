import React from "react";
import gear from "../images/gear1.png";
import Container from "./Container";
import {
  MDBCol,
  MDBRow,
  MDBBadge,
  MDBTypography,
  MDBCardText,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";
import wheels from "../images/wheels.png";
import Carousel from "./Carousel";
import Bg2 from "../images/windows.jpg";
import Bg1 from "../images/bg1.jpg";
import Bg3 from "../images/bg3.jpg";
import Logo2 from "../images/windows-logo.png";
import Bg4 from "../images/csbt.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div
        className="px-5 text-center bg-image"
        style={{
          backgroundImage: `url(${Bg3})`,
          height: "100vh",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.64)" }}
        >
          <Navbar />

          <MDBContainer>
            <MDBRow className="d-flex justify-content-center align-items-center min-vh-100 text-white">
              <MDBCol md={6} className="text-start">
                <div>
                  <MDBTypography
                    tag="div"
                    className="display-1 pb-3 mb-4 border-bottom fw-bold"
                  >
                    Microsoft Windows
                    <MDBBadge className="position-absolute translate-middle m-4 pe-1 fs-1 bg-transparent ">
                      <span className="light-red ">xp</span>
                    </MDBBadge>
                  </MDBTypography>
                  <MDBTypography variant="h1" className="mb-3">
                    Experience the Power of Windows!
                  </MDBTypography>
                  <MDBCardText className="fw-bold text-muted fs-5">
                    <span className="gray">
                      "Revolutionize your digital experience with Microsoft
                      Windows, the leading operating system trusted by millions
                      worldwide. Seamlessly navigate through tasks, unleash
                      creativity, and stay connected like never before with the
                      innovative features and robust performance of Windows."
                    </span>
                  </MDBCardText>
                  <MDBBtn tag="a" outline size="lg">
                    Try now
                  </MDBBtn>
                </div>
              </MDBCol>
              <MDBCol md={6}>
                <img src={Logo2} alt="Image..." className="w-50" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <Footer />
    </>
  );
};

export default Home;
