//Default component imports
import React, { memo, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import { isLoggedIn } from "../utils";
import './Sidebar.css'
import styled from "styled-components";

//Sidebar component is here
const Sidebar = (props) => {
  //Routes obtained from default router config
  const menuItems = props.routes;

  let history = useHistory();
  //Perform logout 
  function handleLogout() {
    sessionStorage.removeItem('userdata');
    history.push('/');
  }

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);


  return (
    <Row className="scroll">

      <Tab.Container id="list-group-tabs-example">
        <Col xs={12} xxl={12} xl={12} lg={12} md={12} sm={12}>
          <div style={{ boxShadow: "10px black" }}>
            <ListGroup>
              {menuItems.map((item, index) => (
                <Row>
                  <ListGroup.Item>
                    <NavLink
                      key={item.path}
                      className="nav-text"
                      to={`${props.prefix}${item.path}`} >

                      <Row>
                        <Col md={2}>{item.icon}</Col>
                        <Col md={8}>{item.title}</Col>
                        {/* <Col md={2} onClick={item.subNav && showSubnav}>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</Col> */}
                      </Row>
                    </NavLink>
                  </ListGroup.Item>
                </Row>
              ))}
              {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>  */}
            </ListGroup>
            {/* {subnav && item.subNav.map((item, index) => {
              <Row>
                <ListGroup.Item>
                  <NavLink key={item.path} to={`${props.prefix}${item.path}`}>
                    <Row>
                      <Col md={12}>{item.title}</Col>
                    </Row>
                  </NavLink>

                </ListGroup.Item>
              </Row> 
              
            })
            }*/}
          </div>
        </Col>
      </Tab.Container>
    </Row>
  );
};

export default memo(Sidebar);
