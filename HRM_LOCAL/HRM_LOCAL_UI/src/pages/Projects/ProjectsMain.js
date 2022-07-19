import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";

import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
//import ApprovalUpdateForm from "./ApprovalUpdateForm";
import AddProject from "./ProjectsComponents/AddProject";
import ProjectsView from "./ProjectsComponents/ProjectsView";
import ProjectUpdate from "./ProjectsComponents/ProjectUpdate";


function ProjectsMain() {
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

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
   
  };

  useEffect(() => {
    loadData();
  }, [addStatus,updateStatus]);
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

  const loadData = async (e) => {
    const response = await axios.get("/clientProjectMapping/getAllProjects");
    setData(response.data.data);
    console.log(response.data);
  };

  const [columns, setColumns] = useState([
 
    {
      title: "Client Name",
      field: "clientName",
      type: "text",
    },

    {
      title: "Project Name",
      field: "projectName",
    },

    {
      title: "Start Date",
      field: "startDate",
      type: "date",
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "End Date",
      field: "endDate",
      type: "date",
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "Status",
      field: "status",
    },
    {
      title: "Description",
      field: "description",
    },
    {
      title: "Rate",
      field: "rate",
    },
    {
      title: "Priority",
      field: "priority",
    },
    {
      title: "Project Manager",
      field: "projectManager",
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectUpdate
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
      <Modal show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <ProjectsView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          />
        </Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={viewHandleClose}>
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
              <Card.Title>Projects</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dashboard / Projects{" "}
              </Card.Subtitle>
            </Col>
            <Col>
              <AddProject func={pull_dataAdd} />
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Projects list"
            columns={columns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
            editable={{}}
            options={{
              headerStyle: {
                backgroundColor: "#FF9E14",
                color: "white",
                fontSize: "20px",
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
                    {/* <Button
                      variant="primary"
                      onClick={(event) => {
                        setViewShow(true);
                        console.log(props);
                        setViewOnboard(props.data);
                      }}
                    >
                      <BsFillEyeFill />
                    </Button> */}
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
export default ProjectsMain;