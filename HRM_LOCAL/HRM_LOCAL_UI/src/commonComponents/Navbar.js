import React from "react";
import { Row, Col, Nav, Navbar } from "react-bootstrap";
import image from "../Images/arshaalogo.png";

const NavBar = () => {
  return (
    <Row>
      <Col>
        <div className="ar-top-navigation-bar">
          <Navbar
            style={{
              height: "80px",
              background: "linear-gradient(to left,#fc6174,#fe934a)",
            }}
          >
            <Nav>
              <Navbar>
                <Navbar.Brand href="#">
                  <img
                    src={image}
                    style={{
                      height: "70px",
                      width: "550",
                      paddingLeft: "50px",
                    }}
                  ></img>
                </Navbar.Brand>
              </Navbar>
            </Nav>
          </Navbar>
        </div>
      </Col>
    </Row>
  );
};

export default NavBar;
