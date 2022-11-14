import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";

import Grid from "@mui/material/Grid";
import { Row, Col, Container, Card } from "react-bootstrap";
import axios from "../../../Uri";

import { Button, Modal, Stack } from "react-bootstrap";

import RoleUpdate from "./RoleUpdate";
import RoleDelete from "./RolesDelete";
import AddRole from "./AddRole";

function RolesMain() {

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
    const response = await axios.get("/user/getAllRoles");
    setData(response.data.data);
    console.log(response.data.data);
  };

  const [columns, setColumns] = useState([
    {
      title: "Role Name",
      field: "roleName",
      type: "text",
    },
    {
      title: "Module-1",
      field: "permission1",
      type: "text",
    },
    {
      title: "Module-2",
      field: "permission2",
      type: "text",
    },
    {
      title: "Module-3",
      field: "permission3",
      type: "text",
    },
    {
      title: "Module-4",
      field: "permission4",
      type: "text",
    },
    {
      title: "Module-5",
      field: "permission5",
      type: "text",
    },
    {
      title: "Module-6",
      field: "permission6",
      type: "text",
    },
    {
      title: "Module-7",
      field: "permission7",
      type: "text",
    },{
      title: "Module-8",
      field: "permission8",
      type: "text",
    },
    {
      title: "Module-9",
      field: "permission9",
      type: "text",
    },
    {
      title: "Module-10",
      field: "permission10",
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
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white" }}>
          <Modal.Title>Update Role & App Permission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RoleUpdate updateOnboard={updateOnboard} func={pull_dataUpdate} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor: "#B6B6B4",
                    borderColor: "#B6B6B4",}} onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>

      </Modal>
      <Modal show={deleteUser} onHide={deleteHandleClose}
       size="md"
      backdrop="static"
      keyboard={false}
      centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white"}}>
          <Modal.Title>Delete Role & App Permission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RoleDelete deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
        </Modal.Body>

      </Modal>
      <div responsive >

        
            {/* <Container> */}
              <Row>
                <Col md={4}>
                  <Card.Title>Roles & App Permissions</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    User Management / Roles & App Permissions{" "}
                  </Card.Subtitle>
                </Col>

                <Col md={{ span: 4, offset: 4 }}><AddRole func={pull_dataAdd} /></Col>
              </Row>
            {/* </Container> */}
            {/* <Container> */}
              <Row>
                <Col xs={12}>

                  <Grid style={{ borderBlockEndWidth: "2px" }}>
                    <MaterialTable
                      title="Users Details"
                      columns={columns}
                      style={{ color: "black", fontSize: "1rem" }}
                      data={data}
                      editable={{

                      }}
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
            {/* </Container> */}
          
      </div>
      {/* <Example /> */}
    </div>
  );
}
export default RolesMain;



// import React from "react";
// import { Col, Row, Card, Container } from "react-bootstrap";
// import RoleEditableTable from "./RoleEditableTable";



// // Testing purpose
// const RolesMain = () => {
//   return (
//     <div style={{ paddingTop: "20px" }}>
//       <Card responsive className="scroll">
//         <Card.Header>
//           <Card.Body>
//             <Card.Title>Roles & App Permissions</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">
//               Roles & App Permissions{" "}
//             </Card.Subtitle>
//             <Container>
//               <Row>
//                 <Col xs={12}>
//                   <RoleEditableTable />
//                 </Col>
//               </Row>
//             </Container>
//           </Card.Body>
//         </Card.Header>
//       </Card>
//     </div>
//   );
// };

// export default RolesMain;


