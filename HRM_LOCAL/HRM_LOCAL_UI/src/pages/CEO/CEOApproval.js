import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../Uri";
import { Button, Stack, Modal } from "react-bootstrap";
import CEOApproved from './CEOApproved';
import CEORejected from './CEORejected';
import { FcWebcam } from "react-icons/fc";
import { Tab, Tabs } from "react-bootstrap";
import AditionalDetailsTab from "../../pages/Approvals/ApprovalComponents/AdditionalDetailsTab";
import AddressTab from "../../pages/Approvals/ApprovalComponents/AddressTab";
import EducationalDetailsTab from "../../pages/Approvals/ApprovalComponents/EducationalDetailsTab";
import ExperienceTab from "../../pages/Approvals/ApprovalComponents/ExperienceTab";
import PersonalDetailsTab from "../../pages/Approvals/ApprovalComponents/PersonalDetailsTab";
import EmploymentDetailsTab from '../Approvals/ApprovalComponents/EmploymentDetailsTab';
import JobPositionDetails from '../Approvals/ApprovalComponents/JobPositionDetails';



function CEOApproval() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [rejectshow, setRejectShow] = useState(false);
    const [onboardID, setOnboardID] = useState({});
    const [update, setUpdate] = useState(false);
    const [reject, setReject] = useState(false);
    const [viewShow, setViewShow] = useState(false);
    const [viewOnboard, setViewOnboard] = useState({});

    const handleClose = () => setShow(false);
    const approveHandleClose = () => setUpdate(false);

    const handleCloseReject = () => setRejectShow(false);
    const rejectHandleClose = () => setReject(false);
    const viewHandleClose = () => setViewShow(false);
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

    // const da = JSON.parse(sessionStorage.getItem('userdata'))
    // const empID = da.data.employeeId;
    const onboardingStatus = "PMOApproved";

    const loadData = async () => {
        const res = await axios.get(`/emp/getDetailsforPMOApprovalByOnboardingStatus/${onboardingStatus}`);
        setData(res.data.data);
        console.log(res.data);
    };
    const [columns, setColumns] = useState([
      { title: "AERF ID", field: "requisitionId" },
        { title: 'OBD ID', field: 'onboardingId' },
        { title: 'Name', field: 'firstName' },
        { title: 'Email', field: 'email' },
        { title: 'Contact', field: 'phoneNumber' },
        { title: 'DOJ', field: 'dateOfJoining', type: 'date', dateSetting: { locale: "en-GB" }},
        { title: 'Job Title', field: 'jobTitle' },
        { title: 'Experience', field: 'yearsOfExperience' },
        // { title: 'Status', field: 'status' }

    ]);
console.log(data);

  return (
    <div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white"}}>
            <Modal.Title>Are you sure you want to Approve</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CEOApproved onboardID={onboardID} func={pull_data} handleClose={handleClose} />
        </Modal.Body>
    </Modal>
    <Modal show={rejectshow} onHide={handleCloseReject}>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white"}}>
            <Modal.Title>Are you sure you want to Reject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CEORejected onboardID={onboardID} func={pull_dataReject} handleClose={handleCloseReject} />
        </Modal.Body>
    </Modal>
    <Modal show={viewShow} onHide={viewHandleClose} size="xl">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ApprovalView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          /> */}

          <Tabs
            defaultActiveKey="Job Position Details"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            style={{
              justifyContent: "center",
              color: "white",
              backgroundColor: "white",
              fontSize: "16px",
              padding: 10,
            }}
          >
             <Tab
                eventKey="Job Position Details"
                title="Job Position Details"
                style={{ backgroundColor: "white" }}
              >
                <JobPositionDetails
                  viewOnboard={viewOnboard}
                  viewHandleClose={viewHandleClose}
                />
              </Tab>
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
              <EmploymentDetailsTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
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
            <Tab
              eventKey="Employment Details"
              title="Employment Details"
              style={{ backgroundColor: "white" }}
            >
              <EmploymentDetailsTab 
              viewOnboard={viewOnboard} 
              viewHandleClose={viewHandleClose}/>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>

    <Grid>
        <MaterialTable
            title=""
            columns={columns}
            data={data}

            options={{
                paging: true,
                addRowPosition: 'first',
                actionsColumnIndex: -1,
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
                exportButton: true
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
                                style ={{backgroundColor: "#f5896e",
                                borderColor: "#f5896e",}}
                                onClick={() => {
                                    setShow(true);
                                    console.log(props)
                                    setOnboardID(props.data);
                                }}

                            >

                                Approve
                            </Button>
                           
                            <Button
                                variant="outline-danger"
                                onClick={() => {
                                    setRejectShow(true);
                                    console.log(props)
                                    setOnboardID(props.data);
                                }}
                            >
                                Reject
                            </Button>
                            <Button

                      variant="white "

                      className="rounded-pill"

                      onClick={(event) => {

                        setViewShow(true);

                        console.log(props);

                        setViewOnboard(props.data);

                      }}

                    > {" "}

                      <FcWebcam />{" "}

                       View

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

export default CEOApproval;
