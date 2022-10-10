import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
import { Button, Stack, Modal } from "react-bootstrap";
// import TAAHeadApproved from "../TAAHead/TAAHeadApproved";
// import TAAHeadRejected from "../TAAHead/TAAHeadRejected";
import HRAssign from "./HRAssign";
import { FcWebcam } from "react-icons/fc";

import { Tab, Tabs } from "react-bootstrap";

import AditionalDetailsTab from "../../pages/Approvals/ApprovalComponents/AdditionalDetailsTab";

import AddressTab from "../../pages/Approvals/ApprovalComponents/AddressTab";

import EducationalDetailsTab from "../../pages/Approvals/ApprovalComponents/EducationalDetailsTab";

import ExperienceTab from "../../pages/Approvals/ApprovalComponents/ExperienceTab";

import PersonalDetailsTab from "../../pages/Approvals/ApprovalComponents/PersonalDetailsTab";
import EmploymentDetailsTab from "../Approvals/ApprovalComponents/EmploymentDetailsTab";

function HRConfirmation() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [rejectshow, setRejectShow] = useState(false);
    const [onboardID, setOnboardID] = useState({});
    const [update, setUpdate] = useState(false);
    const [reject, setReject] = useState(false);
  
    const [viewShow, setViewShow] = useState(false);
  
    const [viewOnboard, setViewOnboard] = useState({});
    const viewHandleClose = () => setViewShow(false);
  
    const handleClose = () => setShow(false);
    const approveHandleClose = () => setUpdate(false);
  
    const handleCloseReject = () => setRejectShow(false);
    const rejectHandleClose = () => setReject(false);
    // const handleShow = () => {
  
    // }
    const pull_data = () => {
      setUpdate(!update);
    };
    const pull_dataReject = () => {
      setReject(!reject);
    };
    const pull_dataApprove = () => {
      setOnboardID(!onboardID);
    };
  
    useEffect(() => {
      loadData();
    }, [update, onboardID, reject]);
  
    const da = JSON.parse(sessionStorage.getItem("userdata"));
    const empID = da.data.employeeId;
    const onboardingStatus = "CEOApproved";
  
    const loadData = async () => {
      const res = await axios.get(
        `/emp/getDetailsforPMOApprovalByOnboardingStatus/${onboardingStatus}`
      );
      setData(res.data.data);
      console.log(res.data);
    };
    const [columns, setColumns] = useState([
      { title: "OnboardingId", field: "onboardingId" },
      { title: "FullName", field: "firstName" },
      { title: "Email", field: "email" },
      { title: "PhoneNumber", field: "phoneNumber" },
      {
        title: "Date of Joining",
        field: "dateOfJoining",
        type: "date",
        dateSetting: { locale: "en-GB" },
      },
      { title: "Job Title", field: "jobTitle" },
      { title: "Experience", field: "yearsOfExperience" },
      // { title: "Status", field: "status" },
    ]);
    console.log(data);
  
  
  return (
    <div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Documents to be Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HRAssign
            onboardID={onboardID}
            func={pull_data}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Modal show={viewShow} onHide={viewHandleClose} size="xl">
          <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              defaultActiveKey="Personal Details"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
              style={{
                justifyContent: "center",
                color: "white",
                backgroundColor: "white",
                fontSize: "px",
                padding: 0,
              }}
            >
              <Tab
                eventKey="Personal Details"
                title="Personal Details"
                style={{ backgroundColor: "white" }}
              >
                <PersonalDetailsTab
                  viewOnboard={viewOnboard}
                  viewHandleClose={viewHandleClose}
                />
              </Tab>
              <Tab
                eventKey="Address"
                title="Address"
                style={{ backgroundColor: "white" }}
              >
                <AddressTab
                  viewOnboard={viewOnboard}
                  viewHandleClose={viewHandleClose}
                />
              </Tab>
  
              <Tab
                eventKey="Additional Details"
                title="Additional Details"
                style={{ backgroundColor: "white" }}
              >
                <AditionalDetailsTab
                  viewOnboard={viewOnboard}
                  viewHandleClose={viewHandleClose}
                />
              </Tab>
              {/* <Tab
                eventKey="Employment Details"
                title="Employment Details"
                style={{ backgroundColor: "white" }}
              >
                <EmploymentDetailsTab 
                viewOnboard={viewOnboard} 
                viewHandleClose={viewHandleClose}/>
              </Tab> */}

              <Tab
                eventKey="Education"
                title="Education"
                style={{ backgroundColor: "white" }}
              >
  
                <EducationalDetailsTab
                  viewOnboard={viewOnboard}
                  viewHandleClose={viewHandleClose}
                />
              </Tab>
              <Tab
                eventKey="Experience"
                title="Experience "
                style={{ backgroundColor: "white" }}
              >
                <ExperienceTab
                  viewOnboard={viewOnboard}
                  viewHandleClose={viewHandleClose}
                />
              </Tab>
  
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>


     

      <Grid>
        <MaterialTable
          title="HR Confirmation"
          columns={columns}
          data={data}
          options={{
            paging: true,
            addRowPosition: "first",
            actionsColumnIndex: -1,
            headerStyle: {
              backgroundColor: "#FE924A",

              color: "white",
            },
            exportButton: true,
          }}
          actions={[
            {
              icon: "button",

              tooltip: "Save User",

              onClick: (event, rowData) =>
                alert("You saved " + rowData.firstName),
            },
          ]}
          components={{
            Action: (props) => (
              <div>
                <Stack direction="horizontal" gap={3}>
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      setShow(true);
                      console.log(props);
                      setOnboardID(props.data);
                    }}
                  >
                    Confirm
                  </Button>

            
                  <Button
                    variant="white "
                    className="rounded-pill"
                    onClick={(event) => {
                      setViewShow(true);

                      console.log(props);

                      setViewOnboard(props.data);
                    }}
                  >
                    {" "}
                    <FcWebcam /> View
                  </Button>
                </Stack>
              </div>
            ),
          }}
        />
      </Grid>
    </div>
  )
}

export default HRConfirmation;