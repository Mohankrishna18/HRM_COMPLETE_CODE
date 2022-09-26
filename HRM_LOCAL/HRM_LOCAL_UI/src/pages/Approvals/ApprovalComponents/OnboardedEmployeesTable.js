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

// import ApprovalView from "./ApprovalView"; 

function OnboardedEmployeesTable() {
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
    // {
    //   title: "Onboarding Id",
    //   field: "onboardingId",
    //   editable: false,
    // },
    {
      title: "Full Name",
      field: "firstName",
      type: "text",
    },

    {
      title: "Email",
      field: "email",
    },

    {
      title: "Phone Number",
      field: "phoneNumber",
      type: "number",
    },
    {
      title: "DOJ",
      field: "dateOfJoining",
      type: "date",
    },

    {
      title: "Job Title",
      field: "jobTitle",
    },

    {
      title: "Employment Type",
      field: "employmentType",
    },

    {
      title: "Experience",
      field: "yearsOfExperience",
    },
    {
      title: "Status",
      field: "percentage",
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ApprovalUpdateForm
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
      <Modal show={viewShow} static={true} centered onHide={handleClose} size="xl"  style={{paddingBottom :"500px"}}>
        <Modal.Header closeButton onClick={viewHandleClose} style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ApprovalView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          /> */} 

          <Tabs
            defaultActiveKey="Personal Details"
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
          <Button variant="secondary" onClick={viewHandleClose}>
            Close
          </Button>
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
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Onboardings</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Jobs / Shortlisted Candidates{" "}
              </Card.Subtitle>
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
              headerStyle: {
                backgroundColor: "#ff9b44",
                color: "white",
                fontSize: "16px",
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
                        {" "}
                        <FcApproval /> Approve
                      </Button>{" "}
                      <Button
                        variant="white "
                        className="rounded-pill"
                        onClick={(event) => {
                          setViewShow(true);
                          console.log(props);
                          setViewOnboard(props.data);
                        }}
                      > {" "}
                        <FcWebcam />
                         View
                      </Button>
                    </Stack>
                  ) : (
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
