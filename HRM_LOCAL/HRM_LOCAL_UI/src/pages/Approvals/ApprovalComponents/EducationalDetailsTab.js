import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, Table, Tabs, Tab, InputGroup, Button, Accordion } from "react-bootstrap";
import { BASE_URL } from "../../../Constant";
import axios from "../../../Uri";

function EducationalDetailsTab(props) {
    
  const userData = sessionStorage.getItem("userdata");
  // console.log(userData);
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;
  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);
  //var dateTime = getEmployeeDetails.dateOfJoining;

  const [imge, setImge] = useState([]);
//commit
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

  const [projects, setProjects] = useState(false)

  useEffect(() => {
    axios
      .get(`/emp/getUserClientDetailsbyEmployeeId/${employeeid}`)
      .then((response) => {
        setProjects(response.data);
      });
  }, []);
  console.log(projects)



  var GraduationJoiningYear = new Date(getEmployeeDetails.graduationJoiningYear);
  var dd = String(GraduationJoiningYear.getDate()).padStart(2, '0');
  var mm = String(GraduationJoiningYear.getMonth() + 1).padStart(2, '0');
  var yyyy = GraduationJoiningYear.getFullYear();
  var GraduationJoiningYear1 = dd + '-' + mm + '-' + yyyy;
  console.log(GraduationJoiningYear1);



  var tempDate = new Date(props.viewOnboard.postgraduationJoiningYear);
  var postgraduationJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.postgraduationPassedYear);
  var postgraduationPassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.graduationJoiningYear);
  var graduationJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.graduationPassedYear);
  var graduationPassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.intermediateJoiningYear);
  var intermediateJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.intermediatePassedYear);
  var intermediatePassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.sscJoiningYear);
  var sscJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.sscPassedYear);
 
  var sscPassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  const viewUploadFile = () => {
    // window.open(`api/get/image/${imageName}/${onboardingId}`)

    axios
      .get(`api/get/imageByTitle/EducationalDetails/${props.viewOnboard.onboardingId}`, {
        contentType: "application/pdf",
      })
      .then((res) => {
        console.log(res.data.url);
        setImageName(res.data);
        setUrl(res.data.url);
        saveAs(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };


    return (

        <div style={{ padding: 20, height:320, marginLeft: 10, marginRight: 20,paddingBottom:"318px" }}>
                          <Card.Title>
                            <h5>Educational Information:</h5>
                          </Card.Title>
                          <Card.Body style={{ paddingLeft: 20 }}>


                            <Table>
                              <thead>
                                <tr>
                                  <th>Type of Graduation</th>
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
                                  <td>{props.viewOnboard.postgraduationType}</td>
                                  <td>{props.viewOnboard.postgraduationBoardOfUniversity}</td>
                                  <td>{props.viewOnboard.postgraduationInstituteName}</td>
                                  <td>{props.viewOnboard.postgraduationCourseName}</td>
                                  <td>{props.viewOnboard.postgraduationGrade}</td>
                                  <td> {props.viewOnboard.postgraduationJoiningYear ? (<td>
                                    {postgraduationJoiningYear1}
                                  </td>) : (<div></div>)}</td>
                                  <td>{props.viewOnboard.postgraduationPassedYear ? (<td>
                                    {postgraduationPassedYear1}
                                  </td>) : (<div></div>)}</td>

                                </tr>
                                <tr>
                                  <td>{props.viewOnboard.graduationType}</td>
                                  <td>{props.viewOnboard.graduationBoardOfUniversity}</td>
                                  <td>{props.viewOnboard.graduationInstituteName}</td>
                                  <td>{props.viewOnboard.graduationCourseName}</td>
                                  <td>{props.viewOnboard.graduationGrade}</td>
                                  <td> {props.viewOnboard.graduationJoiningYear ? (<td>
                                    {graduationJoiningYear1}
                                  </td>) : (<div></div>)}</td>
                                  <td>{props.viewOnboard.graduationPassedYear ? (<td>
                                    {graduationPassedYear1}
                                  </td>) : (<div></div>)}</td>

                                </tr>
                                <tr>
                                  <td>{props.viewOnboard.intermediateQualification}</td>
                                  <td>{props.viewOnboard.intermediateBoardOfUniversity}</td>
                                  <td>{props.viewOnboard.intermediateCollegeName}</td>
                                  <td>{props.viewOnboard.intermediateCourseName}</td>
                                  <td>{props.viewOnboard.intermediateGrade}</td>
                                  <td> {props.viewOnboard.intermediateJoiningYear ? (<td>
                                    {intermediateJoiningYear1}
                                  </td>) : (<div></div>)}</td>
                                  <td> {props.viewOnboard.intermediatePassedYear ? (<td>
                                    {intermediatePassedYear1}
                                  </td>) : (<div></div>)}</td>

                                </tr>
                                <tr>
                                  <td>{props.viewOnboard.sscQualification}</td>
                                  <td>{props.viewOnboard.sscBoardOfUniversity}</td>
                                  <td>{props.viewOnboard.sscSchoolName}</td>
                                  <td>{props.viewOnboard.sscCourseName}</td>
                                  <td>{props.viewOnboard.sscGrade}</td>
                                  <td> {props.viewOnboard.sscJoiningYear ? (<td>
                                    {sscJoiningYear1}
                                  </td>) : (<div></div>)}</td>
                                  <td>{props.viewOnboard.sscPassedYear ? (<td>
                                    {sscPassedYear1}
                                  </td>) : (<div></div>)}</td>
                                </tr>


                              </tbody>
                            </Table>

                          </Card.Body>
                          <Col md="6" style={{ padding: 0 }}>
              <a
                href={`${BASE_URL}/api/get/imageByTitle/EducationalDetails/${props.viewOnboard.onboardingId}`}
              >
                Download Documents
              </a>
            </Col>
                        </div>
    )
}
export default EducationalDetailsTab;
