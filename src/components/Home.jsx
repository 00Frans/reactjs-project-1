import React from "react";
import gear from "../images/gear1.png";
import Container from "./Container";
import {
  MDBCol,
  MDBRow,
  MDBCardOverlay,
  MDBCardImage,
  MDBCard,
} from "mdb-react-ui-kit";
import wheels from "../images/wheels.png";
import Carousel from "./Carousel";
import Bg1 from "../images/bg1.jpg";
const Home = () => {
  return (
    <Container>
      <MDBCard background="dark" className="text-white">
        <div className="h-50">
          <MDBCardImage
            overlay
            src={Bg1}
            className="w-100  overlay"
            alt="..."
            style={{ width: "100%", height: "50%" }}
          />
        </div>
        <MDBCardOverlay>
          <div className="clearfix mt-5">
            <MDBRow className="justify-content-center align-items-center text-start">
              <MDBCol md={8}>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Nulla
                  vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac
                  cursus commodo, tortor mauris paddenstoel nibh, ut fermentum
                  massa justo sit amet risus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p>
                  Sed posuere consectetur est at lobortis. Etiam porta sem
                  malesuada magna mollis euismod. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                  elit. Id nullam tellus relem amet commodo telemque olemit. Sed
                  posuere consectetur est at lobortis. Maecenas sed diam eget
                  risus varius blandit sit amet non magna. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam.
                </p>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Aenean eu
                  leo quam. Pellentesque ornare sem lantaarnpaal quam venenatis
                  vestibulum. Donec sed odio dui. Maecenas faucibus mollis
                  interdum. Nullam quis risus eget urna salsa tequila vel eu
                  leo. Donec id elit non mi porta gravida at eget metus.
                </p>
              </MDBCol>
              <MDBCol md={4}>
                <img
                  src={wheels}
                  alt="logo ..."
                  className="App-logo bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3 w-75 h-75"
                ></img>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCardOverlay>
      </MDBCard>
      <Carousel />
    </Container>
  );
};

export default Home;