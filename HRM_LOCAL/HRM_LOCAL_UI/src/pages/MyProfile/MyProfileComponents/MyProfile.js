import React, { useEffect, useState } from "react";

import { Card, Container, Row, Col, Table } from "react-bootstrap";


import {
  Timeline,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";

import axios from "../../../Uri";

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#fd7e14",
  borderDotColor: "#ced4da",
  titleColor: "#000000",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};

// function formatDate(dateOfJoining){
//  var datePart = dateOfJoining.match(/\d+/g),
//     year = datePart[0].substring(2), // get only two digits
//     month = datePart[1],
//     day = datePart[2]; 
//   return day + "-" + month + "-" + year;
//  }


const MyProfile = () => {

  const userData = sessionStorage.getItem("userdata");
  console.log(userData);
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;
  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);
  var dateTime = getEmployeeDetails.dateOfJoining;


  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
      .then((response) => {
        setGetEmployeeDetails(response.data.data);
      });

  }, []);

  console.log(getEmployeeDetails);

  var today = new Date (getEmployeeDetails.dateOfJoining);
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;
console.log(today);


  // useEffect(() => {
  // axios.get("/emp/getEmployeeDataByEmployeeId/{employeeId}",)
  // .then((response) => { // setGetEmployeeDetails(response.data) // })
  // }, [])
  // console.log(getEmployeeDetails)


  return (
    <>
      <Row>
        <Col>

          <Card responsive>
            <Card.Header>
              <Card.Body>
                <Card.Title> My Profile</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Employee/My Profile
                </Card.Subtitle>{" "}

                <Row>
                  <Col>
                    <Card>
                      <Container>
                        <Row>

                          <Col>
                          <Row>
                          <Col>
                            <Row style={{
                              alignContent: "center",
                              paddingTop: 10,
                              paddingLeft: 100,
                            }}>
                              <Col>{getEmployeeDetails.profilePhoto}</Col>
                            </Row>
                            </Col>
                            <Row><Col>
                            <Card.Title
                            style={{
                                fontSize: 30,
                                textAlign: "center",
                                paddingTop: 90,
                            }}>
                            {getEmployeeDetails.firstName} {getEmployeeDetails.lastName}

                        </Card.Title></Col></Row>

                            </Row>
                          </Col>

                          <Col>
                            <Card.Body style={{}}>
                              <Row
                                style={{
                                  paddingTop: 20,
                                  paddingBottom: 10,
                                }}
                              >
                                <Col>
                                  <Card.Title style={{}}>
                                    <h6> Employee ID:</h6>
                                  </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                  <Card.Text style={{ paddinBottom: 0 }}>
                                    {getEmployeeDetails.employeeId}
                                  </Card.Text>
                                </Col>
                              </Row>
                              <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                  <Card.Title style={{}}>
                                    <h6> Designation:</h6>
                                  </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                  <Card.Text style={{}}>
                                    {getEmployeeDetails.designationName}
                                  </Card.Text>
                                </Col>
                              </Row>
                              <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                  <Card.Title style={{}}>
                                    <h6>Date of Joining: </h6>
                                  </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                  <Card.Text style={{}}>
                                    {today}
                                  </Card.Text>
                                </Col>
                              </Row>
                              <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                  <Card.Text style={{}}>
                                    <h6>Reporting Manager: </h6>
                                  </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                  <Card.Text style={{}}>
                                    {getEmployeeDetails.reportingManager}
                                  </Card.Text>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Container>
                    </Card>

                  </Col>
                </Row>{" "}
                <Row style={{ marginTop: 20 }}>
                  <Col>
                    <Card style={{ padding: 30, paddingBottom: 70 }}>
                      <Card.Title>
                        <h5>Personal Information:</h5>
                      </Card.Title>
                      <Card.Body >

                        <Row style={{ paddingLeft: 15, paddingBottom: 30 }}>
                          <Col>
                            <Card.Subtitle>
                              Email:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle >
                              {getEmployeeDetails.email}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 30 }}>
                          <Col>
                            <Card.Subtitle
                            >
                              Phone Number:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle >
                              {getEmployeeDetails.primaryPhoneNumber}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 30 }}>
                          <Col>
                            <Card.Subtitle

                            >
                              Date of Birth:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle>
                              {getEmployeeDetails.dateOfBirth}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 30 }}>
                          <Col>
                            <Card.Subtitle
                            >
                              Blood Group:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle >
                              {getEmployeeDetails.bloodGroup}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 30 }}>
                          <Col>
                            <Card.Subtitle

                            >
                              Gender:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle>
                              {getEmployeeDetails.gender}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 30 }}>
                          <Col>
                            <Card.Subtitle

                            >
                              Marital Status:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle>
                              {getEmployeeDetails.maritalStatus}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 30 }}>
                          <Col>
                            <Card.Subtitle

                            >
                              Passport Number:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle>
                              {getEmployeeDetails.passportNo}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 30 }}>
                          <Col>
                            <Card.Subtitle

                            >
                              Passport Expity Date:
                            </Card.Subtitle>
                          </Col>
                          <Col md={{ offset: 1 }}>
                            <Card.Subtitle>
                              {getEmployeeDetails.passportExpiryNo}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                      </Card.Body>

                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ padding: 30, paddingBottom: 50 }}>
                      <Card.Title>
                        <h5>Address:</h5>
                      </Card.Title>
                      <Col>
                        <Card.Body style={{ paddingLeft: 20 }}>
                          <Card.Subtitle style={{ padding: 10 }}>
                            <h5>Permanent Address:</h5>
                          </Card.Subtitle>
                          <Row>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Address:
                              </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0 }}>
                                {getEmployeeDetails.permanentAdress}
                              </Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                State:
                              </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0 }}>
                                {getEmployeeDetails.permanentState}
                              </Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Country:
                              </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0 }}>
                                {getEmployeeDetails.permanentCountry}
                              </Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Pincode:
                              </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0 }}>
                                {getEmployeeDetails.permanentPincode}
                              </Card.Text>
                            </Col>
                          </Row>
                          <Card.Subtitle style={{ padding: 10 }}>
                            <h5>Current Address:</h5>
                          </Card.Subtitle>
                          <Row>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Address:
                              </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0 }}>
                                {getEmployeeDetails.currentAdress}
                              </Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                State:
                              </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0 }}>
                                {getEmployeeDetails.currentState}
                              </Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Country:
                              </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0 }}>
                                {getEmployeeDetails.currentCountry}
                              </Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Card.Subtitle style={{ padding: 10 }}>
                                Pincode:
                              </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                              <Card.Text style={{ paddingBottom: 0 }}>
                                {getEmployeeDetails.currentPincode}
                              </Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Col>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card style={{ padding: 30, marginTop: 20, paddingBottom: 0 }}>
                      <Card.Title>
                        <h5>Educational Information:</h5>
                      </Card.Title>
                      <Card.Body style={{ paddingLeft: 20 }}>
                        <Timeline theme={customTheme}>
                          <BodyContent>
                            <Section
                              title={
                                getEmployeeDetails.postgraduationBoardOfUniversity
                              }
                            >
                              <Description
                                text={getEmployeeDetails.postgraduationInstituteName}
                              />
                              <Description
                                text={getEmployeeDetails.postgraduationCourseName}
                              />
                              <Description
                                text={getEmployeeDetails.postgraduationGrade}
                              />
                            </Section>
                            <Section
                              title={
                                getEmployeeDetails.graduationBoardOfUniversity
                              }
                            >
                              <Description
                                text={getEmployeeDetails.graduationInstituteName}
                              />{" "}
                              <Description
                                text={getEmployeeDetails.graduationCourseName}
                              />
                              <Description
                                text={getEmployeeDetails.graduationGrade}
                              />
                            </Section>{" "}
                            <Section
                              title={
                                getEmployeeDetails.intermediateBoardOfUniversity
                              }
                            >
                              <Description
                                text={
                                  getEmployeeDetails.intermediateInstituteName
                                }
                              />
                              <Description
                                text={getEmployeeDetails.intermediateCourseName}
                              />
                              <Description
                                text={getEmployeeDetails.intermediateGrade}
                              />
                            </Section>{" "}
                            <Section
                              title={getEmployeeDetails.sscBoardOfUniversity}
                            >
                              <Description
                                text={getEmployeeDetails.sscInstituteName}
                              />
                              <Description
                                text={getEmployeeDetails.sscCourseName}
                              />
                              <Description text={getEmployeeDetails.sscGrade} />
                            </Section>
                          </BodyContent>
                        </Timeline>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ padding: 30, marginTop: 20, paddingBottom: 0 }}>
                      <Card.Title>
                        <h5>Experience:</h5>
                      </Card.Title>
                      <Card.Body style={{ paddingLeft: 20 }}>
                        <Timeline theme={customTheme}>
                          <BodyContent>
                            <Section
                              title={getEmployeeDetails.previousCompany1_name}
                            >
                              <Description
                                text={getEmployeeDetails.previousCompany1_employeeId}
                              />
                              <Description
                                text={getEmployeeDetails.previousCompany1_designation}
                              />
                            </Section>{" "}
                            <Section
                              title={getEmployeeDetails.previousCompany2_name}
                            >
                              <Description
                                text={getEmployeeDetails.previousCompany2_designation}
                              />
                              <Description
                                text={getEmployeeDetails.previousCompany2_employeeId}
                              />
                            </Section>{" "}
                            <Section
                              title={getEmployeeDetails.previousCompany3_name}
                            >
                              <Description
                                text={getEmployeeDetails.previousCompany3_designation}
                              />
                              <Description
                                text={getEmployeeDetails.previousCompany3_employeeId}
                              />
                            </Section>
                          </BodyContent>
                        </Timeline>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

              </Card.Body>
            </Card.Header>
          </Card>
        </Col>
      </Row>

    </>
  );
};
export default MyProfile;