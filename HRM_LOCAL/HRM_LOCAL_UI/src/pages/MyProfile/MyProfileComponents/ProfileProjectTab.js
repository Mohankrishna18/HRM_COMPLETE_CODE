import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import { matches } from "lodash";
import { Image } from "react-bootstrap";
import axios from "../../../Uri";
import { split } from "lodash";
import Avatar from "@mui/material/Avatar";
import PersonalDetails from "./ProfilePersonalDetailsTab";
import { Button, ProgressBar } from "react-bootstrap";
import {
  Timeline,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";
import Moment from "moment";
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

const ProfileProjectTab = (props) => {
  console.log(props.profile);
  const employeeid = props.profile;
  // const userData = sessionStorage.getItem("userdata");
  // // console.log(userData);
  // const userData1 = JSON.parse(userData);
  // const employeeid = userData1.data.employeeId;
  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);
  const [project, setProject] = useState([]);
  
  //get projects by employeeid
  const[data,setData] = useState([]);
  useEffect(() => {
    axios.get(`/clientProjectMapping/getAllProjectsbyemployee/${employeeid}`)
    .then((response) => {
        setData(response.data);
    })
    .catch((error) => {
      console.log(error);
      console.log("something wrong");
    });
  }, []);
  console.log(data);
  //var dateTime = getEmployeeDetails.dateOfJoining;


  const [imge, setImge] = useState({});
  //commit
  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
      .then((response) => {
        setGetEmployeeDetails(response.data.data);
         console.log(response.data.data);
        // const sata1 = response.data.data.filter(item => item.status === 'Active')
        // setGetEmployeeDetails(sata1)
      });
  }, []);
  console.log(getEmployeeDetails);

  useEffect(() => {
    axios
      .get(
        `/clientProjectMapping/getActiveProjectsByEmpIdForEmployee/Active/${employeeid}`
      )
      .then((response) => {
        setProject(response.data);
      });
  }, []);
  console.log(project);


  return (
    <div style={{ paddingLeft: 20, paddingBottom: 0 }}>
      {/* <Card.Title>
        <h5>Projects History:</h5>
      </Card.Title> */}
      <Card.Body>
        <Row>
          <Col md={12}>
            <table className="table">
              <thead>
                <tr>
                <th scope="col">Project ID</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Reporting Manager</th>
                
                  <th scope="col">Status</th>
                  <th scope="col" >Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Allocation</th>
                </tr>
              </thead>

              <tbody>
              {!data ? <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr> : 
<>
                    {data.map((data) => (
                      <tr>
                        <td>{data.projectId}</td>
                        <td>{data.projectName}</td>
                        <td>{data.clientName}</td>
                        <td>{data.projectManager}</td> 
                        <td>{data.status}</td>
                        <td >{data.startDate === null ?" ": moment(data.startDate).format("DD/MM/YYYY")}
                        </td>
                        <td>
                        {data.endDate === null ?" ": moment(data.endDate).format("DD/MM/YYYY")}
                        </td>
                        <td>{data.projectAllocation}</td>
                      </tr>
                    ))}
                     </> }
                   
                  </tbody>
            </table>
          </Col>
        </Row>
      </Card.Body>
    </div>
  );
};
export default ProfileProjectTab;
