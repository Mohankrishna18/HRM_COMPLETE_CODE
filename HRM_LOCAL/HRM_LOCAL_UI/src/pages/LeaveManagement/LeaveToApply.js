import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import axios from "../../Uri";
import { Row, Col } from "react-bootstrap";
import LeaveTable from "../LeaveManagement/LeaveTable";
import AddLeave from "../LeaveManagement/AddLeave";

function LeaveEmployee() {
  const [count, setCount] = useState();
  const [entitle, setEntitle] = useState([]);
  
  const [leave, setLeaveData] = useState([]);
  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);
  var array = [];
  const employeeid = userData1.data.employeeId;
  console.log(employeeid);

  useEffect(() => {
    axios.get(`leave/getLeaveHistoryByEmployeeid/${employeeid}`).then((res) => {
      console.log(res.data);
      res.data.map((m) => {
        console.log(m.numberofdays);
        array.push(m.numberofdays);
        console.log(array);
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
          sum += array[i];
        }
        setCount(sum);

        //  const len = m.length()
        //   for(i=0;i<=len;i+m.numberofdays){
        //     console.log(i)
        //   }
      });
      // setLeaveData(res.data);
    });
  }, []);
  useEffect(() => {
    loadData();
  },[])
  const loadData = () => {
    axios.get(`/leave/Annual`).then((res) => {
      console.log(res.data.noOfDays);
      setEntitle(res.data.noOfDays);
    });
  };
  useEffect(() => {
    axios.get(`leave/getLeaveHistoryByEmployeeid/${employeeid}`).then((res) => {
      console.log(res.data);
      setLeaveData(res.data);
    });
  }, []);
  // const loadData = () => {
  //   axios.get("/leave/annualleave").then((res) => {
  //     console.log(res);
  //   });
  // };
  // useEffect(() => {
  //   loadData();
  // }, []);

  console.log(count);
  return (
    <div>
      {/* <Container> */}
      <Card bg="white">
        <Row>
          <Col xs={6} md={8}>
            <Card.Body>
              <Card.Title>Leaves</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dashboard/Leaves
              </Card.Subtitle>
            </Card.Body>
          </Col>
          <Col xs={6} md={4}>
            <AddLeave />

            {/* <Button
onClick={handleShow}
style={{ backgroundColor: "#eb4509", float: "right" }}
>
<h4>Add Leave</h4>
{employee}{" "}
</Button> */}
          </Col>
        </Row>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row md={4}>
          <Col>
            <Card>
              <Card border="warning">
                <Card.Body>
                  <h5>
                    {" "}
                    <Card.Title>Remained Leaves</Card.Title>
                 
                       <Card.Subtitle className="mb-2 text-muted">{entitle-count}</Card.Subtitle>
                   
                   
                    {/* <Card.Text>8 Today</Card.Text> */}
                  </h5>
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card border="warning">
                <Card.Body>
                  <h5>
                    {" "}
                    <Card.Title>Loss Of Pay</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">3</Card.Subtitle>
                    {/* <Card.Text>12/60</Card.Text> */}
                  </h5>
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card border="warning">
                <Card.Body>
                  <h5>
                    {" "}
                    <Card.Title>Leaves Taken</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {count}
                    </Card.Subtitle>
                    {/* <Card.Text></Card.Text> */}
                  </h5>
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card border="warning">
                <Card.Body>
                  <h5>
                    {" "}
                    <Card.Title>Total Entitled</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {entitle}
                    </Card.Subtitle>
                    {/* <Card.Text>12</Card.Text> */}
                  </h5>
                </Card.Body>
              </Card>
            </Card>
          </Col>

          {/* <Col>

<Card>
<Card.Body>
<h5>
{" "}

<Card.Title>Total Entitled</Card.Title>
{/* <Card.Text>12</Card.Text> */}
          {/* </h5>
</Card.Body>
</Card>
</Col> */}
        </Row>
        <Row style={{ paddingTop: 20 }}>
          <LeaveTable />
        </Row>
        {/* </Container> */}
      </Card>
    </div>
  );
}

export default LeaveEmployee;
