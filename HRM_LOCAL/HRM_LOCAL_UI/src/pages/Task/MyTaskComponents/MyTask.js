import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";

import Grid from "@mui/material/Grid";
import { Row, Col, Container, Card } from "react-bootstrap";
import axios from "../../../Uri";

import { Button, Modal, Stack } from "react-bootstrap";
import UpdateTask from "./UpdateTask";
import AddTask from "./AddTask";
//import Task from "./Task"

//import MyTaskView from "./MyTaskView";
// import DeleteTask from "./DeleteTask";
// import { date } from "yup/lib/locale";
function MyTask() {
 

  const [show, setShow] = useState(false);
  // const [deleteUser, setDeleteUser] = useState(false);

  const handleClose = () => setShow(false);
  // const deleteHandleClose = () => setDeleteUser(false);

 


  const handleShow = () => setShow(false);
  const viewHandleShow = () => setShow(false);


  const [updateOnboard, setUpdateOnboard] = useState({});
  // const [deleteOnboard, setDeleteOnboard] = useState({});


  const [data, setData] = useState([]);
  // const [empdata, setEmpdata] = useState([]);

  const sessionData = JSON.parse(sessionStorage.getItem('userdata'));
    const employeeId = sessionData.data.employeeId;
    const assignedTo = sessionData.data.assignedTo;
    console.log(employeeId);
    console.log(assignedTo);

  useEffect(()=>{loadByUserID()}
  ,[])
     
    const loadByUserID =  () => {
      const response =  axios.get(`/task/getTaskByAssign/${employeeId}`)
      .then((res)=>{
        console.log(res.data)
        setData(res.data)
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
       
    // }
    // else if(assignedTo!=employeeId){
    //   useEffect(() => {
    // "Datanotfound";

    // }, []);
     
    // }
   
  const [addStatus, setAddStatus] = useState(false);
  // const [deleteStatus, setDeleteStatus] = useState(true);
  const [updateStatus, setUpdateStatus] = useState(false);
  // const [status1, setStatus1] = useState(false);
  // const [viewStatus1, setViewStatus1] = useState(false);

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);

  };

  // const pull_dataDelete = () => {
   
  //   setDeleteStatus(!deleteStatus);
  //   // console.log("Delete");

  // };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);

  };

  useEffect(() => {
      loadRoles();
    }, [addStatus, updateStatus]);


   const loadRoles = async (e) => {
     const response = await axios.get("/getTaskByAssign/{assignedTo}");
    setData(response.data.data);
    console.log(response);
     console.log("dataupdated");
   };
   console.log(data)

  const [columns, setColumns] = useState([
   
   
    // {
    //   title: "UserStoryId",
    //   field: "userId",
    //   type: "text",
    // },
    // {
    //   title: "User story",
    //   field: "userStory",
    //   type: "text",
    // },
    {
      title: "projectName",
      field: "projectName",
   
    },
    {
      title: "Userstory",
      field: "userStory",
      type: "text",
    },
    {
      title: "TaskTitle",
      field: "taskTitle",
      type: "text",
    },
    {
      title: "TaskType",
      field: "taskType",
      type: "text",
    },
   
    {
      title:"EstimatedHours",
      field:"estimatedHours",
      type:"text"
    },


    // {
    //   title: "ActualHours",
    //   field: "actualHours",
    //   type: "text",
    // },
    {
      title:"PlannedStartdate",
      field:"plannedStartDate",
      type:"date",
      dateSetting: { locale: "en-GB" }
    },
    {
    title:"PlannedEnddate",
      field:"plannedEndDate",
      type:"date",
      dateSetting: { locale: "en-GB" }
    },
    {
    title:"AssignedDate",
    field:"assignDate",
    type:"date",
    dataSetting: { locale: "en-GB"}
    },
   
   
   
    {
      title: "Priority",
      field: "priority",
      type: "text",
      dateSetting: { locale: "en-GB" }
      // type: { name: "date", options: { format: "DD/MM/YYYY" } },
    },
    {
      title: "Status",
      field: "status",
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
         <UpdateTask 
         updateOnboard={updateOnboard} 
         func={pull_dataUpdate} 
         handleClose={handleClose}
         assignTo={employeeId} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer> */}

      </Modal>
      {/*<Modal show={viewUser} onHide={viewHandleClose}
       size="md"
      backdrop="static"
      keyboard={false}
      centered>
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color : "white"}}>
          <Modal.Title>view User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ViewTask viewOnboard={viewOnboard} func={pull_dataView} viewHandleClose={viewHandleClose} />
        </Modal.Body>
  </Modal>*/}
     
      {/* <Modal show={deleteUser} onHide={deleteHandleClose}
       size="md"
      backdrop="static"
      keyboard={false}
      centered>
         <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color : "white"}}>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          // {/* <DeleteTask deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
        </Modal.Body>
</Modal> */}
      <div responsive >

       
            {/* <Container> */}
              <Row>
                <Col style={{textAlign:"left",paddingLeft:"35px"}}>
                  <Card.Title >My Task</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
     
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
                      title="Tasks list"
                      columns={columns}
                      style={{ color: "black", fontSize: "13px",paddingLeft:"-1px"}}
                      data={data?data:[]}
                      editable={{

                      }}
                      options={{
                        headerStyle: {
                          backgroundColor: "#FF9E14",

                          color: "white",


                          fontSize: "16px",


                          paddingTop:"5px",

                          paddingBottom:"2px",

                         

                        },

                        pageSize: 10,

                        pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

                        maxBodyHeight: 450,

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
                             
                              {/* <Button
                                variant="primary"
                                onClick={(event) => {
                                  setDeleteUser(true);
                                  console.log(props);
                                  setDeleteOnboard(props.data);
                                }}
                              >
                                Delete
                              </Button> */}
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
export default MyTask;