
import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";

import Grid from "@mui/material/Grid";
import { Row, Col, Container, Card } from "react-bootstrap";
import axios from "../../../Uri";

import { Button, Modal, Stack } from "react-bootstrap";
import AddDepartment from "./AddDepartment";
import DeleteDepartment from "./DeleteDepartment";
import UpdateDepartment from "./UpdateDepartment";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";



function Departments() {

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
    const response = await axios.get("/dept/getAllDepartments");
    setData(response.data);
    console.log(response.data);
  };
  console.log(data)

  const [columns, setColumns] = useState([
    {
      title: "Business Unit",
      field: "departmentName",
      type: "text",
    },
    {
      title: "Business Unit Head",
      field: "businessUnitHeadName",
      type: "text",
    },

  ]);

  return (
    <div style={{ backgroundColor:"white"}}>

      <Modal show={show}  size="md"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
        centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white" }}>
          <Modal.Title>Update Business Unit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateDepartment updateOnboard={updateOnboard} func={pull_dataUpdate} handleClose={handleClose} />
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
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white"}}>
          <Modal.Title>Delete Business Unit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteDepartment deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
        </Modal.Body>

      </Modal>
      <div responsive >

              <Row>
                <Col md={4}>
                  <Card.Title>Business Unit</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Business Unit{" "}
                  </Card.Subtitle>
                </Col>

                <Col md={{ span: 4, offset: 4 }}><AddDepartment func={pull_dataAdd} /></Col>
              </Row>
            
            
              <Row>
                <Col xs={12}>

                  <Grid style={{ borderBlockEndWidth: "2px" }}>
                    <MaterialTable
                      title="Business Unit"
                      columns={columns}
                      style={{ color: "black", fontSize: "1rem" }}
                      data={data}
                      addRowPosition="first"
                      editable={{

                      }}
                      options={{
                        pageSize: 10,
                        pageSizeOptions: [10, 15,20, 30 ,50, 75, 100 ],
                        maxBodyHeight: 450,
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
                        addRowPosition:"first",
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
                                 <FiEdit />
                              </Button>{" "}
                             
                              <Button
                                variant="danger"
                                onClick={(event) => {
                                  setDeleteUser(true);
                                  console.log(props);
                                  setDeleteOnboard(props.data);
                                }}
                              >
                                <RiDeleteBin6Line/>
                              </Button>
                            </Stack>
                          </div>
                        ),
                      }}
                    />
                  </Grid>
                </Col>
              </Row>
           
          
      </div>
      {/* <Example /> */}
    </div>
  );
}
export default Departments;


