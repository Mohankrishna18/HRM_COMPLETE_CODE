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
import { useParams, useHistory } from "react-router-dom";

function RRTable() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [deleteLeads, setDeleteLeads] = useState(false);
  const deleteHandleClose = () => setDeleteLeads(false);
  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);
  const [viewStatus, setViewStatus] = useState(false);
  const addPocHandleClose = () => setAddPocShow(false);
  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});
  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [deleteOnboard, setDeleteOnboard] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(true);

  const history = useHistory();
  const pull_dataAdd = () => {
    setAddStatus(!addStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);

  };

  const pull_dataView = () => {
    setViewStatus(!viewStatus);

  };

  const pull_dataDelete = () => {
    setDeleteStatus(!deleteStatus);

  };

  useEffect(() => {
    loadData();
    // createStatus();
  }, [addStatus, updateStatus, deleteStatus, viewStatus]);


  const loadData = async () => {
    const response = await axios.get("/recruitmentTracker/");
    setData(response.data);
    console.log(response.data);
  };
  const sessionData = JSON.parse(sessionStorage.getItem('userdata'));

  const employeeId = sessionData.data.employeeId;

  const userType = sessionData.data.userType;

  console.log(employeeId);

  console.log(userType);

  return (
    <div>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton style={{
          backgroundColor: "#FF9E14", paddingTop: "7px",
          paddingBottom: "4px",
        }}>
          <Modal.Title>Update Requisition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateRR
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>

      </Modal>
      <Modal show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{
          backgroundColor: "#FF9E14", paddingTop: "7px",
          paddingBottom: "4px",
        }}>
          <Modal.Title>Arshaa Employee Requisitions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewRR
            viewOnboard={viewOnboard}
            func={pull_dataView}
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
        <Modal.Header closeButton style={{
          backgroundColor: "#FF9E14", color: "white", paddingTop: "7px",
          paddingBottom: "4px"
        }}>
          <Modal.Title>Delete Requisition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteRR deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
        </Modal.Body>
      </Modal>

      {/* <Card
        style={{
          paddingTop: "2px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      > */}

      <Card.Body>
        <Row>
          <Col>
            <Card.Title>Arshaa Employee Requisitions</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Dashboard / Employee Requisitions{" "}
            </Card.Subtitle> */}
          </Col>
          <Col>
            <AddRequisition func={pull_dataAdd} />
            {/* <AddRR func={pull_dataAdd} /> */}
          </Col>
        </Row>
      </Card.Body>
      <Grid container>
        <Grid xs={12}>
          {(userType === "taa") ?
            <MaterialTable
              title=""
              columns={RRColumns}
              style={{ color: "black", fontSize: "0.9rem" }}
              data={data}
              editable={{}}
              options={{
                pageSize: 10,
                grouping: true,
                pageSizeOptions: [8, 10, 15, 20, 30, 50, 75, 100],
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
             
            />
            :
            <MaterialTable
            title=""
              columns={RRColumns}
              style={{ color: "black", fontSize: "0.9rem" }}
              data={data}
              editable={{}}
              options={{
                pageSize: 10,
                grouping: true,
                pageSizeOptions: [8, 10, 15, 20, 30, 50, 75, 100],
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
                          localStorage.setItem("requisition", JSON.stringify(props));
                          history.push(
                            `/app/updateRequisition/${props.data.rrfId}`
                          );
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
                          fontSize: "12px",
                          fontWeight: "bold"

                        }}
                      >

                        Send to Approval
                      </Button>

                    </Stack>
                  </div>
                ),
              }}
            />
}
        </Grid>
      </Grid>

      {/* </Card> */}

    </div>
  );
}
export default RRTable;