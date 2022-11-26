import React from "react";
import { useState, useEffect, useRef, createContext } from "react";
import axios from "../../../Uri";
import { useParams } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Tab,
  Tabs,
  Button,
  Modal,
} from "react-bootstrap";
import ProjectUpdate from "./ProjectUpdate";
import AssignTeamMembers from "./AssignTeamMembers";
import TeamMembersTab from "./TeamMembersTab";
export const UserContext = createContext(null);
function ProjectUpdateTabs(props) {
  // console.log(props.rowData)
  const [data, setData] = useState([]);
  //const {rowData} = props
  const rowData = JSON.parse(localStorage.getItem("project"));
  console.log(rowData);

  // const rowData = props.rowData
  const [show, setShow] = useState(false);
  const handleClose = () => setShow();
  const handleShow = () => setShow(true);
  const UpdatehandleClose = () => setShow(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const [oneProject, setOneProject] = useState();

  // Get API's for Clients Dropdown

  

  const update_loading = (id) => {
    setUpdateLoading(!updateLoading);
  };
  return (
    <div>
      <UserContext.Provider value={{ data, setData,setUpdateStatus ,updateStatus}}>
        <Container style={{ marginTop: "25px", marginBottom: "25px" }}>
          <Card>
            <Tabs
              defaultActiveKey="Edit Project"
              transition={true}
              id="noanim-tab-example"
              className="mb-3"
              color="Black"
              fontColour="white"
              style={{
                justifyContent: "left",
                color: "white",
                backgroundColor: "white",
                opacity: 0.95,
                fontSize: "18px",
                padding: 0,
              }}
            >
              <Tab
                eventKey="Edit Project"
                title="Edit Project"
                color="white"
                style={{ backgroundColor: "white", height: 680 }}
              >
                <ProjectUpdate
                  oneProject={oneProject}
                  func={props.func}
                  handleClose={UpdatehandleClose}
                  // fc={props.func}
                />
              </Tab>
              <Tab
                eventKey="Team Members"
                title="Team Members"
                style={{ backgroundColor: "white", height: 700 }}
              >
                <TeamMembersTab data={updateLoading} rowData={rowData} />
              </Tab>
              <Tab
                eventKey="AssignTeamMembers"
                title="Assign Team Members"
                style={{ backgroundColor: "white", height: 780 }}
              >
                <AssignTeamMembers func={update_loading} data={rowData} />
              </Tab>
            </Tabs>
          </Card>
        </Container>
      </UserContext.Provider>
    </div>
  );
}

export default ProjectUpdateTabs;
