//Default component imports
import React, { memo, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Row, Col, Button, Accordion } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import { isLoggedIn } from "../utils";
import './Sidebar.css'
import styled from "styled-components";

//Sidebar component is here
const Sidebar = (props) => {
  //Routes obtained from default router config
  const menuItems = props.routes;
  console.log(menuItems);

  let history = useHistory();
  //Perform logout 
  function handleLogout() {
    sessionStorage.removeItem('userdata');
    history.push('/');
  }

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  //sidebar menu types
  const profile="myprofile";
  const emp = "Employee";
  const leave = "Leaves";
  const config="configuration";
  const nul="null";

  return (

    <Row className="scroll">
      <Tab.Container id="list-group-tabs-example">
        <Col xs={12} xxl={12} xl={12} lg={12} md={12} sm={12}>
          <div style={{ boxShadow: "10px black" }}>

          <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === profile) ? (<>
                        <Row>
                          <ListGroup.Item>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2}>{item.icon}</Col>
                                <Col md={8}>{item.title}</Col>
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row></>
                      ) : (<></>)
                    ))}
                    {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>  */}
                  </ListGroup>

            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Employees</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === emp) ? (<>
                        <Row>
                          <ListGroup.Item>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2}>{item.icon}</Col>
                                <Col md={8}>{item.title}</Col>
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row></>
                      ) : (<></>)
                    ))}
                    {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>  */}
                  </ListGroup>
                </Accordion.Body></Accordion.Item>

            
              <Accordion.Item eventKey="1">
                <Accordion.Header>Leaves</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === leave) ? (<>
                        <Row>
                          <ListGroup.Item>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2}>{item.icon}</Col>
                                <Col md={8}>{item.title}</Col>
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row></>
                      ) : (<>
                      </>)
                    ))}
                    {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>  */}
                  </ListGroup>
                </Accordion.Body></Accordion.Item>

               
              <Accordion.Item eventKey="2">
                <Accordion.Header>Configuration</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === config) ? (<>
                        <Row>
                          <ListGroup.Item>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2}>{item.icon}</Col>
                                <Col md={8}>{item.title}</Col>
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row></>
                      ) : (<>
                      </>)
                    ))}
                    {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>  */}
                  </ListGroup>
                </Accordion.Body></Accordion.Item></Accordion>

                <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === nul) ? (<>
                        <Row>
                          <ListGroup.Item>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2}>{item.icon}</Col>
                                <Col md={8}>{item.title}</Col>
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row></>
                      ) : (<></>)
                    ))}
                    {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>  */}
                  </ListGroup>
                
          </div>
        </Col>
      </Tab.Container>
      
      {/* <Tab.Container id="list-group-tabs-example">
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
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row>
                     
                    ))}
                    {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                 <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>   
                  </ListGroup>
          </div>
        </Col>
      </Tab.Container> */}
    </Row>
  );
};

export default memo(Sidebar);
