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

function TaskMain(props) {

  console.log(props);
  console.log(props);
  const projectId = props.projectId;
  
  let status = props.UserStory;
  const [show, setShow] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [userIdData, setUserIdData] = useState([]);

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

  // useEffect(() =>
  // {
  //  console.log(props.props)
  // },
  // []
  // )

  useEffect(() => {
    // setStoryData(props.props)
    loadRoles();
    // console.log(props.props)
    loadByUserID();
  }, [addStatus, deleteStatus, updateStatus, status]);

  const loadRoles = async (e) => {
    const response = await axios.get("/task/getTasks");
    setData(response.data.data);
    console.log(response);
    console.log("dataupdated");
  };

  const loadByUserID = () => {
    const response = axios
      .get(`/task/getUserId/${props.UserStory}`)
      .then((res) => {
        console.log(res);
        setUserIdData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("dataupdated");
  };

  const [columns, setColumns] = useState([
    {
      title: "User Story Id",
      field: "userId",
      type: "text",
    },
    {
      title: "User story",
      field: "userStory",
      type: "text",
    },
    {
      title: "Task Title",
      field: "taskTitle",
      type: "text",
    },
    {
      title: "Priority",
      field: "priority",
      type: "text",
    },
    {
      title: "Status",
      field: "status",
      type: "text",
    },
    // {
    //   title: "Actual Hours",
    //   field: "actualHours",
    //   type: "text",
    // },
    {
      title: "Estimated Hours",
      field: "estimatedHours",
      type: "text",
    },

    {
      title: "Planned Start Date",
      field: "plannedStartDate",
      type: "date",
      dateSetting: { locale: "en-GB" },

      // type: { name: "date", options: { format: "DD/MM/YYYY" } },
    },
    {
      title: "Planned End Date",
      field: "plannedEndDate",
      type: "date",
      width: "100px",
      dateSetting: { locale: "en-GB" },
      // type: { name: "date", options: { format: "DD/MM/YYYY" } },
    },
    {
      title: "Assigned To",
      field: "assignedTo",
      type: "text",
      dateSetting: { locale: "en-GB" },
      // type: { name: "date", options: { format: "DD/MM/YYYY" } },
    },
  ]);

  return (
    <Card style={{ paddingTop: "20px" }}>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#FF9E14", color: "white" }}
        >
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateTask
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
            projectId={projectId}
            
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer> */}
      </Modal>
      <Modal
        show={deleteUser}
        onHide={deleteHandleClose}
        size="md"
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#FF9E14", color: "white" }}
        >
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteTask
            deleteOnboard={deleteOnboard}
            func={pull_dataDelete}
            deleteHandleClose={deleteHandleClose}
          />
        </Modal.Body>
      </Modal>
      <div responsive>
        <Row>
          <Col
            style={{
              paddingTop: "10px",
              paddingRight: "10px",
              paddingLeft: "30px",
              paddingBottom: "10px",
            }}
          >
            <Card.Title>Task Management</Card.Title>
          </Col>

          <Col md={{ span: 4, offset: 4 }}>
            <AddTask
              func={pull_dataAdd}
              userId={props.UserStory}
              projectName={props.projectName}
              projectId={projectId}
              value1={props.value1}
            />
          </Col>
        </Row>
        {/* </Container> */}
        {/* <Container>
              <Row>
                <Col xs={12}>

                  <Grid style={{ borderBlockEndWidth: "2px" }}> */}
        <MaterialTable
          title="Task Details"
          columns={columns}
          style={{ color: "black", fontSize: "13px" }}
          // data={userIdData? userIdData : []}
          data={userIdData}
          editable={{}}
          options={{
            headerStyle: {
              backgroundColor: "#FF9E14",

              color: "white",

              fontSize: "16px",

              paddingTop: "5px",

              paddingBottom: "2px",
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
