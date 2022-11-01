import React, { useEffect, useState } from "react";
import { Button, Modal, Tab, Table, Tabs, Row, Col, Card } from "react-bootstrap";
import axios from "../../../../Uri";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import AvtarComponent from "../../../../commonComponents/AvtarComponent";
import Moment from 'react-moment';
import Graph from "./Graph";



function AllEmployees(props) {
  const [data, setData] = useState([]);
  const [departmentName, setDepartmentName] = useState([]);
  const [getDepartmentName, setGetDepartmentName] = useState([]);
  const [empData, setEmpData] = useState([]);
  const [value, setValue] = React.useState("1");
  const [viewShow, setViewShow] = useState(false);
  const [viewOnboard, setViewOnboard] = useState({});
  const viewHandleClose = () => setViewShow(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [renderTable, setRenderTable] = useState(false);
  const [changingStatus, setChangingStatus] = useState(false);
  console.log(departmentName)

  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);
  console.log(data)
  const empcount = data.length;
  const female = data ? data.filter((item) => item.gender === "female") : 0
  const male = data ? data.filter((item) => item.gender === "male") : 0


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartmentName(res.data);
    console.log(res.data);
  };



  const [taa, setTaa] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getEmployeesByDepartment/TAA")
      .then((res) => {
        setTaa(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);

  const [hr, setHr] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getEmployeesByDepartment/Human Resource(HR)")
      .then((res) => {
        setHr(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);

  const [tag, setTag] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getEmployeesByDepartment/TAG")
      .then((res) => {
        setTag(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);

  const [pmo, setPmo] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getEmployeesByDepartment/PMO")
      .then((res) => {
        setPmo(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);

  const [oracle, setOracle] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getEmployeesByDepartment/Oracle")
      .then((res) => {
        setOracle(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);

  const [digital, setDigital] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getEmployeesByDepartment/Digital")
      .then((res) => {
        setDigital(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);

  const [it, setIt] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getEmployeesByDepartment/IT")
      .then((res) => {
        setIt(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);

  // to get employee data by departments
  const getEmpData = () => {
    if (changingStatus === true) {
      setRenderTable(false);
    }
    else {
      axios
        .get(`/emp/getEmployeesByDepartment/${getDepartmentName}`)
        .then((res) => {
          setEmpData(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          // toast.error("Server Error")
        });
      setRenderTable(true);
    }
  }

  var today = new Date(data.dateOfJoining);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  var doj = dd + '-' + mm + '-' + yyyy;
  console.log(doj);



  return (
    <><div className="responsive" >
      <Row >
        {/* <Col md="2">
          <Card border="warning">
            <Card.Body>
              <h6>
                {" "}
                <Card.Title>All Employees</Card.Title> */}

        {/* <Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle> */}

        {/* {data.length > 0 ? (<Card.Subtitle className="mb-2 text-muted">{data.length}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}

              </h6>
            </Card.Body>
          </Card>
        </Col> */}
        <Col>
          <Card class="shadow p-3 bg-light" style={{ height: "25vh", width: "20vh", paddingTop: "25%", fontSize: "20px" }}>
            <Card.Body >
              {empcount === 0 ? (<Card.Subtitle className="mb-2 text-muted">0 Employees</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">Employees : {empcount}</Card.Subtitle>)}
              {data > 0 ? (<Card.Subtitle className="mb-2 text-muted">{data} Male</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">Male : {male.length} </Card.Subtitle>)}
              {data > 0 ? (<Card.Subtitle className="mb-2 text-muted">{data}  Female</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">Female : {female.length} </Card.Subtitle>)}
            </Card.Body>
          </Card>
        </Col>
        <Col md="8" style={{ height: "25vh" }}>
          <Graph />
        </Col>
        {/* <Col md="2">
          <Card border="warning">
            <Card.Body>
              <Row>
                <Col>
                  <h6>TAA {""} : </h6>
                </Col>
                <Col><h6 style={{ paddingTop: "6%" }}>
                  {taa.length > 0 ? (<Card.Subtitle className="mb-2 text-muted">{taa.length}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6>PMO{""} : </h6>
                </Col>
                <Col><h6 style={{ paddingTop: "6%" }}>
                  {pmo.length > 0 ? (<Card.Subtitle className="mb-2 text-muted">{pmo.length}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                </h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2">
          <Card border="warning">
            <Card.Body>
              <Row>
                <Col>
                  <h6>HR : </h6>
                </Col>
                <Col><h6 style={{ paddingTop: "6%" }}>
                  {hr.length > 0 ? (<Card.Subtitle className="mb-2 text-muted">{hr.length}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6>IT {""}: </h6>
                </Col>
                <Col><h6 style={{ paddingTop: "6%" }}>
                  {it.length > 0 ? (<Card.Subtitle className="mb-2 text-muted">{it.length}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                </h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card border="warning">
            <Card.Body>
              <Row>
                <Col>
                  <h6>ORACLE : </h6>
                </Col>
                <Col><h6 style={{ paddingTop: "6%" }}>
                  {oracle.length > 0 ? (<Card.Subtitle className="mb-2 text-muted">{oracle.length}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6>DIGITAL : </h6>
                </Col>
                <Col><h6 style={{ paddingTop: "6%" }}>
                  {digital.length > 0 ? (<Card.Subtitle className="mb-2 text-muted">{digital.length}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                </h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col> */}
        <Col>
        <Card class="shadow p-3 bg-light" >
          <Card.Body>
            <Row style={{ paddingTop: "12%" }}>
              <input type="text" class="form-control" placeholder="Employee Name" />
            </Row><Row style={{ paddingTop: "12%" }}>

              <select class="form-control" placeholder="Select Department"
                onChange={(e) => {
                  console.log(e.target.value);
                  if (e.target.value === "ALL") {
                    setChangingStatus(true)
                  }
                  setGetDepartmentName(e.target.value);
                  console.log(getDepartmentName);
                }}>
                <option value={"ALL"}>All</option>
                {departmentName.map((departmentName) => (
                  <option value={departmentName.departmentName}>{departmentName.departmentName}</option>
                ))}
              </select>
            </Row>

            <Row style={{ paddingTop: "12%" }}>
              <button type="button" class="btn btn-success" style={{ width: 200 }} onClick={getEmpData} >Search</button>
            </Row>
          </Card.Body></Card>
          </Col>

      </Row>

      <Row>
        <div className="responsive" style={{ paddingTop: "2%" }}>
          <Modal show={viewShow} onHide={viewHandleClose} size="xl">
            <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
              <Modal.Title>Onboarding Form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {/* <ApprovalView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          /> */}
            </Modal.Body>
          </Modal>

          {/* <HRConfirmation /> */}
          {renderTable == false ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>

                </tr>
              </thead>

              <tbody className="scroll">
                {data.map((data) => (
                  <tr>
                    <td><AvtarComponent data={data} /></td>
                    <td>{data.employeeId}</td>
                    <td>{data.email}</td>
                    <td>{data.primaryPhoneNumber}</td>
                    {/* <td><Moment format="DD/MM/YYYY">
                      {data.dateOfJoining}
                    </Moment></td> */}
                    <td>{data.designationName}</td>
                    {/* <Profilebadge imageUrl={data.url} /> */}
                    {/* <td>
                      <Row>
                        <Button
                          variant="white "
                          className="rounded-pill"
                          onClick={(event) => {
                            setViewShow(true);
                            console.log(props);
                            setViewOnboard(props.data);
                          }}
                        >{" "}
                          <AiTwotoneEdit /> Edit
                        </Button> */}
                    {/* <Button
                    variant="white "
                    className="rounded-pill"
                    onClick={(event) => {
                      setViewShow(true);
                      console.log(props);
                      setViewOnboard(props.data);
                    }}
                  > {" "}
                    <AiFillDelete/>Delete
                  </Button> */}
                    {/* </Row>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>DOJ</th>
                  <th>Role</th>

                </tr>
              </thead>

              <tbody className="scroll">
                {empData.map((data) => (
                  <tr>
                    <td><AvtarComponent data={data} /></td>
                    <td>{data.employeeId}</td>
                    <td>{data.email}</td>
                    <td>{data.primaryPhoneNumber}</td>
                    <td><Moment format="DD/MM/YYYY">
                      {data.dateOfJoining}
                    </Moment></td>
                    <td>{data.designationName}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          )}

        </div>
      </Row>
    </div>
    </>
  );
}

export default AllEmployees;