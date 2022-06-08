import React, { useEffect, useState } from "react";

import { Card, Container, Row, Col, Table } from "react-bootstrap";
import { matches } from "lodash";
import { Image } from "react-bootstrap";


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
  const [imge, setImge] = useState([]);
  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
      .then((response) => {
        setGetEmployeeDetails(response.data.data);
      });
  }, []);

  console.log(getEmployeeDetails);
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

  console.log(imge);

  // useEffect(() => {
  //   axios
  //     .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
  //     .then((response) => {
  //       setGetEmployeeDetails(response.data.data);
  //     });

  // }, []);
  // console.log(getEmployeeDetails);

  // function formatDate(fromDate){
  //   var datePart = fromDate.match(/\d+/g),
  //     year = datePart[0].substring(2), // get only two digits
  //     month = datePart[1],
  //     day = datePart[2];
  //   return day + "-" + month + "-" + year;
  //  }

  console.log(getEmployeeDetails.dateOfJoining)

  var doj = new Date(getEmployeeDetails.dateOfJoining);
  var dd = String(doj.getDate()).padStart(2, '0');
  var mm = String(doj.getMonth() + 1).padStart(2, '0');
  var yyyy = doj.getFullYear();
  doj = mm + '-' + dd + '-' + yyyy;
  console.log(doj);

  console.log(getEmployeeDetails.dateOfBirth)
  var dob = new Date(getEmployeeDetails.dateOfBirth);
  var dd = String(dob.getDate()).padStart(2, '0');
  var mm = String(dob.getMonth() + 1).padStart(2, '0');
  var yyyy = dob.getFullYear();
  dob = dd + '-' + mm + '-' + yyyy;
  console.log(dob);

  var passportDate = new Date(getEmployeeDetails.passportExpiryDate);
  var dd = String(passportDate.getDate()).padStart(2, '0');
  var mm = String(passportDate.getMonth() + 1).padStart(2, '0');
  var yyyy = passportDate.getFullYear();
  passportDate = dd + '-' + mm + '-' + yyyy;
  console.log(passportDate);

  return (
    <>
      <Row>
        <Col>
          <Card responsive className='scroll' style={{ marginTop: 10 }}>
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
                              <Row>
                                <Card.Title>
                                  <Row>
                                    <Col>
                                    <Image src={`data:image/jpeg;base64,${imge.url}`} style={{
                                      // {/* <Image src={imge.url} style={{ */}
                                        height: "150px",
                                        width: "150px",
                                        borderRadius: "110px",
                                        alignItems: "center",
                                        marginTop: "50px",
                                        marginLeft: "50px"
                                      }} />
                                    </Col>

                                    <Col style={{
                                      fontSize: 20,
                                      textAlign: "center",
                                      paddingTop: 10,
                                      paddingBottom: 40,
                                      text: "bold",
                                      marginRight: "230px",


                                    }}>

                                      {getEmployeeDetails.firstName} {getEmployeeDetails.lastName}
                                    </Col>
                                  </Row>
                                </Card.Title></Row>
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
                                    {/* {formatDate(getEmployeeDetails.dateOfJoining)} */}
                                    {doj}
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
                              <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                  <Card.Text style={{}}>
                                    <h6>Employee Type: </h6>
                                  </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                  <Card.Text style={{}}>
                                    {getEmployeeDetails.employmentType}
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
                              {dob}
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
                              {passportDate}
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
                        {/* <Timeline theme={customTheme}>
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
                        </Timeline> */}
                        <Row md={12} >
                          <Table>
                            <thead>
                              <tr>

                                <th>University</th>
                                <th>Institute Name</th>
                                <th>Course</th>
                                <th>Grade</th>

                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>{getEmployeeDetails.postgraduationBoardOfUniversity}</th>
                                <th>{getEmployeeDetails.postgraduationInstituteName}</th>
                                <th>{getEmployeeDetails.postgraduationCourseName}</th>
                                <th>{getEmployeeDetails.postgraduationGrade}</th>
                              </tr>
                              <tr>
                                <th>{getEmployeeDetails.graduationBoardOfUniversity}</th>
                                <th>{getEmployeeDetails.graduationInstituteName}</th>
                                <th>{getEmployeeDetails.graduationCourseName}</th>
                                <th>{getEmployeeDetails.graduationGrade}</th>
                              </tr>
                              <tr>
                                <th>{getEmployeeDetails.intermediateBoardOfUniversity}</th>
                                <th>{getEmployeeDetails.intermediateCollegeName}</th>
                                <th>{getEmployeeDetails.intermediateCourseName}</th>
                                <th>{getEmployeeDetails.intermediateGrade}</th>
                              </tr>
                              <tr>
                                <th>{getEmployeeDetails.sscBoardOfUniversity}</th>
                                <th>{getEmployeeDetails.sscSchoolName}</th>
                                <th>{getEmployeeDetails.sscCourseName}</th>
                                <th>{getEmployeeDetails.sscGrade}</th>
                              </tr>

                            </tbody>
                          </Table>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Row>
                      <Card style={{ padding: 30, marginTop: 20, paddingBottom: 0, marginLeft: 10, marginRight: 20 }}>
                        <Card.Title>
                          <h5>Experience:</h5>
                        </Card.Title>
                        <Card.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
                          <Table>
                            <thead>
                              <tr>

                                <th>Company Name</th>
                                <th>Employee ID</th>
                                <th>Designation</th>

                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>{getEmployeeDetails.previousCompany1_name}</th>
                                <th>{getEmployeeDetails.previousCompany1_employeeId}</th>
                                <th>{getEmployeeDetails.previousCompany1_designation}</th>
                              </tr>
                              <tr>
                                <th>{getEmployeeDetails.previousCompany2_name}</th>
                                <th>{getEmployeeDetails.previousCompany2_employeeId}</th>
                                <th>{getEmployeeDetails.previousCompany2_designation}</th>
                              </tr>
                              <tr>
                                <th>{getEmployeeDetails.previousCompany3_name}</th>
                                <th>{getEmployeeDetails.previousCompany3_employeeId}</th>
                                <th>{getEmployeeDetails.previousCompany3_designation}</th>
                              </tr>

                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                    </Row>
                    <Row>
                      {/* <Card style={{ padding: 30, marginTop: 20, paddingBottom: 0 }}>
                        <Card.Title>
                          <h5>Promotion history:</h5>
                        </Card.Title>
                        <Card.Body style={{ paddingLeft: 20 }}>
                          <Timeline theme={customTheme}>
                            <BodyContent>
                              <Section
                              // title={getEmployeeDetails.previousCompany1_name}
                              >
                                <Description
                                // text={getEmployeeDetails.previousCompany1_employeeId}
                                />

                              </Section>{" "}
                              <Section
                              //title={getEmployeeDetails.previousCompany2_name}
                              >
                                <Description
                                // text={getEmployeeDetails.previousCompany2_designation}
                                />

                              </Section>{" "}

                            </BodyContent>
                          </Timeline>
                        </Card.Body>
                      </Card> */}

                    </Row>
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