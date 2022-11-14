import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import axios from "../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import ProjectsView from "./ProjectsComponents/ProjectsView";
import ProjectUpdate from "./ProjectsComponents/ProjectUpdate";
import AddProject from "./ProjectsComponents/AddProject";
import ProjectUpdateTabs from "./ProjectsComponents/ProjectUpdateTabs";
import DeleteProject from "./ProjectsComponents/DeleteProject";
import ProjectTabs from "./ProjectsComponents/ProjectTabs";
export const UserContext = createContext(null);
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
  const [deleteOnboard, setDeleteOnboard] = useState({});
  const [deleteProjects, setDeleteProjects] = useState(false);

  const history = useHistory();
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
    const response = await axios.get("/clientProjectMapping/getAllProjects");
    setData(response.data.data);
    console.log(response.data);
  };

  const [columns, setColumns] = useState([
    {
      title: "Project Name",
      field: "projectName",
      // defaultGroupOrder: 1
    },
    {
      title: "Client Name",
      field: "clientName",
      type: "text",
    },
    {
      title: "Business Unit",
      field: "businessUnit",
      defaultGroupOrder: 0,
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
    // {
    //   title: "Description",
    //   field: "description",
    // },
    // {
    //   title: "Rate",
    //   field: "rate",
    // },
    {
      title: "Priority",
      field: "priority",
    },
    {
      title: "PM",
      field: "projectManager",
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#f5896e",
            paddingTop: "5px",
            paddingBottom: "5px",
            color: "white",
          }}
        >
          <Modal.Title style={{ backgroundColor: "#f5896e", color: "white" }}>
            Edit Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ProjectUpdateTabs
            rowData={updateOnboard}
            func={pull_dataUpdate}
            // data={data}
          /> */}
        </Modal.Body>
      </Modal>

      {/* <Modal show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
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
          style={{ backgroundColor: "#f5896e", color: "white" }}
        >
          <Modal.Title>Delete Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteProject
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
              <Card.Title>Projects</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                Dashboard / Projects{" "}
              </Card.Subtitle> */}
            </Col>
            <Col>
              <AddProject func={pull_dataAdd} />
              {/* <ProjectTabs func={pull_dataAdd} /> */}
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title=""
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

              pageSize: 15,

              pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

              maxBodyHeight: 550,

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
                        // setShow(true);
                        console.log(props);
                        setUpdateOnboard(props.data);
                        localStorage.setItem("project", JSON.stringify(props));
                        history.push(
                          `/app/projectUpdateTabs/${props.data.projectId}`
                        );
                      }}
                    >
                      {/* Edit */}
                      <FiEdit />

                      {/* <RiTeamFill style={{ color: "white" }} /> */}
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
                      <RiDeleteBin6Line />
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
export default ProjectsMain;
