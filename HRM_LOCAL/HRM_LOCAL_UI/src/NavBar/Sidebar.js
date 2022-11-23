import React, { memo, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Row, Col, Button, Accordion, Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
// import { isLoggedIn } from "../../utils";
import './Sidebar.css'
import styled from "styled-components";
import { FcApproval, FcBusinessman, FcConferenceCall, FcCopyright, FcLeave, FcList, FcMultipleSmartphones, FcOvertime } from "react-icons/fc";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  const userData = sessionStorage.getItem('userdata')
  //console.log(userData)
  const userData1 = JSON.parse(userData)
  const usertype = userData1.data.userType
  console.log(usertype);

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  //sidebar menu types
  const profile = "myprofile";
  const emp = "Employee";
  // const leave = "Leaves";
  const config = "configuration";
  const approvals = "approvals";
  const nul = "null";
  const pmohead = "pmohead";
  const projects = "projects";
  const jobs = "jobs";
  const irm = "irm";
  const hrmanager = "hrmanager";
  const srm = "srm";
  const buhead = "buhead";
  const employee = "employee";
  const ceo = "ceo";
  const taa = "taa";
  const taahead = "taahead";
  const hr = "hr";

  return (

    <Card style={{ padding:"20px" }}>
      <Row className="example">
        <Tab.Container id="list-group-tabs-example" style={{ backgroundColor: "white" }} className="Murali_1">
          <Col xs={12} xxl={12} xl={12} lg={12} md={12} sm={12}>
            <div style={{ boxShadow: "10px white" }} className="Murali_2">

              <ListGroup style={{ border: "none", backgroundColor: "white" }} className="Murali_3">
                {menuItems.map((item, index) => (
                  (item.type === profile) ? (<>
                    <Row style={{ backgroundColor: "white" }} className="Murali_4">
                      <ListGroup.Item style={{ border: "none", color: "white", backgroundColor: "white" }} className="Murali_5">
                        <NavLink
                          style={{ padding: 'none' }}
                          key={item.path}
                          className="link"
                          exact activeclassname="active"
                          to={`${props.prefix}${item.path}`} >
                          <Row style={{ paddingLeft: "7%" }} className="Murali_6">
                            <Col md={2} style={{ fontSize: "140%" }} className="Murali_7">{item.icon}</Col>
                            <Col style={{ color: "black", fontSize: 15 }} className="Murali_8">{item.title}</Col>
                          </Row>
                        </NavLink>
                      </ListGroup.Item>
                    </Row></>
                  ) : (<></>)
                ))}
              </ListGroup>

              <ListGroup style={{ border: "none", paddingBottom: 10 }}>
                {menuItems.map((item, index) => (
                  (item.type === approvals) ? (<>
                    <Row>
                      <ListGroup.Item style={{ border: "none", backgroundColor: "white" }}>
                        <NavLink
                          style={{ padding: 'none' }}
                          key={item.path}
                          className="link"
                          exact activeclassname="active"
                          to={`${props.prefix}${item.path}`} >
                          <Row style={{ paddingLeft: "7%" }}>
                            <Col md={2} style={{ fontSize: "140%" }}  >{item.icon}</Col>
                            <Col style={{ color: "black", fontSize: 15 }}>{item.title}</Col>
                          </Row>
                        </NavLink>
                      </ListGroup.Item>
                    </Row></>
                  ) : (<></>)
                ))}
              </ListGroup>

              <Accordion style={{ width: "100%", border: "none", backgroundColor: "white", color: "white" }}>
                <Accordion.Item className="panel_header" eventKey="0" style={{ border: "none", backgroundColor: "white" }}>
                  <Accordion.Header style={{ backgroundColor: "white" }}>
                    <Col md={2} style={{ fontSize: "140%" }}><FcConferenceCall /></Col>
                    <Col style={{ color: "black", fontSize: 15 }}>Employees</Col>

                  </Accordion.Header>
                  <Accordion.Body className="murali">
                    <ListGroup style={{ padding: 'none' }}>
                      {menuItems.map((item, index) => (
                        (item.type === emp) ? (<>
                          <Row>
                            <ListGroup.Item style={{ border: "none", backgroundColor: "white" }}>
                              <NavLink
                                style={{ padding: 'none' }}
                                key={item.path}
                                className="link"
                                exact activeclassname="active"
                                to={`${props.prefix}${item.path}`} >
                                <Row>
                                  <Col md={2} style={{ fontSize: "140%" }} >{item.icon}</Col>
                                  <Col style={{ color: "black", fontSize: 15 }}>{item.title}</Col>
                                </Row>
                              </NavLink>
                            </ListGroup.Item>
                          </Row></>
                        ) : (<></>)
                      ))}
                    </ListGroup>
                  </Accordion.Body></Accordion.Item>
                {/* <Accordion.Item eventKey="3" style={{ border: "none", paddingBottom: "10%" }}> */}
                {/* <Accordion.Header> */}
                {/* <Col md={2}><FcApproval /></Col> */}
                {/* <Col md={8}> Approvals</Col> */}
                {/* </Accordion.Header> */}
                {/* <Accordion.Body> */}

                {/* </Accordion.Body></Accordion.Item> */}


                {/* <Accordion.Item eventKey="1" style={{ border: "none", paddingBottom: "5%",backgroundColor:"black"}}>
                <Accordion.Header>
                  <Col md={2} style={{fontSize:"140%"}}><FcLeave /></Col>
                  <Col md={8} style={{color:"white",fontSize:17,paddingTop:10 }}>Leaves</Col>
                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === leave) ? (<>
                        <Row>
                          <ListGroup.Item style={{ border: "none", paddingLeft: "10%",backgroundColor:"black" }}>
                            <NavLink
                              key={item.path}
                              className="nav-text"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2} style={{fontSize:"140%"}} >{item.icon}</Col>
                                <Col md={8} style={{color:"white",fontSize:17,paddingTop:10 }}>{item.title}</Col>
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row></>
                      ) : (<>
                      </>)
                    ))}
                  </ListGroup> */}
                {/* </Accordion.Body></Accordion.Item> */}
                {(usertype === pmohead || irm || srm || hrmanager || ceo || employee || buhead || taa || taahead) ? (
                  <Accordion.Item eventKey="2" style={{ border: "none", backgroundColor: "white" }}>
                    <Accordion.Header>
                      <Col md={2} style={{ fontSize: "140%" }} ><FcList /></Col>
                      <Col style={{ color: "black", fontSize: 15 }}>Projects</Col>

                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        {menuItems.map((item, index) => (
                          (item.type === projects) ? (<>
                            <Row>
                              <ListGroup.Item style={{ border: "none", backgroundColor: "white" }}>
                                <NavLink
                                  style={{ padding: 'none' }}
                                  key={item.path}
                                  className="link"
                                  exact activeclassname="active"
                                  to={`${props.prefix}${item.path}`} >
                                  <Row>
                                    <Col md={2} style={{ fontSize: "140%" }} >{item.icon}</Col>
                                    <Col style={{ color: "black", fontSize: 15 }}>{item.title}</Col>
                                  </Row>
                                </NavLink>
                              </ListGroup.Item>
                            </Row></>
                          ) : (<>
                          </>)
                        ))}
                      </ListGroup>
                    </Accordion.Body></Accordion.Item>
                ) : (<></>)}

                {(usertype === pmohead) ? (
                  <Accordion.Item eventKey="3" style={{ border: "none", backgroundColor: "white" }}>
                    <Accordion.Header>
                      <Col md={2} style={{ fontSize: "140%" }} ><FcCopyright /></Col>
                      <Col style={{ color: "black", fontSize: 15 }}>Configuration</Col>

                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        {menuItems.map((item, index) => (
                          (item.type === config) ? (<>
                            <Row>
                              <ListGroup.Item style={{ border: "none", backgroundColor: "white" }}>
                                <NavLink
                                  style={{ padding: 'none' }}
                                  key={item.path}
                                  className="link"
                                  exact activeclassname="active"
                                  to={`${props.prefix}${item.path}`} >
                                  <Row>
                                    <Col md={2} style={{ fontSize: "140%" }} >{item.icon}</Col>
                                    <Col style={{ color: "black", fontSize: 15 }}>{item.title}</Col>
                                  </Row>
                                </NavLink>
                              </ListGroup.Item>
                            </Row></>
                          ) : (<>
                          </>)
                        ))}
                      </ListGroup>
                    </Accordion.Body></Accordion.Item>
                ) : (<></>)}
                {(usertype === pmohead || irm || srm || hrmanager || taa || taahead) ? (
                  <Accordion.Item eventKey="4" style={{ border: "none", backgroundColor: "white" }}>
                    <Accordion.Header>
                      <Col md={2} style={{ fontSize: "140%" }} ><FcMultipleSmartphones /></Col>
                      <Col style={{ color: "black", fontSize: 15 }}>Jobs</Col>

                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        {menuItems.map((item, index) => (
                          (item.type === jobs) ? (<>
                            <Row>
                              <ListGroup.Item style={{ border: "none", backgroundColor: "white" }}>
                                <NavLink
                                  style={{ padding: 'none' }}
                                  key={item.path}
                                  className="link"
                                  exact activeclassname="active"
                                  to={`${props.prefix}${item.path}`} >
                                  <Row>
                                    <Col md={2} style={{ fontSize: "140%" }} >{item.icon}</Col>
                                    <Col style={{ color: "black", fontSize: 15 }}>{item.title}</Col>
                                  </Row>
                                </NavLink>
                              </ListGroup.Item>
                            </Row></>
                          ) : (<>
                          </>)
                        ))}
                      </ListGroup>
                    </Accordion.Body></Accordion.Item>
                ) : (<></>)}
                {(usertype === taa) ? (
                  <Accordion.Item eventKey="5" style={{ border: "none", backgroundColor: "white" }}>
                    <Accordion.Header>
                      <Col md={2} style={{ fontSize: "140%" }} ><FcBusinessman /></Col>
                      <Col style={{ color: "black", fontSize: 15 }}>HR</Col>

                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        {menuItems.map((item, index) => (
                          (item.type === hr) ? (<>
                            <Row>
                              <ListGroup.Item style={{ border: "none", backgroundColor: "white" }}>
                                <NavLink
                                  style={{ padding: 'none' }}
                                  key={item.path}
                                  className="link"
                                  exact activeclassname="active"
                                  to={`${props.prefix}${item.path}`} >
                                  <Row>
                                    <Col md={2} style={{ fontSize: "140%" }} >{item.icon}</Col>
                                    <Col style={{ color: "black", fontSize: 15 }}>{item.title}</Col>
                                  </Row>
                                </NavLink>
                              </ListGroup.Item>
                            </Row></>
                          ) : (<>
                          </>)
                        ))}
                      </ListGroup>
                    </Accordion.Body></Accordion.Item>
                ) : (<></>)}
                {/* {( usertype === irm)?(
              <Accordion.Item eventKey="2" style={{ border: "none", backgroundColor:"white"}}>
                <Accordion.Header>
                  <Col md={2} style={{fontSize:"140%"}} ><FcList /></Col>
                  <Col  style={{color:"black",fontSize:17 }}>Projects</Col>

                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {menuItems.map((item, index) => (
                      (item.type === projects) ? (<>
                        <Row>
                          <ListGroup.Item style={{ border: "none",backgroundColor:"white" }}>
                            <NavLink
                            style={{padding:'none'}}
                              key={item.path}
                              className="link"
                              exact activeclassname="active"
                              to={`${props.prefix}${item.path}`} >
                              <Row>
                                <Col md={2} style={{fontSize:"140%"}} >{item.icon}</Col>
                                <Col  style={{color:"black",fontSize:17 }}>{item.title}</Col>
                              </Row>
                            </NavLink>
                          </ListGroup.Item>
                        </Row></>
                      ) : (<>
                      </>)
                    ))}
                  </ListGroup>
                </Accordion.Body ></Accordion.Item>
              ):(<></>)} */}





              </Accordion>




              <ListGroup style={{ border: "none" }}>
                {menuItems.map((item, index) => (
                  (item.type === nul) ? (<>
                    <Row>
                      <ListGroup.Item style={{ border: "none", backgroundColor: "white" }}>
                        <NavLink
                          style={{ padding: 'none' }}
                          key={item.path}
                          className="link"
                          activeclassname="active"
                          to={`${props.prefix}${item.path}`} >
                          <Row style={{ paddingLeft: "7%" }}>
                            <Col md={2} style={{ fontSize: "140%" }} >{item.icon}</Col>
                            <Col style={{ color: "black", fontSize: 15 }}>{item.title}</Col>
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
    </Card>
  );
};

export default memo(Sidebar);