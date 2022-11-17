import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import axios from "../../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button,ListGroup, Col, Modal, Row, Stack } from "react-bootstrap";
import TeamMembersTab from "../../Projects/ProjectsComponents/TeamMembersTab";
import TeamMembersList from "./TeamMembersList";


function HrProjectsTab() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);

  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);

  const handleShow = () => setShow(false);
  const viewHandleShow = () => setShow(false);
  const [onboardID, setOnboardID] = useState({});
  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});

  const [data, setData] = useState([]);
  const [teamData,setTeamData] = useState([]);
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

  // useEffect(() => {
  //   loadTeamData();
  // }, [props.data]);

  useEffect(() => {
    loadData();
  }, [addStatus, updateStatus, deleteProjects]);
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

// const projectId= axios.get(
//       `/clientProjectMapping/getOneProjectByProjectId/${params.id}`
//     );

  const loadData = async (e) => {
    const response = await axios.get("/clientProjectMapping/getAllProjects");
    setData(response.data.data);
    console.log(response.data);
  };

  // const loadTeamData = async (e) => {
  //   const response = await axios.get(`clientProjectMapping/getAllProjectTeams/Active/${params.id}`);
  //   setTeamData(response.data.data);
  //   console.log(response.data.data);
  // };
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
    {
      title: "Team Members",
      field: "teamMembers",
    },
  ]);

  return (
    <div>
<Modal show={show} onHide={handleClose} size="md" centered>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#f5896e",
            paddingTop: "6px",
            paddingBottom: "6px",
            color: "white",
          }}
        >
          <Modal.Title style={{ color: "white" }}>
           Team Members
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <ListGroup as="ol" numbered>
          
                  {teamData.map((team) => (
                    <option value={team.employeeprojectId}>{client.employeeName}</option>
                  ))}
        </ListGroup> */}
        <TeamMembersList
        data={onboardID}
        // func={pull_data}
        handleClose={handleClose}
        />
      </Modal.Body>
      </Modal>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Projects"
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
                      className="rounded-pill"
                      variant="white"
                      // style={{
                      //   backgroundColor: "#FFFFFF",
                      //   // borderColor: "#ff9b44",
                      //   float: "right",
                      //   fontSize:"12px",
                      //   // height: "60px",
                      // }}
                      onClick={() => {
                        setShow(true);
                        console.log(props);
                        setOnboardID(props.data);
                      }}
                    >
                      <BsFillEyeFill style={{ fontSize: "25px" }} />{" "}
                    </Button>
                  </Stack>
                </div>
              ),
            }}
          />
        </Grid>
    </div>
  );
}
export default HrProjectsTab;
