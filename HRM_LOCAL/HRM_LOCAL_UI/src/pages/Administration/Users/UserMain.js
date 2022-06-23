import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";

import { Button, Modal, Stack } from "react-bootstrap";
import ApprovalUpdateForm from "./ApprovalUpdateForm";
import AddUser from "./AddUser";
import ApproveDelete from "./ApproveDelete";

function OnboardedEmployeesTable() {

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
  const [status, setStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  // const [status1, setStatus1] = useState(false);
  // const [viewStatus1, setViewStatus1] = useState(false);

  const pull_data = () => {
    setStatus(true);
    setDeleteStatus(true);
    
  };

  useEffect(() => {
    loadRoles();
  }, [status]);
  useEffect(() => {
    loadRoles();
  }, [deleteStatus]);
  

  const loadRoles = async (e) => {
    const response = await axios.get("/user/getUsersData");
    setData(response.data.data);
    console.log(response.data.data);
  };

  const [columns, setColumns] = useState([
    {
      title: "Employee ID",
      field: "employeeId",
      type: "text",
    },
    
    {
      title: "Role",
      field: "roleName",
      type: "text",
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ApprovalUpdateForm updateOnboard={updateOnboard} func={pull_data} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>

      </Modal>
      <Modal show={deleteUser} onHide={deleteHandleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ApproveDelete deleteOnboard={deleteOnboard} func={pull_data} deleteHandleClose={deleteHandleClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>

      </Modal>

      
      <Card
        style={{
          paddingTop: "20px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        <h3 align="center" style={{ color: "orange" }}>
          Onboarded Employees Table
        </h3>
        <AddUser func={pull_data} />
        
        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Onboarded Employees Table"
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
              grouping: true,
              exportButton: true,
            }}
            actions={[
              {
                icon:"button",
                
                tooltip: "Save User",
                onClick: (event, rowData) =>
                  alert("You want to delete " + rowData.firstName),
               
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
                      variant="secondary"
                      onClick={(event) => {
                        setViewShow(true);
                        console.log(props);
                        setDeleteClient(props.data);
                      }}
                    >
                      Delete
                    </Button> */}
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
      </Card>
      {/* <Example /> */}
    </div>
  );
}
export default OnboardedEmployeesTable;
