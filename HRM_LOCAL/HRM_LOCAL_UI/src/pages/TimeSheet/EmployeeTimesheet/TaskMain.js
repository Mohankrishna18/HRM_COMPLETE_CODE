import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";

import Grid from "@mui/material/Grid";
import { Row, Col, Container, Card } from "react-bootstrap";
import axios from "../../../Uri";

import { Button, Modal, Stack } from "react-bootstrap";
import UpdateTask from "./UpdateTask";
import AddTask from "./AddTask";
import DeleteTask from "./DeleteTask";

function TaskMain() {

  const [show, setShow] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  const handleClose = () => setShow(false);
  const deleteHandleClose = () => setDeleteUser(false);


  const handleShow = () => setShow(false);
  const viewHandleShow = () => setShow(false);


  const [updateOnboard, setUpdateOnboard] = useState({});
  const [deleteOnboard, setDeleteOnboard] = useState({});


  const [data, setData] = useState([]);
  // const [empdata, setEmpdata] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  // const [status1, setStatus1] = useState(false);
  // const [viewStatus1, setViewStatus1] = useState(false);

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);

  };

  const pull_dataDelete = () => {
    setDeleteStatus(!deleteStatus);

  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);

  };

  useEffect(() => {
    loadRoles();
  }, [addStatus, deleteStatus, updateStatus]);


  const loadRoles = async (e) => {
    const response = await axios.get("/user/getUsersData");
    setData(response.data.data);
    console.log(response.data.data);
  };

  const [columns, setColumns] = useState([
    {
      title: "Project",
      field: "employeeId",
      type: "text",
    },
    {
      title: "Task Name",
      field: "userName",
      type: "text",
    },
    {
      title: "Task Type",
      field: "roleName",
      type: "text",
    },
    {
      title: "Status",
      field: "roleName",
      type: "text",
    },
    {
      title: "Timesheet Date",
      field: "roleName",
      type: "text",
    },
    {
      title: "Start Date",
      field: "roleName",
      type: "text",
    },
    {
      title: "End Date",
      field: "roleName",
      type: "text",
    },
    {
      title: "Priority",
      field: "roleName",
      type: "text",
    },
    {
      title: "Hours",
      field: "roleName",
      type: "text",
    },
  ]);

  return (
    <div style={{ paddingTop: "20px" }}>

      <Modal show={show}  size="md"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color : "white" }}>
          <Modal.Title>Update User Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateTask updateOnboard={updateOnboard} func={pull_dataUpdate} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>

      </Modal>
      <Modal show={deleteUser} onHide={deleteHandleClose}
       size="md"
      backdrop="static"
      keyboard={false}
      centered>
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color : "white"}}>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteTask deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
        </Modal.Body>

      </Modal>
      <div responsive >

        
            <Container>
              <Row>
                <Col md={4}>
                  <Card.Title>Timesheet</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Timesheet Management / TImesheet{" "}
                  </Card.Subtitle>
                </Col>

                <Col md={{ span: 4, offset: 4 }}><AddTask func={pull_dataAdd} /></Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col xs={12}>

                  <Grid style={{ borderBlockEndWidth: "2px" }}>
                    <MaterialTable
                      title="Timesheet Details"
                      columns={columns}
                      style={{ color: "black", fontSize: "1rem" }}
                      data={data}
                      editable={{

                      }}
                      options={{
                        headerStyle: {
                          backgroundColor: "#FF9E14",
                          color: "white",
                          fontSize: "20px",
                        },
                        addRowPosition: "first",
                        actionsColumnIndex: -1,
                        //grouping: true,
                        exportButton: true,
                      }}
                      actions={[
                        {
                          icon: "button",

                          // tooltip: "Save User",
                          // onClick: (event, rowData) =>
                          //   alert("You want to delete " + rowData.firstName),

                        },
                      ]}
                      components={{
                        Action: (props) => (
                          <div>
                            <Stack direction="horizontal" gap={3}>
                              <Button
                              
                                variant="info"
                                onClick={(event) => {
                                  setShow(true);
                                  console.log(props);
                                  setUpdateOnboard(props.data);
                                }}
                              >
                                Edit
                              </Button>{" "}
                             
                              <Button
                                variant="primary"
                                onClick={(event) => {
                                  setDeleteUser(true);
                                  console.log(props);
                                  setDeleteOnboard(props.data);
                                }}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </div>
                        ),
                      }}
                    />
                  </Grid>
                </Col>
              </Row>
            </Container>
          
      </div>
      {/* <Example /> */}
    </div>
  );
}
export default TaskMain;