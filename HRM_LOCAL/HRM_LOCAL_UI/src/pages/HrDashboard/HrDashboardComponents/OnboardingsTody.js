import React, { useEffect, useState } from 'react';
import { Button, Modal, Stack, Tab, Table, Tabs } from 'react-bootstrap';
import HRConfirmation from '../../HRApproval/HRConfirmation';
import axios from "../../../Uri"
import { FcWebcam } from 'react-icons/fc';
import PersonalDetailsTab from '../../Approvals/ApprovalComponents/PersonalDetailsTab';
import AddressTab from '../../Approvals/ApprovalComponents/AddressTab';
import AditionalDetailsTab from '../../Approvals/ApprovalComponents/AdditionalDetailsTab';
import EmploymentDetailsTab from '../../Approvals/ApprovalComponents/EmploymentDetailsTab';
import EducationalDetailsTab from '../../Approvals/ApprovalComponents/EducationalDetailsTab';
import ExperienceTab from '../../Approvals/ApprovalComponents/ExperienceTab';
import HRAssign from '../../HRApproval/HRAssign';
import { Grid } from '@mui/material';
import MaterialTable from 'material-table';


function OnboardingsToday() {

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
    axios
        .get(`emp/getDataByDATE`)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        });
}, []);
console.log(data)

    const [columns, setColumns] = useState([
      { title: "Onboarding Id", field: "onboardingId",color:"black" },
      { title: "FullName", field: "firstName" },
      { title: "Email", field: "email" },
      { title: "PhoneNumber", field: "primaryPhoneNumber" },
      {
        title: "DOJ",
        field: "dateOfJoining",
        type: "date",
        dateSetting: { locale: "en-GB" },
      },
      { title: "Job Title", field: "jobTitle" },
      { title: "Experience", field: "yearsOfExperience" },
     
    ]);
    console.log(data);


    return (
        <div>
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
            title=""
            columns={columns}
            data={data}
            options={{
              paging: true,
              addRowPosition: "first",
              actionsColumnIndex: -1,
              headerStyle: {
                backgroundColor: "#FED3B6",
  
                color: "black",
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


export default OnboardingsToday;