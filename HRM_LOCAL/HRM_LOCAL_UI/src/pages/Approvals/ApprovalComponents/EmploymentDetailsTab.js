import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import ProfilePersonalDetailsTab from "../../MyProfile/MyProfileComponents/ProfilePersonalDetailsTab";


function EmploymentDetailsTab(props) {
    
    const userData = sessionStorage.getItem("userdata");
    // console.log(userData);
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;
    const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);
    //var dateTime = getEmployeeDetails.dateOfJoining;
  
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
    console.log(getEmployeeDetails.primarySkills)
   
  

    return (

        <div style={{ padding: 20, paddingBottom: "60px" }}>    
                          <Card.Title>
                            <h5>Employment Details:</h5>
                          </Card.Title>
                          <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Primary Skills:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                {props.viewOnboard.primarySkills}
                              </Card.Text>
                            </Col>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Secondary Skills:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Subtitle style={{ color: "#999897" }}>
                                {props.viewOnboard.secondarySkills}
                              </Card.Subtitle>
                            </Col>
                          </Row>
                          <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Employment Type:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                {props.viewOnboard.employmentType}
                              </Card.Text>
                            </Col>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Band:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                {props.viewOnboard.band}
                              </Card.Text>
                            </Col>
                          </Row>

                          <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                              Business Unit:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                {props.viewOnboard.department}
                              </Card.Text>
                            </Col>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Designation:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                {props.viewOnboard.designation}
                              </Card.Text>
                            </Col>
                          </Row>

                          <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                 IRM:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                {props.viewOnboard.irm}
                              </Card.Text>
                            </Col>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                SRM:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                {props.viewOnboard.srm}
                              </Card.Text>
                            </Col>
                          </Row>

                          <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                 BUH:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                {props.viewOnboard.buh}
                              </Card.Text>
                            </Col>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                               
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                
                              </Card.Text>
                            </Col>
                          </Row>



                        </div>
    )
}
export default EmploymentDetailsTab;