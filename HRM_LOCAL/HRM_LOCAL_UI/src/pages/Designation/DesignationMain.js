import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
//import ApprovalUpdateForm from "./ApprovalUpdateForm";
import AddDesignation from "./DesignationComponents/AddDesignation";
// import ProjectsView from "./ProjectsComponents/ProjectsView";
import DesignationUpdate from "./DesignationComponents/DesignationUpdate";
import DeleteDesignation from "./DesignationComponents/DeleteDesignation";


function DesignationMain() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [deleteDesignations, setDeleteDesignations] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(true);

  const deleteHandleClose = () => setDeleteDesignations(false);

 

  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);

  
  const [updateOnboard, setUpdateOnboard] = useState({});
  const [deleteOnboard, setDeleteOnboard] = useState({});

  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [viewStatus, setViewStatus] = useState(false);

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  const pull_dataDelete = () => {
    
    setDeleteStatus(!deleteStatus);
    // console.log("Delete");

  };

  useEffect(() => {
    loadData();
  }, [addStatus, deleteStatus, updateStatus]);
  

  const loadData = async (e) => {
    const response = await axios.get("/designation/getAllDesignations");
    setData(response.data);
    console.log(response.data);
  };

  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

 
  const [columns, setColumns] = useState([
 
    {
      title: "Business Unit Name",
      field: "departmentName",
      type: "text",
    },

    {
      title: "Designation Name",
      field: "designationName",
    }
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Edit Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DesignationUpdate
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      <Modal show={deleteDesignations} onHide={deleteHandleClose}
       size="md"
      backdrop="static"
      keyboard={false}
      centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white"}}>
          <Modal.Title>Delete Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteDesignation deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
        </Modal.Body>
      </Modal>

      <Card
        style={{
          paddingTop: "20px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        {/* <Row>
          <Col>
        <h3>
        Onboarded Shortlisted Candidates
        </h3>
        </Col>
        <Col>
        <AddOnboard func={pull_data} />
        </Col>
        </Row> */}
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Designations</Card.Title>
             
            </Col>
            <Col>
              <AddDesignation func={pull_dataAdd} />
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Designations list"
            columns={columns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
            editable={{}}
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
              addRowPosition: "first",
              actionsColumnIndex: -1,
              // grouping: true,
              exportButton: true,
            }}
            actions={[
              {
                icon: "button",

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
                      {/* Edit */}
                      <FiEdit />
                    </Button>{" "}
                    <Button
                       variant="danger"
                                onClick={(event) => {
                                  setDeleteDesignations(true);
                                  console.log(props);
                                  setDeleteOnboard(props.data);
                      }}
                    >
                      {/* Delete */}
                      <RiDeleteBin6Line/>
                    </Button>
                   
                     
                  </Stack>
                </div>
              ),
            }}
          />
        </Grid>
      </Card>
    </div>
  );
}
export default DesignationMain;


