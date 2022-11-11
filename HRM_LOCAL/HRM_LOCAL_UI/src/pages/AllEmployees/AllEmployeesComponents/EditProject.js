import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import { matches } from "lodash";
import { Image } from "react-bootstrap";
import axios from "../../../Uri";
import { split } from "lodash";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
// import PersonalDetails from "./ProfilePersonalDetailsTab";
import { Button, ProgressBar } from "react-bootstrap";
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

const EditProject = () => {

    const localitem = localStorage.getItem('item')
    console.log(localitem)

    const params=useParams();
    console.log(params.id);

  const userData = sessionStorage.getItem("userdata");
  // console.log(userData);
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;
  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);
  const [project, setProject] = useState([]);
  
  const[data,setData] = useState([]);
  //var dateTime = getEmployeeDetails.dateOfJoining;


  const [imge, setImge] = useState([]);
  //commit
  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${localitem}`)
      .then((response) => {
        setGetEmployeeDetails(response.data.data);
      });
  }, []);
  console.log(getEmployeeDetails);

  useEffect(() => {
    axios
      .get(`/emp/files/${localitem}`)
      .then((response) => {
        console.log(response.data);
        setImge(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("something wrong");
      });
  }, []);
  console.log(imge);

  const [projects, setProjects] = useState(false);
 

  useEffect(() => {
    axios
      .get(`/emp/getUserClientDetailsbyEmployeeId/${localitem}`)
      .then((response) => {
        setProjects(response.data);
      });
  }, []);
  console.log(projects);

  useEffect(() => {
    axios
      .get(
        `/clientProjectMapping/getActiveProjectsByEmpIdForEmployee/Active/${localitem}`
      )
      .then((response) => {
        setProject(response.data);
      });
  }, []);
  console.log(project);
  const [proj, setProj] = useState([]);
  useEffect(() => {
    axios.get(`/clientProjectMapping/getAllProjects`).then((response) => {
      setProj(response.data.data);
    });
  }, []);
  console.log(proj);
  

  return (
    <div style={{ paddingLeft: 20, paddingBottom: 0 }}>
      <Card.Title>
        <h5>Projects History:</h5>
      </Card.Title>
      <Card.Body>
        <Row>
          <Col md={12}>
            <table class="table">
              <thead>
                <tr>
               
                  <th scope="col">Project Name</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Reporting Manager</th>
                
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                </tr>
              </thead>

              <tbody>
                    {proj.map((data) => (
                      <tr>
                        <td>{data.projectName}</td>
                        <td>{data.clientName}</td>
                        <td>{data.projectManager}</td>
                        <td dataSort = {true}   >
                        {data.startDate.split("T0")[0].split('-').reverse().join('/')}
                        </td>
                        <td>
                          {data.endDate.split("T0")[0].split('-').reverse().join('/')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
            </table>
          </Col>
        </Row>
      </Card.Body>
    </div>
  );
};
export default EditProject;
