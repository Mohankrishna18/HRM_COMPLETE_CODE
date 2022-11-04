import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Modal, Row, Stack, Tab, Table, Tabs } from 'react-bootstrap';
import HRConfirmation from '../../HRApproval/HRConfirmation';
import axios from "../../../Uri"
import { FcManager, FcWebcam } from 'react-icons/fc';
import PersonalDetailsTab from '../../Approvals/ApprovalComponents/PersonalDetailsTab';
import AddressTab from '../../Approvals/ApprovalComponents/AddressTab';
import AditionalDetailsTab from '../../Approvals/ApprovalComponents/AdditionalDetailsTab';
import EmploymentDetailsTab from '../../Approvals/ApprovalComponents/EmploymentDetailsTab';
import EducationalDetailsTab from '../../Approvals/ApprovalComponents/EducationalDetailsTab';
import ExperienceTab from '../../Approvals/ApprovalComponents/ExperienceTab';
import HRAssign from '../../HRApproval/HRAssign';
import { Grid } from '@mui/material';
import MaterialTable from 'material-table';
import JobPositionDetails from '../../Approvals/ApprovalComponents/JobPositionDetails';


function ResignationaTab() {

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


// const[candidate,setCandidate]=useEffect("")
//     useEffect(() => {
//         axios
//             .get(`/emp/getPersonalDetails/${viewOnboard.employeeId}`)
//             .then((response) => {
//                 setCandidate(response.data)
//                 console.log(response.data)
//             });
//     }, []);

useEffect(() => {
    loadData();
  }, []);
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);
  const status = "Finished";
  const loadData = async (e) => {
    const response = await axios.get(`resignation/getAllResignation/${status}`);// u ned to change this
    setData(response.data);
    console.log(response.data);
  };
  console.log(data.employeeId)

    const [columns, setColumns] = useState([
     // { title: "Resignation ID", field: "resignationId",color:"black" },
      { title: "Employee ID", field: "employeeId",color:"black" },
      { title: "Name", field: "resigningEmployee" },
      { title: "Reason", field: "reason" },
      {
        title: "Notice Date",
        field: "noticeDate",
        type: "date",
        dateSetting: { locale: "en-GB" },
      },
      {
        title: "Resignation Date",
        field: "resignationDate",
        type: "date",
        dateSetting: { locale: "en-GB" },
      }, 
    ]);
    console.log(data);


    return (
        <div>
            <Row><Col md="3" style={{paddingRight:"50px"}}> 
            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                //background: "linear-gradient(to left,#fc7232,#ffab14,#f29c1d)",
                                background: "#f5896e"
                                , height:"50px"
                            }}>
                                <Card.Body>
                                        <h6 style={{ color: "white", fontSize: '15px' }}>  No.of Resignations - {data.length} </h6>
                                </Card.Body>
                            </Card>
                            </Col></Row>
        <Modal show={viewShow} onHide={viewHandleClose} size="xl">
          <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              defaultActiveKey="Job Position Details"
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
            title="RESIGNATIONS"
            columns={columns}
            data={data}
            options={{
              paging: true,
              addRowPosition: "first",
              actionsColumnIndex: -1,
              pageSize: 8,

              pageSizeOptions: [10,15,20, 30 ,50, 75, 100],

              maxBodyHeight: 350,
              headerStyle: {
                // backgroundColor: "#FFC47A",
                background: "#f5896e",
                fontSize:"13px",
                paddingBottom:"4px",
                paddingTop:"8px",
                color: "white",
              },
              exportButton: true,
            }}
            // actions={[
            //     {
            //       icon: "button",
    
            //       tooltip: "Save User",
    
            //       onClick: (event, rowData) =>
            //         alert("You saved " + rowData.firstName),
            //     },
            //   ]}
            //   components={{
            //     Action: (props) => (
            //       <div>
            //         <Stack direction="horizontal" gap={3}>
    
                
            //           <Button
            //             variant="white "
            //             className="rounded-pill"
            //             onClick={(event) => {
            //               setViewShow(true);
            //               console.log(props.data);
            //               setViewOnboard(props.data);
            //             }}
            //           >
            //             {" "}
            //             <FcWebcam /> View
            //           </Button>
            //         </Stack>
            //       </div>
            //     ),
            //   }}
          />
        </Grid>
      </div>
    )
}

export default ResignationaTab;

