import React, { useEffect, useState } from "react";
import { Button, Modal, Tab, Table, Tabs, Row, Col, Card } from "react-bootstrap";
import axios from "../../../../Uri";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";


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



  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
        console.log(res.data.data.employeeid);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);
  console.log(data);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartmentName(res.data);
    console.log(res.data);
  };



  const [taa, setTaa] = useState([]);
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

  const [hr, setHr] = useState([]);
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


  const [tag, setTag] = useState([]);
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

  const [pmo, setPmo] = useState([]);
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

  const [oracle, setOracle] = useState([]);
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

  const [digital, setDigital] = useState([]);
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

  const [it, setIt] = useState([]);
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

    
    // to get employee data by departments
    const getEmpData = () => {
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
  }



  return (
    <><div className="responsive" >
      <Row >
        <Col md="2">
            <Card >
              <Card.Body>
                <h6>
                  {" "}
                  <Card.Title>All Employees</Card.Title>

                  {/* <Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle> */}

                  {data > 0 ? (<Card.Subtitle className="mb-2 text-muted">{data}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}

                </h6>
              </Card.Body>
          </Card>
        </Col>
        <Col md="2">
            <Card >
              <Card.Body>
                <Row>
                  <Col>
                    <h6>TAA {""} : </h6>
                  </Col>
                  <Col><h6 style={{ paddingTop: "6%" }}>
                    {taa > 0 ? (<Card.Subtitle className="mb-2 text-muted">{taa}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                  </h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>PMO{""} : </h6>
                  </Col>
                  <Col><h6 style={{ paddingTop: "6%" }}>
                    {pmo > 0 ? (<Card.Subtitle className="mb-2 text-muted">{pmo}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                  </h6>
                  </Col>
                </Row>
              </Card.Body>
          </Card>
        </Col>
        <Col md="2">
            <Card >
              <Card.Body>
                <Row>
                  <Col>
                    <h6>HR : </h6>
                  </Col>
                  <Col><h6 style={{ paddingTop: "6%" }}>
                    {hr > 0 ? (<Card.Subtitle className="mb-2 text-muted">{hr}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                  </h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>IT {""}: </h6>
                  </Col>
                  <Col><h6 style={{ paddingTop: "6%" }}>
                    {it > 0 ? (<Card.Subtitle className="mb-2 text-muted">{it}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                  </h6>
                  </Col>
                </Row>
              </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <h6>ORACLE : </h6>
                  </Col>
                  <Col><h6 style={{ paddingTop: "6%" }}>
                    {oracle > 0 ? (<Card.Subtitle className="mb-2 text-muted">{oracle}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                  </h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>DIGITAL : </h6>
                  </Col>
                  <Col><h6 style={{ paddingTop: "6%" }}>
                    {digital > 0 ? (<Card.Subtitle className="mb-2 text-muted">{digital}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                  </h6>
                  </Col>
                </Row>
              </Card.Body>   
          </Card>
        </Col>
      </Row>

      <Row>
        <div className="responsive" style={{ paddingTop: "1%" }}>
          <form>
            <div class="form-group">
              <Row>
                <Col>
                  <input type="text" class="form-control" placeholder="Employee ID" />
                </Col><Col>
                  <input type="text" class="form-control" placeholder="Employee Name" />
                </Col><Col>

                  <select class="form-control" placeholder="Select Department"
                    onChange={(e) => setGetDepartmentName(e.target.value)}>
                    <option >select department</option>
                    {departmentName.map((departmentName) => (
                      <option value={departmentName.departmentName}>{departmentName.departmentName}</option>
                    ))}
                  </select>
                </Col>

                <Col>
                  <button type="button" class="btn btn-success" style={{ width: 300 }} onClick={getEmpData} >Search</button>
                </Col>
              </Row>
            </div>
          </form>
        </div>
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
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Join Date</th>
                <th>Role</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((data) => (
                <tr>
                  <td>{data.fullName}</td>
                  <td>{data.employeeId}</td>
                  <td>{data.email}</td>
                  <td>{data.primaryPhoneNumber}</td>
                  <td>{data.dateOfJoining}</td>
                  <td>{data.designationName}</td>
                  {/* <Profilebadge imageUrl={data.url} /> */}
                  <td>
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
                      </Button>
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
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </div>
    </>
  );
}

export default AllEmployees;
