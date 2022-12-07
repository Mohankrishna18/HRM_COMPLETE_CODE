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
import JobPositionDetails from '../../Approvals/ApprovalComponents/JobPositionDetails';


function OnboardingsMonth() {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [rejectshow, setRejectShow] = useState(false);
    const [onboardID, setOnboardID] = useState({});
    const [update, setUpdate] = useState(false);
    const [reject, setReject] = useState(false);
    const [viewShow, setViewShow] = useState(false);
    const [viewOnboard, setViewOnboard] = useState({});
    const viewHandleClose = () => setViewShow(false);
  
 useEffect(() => {
    axios
        .get(`emp/getData`)
        .then((res) => {
          const sata1 = res.data.filter(item => item.onboardingStatus === 'CEOApproved')
            setData(sata1);
            console.log(sata1);
        });
}, []);
console.log(data)

    const [columns, setColumns] = useState([
      { title: "AERF ID", field: "requisitionId",color:"black" },
      { title: "OBD ID", field: "onboardingId",color:"black" },
      // { title: "Job Title", field: "jobTitle" },
      { title: "Name", field: "fullName" },
      { title: "Email", field: "email" },
      { title: "Experience", field: "yearsOfExperience" },
      {
        title: "DOJ",
        field: "dateOfJoining",
        type: "date",
        dateSetting: { locale: "en-GB" },
      },
      { title: "Contact", field: "phoneNumber" },  

     
    ]);
    console.log(data);

return(
    <div>
        <Modal show={viewShow} onHide={viewHandleClose} size="xl">
          <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
            <Modal.Title> Details</Modal.Title>
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
            title="MONTH ONBOARDINGS"
            style={{fontSize:"13px"}}
            columns={columns}
            data={data}
            options={{
              paging: true,
              addRowPosition: "first",
              actionsColumnIndex: -1,
              pageSize: 8,
              pageSizeOptions: [10,15,20, 30 ,50, 75, 100],
              maxBodyHeight: 370,
              headerStyle: {
                // backgroundColor: "#FFC47A",
                background: "#f5896e",
                fontSize:"13px",
                paddingBottom:"4px",
                paddingTop:"8px",
                color: "white",

  // height: "50px",
  // position: "absolute",
  // left: "10%",
  // marginLeft: "-3px",
  // top: "0",
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
                    style={{fontSize:"10px"}}
                      variant="white "
                      className="rounded-pill"
                      onClick={(event) => {
                        setViewShow(true);
                        console.log(props);
                        setViewOnboard(props.data);
                      }}
                    >
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
export default OnboardingsMonth;



// const [data, setData] = useState([]);
// const [value, setValue] = React.useState('1');
// const [viewShow, setViewShow] = useState(false);
// const [viewOnboard, setViewOnboard] = useState({});
// const viewHandleClose = () => setViewShow(false);
// const handleChange = (event, newValue) => {
//     setValue(newValue);
// };

// // useEffect(() => {
// //     loadData();
// // }, []);
// // const onboardingStatus = "CEOApproved";
// // const loadData = async () => {
// //     const res = await axios.get(
// //         `/emp/getDetailsforPMOApprovalByOnboardingStatus/${onboardingStatus}`
// //     );
// //     setData(res.data.data);
// //     console.log(res.data.data);
// // };
// // console.log(data);

// useEffect(() => {
//     axios
//         .get(`emp/getData`)
//         .then((res) => {
//             setData(res.data);
//             console.log(res.data);
//         });
// }, []);
// console.log(data)

// return (
//     <div className="responsive">
//         <Modal show={viewShow} onHide={viewHandleClose} size="xl">
//             <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
//                 <Modal.Title>Onboarding Form</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>

//                 {/* <ApprovalView
//             viewOnboard={viewOnboard}
//             // func={pull_data}
//             viewHandleClose={viewHandleClose}
//           /> */}

//                 {/* <Tabs
//      defaultActiveKey="Personal Details"
//      transition={false}
//      id="noanim-tab-example"
//      className="mb-3"
//      style={{
//        justifyContent: "center",
//        color: "white",
//        backgroundColor: "white",
//        fontSize: "px",
//        padding: 0,
//      }}
//    >
//      <Tab
//        eventKey="Personal Details"
//        title="Personal Details"
//        style={{ backgroundColor: "white" }}
//      >
//        <PersonalDetailsTab
//          viewOnboard={viewOnboard}
//          viewHandleClose={viewHandleClose}
//        />
//      </Tab>
//      <Tab
//        eventKey="Address"
//        title="Address"
//        style={{ backgroundColor: "white" }}
//      >
//        <AddressTab
//          viewOnboard={viewOnboard}
//          viewHandleClose={viewHandleClose}
//        />
//      </Tab>

//      <Tab
//        eventKey="Additional Details"
//        title="Additional Details"
//        style={{ backgroundColor: "white" }}
//      >
//        <AditionalDetailsTab
//          viewOnboard={viewOnboard}
//          viewHandleClose={viewHandleClose}
//        />
//      </Tab>
//      <Tab
//        eventKey="Employment Details"
//        title="Employment Details"
//        style={{ backgroundColor: "white" }}
//      >
//        <EmploymentDetailsTab
//        viewOnboard={viewOnboard} 
//        viewHandleClose={viewHandleClose}/>
//      </Tab>

//      {/* <Tab
//               eventKey="Employment Details"
//               title="Employment Details"
//               style={{ backgroundColor: "white" }}
//             >
//               <EmploymentDetailsTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
//             </Tab> 
//      <Tab
//        eventKey="Education"
//        title="Education"
//        style={{ backgroundColor: "white" }}
//      >

//        <EducationalDetailsTab
//          viewOnboard={viewOnboard}
//          viewHandleClose={viewHandleClose}
//        />
//      </Tab>
//      <Tab
//        eventKey="Experience"
//        title="Experience "
//        style={{ backgroundColor: "white" }}
//      >
//        <ExperienceTab
//          viewOnboard={viewOnboard}
//          viewHandleClose={viewHandleClose}
//        />
//      </Tab>
//    </Tabs> */}
//             </Modal.Body>
//         </Modal>


//         {/* <HRConfirmation /> */}
//         <Table striped bordered hover responsive>
//             <thead>
//                 <tr>
//                     <th>Onboarding ID</th>
//                     <th>Full Name</th>
//                     <th>Email</th>
//                     <th>Ph.No</th>
//                     <th>DOJ</th>
//                     <th>Job Title</th>
//                     <th>Experience</th>
//                     <th>View</th>

//                 </tr>
//             </thead>

//             <tbody>
//                 {data.map((data) => (
//                     <tr>
//                         <td>{data.onboardingId}</td>
//                         <td>{data.firstName}</td>
//                         <td>{data.email}</td>
//                         <td>{data.primaryPhoneNumber}</td>
//                         <td>{data.dateOfJoining}</td>
//                         <td>{data.jobTitle}</td>
//                         <td>{data.yearsOfExperience}</td> 
//                         <td>
//                             <Button
//                                 variant="white "
//                                 className="rounded-pill"
//                                 onClick={(event) => {
//                                     setViewShow(true);
//                                     console.log(props);
//                                     setViewOnboard(props.data);
//                                 }}
//                             >
//                                 {" "}
//                                 <FcWebcam /> View
//                             </Button>
//                         </td>
//                     </tr>
//                 ))} 
//             </tbody>
//         </Table>

//     </div>
// )
// }
