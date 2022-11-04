import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import {RiTeamFill} from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";

import AddCandidate from "./CandidateComponents/AddCandidate";
import UpdateCandidate from "./CandidateComponents/UpdateCandidate";
import DeleteCandidate from "./CandidateComponents/DeleteCandidate";
// import ProjectTabs from "./ProjectsComponents/ProjectTabs";

function CandidatesMain() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);

  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);

  const handleShow = () => setShow(false);
  const viewHandleShow = () => setShow(false);

  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});

  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [viewStatus, setViewStatus] = useState(false);
  const [deleteOnboard, setDeleteOnboard] = useState({});
  const [deleteProjects, setDeleteProjects] = useState(false);

  const deleteHandleClose = () => setDeleteProjects(false);

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  const pull_dataDelete = () => {
    setDeleteProjects(!deleteProjects);
    // console.log("Delete");
  };

  useEffect(() => {
    loadData();
  }, [addStatus, updateStatus, deleteProjects]);
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

  const loadData = async (e) => {
    const response = await axios.get("/candidate/getCandidate");
    console.log(response.data);
    setData(response.data);
    

  };

  const [columns, setColumns] = useState([
    {
      title: "Req ID",
      field: "requisitionId",
      type: "text",
      cellStyle: {
        minWidth: 200,
        maxWidth: 200
      }
    },
    {
      title: "Candidate Name",
      field: "candidateName",
      type: "text",
      cellStyle: {
        minWidth: 200,
        maxWidth: 200
      }
    },
    // {
    //   title: "Business Unit",
    //   field: "businessUnit",
    //   defaultGroupOrder: 0,
    //   cellStyle: {
    //     minWidth: 200,
    //     maxWidth: 200,
    //   }
      
    // },
    // {
    //   title: "Project",
    //   field: "projectName",
    //   defaultGroupOrder: 1,
    //   type: "text",
    //   cellStyle: {
    //     minWidth: 200,
    //     maxWidth: 200
    //   }
    // },
    // {
    //   title: "Job Title",
    //   field: "projectManager",
    //   defaultGroupOrder: 2,
    //   type: "text",
    //   dateSetting: { locale: "en-GB" },
    //   cellStyle: {
    //     minWidth: 200,
    //     maxWidth: 200
    //   }
    // },
    {
      title: "Primary Skills",
      field: "primarySkills",
      type: "date",
      dateSetting: { locale: "en-GB" },
      cellStyle: {
        minWidth: 200,
        maxWidth: 200
      }
    },
    {
      title: "Secondary Skills",
      field: "secondarySkills",
      cellStyle: {
        minWidth: 200,
        maxWidth: 200
      }
    },
    {
      title: "Current Location",
      field: "currentLocation",
      cellStyle: {
        minWidth: 200,
        maxWidth: 200
      }
    },
    {
      title: "Phone Number",
      field: "phoneNumber",
      cellStyle: {
        minWidth: 200,
        maxWidth: 200
      }
    },
    {
      title: "Email",
      field: "email",
      cellStyle: {
        minWidth: 200,
        maxWidth: 200
      }
    },
    {
      title: "Years Of Experiance",
      field: "yearsOfExperience",
      cellStyle: {
        minWidth: 250,
        maxWidth: 250
      }
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14",paddingTop:"5px",paddingBottom:"5px",color:"white" }}>
          <Modal.Title style={{ backgroundColor: "#FF9E14", color: "white" }}>
            Edit Candidate Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCandidate
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>

      {/* <Modal show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectsView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={viewHandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Modal
        show={deleteProjects}
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
          <Modal.Title>Delete Candidate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteCandidate
            deleteOnboard={deleteOnboard}
            func={pull_dataDelete}
            deleteHandleClose={deleteHandleClose}
          />
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
              <Card.Title>Candidates</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                Dashboard / Projects{" "}
              </Card.Subtitle> */}
            </Col>
            <Col>
              <AddCandidate func={pull_dataAdd} />
              {/* <ProjectTabs func={pull_dataAdd} /> */}
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Candidates list"
            columns={columns}
            style={{ color: "black", fontSize: "13px" }}
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

              pageSize: 10,

              pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

              maxBodyHeight: 450,

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
                      <FiEdit style={{ color: "white" }}/>
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={(event) => {
                        setDeleteProjects(true);
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
export default CandidatesMain;