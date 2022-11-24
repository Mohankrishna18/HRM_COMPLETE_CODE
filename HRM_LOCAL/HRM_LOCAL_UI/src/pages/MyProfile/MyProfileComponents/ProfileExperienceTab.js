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

const ProfileExperienceTab = (props) => {

  console.log(props.profile);
  const employeeid = props.profile;
  // const userData = sessionStorage.getItem("userdata");
  // console.log(userData);
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

  const [documents, setDocuments] = useState("");
  const loadData = () => {
    axios
      .get(`${BASE_URL}/api/get/imageByTitle/ExperienceDetails/${employeeid}`)
      .then((response) => {
        setDocuments(response);
        console.log(response);
      });
  }
  useEffect(() => {
    loadData();
  }, []);
  console.log(documents);

  const handleclick = () => {
    toast.error("Experience Documents are not uploaded")
  }




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


  return (
    <>


      <div style={{ padding: 10, marginTop: 0, paddingBottom: 0, marginLeft: 10, marginRight: 20 }}>
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
                <td>
                  {getEmployeeDetails.previousCompany1_joiningDate === null ? " " : moment(getEmployeeDetails.previousCompany1_joiningDate).format("DD/MM/YYYY")}
                </td>
                <td>
                  {getEmployeeDetails.previousCompany1_relievingDate === null ? " " : moment(getEmployeeDetails.previousCompany1_relievingDate).format("DD/MM/YYYY")}
                </td>

              </tr>
              <tr>
                <td>{getEmployeeDetails.previousCompany2_name}</td>
                <td>{getEmployeeDetails.previousCompany2_employeeId}</td>
                <td>{getEmployeeDetails.previousCompany2_designation}</td>
                <td>
                  {getEmployeeDetails.previousCompany2_joiningDate === null ? " " : moment(getEmployeeDetails.previousCompany2_joiningDate).format("DD/MM/YYYY")}
                </td>
                <td>
                  {getEmployeeDetails.previousCompany2_relievingDate === null ? " " : moment(getEmployeeDetails.previousCompany2_relievingDate).format("DD/MM/YYYY")}
                </td>

              </tr>
              <tr>
                <td>{getEmployeeDetails.previousCompany3_name}</td>
                <td>{getEmployeeDetails.previousCompany3_employeeId}</td>
                <td>{getEmployeeDetails.previousCompany3_designation}</td>
                <td>
                  {getEmployeeDetails.previousCompany3_joiningDate === null ? " " : moment(getEmployeeDetails.previousCompany3_joiningDate).format("DD/MM/YYYY")}
                </td>
                <td>
                  {getEmployeeDetails.previousCompany3_relievingDate === null ? " " : moment(getEmployeeDetails.previousCompany3_relievingDate).format("DD/MM/YYYY")}
                </td>

              </tr>

            </tbody>
          </Table>
        </Card.Body>
        <Row>
          {documents.statusText === "OK" ? (<Col>
            <a href={`${BASE_URL}/api/get/imageByTitle/ExperienceDetails/${employeeid}`}>
              Experience Documents

            </a>
          </Col>) : (<Col style={{ color: "blue" }}> <Button onClick={handleclick} style={{ background: "none", color: "blue", border: "none" }}>Experience Documents</Button></Col>
          )
          }

        </Row>
      </div>

    </>
  );
};
export default ProfileExperienceTab;


