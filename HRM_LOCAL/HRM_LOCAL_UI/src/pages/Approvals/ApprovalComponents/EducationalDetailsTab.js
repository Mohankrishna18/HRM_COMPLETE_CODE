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



  var tempDate = new Date(getEmployeeDetails.postgraduationJoiningYear);
  var postgraduationJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.postgraduationPassedYear);
  var postgraduationPassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.graduationJoiningYear);
  var graduationJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.graduationPassedYear);
  var graduationPassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.intermediateJoiningYear);
  var intermediateJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.intermediatePassedYear);
  var intermediatePassedYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.sscJoiningYear);
  var sscJoiningYear1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.sscPassedYear);
 
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

        <div style={{ padding: 20, paddingBottom: 0, marginLeft: 10, marginRight: 20 }}>
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
                                  <td>{getEmployeeDetails.postgraduationType}</td>
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
                                <tr>
                                  <td>{getEmployeeDetails.graduationType}</td>
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
                                  <td></td>
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
                                  <td></td>
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
