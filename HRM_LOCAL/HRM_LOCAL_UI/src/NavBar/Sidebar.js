
import React, { memo, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Row, Col, Button, Accordion } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import { isLoggedIn } from "../utils";
import './Sidebar.css'
import styled from "styled-components";
import { FcApproval, FcConferenceCall, FcCopyright, FcLeave, FcOvertime } from "react-icons/fc";

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
  const profile = "myprofile";
  const emp = "Employee";
  const leave = "Leaves";
  const config = "configuration";
  const approvals="approvals";
  const nul = "null";

  return (

    <Row className="example">
      <Tab.Container id="list-group-tabs-example" style={{backgroundColor:"black"}}>
        <Col xs={12} xxl={12} xl={12} lg={12} md={12} sm={12}>
          <div style={{ boxShadow: "10px black" }}>

            <ListGroup style={{ border: "none", backgroundColor:"black" }}>
              {menuItems.map((item, index) => (
                (item.type === profile) ? (<>
                  <Row style={{backgroundColor:"black"}}>
                    <ListGroup.Item style={{ border: "none", paddingTop: 25 , color:"white",backgroundColor:"black"}}>
                      <NavLink
                        key={item.path}
                        className="nav-text"
                        to={`${props.prefix}${item.path}`} >
                        <Row style={{ paddingLeft: "7%"}}>
                          <Col md={2} >{item.icon}</Col>
                          <Col md={8} style={{color:"white"}}>{item.title}</Col>
                        </Row>
                      </NavLink>
                    </ListGroup.Item>
                  </Row></>
                ) : (<></>)
              ))}
              {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>  */}
            </ListGroup>

            <ListGroup style={{ border: "none", paddingTop: 0 }}>
              {menuItems.map((item, index) => (
                (item.type === approvals) ? (<>
                  <Row>
                    <ListGroup.Item style={{ border: "none", paddingTop: 10,paddingBottom:20 ,backgroundColor:"black"}}>
                      <NavLink
                        key={item.path}
                        className="nav-text"
                        to={`${props.prefix}${item.path}`} >
                        <Row style={{ paddingLeft: "7%" }}>
                          <Col md={2} >{item.icon}</Col>
                          <Col md={8} style={{color:"white"}}>{item.title}</Col>
                        </Row>
                      </NavLink>
                    </ListGroup.Item>
                  </Row></>
                ) : (<></>)
              ))}
              {/* {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }&nbsp; 
                <p style={{paddingLeft:"30px",paddingTop:""}}>V-1.0</p>  */}
            </ListGroup>

            <Accordion className="background" style={{ paddingLeft: "0%", width: "105%", border: "none", backgroundColor:"black" }}>
              <Accordion.Item  eventKey="0" style={{ border: "none", paddingBottom: "10%" ,backgroundColor:"black"}}>
                <Accordion.Header  style={{backgroundColor:"#070708"}}>
                  <Col md={2} ><FcConferenceCall /></Col>
                  <Col md={8} style={{color:"white"}}>Employees</Col>
                </Accordion.Header>
                <Accordion.Body >
                  <ListGroup >
                    {menuItems.map((item, index) => (
                      (item.type === emp) ? (<>
                        <Row>
                          <ListGroup.Item style={{ border: "none", paddingBottom: "10%", paddingLeft: "10%",backgroundColor:"black" }}>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2}>{item.icon}</Col>
                                <Col md={8} style={{color:"white"}}>{item.title}</Col>
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row></>
                      ) : (<></>)
                    ))}
                  </ListGroup>
                </Accordion.Body></Accordion.Item>
              {/* <Accordion.Item eventKey="3" style={{ border: "none", paddingBottom: "10%" }}>
                <Accordion.Header>
                  <Col md={2}><FcApproval /></Col>
                  <Col md={8}> Approvals</Col>
                </Accordion.Header>
                <Accordion.Body>
            
                </Accordion.Body></Accordion.Item> */}


              <Accordion.Item eventKey="1" style={{ border: "none", paddingBottom: "10%" ,backgroundColor:"black"}}>
                <Accordion.Header>
                  <Col md={2}><FcLeave /></Col>
                  <Col md={8}>Leaves</Col>
                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === leave) ? (<>
                        <Row>
                          <ListGroup.Item style={{ border: "none", paddingBottom: "10%", paddingLeft: "10%",backgroundColor:"black" }}>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2}>{item.icon}</Col>
                                <Col md={8} style={{color:"white"}}>{item.title}</Col>
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
              {/* {menuItems.map((item, index) => (
                  (item.type === config)?( */}
              <Accordion.Item eventKey="2" style={{ border: "none", paddingBottom: "10%" ,backgroundColor:"black"}}>
                <Accordion.Header>
                  <Col md={2}><FcCopyright /></Col>
                  <Col md={8}>Configuration</Col>

                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === config) ? (<>
                        <Row>
                          <ListGroup.Item style={{ border: "none", paddingBottom: "10%", paddingLeft: "10%",backgroundColor:"black" }}>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2}>{item.icon}</Col>
                                <Col md={8} style={{color:"white"}}>{item.title}</Col>
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
              {/* ):(<></>)))} */}

            </Accordion>
            <ListGroup style={{ border: "none" }}>
              {menuItems.map((item, index) => (
                (item.type === nul) ? (<>
                  <Row>
                    <ListGroup.Item style={{ border: "none", paddingBottom: "10%", paddingLeft: "10%",backgroundColor:"black" }}>
                      <NavLink
                        key={item.path}
                        className="nav-text"
                        to={`${props.prefix}${item.path}`} >
                        <Row style={{ paddingLeft: "7%" }}>
                          <Col md={2}>{item.icon}</Col>
                          <Col md={8} style={{color:"white"}}>{item.title}</Col>
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

    
    </Row>
  );
};

export default memo(Sidebar);
