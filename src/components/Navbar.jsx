import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Logo3 from "../images/microsoft-logo.png";

const Navbar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" dark className="p-4 fs-5">
        <MDBContainer>
          <MDBNavbarBrand href="#" style={{ height: "50px", width: "50px" }}>
            <img src={Logo3} alt="Microsoft logo..." className="w-100 h-100" />
            <span>Microsoft</span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavBar(!openNavBar)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavBar} navbar id="navbar">
            <MDBNavbarNav className="me-4 mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Tickets</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Location</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Book now</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
