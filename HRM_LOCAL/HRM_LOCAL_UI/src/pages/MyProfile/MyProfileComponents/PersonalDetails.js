import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";



function PersonalDetails() {

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;

    const payload = {
        employeeId,
        firstName,
        lastName,
        middleName,
        dateOfBirth,
        primaryPhoneNumber,
        secondaryPhoneNumber,
        email,
        primarySkills,
        secondarySkills,
        bloodGroup,
        gender,
        maritalStatus,
    }


    const [ferrors, setFErrors] = useState("");
    const [serror, setSerror] = useState("");
    const [thirderrors, setThirdErrors] = useState("");
    const [fourerror, setFourerror] = useState("");
    const [fiveerrors, setFiveErrors] = useState("");
    const [sixerror, setSixerror] = useState("");
    const [sevenerrors, setSevenErrors] = useState("");
    const [eighterror, setEighterror] = useState("");
    const [nineerrors, setNineErrors] = useState("");
    const [tenerror, setTenerror] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState(" ");
    const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState(" ");
    const [secondaryPhoneNumber, setSecondaryPhone] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [primarySkills, setPrimarySkills] = useState("");
    const [secondarySkills, setSecondarySkills] = useState("");
    const [email, setEmail] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");

const[personalDetails,setPersonalDetails]=useState("");

    useEffect(() => {
        axios
            .get(`/emp/getPersonalDetails/${employeeid}`)
            .then((response) => {
                setPersonalDetails(response.data)
console.log(personalDetails)
            });
    }, []);

   
  

    return (

        <div>
            <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 12, textAlign: "center" }}>
                    Personal Details
                </Card.Title>
            </Card>

            <Row>

            {/* <Card style={{ padding: 30, paddingBottom: 95 }}>
                      <Card.Title>
                        <h5>Personal Information:</h5>
                      </Card.Title>
                      <Card.Body >

                        <Row style={{ paddingLeft: 15, paddingBottom: 40 }}>
                          <Col>
                            <Card.Subtitle>
                              Email:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle style={{color:"#999897"}}>
                              {getEmployeeDetails.email}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 40 }}>
                          <Col>
                            <Card.Subtitle
                            >
                              Phone Number:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle style={{color:"#999897"}}>
                              {getEmployeeDetails.primaryPhoneNumber}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 40 }}>
                          <Col>
                            <Card.Subtitle

                            >
                              Date of Birth:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            {getEmployeeDetails.dateOfBirth ? (<Card.Subtitle style={{color:"#999897"}}>
                              {dob}
                            </Card.Subtitle>) : (<div></div>)}

                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 40 }}>
                          <Col>
                            <Card.Subtitle
                            >
                              Blood Group:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle style={{color:"#999897"}} >
                              {getEmployeeDetails.bloodGroup}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 40 }}>
                          <Col>
                            <Card.Subtitle style={{}}
                            >
                              Gender:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle style={{color:"#999897"}}>
                              {getEmployeeDetails.gender}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 40 }}>
                          <Col>
                            <Card.Subtitle

                            >
                              Marital Status:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle style={{color:"#999897"}}>
                              {getEmployeeDetails.maritalStatus}
                            </Card.Subtitle>
                          </Col>
                        </Row>

                      </Card.Body>

                    </Card> */}
            </Row>

          
        </div>
    )
}
export default PersonalDetails;
