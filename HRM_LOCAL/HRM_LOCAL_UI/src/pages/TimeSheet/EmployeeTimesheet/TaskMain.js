import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";

import Grid from "@mui/material/Grid";
import { Row, Col, Container, Card } from "react-bootstrap";
import axios from "../../../Uri";

import { Button, Modal, Stack } from "react-bootstrap";
import UpdateTask from "./UpdateTask";
import AddTask from "./AddTask";
import DeleteTask from "./DeleteTask";
import { date } from "yup/lib/locale";
//vipul

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
  const [deleteStatus, setDeleteStatus] = useState(true);
  const [updateStatus, setUpdateStatus] = useState(false);
  // const [status1, setStatus1] = useState(false);
  // const [viewStatus1, setViewStatus1] = useState(false);

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);

  };

  const pull_dataDelete = () => {
    
    setDeleteStatus(!deleteStatus);
    // console.log("Delete");

  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);

  };

  useEffect(() => {
    loadRoles();
  }, [addStatus, deleteStatus, updateStatus]);


  const loadRoles = async (e) => {
    const response = await axios.get("/task/getTasks");
    setData(response.data.data);
    console.log(response);
    console.log("dataupdated");
  };

  const [columns, setColumns] = useState([
   
    {
      title: "Task Name",
      field: "taskName",
      type: "text",
    },
    {
      title: "Task Type",
      field: "taskType",
      type: "text",
    },
    {
      title: "Status",
      field: "status",
      type: "text",
    },
    {
      title: "Project",
      field: "project",
      type: "text",
    },
    
    {
      title: "From Date",
      field: "fromDate",
       type:"date",
       dateSetting: { locale: "en-GB" }

      
      // type: { name: "date", options: { format: "DD/MM/YYYY" } },
    },
    {
      title: "To Date",
      field: "toDate",
      type: "date",
      dateSetting: { locale: "en-GB" }
      // type: { name: "date", options: { format: "DD/MM/YYYY" } },
    },
    {
      title: "Priority",
      field: "priority",
      type: "text",
    },
    {
      title: "Duration",
      field: "duration",
      type: "text",
    },
  ]);

  return (
    <Card style={{ paddingTop: "20px" }}>

      <Modal show={show}  size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color : "white" }}>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateTask updateOnboard={updateOnboard} func={pull_dataUpdate} handleClose={handleClose} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer> */}

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

        
            {/* <Container> */}
              <Row>
                <Col >
                  <Card.Title>Task Management</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                  Task Management
                  </Card.Subtitle>
                </Col>
                <Col>
                </Col>

                <Col md={{ span: 4, offset: 4 }}><AddTask func={pull_dataAdd} /></Col>
              </Row>
            {/* </Container> */}
            {/* <Container>
              <Row>
                <Col xs={12}>

                  <Grid style={{ borderBlockEndWidth: "2px" }}> */}
                    <MaterialTable
                      title="Task Details"
                      columns={columns}
                      style={{ color: "black", fontSize: "1rem" }}
                      data={data ? data : []}
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
                  {/* </Grid>
                </Col>
              </Row>
            </Container> */}
          
      </div>
      {/* <Example /> */}
    </Card>
  );
}
export default TaskMain;
