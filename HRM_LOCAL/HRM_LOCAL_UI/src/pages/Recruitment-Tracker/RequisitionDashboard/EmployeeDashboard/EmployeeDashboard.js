import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Container,
  Form,
  Table,
  NavLink,
} from "react-bootstrap";
import "./EmployeeDashboard.css";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiBriefcaseAlt, BiHome } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
import axios from "../../../../Uri";
import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";
import moment from "moment";
import EmployeeDashboardTask from "../EmployeeDashboard/EmployeeDashboardTask";
// import './PMOCard.css'
import "../../../../App.css";

const EmployeeDashboard = () => {
  const userData = sessionStorage.getItem("userdata");
  // console.log(userData);
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;
  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);

  const [imge, setImge] = useState([]);
  const [prog, setProg] = useState([]);
  const [projects, setProjects] = useState([]);
  const [date1, setDate] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [leave, setLeave] = useState([]);
  const [holiday, setHoliday] = useState([]);
 // const [data, setData] = useState([]);
  const [conDate,setConDate] = useState([]);

  console.log(date1);
 
  const counts = {};

  const sampleArray = date1;
 
 
  console.log(sampleArray);
  sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  console.log(counts);
 
 
 

  let mark = []
  const daaa = new Date();
  let month =mark[daaa.getMonth()];
  console.log(month);

 

   console.log(daaa.getMonth()+1);
// var uniq=daaa.map(s.getMonth());
// console.log(daaa)

  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
      .then((response) => {
        setGetEmployeeDetails(response.data.data);
      });
  }, []);
  console.log(getEmployeeDetails);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  console.log(date);

  // useEffect(() => {
  //     axios
  //       .get(`/task/getByStatus/${employeeid}/In progress`)
  //       .then((response) => {
  //         setProg(response.data);
  //       });
  //   }, []);

  // console.log(prog)

  useEffect(() => {
    axios.get(`/clientProjectMapping/getAllProjects`).then((response) => {
      setProjects(response.data.data);
    });
  }, []);
  console.log(projects);

  //converted date formate
   
 
  useEffect(() => {
    axios.get(`/leave/getAllMonths/${employeeid}`).then((response) => {
      setDate(response.data);
    });
  }, []);
  console.log(conDate);
 
  console.log(date1);
  useEffect(() => {
    axios.get(`emp/leavespermonth/${employeeid}`).then((response) => {
      setLeaves(response.data);
    });
  }, []);
  console.log(leaves);
  useEffect(() => {
    axios
      .get(`leave/getcountLeavesofApplyingLeaves/${employeeid}`)
      .then((response) => {
        setLeave(response.data);
      });
  }, []);
  console.log(leave);
  useEffect(() => {
    axios.get(`/holiday/getDataByYearAndMonth/2022/1`).then((response) => {
      setHoliday(response.data);
    });
  }, []);
  console.log(holiday);

  let remainingLeave = leave - leaves;
  console.log(remainingLeave);
  // useEffect(() => {
  //   axios
  //     .get(`/task/getByStatus/${employeeid}/Open`)
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // }, []);
  // console.log(data)

  //   const tasks = tasksList;
  //   const tasksList = tasks.map((tasksList) =>
  //     {tasksList}
  //   )
  //   console.log(tasksList.projectName)

  const project = prog.map((projectName) => projectName.projectName);
  console.log(project);

  const taskTitle = prog.map((taskTitle) => taskTitle.taskTitle);
  console.log(taskTitle);
  const plannedStartDate = prog.map(
    (plannedStartDate) => plannedStartDate.plannedStartDate
  );
  console.log(plannedStartDate);
  const plannedEndDate = prog.map(
    (plannedEndDate) => plannedEndDate.plannedEndDate
  );
  console.log(plannedEndDate);
  const assignDate = prog.map((assignDate) => assignDate.assignDate);
  console.log(assignDate);
  const holidayTitle = holiday.map((holidayTitle) => holidayTitle.holidayTitle);
  console.log(holidayTitle);
  const holidayDate= holiday.map((holidayDate) => holidayDate.holidayDate);
  console.log(holidayDate);
  const history = useHistory();
  return (
    <div
      className="fnt"
      style={{
        fontStyle: "Montserrat",
        fontFamily: "Montserrat",
        fontWeight: "150px",
      }}
    >
      {/* First top row */}

      <Row>
        <Card style={{ paddingBlock: "20px" }}>
          <Row>
            {/* for pic */}
            <Col md="1">
              {" "}
              <Avatar
                src={`data:image/jpeg;base64,${imge.url}`}
                sx={{ width: 76, height: 76 }}
                style={{ variant: "rounded", fontSize: "95px" }}
              />{" "}
            </Col>

            {/* for name & details */}
            <Col style={{ paddingLeft: "20px" }}>
              <h3>
                Welcome , {getEmployeeDetails.firstName}{" "}
                {getEmployeeDetails.lastName}
              </h3>

              <h5 style={{ color: "#666666" }}>{date}</h5>
            </Col>
          </Row>
        </Card>
      </Row>

      <br></br>

      {/* Second row */}
      <Row>
        {/* Left side Content */}

        <Col sm={7}>
          <Row>
            {" "}
            <h5>Announcements </h5>
          </Row>

          <br></br>

          {/* 2nd card */}
          {/* <Row>
            {' '}
            <h5> Tasks </h5>
          </Row> */}
          <Row>
            {" "}
            <h5> TASKS </h5>
            <Col>
              <br></br>
              <Row>
                <Col>
                  {/* <Table style={{ width: '750px' }}>
                  <thead>
                    <tr>    
                      <th>Projects</th>
                      <th>Task Title</th>
                      <th> Planned Start Date</th>
                      <th> Planned End Date</th>
                      <th> Actual Start Date</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>{project}</td>
                      <td>{taskTitle}</td>
                      <td>{plannedStartDate}</td>
                      <td>{plannedEndDate}</td>
                    </tr>
                   
                  </tbody>
                </Table> */}
                  <EmployeeDashboardTask />
                </Col>
              </Row>
            </Col>
          </Row>

          <br></br>
        </Col>

        {/* Right side content */}
        <Col md={5}>
          <Row>
            {" "}
            <h6
              style={{
                color: "#4F4F4F",
                paddingLeft: "15px",
                fontSize: "15px",
                fontWeight: "bold",
                paddingTop: "65px",
              }}
            >
              {" "}
              PROJECTS{" "}
            </h6>
          </Row>
          <Row>
            <Col>
              <Card>
                <Table>
                  <thead>
                    <tr>
                      <th>Projects</th>
                      <th>Allocation Start Date</th>
                      <th> Allocation End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((data) => (
                      <tr>
                        <td>{data.projectName}</td>
                        <td>{data.startDate}</td>
                        <td>{data.endDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>

          <br></br>

          {/* leave row started */}

          <Row>
            {" "}
            <h6
              style={{
                color: "#4F4F4F",
                paddingLeft: "15px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              YOUR LEAVES
            </h6>{" "}
          </Row>
          <Row>
            <Col>
              <Card>
                {/* 1st row */}
                <Row>
                  <Col
                    align="center"
                    style={{ padding: "10px", paddingLeft: "20px" }}
                  >
                    <h6 align="center">REMAINING LEAVES - {remainingLeave}</h6>
                  </Col>

                  <Col align="center" style={{ padding: "10px" }}>
                    <Button
                      onClick={(event) => {
                        history.push("/app/IntegrateLeaveToApply");
                      }}
                    >
                      {" "}
                      Apply Leave
                    </Button>
                  </Col>

                  <Col align="center" style={{ paddingBlock: "10px" }}>
                    <h6>TOTAL LEAVES - {leaves}</h6>
                  </Col>
                </Row>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>MONTH</th>
                      <th>LEAVES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>january</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Feb</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Mar</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>April</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>May</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>June</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>July</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>August</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>September</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>October</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>November</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>December</td>
                      <td>4</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* second row */}

      <Row>
        {/* Left side Content */}

        <Col sm={7}></Col>

        {/* Right side content */}
        <Col md={5}>
          <br></br>
          <br></br>

          {/* HOLIDAYS this month */}

          <Row>
            {" "}
            <h6
              style={{
                color: "#4F4F4F",
                paddingLeft: "15px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              UPCOMING HOLIDAYS{" "}
            </h6>{" "}
          </Row>
          <Row>
            <Col>
              <Card style={{ paddingBlock: "10px" }}>
                <h6 align="center" style={{ fontSize: "18px" }}>
                 {holidayTitle} {holidayDate}
                </h6>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <br></br>
    </div>
  );
};

export default EmployeeDashboard;