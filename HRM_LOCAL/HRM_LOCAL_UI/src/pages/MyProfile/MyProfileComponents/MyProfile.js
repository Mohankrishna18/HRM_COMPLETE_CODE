import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import { matches } from "lodash";
import { Image } from "react-bootstrap";
import axios from "../../../Uri";
import { split } from "lodash";
import Avatar from '@mui/material/Avatar';


///////

const MyProfile = () => {

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




  // function formatDate(fromDate){
  //   var datePart = fromDate.match(/\d+/g),
  //     year = datePart[0].substring(2), // get only two digits
  //     month = datePart[1],
  //     day = datePart[2];
  //   return day + "-" + month + "-" + year;
  //  }

  // console.log(getEmployeeDetails.dateOfJoining)

  var doj = new Date(getEmployeeDetails.dateOfJoining);
  var dd = String(doj.getDate()).padStart(2, '0');
  var mm = String(doj.getMonth() + 1).padStart(2, '0');
  var yyyy = doj.getFullYear();
  var doj1 = dd + '-' + mm + '-' + yyyy;
  console.log(doj1);



  console.log(getEmployeeDetails.dateOfBirth)

  // function ChangeFormateDate(getEmployeeDetails.dateOfBirth)
  // {
  //    return oldDate.toString().split("/").reverse().join("/");
  // }



  // console.log(dob)
  //  var dob12 = dob.split("-").reverse().join("-");
  //  console.log(dob12)


  // var dd = dob.getDate();
  // var mm = dob.getMonth()+1;
  // var yyyy = dob.getFullYear();
  // var dob1 = dd + '-' + mm + '-' + yyyy;
  //  console.log(dob1);

  // console.log(getEmployeeDetails.passportExpiryDate)
  var passportDate = new Date(getEmployeeDetails.passportExpiryDate);
  var dd = String(passportDate.getDate()).padStart(2, '0');
  var mm = String(passportDate.getMonth() + 1).padStart(2, '0');
  var yyyy = passportDate.getFullYear();
  var passportDate1 = dd + '-' + mm + '-' + yyyy;
  console.log(passportDate1);

  var GraduationJoiningYear = new Date(getEmployeeDetails.graduationJoiningYear);
  var dd = String(GraduationJoiningYear.getDate()).padStart(2, '0');
  var mm = String(GraduationJoiningYear.getMonth() + 1).padStart(2, '0');
  var yyyy = GraduationJoiningYear.getFullYear();
  var GraduationJoiningYear1 = dd + '-' + mm + '-' + yyyy;
  console.log(GraduationJoiningYear1);


  var tempDate = new Date(getEmployeeDetails.dateOfBirth);
  var dob = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(dob)



  var tempDate = new Date(getEmployeeDetails.passportExpiryDate);
  var ped = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(ped)

  var tempDate = new Date(getEmployeeDetails.postgraduationJoiningYear);
  var postgraduationJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(postgraduationJoiningYear1)

  var tempDate = new Date(getEmployeeDetails.postgraduationPassedYear);
  var postgraduationPassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(postgraduationPassedYear1)

  var tempDate = new Date(getEmployeeDetails.graduationJoiningYear);
  var graduationJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(graduationJoiningYear1)

  var tempDate = new Date(getEmployeeDetails.graduationPassedYear);
  var graduationPassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(graduationPassedYear1)

  var tempDate = new Date(getEmployeeDetails.intermediateJoiningYear);
  var intermediateJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(intermediateJoiningYear1)

  var tempDate = new Date(getEmployeeDetails.intermediatePassedYear);
  var intermediatePassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(intermediatePassedYear1)

  var tempDate = new Date(getEmployeeDetails.sscJoiningYear);
  var sscJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(sscJoiningYear1)

  var tempDate = new Date(getEmployeeDetails.sscPassedYear);
  var sscPassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(sscPassedYear1)

  var tempDate = new Date(getEmployeeDetails.previousCompany1_joiningDate);
  var previousCompany1_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(previousCompany1_joiningDate1)

  var tempDate = new Date(getEmployeeDetails.previousCompany1_relievingDate);
  var previousCompany1_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(previousCompany1_relievingDate1)

  var tempDate = new Date(getEmployeeDetails.previousCompany2_joiningDate);
  var previousCompany2_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(previousCompany2_joiningDate1)

  var tempDate = new Date(getEmployeeDetails.previousCompany2_relievingDate);
  var previousCompany2_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(previousCompany2_relievingDate1)

  var tempDate = new Date(getEmployeeDetails.previousCompany3_joiningDate);
  var previousCompany3_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(previousCompany3_joiningDate1)

  var tempDate = new Date(getEmployeeDetails.previousCompany3_relievingDate);
  var previousCompany3_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(previousCompany3_relievingDate1)



  var dob11 = getEmployeeDetails.dateOfBirth


  return (
    <>
      <Row>
        <Col>
          <Card responsive className='scroll' style={{ marginTop: 0 }}>
            <Card.Header>
              <Card.Body>
                <Card.Title> My Profile</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Employee/My Profile
                </Card.Subtitle>{" "}
                <Row>
                  <Col>
                    <Card>
                      
                        <Row>
                          <Col>
                            <Row>
                              <Col>
                                <Row style={{
                                  alignContent: "center",
                                  paddingTop: 0,
                                  paddingLeft: 200,
                                  marginLeft: "170px"
                                }}>
                                  {/* <Col>{getEmployeeDetails.profilePhoto}</Col> */}
                                </Row>
                              </Col>
                              <Row>
                                <Col>
                                  <Card.Title>
                                    <Row>

                                      <Col>
                                        <Row>
                                          <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{

                                            height: "150px",
                                            width: "150px",
                                            borderRadius: "110px",
                                            alignItems: "center",
                                            marginTop: "50px",
                                            marginLeft: "32%"
                                          }} />
                                        </Row>
                                        <Row>
                                          <Col style={{
                                            fontSize: 20,
                                            textAlign: "center",
                                            paddingTop: 40,
                                            paddingBottom: 40,
                                            text: "bold",


                                          }}>
                                            {getEmployeeDetails.firstName} {getEmployeeDetails.lastName}

                                          </Col>

                                        </Row>


                                      </Col>


                                    </Row>
                                  </Card.Title></Col></Row>
                            </Row>
                          </Col>

                          <Col>
                            <Card.Body style={{}}>
                              <Row
                                style={{
                                  paddingTop: 50,
                                    paddingBottom: 15,
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
                              <Row style={{ paddingBottom: 15 }}>
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
                              <Row style={{ paddingBottom: 15 }}>
                                <Col>
                                  <Card.Title style={{}}>
                                    <h6>Department:</h6>
                                  </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                  <Card.Text style={{}}>
                                    {getEmployeeDetails.departmentName}
                                  </Card.Text>
                                </Col>
                              </Row>
                              <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                  <Card.Text style={{}}>
                                    <h6>Project: </h6>
                                  </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                  <Card.Text style={{}}>
                                    {getEmployeeDetails.projectName}
                                  </Card.Text>
                                </Col>
                              </Row>
                              <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                  <Card.Text style={{}}>
                                    <h6>Business Unit: </h6>
                                  </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                  <Card.Text style={{}}>
                                    {getEmployeeDetails.businessUnit}
                                  </Card.Text>
                                </Col>
                              </Row>
                            </Card.Body></Col>
                          <Col>

                            <Row style={{  paddingTop: 65,
                            paddingBottom: 15, }}>
                              <Col>
                                <Card.Title style={{}}>
                                  <h6> Years of Experience:</h6>
                                </Card.Title>
                              </Col>{" "}
                              <Col md={{ offset: 1 }}>
                                <Card.Text style={{}}>
                                  {getEmployeeDetails.yearsOfExperience}
                                </Card.Text>
                              </Col>
                            </Row>
                            <Row style={{ paddingBottom: 15 }}>
                              <Col>
                                <Card.Title style={{}}>
                                  <h6>Date of Joining: </h6>
                                </Card.Title>
                              </Col>{" "}
                              <Col md={{ offset: 1 }}>
                                <Card.Text style={{}}>
                                  {/* {getEmployeeDetails.dateOfJoining} */}
                                  {doj1}
                                </Card.Text>
                              </Col>
                            </Row>
                            <Row style={{ paddingBottom: 15 }}>
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
                            <Row style={{ paddingBottom: 15 }}>
                              <Col>
                                <Card.Text style={{}}>
                                  <h6>Employment Type: </h6>
                                </Card.Text>
                              </Col>{" "}
                              <Col md={{ offset: 1 }}>
                                <Card.Text style={{}}>
                                  {getEmployeeDetails.employmentType}
                                </Card.Text>
                              </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                              <Col>
                                <Card.Text style={{}}>
                                  <h6>Band: </h6>
                                </Card.Text>
                              </Col>{" "}
                              <Col md={{ offset: 1 }}>
                                <Card.Text style={{}}>
                                  {getEmployeeDetails.band}
                                </Card.Text>
                              </Col>
                            </Row>

                          </Col>


                        </Row>
                    
                    </Card>

                  </Col>
                </Row>{" "}
                <Row style={{ marginTop: 20 }}>
                  <Col>
                    <Card style={{ padding: 30, paddingBottom: 45 }}>
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
                            <Card.Subtitle >
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
                            <Card.Subtitle >
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
                            {getEmployeeDetails.dateOfBirth ? (<Card.Subtitle>
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
                            <Card.Subtitle >
                              {getEmployeeDetails.bloodGroup}
                            </Card.Subtitle>
                          </Col>
                        </Row>
                        <Row style={{ paddingLeft: 15, paddingBottom: 40 }}>
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
                        <Row style={{ paddingLeft: 15, paddingBottom: 40 }}>
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

                      </Card.Body>

                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ padding: 30, paddingBottom: 0 }}>
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

                <Row style={{ marginTop: 20 }}>
                  <Col>
                    <Card style={{ padding: 30, paddingBottom: 20 }}>
                      <Card.Title>
                        <h5>Additional Details:</h5>
                      </Card.Title>
                      <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            Passport Number:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.passportNo}
                          </Card.Text>
                        </Col>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            Passport Expiry Date:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          {getEmployeeDetails.passportExpiryDate ? (<Card.Subtitle>
                            {ped}
                          </Card.Subtitle>) : (<div></div>)}
                        </Col>
                      </Row>
                      <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            PAN Card Number:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.panNumber}
                          </Card.Text>
                        </Col>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            Aadhar Card Number:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.aadharNumber}
                          </Card.Text>
                        </Col>
                      </Row>

                      <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            UAN Number:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.uanNumber}
                          </Card.Text>
                        </Col>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            Band:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.band}
                          </Card.Text>
                        </Col>
                      </Row>

                      <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            Bank Name:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.bankName}
                          </Card.Text>
                        </Col>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            Account Number:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.accountNumber}
                          </Card.Text>
                        </Col>
                      </Row>

                      <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            IFSC Code:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.ifscCode}
                          </Card.Text>
                        </Col>
                        <Col>
                          <Card.Subtitle style={{ padding: 10 }}>
                            Branch:
                          </Card.Subtitle>{" "}
                        </Col>
                        <Col md={{ offset: 1 }}>
                          <Card.Text style={{ paddingBottom: 0 }}>
                            {getEmployeeDetails.branch}
                          </Card.Text>
                        </Col>
                      </Row>

                      <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>



                        <Col>

                          <Card.Subtitle style={{ padding: 10 }}>

                            Exit Date:

                          </Card.Subtitle>{" "}

                        </Col>

                        <Col md={{ offset: 1 }}>

                          <Card.Text style={{ paddingBottom: 0 }}>

                            {getEmployeeDetails.exitDate}

                          </Card.Text>

                        </Col>

                        <Col>

                          <Card.Subtitle style={{ padding: 10 }}>

                            {/* BAND: */}

                          </Card.Subtitle>{" "}

                        </Col>

                        <Col md={{ offset: 1 }}>

                          <Card.Text style={{ paddingBottom: 0 }}>

                            {/* {getEmployeeDetails.band} */}

                          </Card.Text>

                        </Col>

                      </Row>


                    </Card>
                  </Col>
                </Row>

                <Row style={{ marginTop: 20, marginRight: 10 }}>

                  <Card style={{ padding: 30, paddingBottom: 0, marginLeft: 10, marginRight: 20 }}>
                    <Card.Title>
                      <h5>Educational Information:</h5>
                    </Card.Title>
                    <Card.Body style={{ paddingLeft: 20 }}>


                      <Table>
                        <thead>
                          <tr>

                            {/* <th>Sr.No.</th> */}
                            <th>University</th>
                            <th>Institute Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Joining Date</th>
                            <th>Year of Passing</th>

                          </tr>
                        </thead>
                        <tbody>

                          <tr>

                            <td>{getEmployeeDetails.sscBoardOfUniversity}</td>
                            <td>{getEmployeeDetails.sscSchoolName}</td>
                            <td>{getEmployeeDetails.sscCourseName}</td>
                            <td>{getEmployeeDetails.sscGrade}</td>
                            <td> {getEmployeeDetails.sscJoiningYear ? (<td>
                              {sscJoiningYear1}
                            </td>) : (<div></div>)}</td>
                            <td>{getEmployeeDetails.sscPassedYear ? (<td>
                              {sscPassedYear1}
                            </td>) : (<div></div>)}</td>
                          </tr>

                          <tr>
                            <td>{getEmployeeDetails.intermediateBoardOfUniversity}</td>
                            <td>{getEmployeeDetails.intermediateCollegeName}</td>
                            <td>{getEmployeeDetails.intermediateCourseName}</td>
                            <td>{getEmployeeDetails.intermediateGrade}</td>
                            <td> {getEmployeeDetails.intermediateJoiningYear ? (<td>
                              {intermediateJoiningYear1}
                            </td>) : (<div></div>)}</td>
                            <td> {getEmployeeDetails.intermediatePassedYear ? (<td>
                              {intermediatePassedYear1}
                            </td>) : (<div></div>)}</td>

                          </tr>
                          <tr>
                            <td>{getEmployeeDetails.graduationBoardOfUniversity}</td>
                            <td>{getEmployeeDetails.graduationInstituteName}</td>
                            <td>{getEmployeeDetails.graduationCourseName}</td>
                            <td>{getEmployeeDetails.graduationGrade}</td>
                            <td> {getEmployeeDetails.graduationJoiningYear ? (<td>
                              {graduationJoiningYear1}
                            </td>) : (<div></div>)}</td>
                            <td>{getEmployeeDetails.graduationPassedYear ? (<td>
                              {graduationPassedYear1}
                            </td>) : (<div></div>)}</td>

                          </tr>


                          <tr>
                            <td>{getEmployeeDetails.postgraduationBoardOfUniversity}</td>
                            <td>{getEmployeeDetails.postgraduationInstituteName}</td>
                            <td>{getEmployeeDetails.postgraduationCourseName}</td>
                            <td>{getEmployeeDetails.postgraduationGrade}</td>
                            <td> {getEmployeeDetails.postgraduationJoiningYear ? (<td>
                              {postgraduationJoiningYear1}
                            </td>) : (<div></div>)}</td>
                            <td>{getEmployeeDetails.postgraduationPassedYear ? (<td>
                              {postgraduationPassedYear1}
                            </td>) : (<div></div>)}</td>

                          </tr>


                        </tbody>
                      </Table>

                    </Card.Body>
                  </Card>
                </Row>

                <Row style={{ marginRight: 10 }}>
                  <Card style={{ padding: 30, marginTop: 20, paddingBottom: 0, marginLeft: 10, marginRight: 20 }}>
                    <Card.Title>
                      <h5>Experience:</h5>
                    </Card.Title>
                    <Card.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
                      <Table>
                        <thead>
                          <tr>
                            {/*
                            <th>Sr.No.</th> */}
                            <th>Company Name</th>
                            <th>Employee ID</th>
                            <th>Designation</th>
                            <th>Joining Date</th>
                            <th>Relieving Date</th>


                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{getEmployeeDetails.previousCompany1_name}</td>
                            <td>{getEmployeeDetails.previousCompany1_employeeId}</td>
                            <td>{getEmployeeDetails.previousCompany1_designation}</td>
                            <td> {getEmployeeDetails.previousCompany1_joiningDate ? (<td>
                              {previousCompany1_joiningDate1}
                            </td>) : (<div></div>)}</td>
                            <td>{getEmployeeDetails.previousCompany1_relievingDate ? (<td>
                              {previousCompany1_relievingDate1}
                            </td>) : (<div></div>)}</td>
                          </tr>
                          <tr>
                            <td>{getEmployeeDetails.previousCompany2_name}</td>
                            <td>{getEmployeeDetails.previousCompany2_employeeId}</td>
                            <td>{getEmployeeDetails.previousCompany2_designation}</td>
                            <td> {getEmployeeDetails.previousCompany2_joiningDate ? (<td>
                              {previousCompany2_joiningDate1}
                            </td>) : (<div></div>)}</td>
                            <td>{getEmployeeDetails.previousCompany2_relievingDate ? (<td>
                              {previousCompany2_relievingDate1}
                            </td>) : (<div></div>)}</td>
                          </tr>
                          <tr>
                            <td>{getEmployeeDetails.previousCompany3_name}</td>
                            <td>{getEmployeeDetails.previousCompany3_employeeId}</td>
                            <td>{getEmployeeDetails.previousCompany3_designation}</td>
                            <td> {getEmployeeDetails.previousCompany3_joiningDate ? (<td>
                              {previousCompany3_joiningDate1}
                            </td>) : (<div></div>)}</td>
                            <td>{getEmployeeDetails.previousCompany3_relievingDate ? (<td>
                              {previousCompany3_relievingDate1}
                            </td>) : (<div></div>)}</td>
                          </tr>

                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
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
