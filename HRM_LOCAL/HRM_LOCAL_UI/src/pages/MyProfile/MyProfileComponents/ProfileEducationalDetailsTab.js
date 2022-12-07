import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import { matches } from "lodash";
import { Image } from "react-bootstrap";
import axios from "../../../Uri";
import { split } from "lodash";
import Avatar from '@mui/material/Avatar';
import PersonalDetails from "./ProfilePersonalDetailsTab";
import {
  Button,
  ProgressBar,

} from "react-bootstrap";
import {
  Timeline,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";
import { BASE_URL } from "../../../Constant";
import { toast } from "react-toastify";
import moment from "moment";

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#fd7e14",
  borderDotColor: "#ced4da",
  titleColor: "#000000",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};

const ProfileEducationalDetailsTab = (props) => {

  const employeeid = props.profile;
  const obdId = props.obid;
  // const userData = sessionStorage.getItem("userdata");
  // const userData1 = JSON.parse(userData);
  // const employeeid = userData1.data.employeeId;
  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);
  var dateTime = getEmployeeDetails.dateOfJoining;

  const [imge, setImge] = useState({});
//commit
  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
      .then((response) => {
        setGetEmployeeDetails(response.data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/emp/files/${employeeid}`)
      .then((response) => {
        setImge(response.data)
      })
      .catch((error) => {
       
        toast.error("")
      });
  }, []);


  const [documents, setDocuments] = useState("");
  const loadData = () => {
    axios
      .get(
        `${BASE_URL}/api/get/imageByTitle/EducationalDetails/${obdId}`
      )
      .then((response) => {
        setDocuments(response);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

const handleclick = () =>{
  toast.error("Educational Documents are not uploaded")
}

  var tempDate = new Date(getEmployeeDetails.sscPassedYear);
 

  return (
    <>
      
                        <div style={{ padding: 10, paddingBottom: 0, marginLeft: 10, marginRight: 20 }}>
                          {/* <Card.Title>
                            <h5>Educational Information:</h5>
                          </Card.Title> */}
                          <Card.Body style={{ paddingLeft: 20 }}>
                             <Table>
                              <thead>
                                <tr>
                                  <th>Qualification</th>
                                  <th>University/Board</th>
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
                                  <td>
                  {getEmployeeDetails.postgraduationJoiningYear === null ? " " : moment(getEmployeeDetails.postgraduationJoiningYear).format("DD/MM/YYYY")}
                </td>
                <td>
                  {getEmployeeDetails.postgraduationPassedYear === null ? " " : moment(getEmployeeDetails.postgraduationPassedYear).format("DD/MM/YYYY")}
                </td>
                                

                                </tr>
                                <tr>
                                  <td>{getEmployeeDetails.graduationType}</td>
                                  <td>{getEmployeeDetails.graduationBoardOfUniversity}</td>
                                  <td>{getEmployeeDetails.graduationInstituteName}</td>
                                  <td>{getEmployeeDetails.graduationCourseName}</td>
                                  <td>{getEmployeeDetails.graduationGrade}</td>
                                  <td>
                  {getEmployeeDetails.graduationJoiningYear === null ? " " : moment(getEmployeeDetails.graduationJoiningYear).format("DD/MM/YYYY")}
                </td>
                <td>
                  {getEmployeeDetails.graduationPassedYear === null ? " " : moment(getEmployeeDetails.graduationPassedYear).format("DD/MM/YYYY")}
                </td>
                                 
                                </tr>
                                <tr>
                                  <td>{getEmployeeDetails.intermediateQualification}</td>
                                  <td>{getEmployeeDetails.intermediateBoardOfUniversity}</td>
                                  <td>{getEmployeeDetails.intermediateCollegeName}</td>
                                  <td>{getEmployeeDetails.intermediateCourseName}</td>
                                  <td>{getEmployeeDetails.intermediateGrade}</td>
                                  <td>
                  {getEmployeeDetails.intermediateJoiningYear === null ? " " : moment(getEmployeeDetails.intermediateJoiningYear).format("DD/MM/YYYY")}
                </td>
                <td>
                  {getEmployeeDetails.intermediatePassedYear === null ? " " : moment(getEmployeeDetails.intermediatePassedYear).format("DD/MM/YYYY")}
                </td>
                                  

                                </tr>
                                <tr>
                                  <td>{getEmployeeDetails.sscQualification}</td>
                                  <td>{getEmployeeDetails.sscBoardOfUniversity}</td>
                                  <td>{getEmployeeDetails.sscSchoolName}</td>
                                  <td>{getEmployeeDetails.sscCourseName}</td>
                                  <td>{getEmployeeDetails.sscGrade}</td>
                                  <td>
                  {getEmployeeDetails.sscJoiningYear === null ? " " : moment(getEmployeeDetails.sscJoiningYear).format("DD/MM/YYYY")}
                </td>
                <td>
                  {getEmployeeDetails.sscPassedYear === null ? " " : moment(getEmployeeDetails.sscPassedYear).format("DD/MM/YYYY")}
                </td>
                                 
                                </tr>


                              </tbody>
                            </Table>

                          </Card.Body>
                          <Row>
                          {documents.statusText === "OK" ? ( 
               <Col>
                <a
                  href={`${BASE_URL}/api/get/imageByTitle/EducationalDetails/${obdId}`}
                >
                  Educational Documents
                </a>
              </Col>
            ) : (
              <Col> <Button onClick={handleclick} style={{background:"none",color:"blue",border:"none"}}>Educational Documents</Button></Col>
            )}</Row>
                        </div>

                     

    </>
  );
};
export default ProfileEducationalDetailsTab;

