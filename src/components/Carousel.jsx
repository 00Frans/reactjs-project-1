import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Ceres from "../images/ceres-bus.jpg";
import Sunrays from "../images/sunrays.jpg";
import Sepo from "../images/sepo.jpg";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <MDBCarousel
            showControls
            showIndicators
            className="d-flex justify-content-center align-items-center"
          >
            <MDBCarouselItem itemId={1}>
              <img src={Ceres} className="d-block w-100" alt="..." />
              <MDBCarouselCaption>
                <h5>Ceres</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <img src={Sunrays} className="d-block w-100" alt="..." />

              <MDBCarouselCaption>
                <h5>Sunrays</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
              <img src={Sepo} className="d-block w-100" alt="..." />
              <MDBCarouselCaption>
                <h5>Sepo</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarousel>
        </MDBCol>
        <MDBCol md="3"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Carousel;
