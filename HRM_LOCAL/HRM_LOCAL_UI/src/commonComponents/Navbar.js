import React, { useEffect, useState } from "react";
import { Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import image from "../Images/arshaalogo.png";
import { NavLink, useHistory } from "react-router-dom";
import { isLoggedIn } from "../utils";

import { FaSignOutAlt } from "react-icons/fa";
import axios from "../Uri";
import { last } from "lodash";
import Avatar from '@mui/material/Avatar';

const NavBar = (props) => {

  const userData = sessionStorage.getItem("userdata");
  // console.log(userData);
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;

  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);
  const [imge, setImge] = useState([]);

  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
      .then((response) => {
        setGetEmployeeDetails(response.data.data);
      });
  }, []);
  console.log(getEmployeeDetails)

  useEffect(() => {
    axios
      .get(`/emp/files/${employeeid}`)
      .then((response) => {
        console.log(response.data);
        setImge(response.data)
      })
      .catch((error) => {
        console.log(error);
        console.log("something wrong");
      });
  }, []);
  console.log(imge)

  //Routes obtained from default router config
  const menuItems = props.routes;
  let history = useHistory();
  //Perform logout
  function handleLogout() {
    sessionStorage.removeItem('userdata');
    history.push('/');
  }

  return (
    // <Row>
      <Col>
        <div className="ar-top-navigation-bar">
          <Navbar
            style={{
              height: "80px",
              // background: "linear-gradient(#FFB914,#FF6914,#F1340C)",
              background: "linear-gradient(to right, #ff9b44 0%, #fc6075 100%)",
             // background:"linear-gradient(to right, #faf7f9 0%,#e86a20, #de4e4e 100%)",
            }}
          >
            <Col xs={10} md={10}>
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
            </Col>
            <Col style={{
              paddingRight: "0px",
            }}>
              <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{
              }} /></Col>
            <Col style={{
              paddingRight: "10px",color:"white"
            }}>
              {getEmployeeDetails.fullName}
              {/* <br /> */}
              {/* {getEmployeeDetails.lastName} */}
            </Col>
            <br />
            <Col xs={2} md={{ span: 1, offset: 0 }}>
              <Nav >
                <Navbar>
                  <Navbar.Brand href="#">
                    <td style={{ paddingLeft: "50%" }}>
                      {isLoggedIn() && (
                        <FaSignOutAlt
                          style={{ fontSize: "34px", paddingTop: "10px",color:"white" }}
                          onClick={handleLogout}
                        />
                      )}
                      <div style={{ fontSize: "13px",color:"white"}}>
                        <p onClick={handleLogout} >Logout  <br />
                          {/* <span>V1.0</span> */}
                        </p>
                      </div>
                    </td>
                  </Navbar.Brand>
                </Navbar>
              </Nav>{" "}
            </Col>
          </Navbar>
        </div>
      </Col>
    // </Row>
  );
};

export default NavBar;

