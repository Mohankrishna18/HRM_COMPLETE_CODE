import React from "react";
import { Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import image from "../Images/arshaalogo.png";
import { NavLink, useHistory } from "react-router-dom";
import { isLoggedIn } from "../utils";

import { FaSignOutAlt } from "react-icons/fa";
import { last } from "lodash";

const NavBar = (props) => {
  //Routes obtained from default router config
  const menuItems = props.routes;
  let history = useHistory();
  //Perform logout
  function handleLogout() {
    sessionStorage.removeItem("userdata");
    history.push("/");
  }

  return (
    <Row>
      <Col xs={12} md={12}>
        <div className="ar-top-navigation-bar">
          <Navbar
            style={{
              height: "80px",
              background: "linear-gradient(#FFB914,#FF6914,#F1340C)",
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
           
            <Nav style={{ paddingLeft: "1520px" }}>
              <Navbar>
                <Navbar.Brand href="#">
                  {isLoggedIn() && (
                    <FaSignOutAlt
                      style={{ fontSize: "35px" }}
                      onClick={handleLogout}
                    />
                  )}
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
