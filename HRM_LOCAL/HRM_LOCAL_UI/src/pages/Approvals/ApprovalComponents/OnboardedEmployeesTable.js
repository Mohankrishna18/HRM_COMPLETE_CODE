import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
// import { FiEye } from "react-icons/fi";
// import { BsFillEyeFill } from "react-icons/bs";

import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import ApprovalUpdateForm from "./ApprovalUpdateForm";
import AddOnboard from "./AddOnboard";
import { Tab, Tabs } from "react-bootstrap";
import AditionalDetailsTab from "./AdditionalDetailsTab";
import AddressTab from "./AddressTab";
import EducationalDetailsTab from "./EducationalDetailsTab";
import ExperienceTab from "./ExperienceTab";
import PersonalDetailsTab from "./PersonalDetailsTab";
import { FcApproval } from "react-icons/fc";
import { FcWebcam } from "react-icons/fc";
import EmploymentDetailsTab from "./EmploymentDetailsTab";
import { FiEdit } from "react-icons/fi";
import {useHistory} from 'react-router-dom'

import EmployeePersonalDetails from "../../EditEmployeeDetails/EmployeePersonalDetails";
import EmployeeAddressDetails from "../../EditEmployeeDetails/EmployeeAddressDetails";
import EmployeeAditionalDetails from "../../EditEmployeeDetails/EmployeeAdditionalDetails";
import EmployeeEducationalDetails from "../../EditEmployeeDetails/EmployeeEducationalDetails";
import EmployeeExperienceDetails from "../../EditEmployeeDetails/EmployeeExperienceDetails";
import EditEmployeeDetailsTabs from "../../EditEmployeeDetails/EditEmployeeDetailsTabs";
import JobPositionDetails from "./JobPositionDetails";

// import ApprovalView from "./ApprovalView"; 

function OnboardedEmployeesTable() {


  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);

  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);
  const viewHandleClose1 = () => setViewShow(false);

  const handleShow = () => setShow(false);
  const viewHandleShow = () => setShow(false);

  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});

  const[editShow,setEditShow]=useState(false);
  const [updateOnboard1, setUpdateOnboard1] = useState({});

  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [viewStatus, setViewStatus] = useState(false);
  const history = useHistory();

  function gotoStepperForm(){
    history.push("/app/approvals/editDetails");
  }

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  useEffect(() => {
    loadData();
  }, [addStatus, updateStatus]);
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);
  const onboardingStatus = "Pending";
  const loadData = async (e) => {
    const response = await axios.get(`/emp/getDetailsforPMOApprovalByOnboardingStatus/${onboardingStatus}`);// u ned to change this
    setData(response.data.data);
    console.log(response.data);
  };

  const [columns, setColumns] = useState([
    {
      title: "AERF ID",
      field: "requisitionId",
      
    },
    {
      title: "Name",
      field: "fullName",
      type: "text",
    },

    {
      title: "Email",
      field: "email",
    },
    {
      title: "Experience",
      field: "yearsOfExperience",
    },
    {
      title: "DOJ",
      field: "dateOfJoining",
      type: "date",
    },
    
    {
      title: "Contact ",
      field: "phoneNumber",
      type: "number",
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ApprovalUpdateForm
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
      
      </Modal>
      <Modal show={viewShow} static={true} centered onHide={handleClose} size="xl"  style={{paddingBottom :"0px"}}>
        <Modal.Header closeButton onClick={viewHandleClose} style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Tabs
            defaultActiveKey="Job Position Details"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            style={{
              justifyContent: "center",
              color: "black",
              // backgroundColor: "#FAFDD0",
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
            <Tab
              eventKey="Employment Details"
              title="Employment Details"
              style={{ backgroundColor: "white" }}
            >
              <EmploymentDetailsTab 
              viewOnboard={viewOnboard} 
              viewHandleClose={viewHandleClose}/>
            </Tab>
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
          <Button style ={{backgroundColor: "#B6B6B4",
                    borderColor: "#B6B6B4",}} onClick={viewHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      {/* <EditEmployeeDetailsTabs show={editShow} static={true} centered onHide={handleClose} size="lg"  style={{paddingBottom :"0px"}}/> */}

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
              <Card.Title>Onboardings</Card.Title>
              
            </Col>
            <Col>
              <AddOnboard func={pull_dataAdd} />
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Onboarded Shortlisted Candidates"
            columns={columns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
            editable={{}}
            options={{
              pageSize: 10,
              pageSizeOptions: [10,15,20, 30 ,50, 75, 100],
              maxBodyHeight: 470,
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
                  {props.data.percentage >= 80 ? (
                    <Stack direction="horizontal" gap={3}>
                      <Button
                        onClick={(event) => {
                          setShow(true);
                          console.log(props);
                          setUpdateOnboard(props.data);
                        }}
                        variant="white "
                        className="rounded-pill"
                      >
                        
                        <FcApproval /> Approve
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
                        <FcWebcam />
                         View
                      </Button>
                     
                    </Stack>
                  ) : (
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
                      
                      <FcWebcam />
                       View
                    </Button>
                    
                    <Button style={{paddingTop:"10px"}}
                     variant="white"
                     
                     onClick={(event) => {
                      history.push(`/app/approvals/editDetails/${props.data.onboardingId}`)
                      // setEditShow(true);
                      //  console.log(props);
                      //  setUpdateOnboard1(props.data);
                     }}
                   
                   >
                      <FiEdit />Edit
                   </Button>
                    
                   </Stack>
                  )}
                 
                </div>
              ),
            }}
          />
        </Grid>
      </Card>
      {/* <Example /> */}
    </div>
  );
}
export default OnboardedEmployeesTable;
