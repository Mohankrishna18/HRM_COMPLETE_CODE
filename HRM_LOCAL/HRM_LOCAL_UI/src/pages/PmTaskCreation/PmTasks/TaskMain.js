import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";

import Grid from "@mui/material/Grid";
import { Row, Col, Container, Card } from "react-bootstrap";
import axios from "../../../Uri";
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
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
    // {
    //   title: "User Id",
    //   field: "userId",
    //   type: "text",
    // },
    // {
    //   title: "User story",
    //   field: "userStory",
    //   type: "text",
    // },
    {
      title: "Task Title",
      field: "taskTitle",
      type: "text",
    },
    // {
    //   title: "Priority",
    //   field: "priority",
    //   type: "text",
    // },
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
      dateSetting: { locale: "en-GB" },
      // type: { name: "date", options: { format: "DD/MM/YYYY" } },
    },
    {
      title: "Priority",
      field: "priority",
      type: "text",
    },
    {
      title: "Assign To",
      field: "assignedTo",
      type: "text",
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
          style={{backgroundColor: "#FF9E14",paddingTop:"5px",paddingBottom:"5px",color:"white" }}
        >
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateTask
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
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
        {/* <Container> */}
        <Row>
          <Col>
            <Card.Title>Task Management</Card.Title>
          </Col>

          <Col md={{ span: 4, offset: 4 }}>
            <AddTask func={pull_dataAdd} />
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
          style={{ color: "black", fontSize: "14px" }}
          data={data ? data : []}
          editable={{}}
          options={{
            headerStyle: {
              backgroundColor: "#f5896e",
              color: "white",
              fontSize: "12px",
              //height: "10px",
              //fontWeight: 'bold'
          },
          rowStyle: {
              fontSize: 14,
          },
            pageSize: 25,

            pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

            maxBodyHeight: 585,

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
                  <FiEdit />
                  </Button>{" "}
                  <Button
                    variant="danger"
                    style={{ Size: "5px" }}
                    onClick={(event) => {
                      setDeleteUser(true);
                      console.log(props);
                      setDeleteOnboard(props.data);
                    }}
                  >
                 <RiDeleteBin6Line />
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
