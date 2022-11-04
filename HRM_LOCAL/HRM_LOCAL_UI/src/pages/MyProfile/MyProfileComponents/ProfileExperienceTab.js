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

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#fd7e14",
  borderDotColor: "#ced4da",
  titleColor: "#000000",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};

const ProfileExperienceTab = () => {


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
  //comment for pull req
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

  var tempDate = new Date(getEmployeeDetails.passportExpiryDate);
  var ped = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

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

  var tempDate = new Date(getEmployeeDetails.previousCompany1_joiningDate);
  var previousCompany1_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.previousCompany1_relievingDate);
  var previousCompany1_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(getEmployeeDetails.previousCompany2_joiningDate);
    var previousCompany2_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    var tempDate = new Date(getEmployeeDetails.previousCompany2_relievingDate);
    var previousCompany2_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    var tempDate = new Date(getEmployeeDetails.previousCompany3_joiningDate);
    var previousCompany3_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    var tempDate = new Date(getEmployeeDetails.previousCompany3_relievingDate);
    var previousCompany3_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    var dob11 = getEmployeeDetails.dateOfBirth

  return (
    <>
      

                        <div style={{ padding: 20, marginTop: 0, paddingBottom: 0, marginLeft: 10, marginRight: 20 }}>
                          {/* <Card.Title>
                            <h5>Experience:</h5>
                          </Card.Title> */}
                          <Card.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <Table>
                              <thead>
                                <tr>

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
                        </div>

    </>
  );
};
export default ProfileExperienceTab;


