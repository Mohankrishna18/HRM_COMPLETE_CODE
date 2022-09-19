import React from "react";
import { useState, useEffect, useRef } from "react";
import { Card, Row, Tab, Tabs, Button, Modal } from "react-bootstrap";
import ProjectUpdate from "./ProjectUpdate";
import AssignTeamMembers from "./AssignTeamMembers";
import TeamMembersTab from "./TeamMembersTab";

function ProjectUpdateTabs(props) {
  console.log(props.rowData)
  const rowData = props.rowData
  const [show, setShow] = useState(false);
  const handleClose = () => setShow();
  const handleShow = () => setShow(true);
  const UpdatehandleClose = () => setShow(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateOnboard, setUpdateOnboard] = useState({});

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  const update_loading = () => {
    setUpdateLoading(!updateLoading);
  };
  return (
    <div>
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
              style={{ backgroundColor: "white", height: 800 }}
            >
              <ProjectUpdate
                updateOnboard={props.rowData}
                func={props.func}
                handleClose={UpdatehandleClose}
                // fc={props.func}
              />
            </Tab>
            <Tab
              eventKey="Team Members"
              title="Team Members"
              style={{ backgroundColor: "white", height: 800 }}
            >
              <TeamMembersTab data={updateLoading} rowData={rowData} />
            </Tab>
            <Tab
              eventKey="AssignTeamMembers"
              title="Assign Team Members"
              style={{ backgroundColor: "white", height: 800 }}
            >
              <AssignTeamMembers func={update_loading} data={props.rowData} />
            </Tab>
          </Tabs>
    </div>
  );
}

export default ProjectUpdateTabs;



