import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
import { FiEdit } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import JobOpeningColumns from './utils/JobOpeningColumns.json';
import UpdateJobOpening from "./UpdateJobOpening";
import DeleteJobOpening from "./DeleteJobOpening";
import ShareJobOpening from "./ShareJobOpening";

function JobOpeningTable() {

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
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

  const loadData = async (e) => {
    const response = await axios.get("/Leads/getAllLeads");
    setData(response.data.data);
    console.log(response.data);
  };


  return (
    <div>
        
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Update Job Opening</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll">
          <UpdateJobOpening
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>

      </Modal>


      {/* view modal */}
      {/* <Modal  show={viewShow} onHide={viewHandleClose} size="md">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShareJobOpening
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={viewHandleClose}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal> */}

      {/* delete modal */}
      <Modal show={deleteLeads} onHide={deleteHandleClose}
        size="md"
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color: "white" }}>
          <Modal.Title>Delete Job Opening</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteJobOpening deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
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
              <Card.Title>Job Requests</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dashboard / RR{" "}
              </Card.Subtitle>
            </Col>
            <Col>
              {/* <AddRR func={pull_dataAdd} /> */}
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title=""
            columns={JobOpeningColumns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
            editable={{}}
            options={{
              pageSize: 8,
              pageSizeOptions: [8, 10, , 15, 20, 30, 50, 75, 100],
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
              grouping: true,
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
                    {/* <Button
                      variant="primary"
                      onClick={(event) => {
                        setViewShow(true);
                        console.log(props);
                        setViewOnboard(props.data);
                      }}
                    >
                      <FaShare/>
                    </Button> */}

                  </Stack>
                </div>
              ),
            }}
          />
        </Grid>
      </Card>

    </div>
  )
}


export default JobOpeningTable