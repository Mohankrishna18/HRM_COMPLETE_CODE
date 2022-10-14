import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import RRColumns from './utils/RRColumns.json';
import AddRequisition from './AddRequisition';
import AddRR from './StepperForm';
import AddRequisitionRequests from './AddRequisitionRequests'
import UpdateRR from './UpdateRR'
import DeleteRR from "./DeleteRR";
import ViewRR from "./ViewRR";

function RRTable() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [deleteLeads, setDeleteLeads] = useState(false);
  const deleteHandleClose = () => setDeleteLeads(false);
  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);
  const addPocHandleClose = () => setAddPocShow(false);
  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});
  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [deleteOnboard, setDeleteOnboard] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(true);

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
  }, [addStatus, updateStatus, deleteStatus]);


  const loadData = async (e) => {
    const response = await axios.get("/recruitmentTracker/getAllRequisitionRequests");
    setData(response.data.data);
    console.log(response.data);
  };

  return (
    <div>
      
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Update Job Requirements</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll">
          <UpdateRR
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>

      </Modal>


      {/* view modal */}
      <Modal  show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Requisition Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewRR
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={viewHandleClose}>
            Cancel
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      {/* delete modal */}
      <Modal show={deleteLeads} onHide={deleteHandleClose}
        size="md"
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color: "white" }}>
          <Modal.Title>Delete Requisition Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteRR deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
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

        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Requisition Request</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dashboard / RR{" "}
              </Card.Subtitle>
            </Col>
            <Col>
              <AddRequisition func={pull_dataAdd} />
              {/* <AddRR func={pull_dataAdd} /> */}
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Requisition Request"
            columns={RRColumns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
            editable={{}}
            options={{
              pageSize: 8,
              grouping: true,
              pageSizeOptions: [8, 10, 15, 20, 30, 50, 75, 100],
              maxBodyHeight: 450,
              headerStyle: {
                backgroundColor: "#FF9E14",
                color: "white",
                fontSize: "14px",
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
                    
                      <FiEdit />
                    </Button>{" "}

                 
                    <Button
                      variant="danger"
                      onClick={(event) => {
                        setDeleteLeads(true);
                        console.log(props);
                        setDeleteOnboard(props.data);
                      }}
                    >
                   
                      <RiDeleteBin6Line />
                    </Button>

                    

                   
                    <Button
                      variant="primary"
                      onClick={(event) => {
                        setViewShow(true);
                        console.log(props);
                        setViewOnboard(props.data);
                      }}
                      style={{
                        backgroundColor: "#0000FF",
                        color: "#F4F8F6",
                        float: "right",
                        borderRadius: "20px",
                        height: "40px",
                        width: "120px",
                        fontSize:"12px"

                      }}
                    >
                     
                      Send to Approval
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

export default RRTable;
