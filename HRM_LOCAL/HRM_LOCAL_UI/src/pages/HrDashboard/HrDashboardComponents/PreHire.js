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


function PreHire(props) {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [rejectshow, setRejectShow] = useState(false);
    const [onboardID, setOnboardID] = useState({});
    const [update, setUpdate] = useState(false);
    const [reject, setReject] = useState(false);
  
    const [viewShow, setViewShow] = useState(false);
  
    const [viewOnboard, setViewOnboard] = useState({});
    const viewHandleClose = () => setViewShow(false);
  

    // const handleShow = () => {
  

  
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
    console.log(data.length);
    const [columns, setColumns] = useState([
      { title: "Onboarding ID", field: "onboardingId",color:"black" },
      { title: "Job Title", field: "jobTitle" },
      { title: "Name", field: "firstName" },
      { title: "Email", field: "email" },
      { title: "Experience", field: "yearsOfExperience" },
      {
        title: "DOJ",
        field: "dateOfJoining",
        type: "date",
        dateSetting: { locale: "en-GB" },
      },
      { title: "Contact_Number", field: "phoneNumber" },  


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
            title="Offer Released"
            columns={columns}
            data={data}
            options={{
              paging: true,
              addRowPosition: "first",
              actionsColumnIndex: -1,
              pageSize: 10,
           
              pageSizeOptions: [10,15,20, 30 ,50, 75, 100],
              maxBodyHeight: 350,
              headerStyle: {
                // backgroundColor: "#FFC47A",
                background: "#ffa442",
  fontSize:"16px",
  paddingBottom:"6px",
  paddingTop:"12px",
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

export default PreHire;




// <div className="responsive">

// <Modal show={viewShow} onHide={viewHandleClose} size="xl">
     
//      <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
//        <Modal.Title>Onboarding Form</Modal.Title>
//      </Modal.Header>
    
//      <Modal.Body>
      

//        {/* <ApprovalView
//             viewOnboard={viewOnboard}
//             // func={pull_data}
//             viewHandleClose={viewHandleClose}
//           /> */}
     
//        {/* <Tabs
//          defaultActiveKey="Personal Details"
//          transition={false}
//          id="noanim-tab-example"
//          className="mb-3"
//          style={{
//            justifyContent: "center",
//            color: "white",
//            backgroundColor: "white",
//            fontSize: "px",
//            padding: 0,
//          }}
//        >
//          <Tab
//            eventKey="Personal Details"
//            title="Personal Details"
//            style={{ backgroundColor: "white" }}
//          >
//            <PersonalDetailsTab
//              viewOnboard={viewOnboard}
//              viewHandleClose={viewHandleClose}
//            />
//          </Tab>
//          <Tab
//            eventKey="Address"
//            title="Address"
//            style={{ backgroundColor: "white" }}
//          >
//            <AddressTab
//              viewOnboard={viewOnboard}
//              viewHandleClose={viewHandleClose}
//            />
//          </Tab>

//          <Tab
//            eventKey="Additional Details"
//            title="Additional Details"
//            style={{ backgroundColor: "white" }}
//          >
//            <AditionalDetailsTab
//              viewOnboard={viewOnboard}
//              viewHandleClose={viewHandleClose}
//            />
//          </Tab>
//          <Tab
//            eventKey="Employment Details"
//            title="Employment Details"
//            style={{ backgroundColor: "white" }}
//          >
//            <EmploymentDetailsTab
//            viewOnboard={viewOnboard} 
//            viewHandleClose={viewHandleClose}/>
//          </Tab>

//          {/* <Tab
//               eventKey="Employment Details"
//               title="Employment Details"
//               style={{ backgroundColor: "white" }}
//             >
//               <EmploymentDetailsTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
//             </Tab> 
//          <Tab
//            eventKey="Education"
//            title="Education"
//            style={{ backgroundColor: "white" }}
//          >

//            <EducationalDetailsTab
//              viewOnboard={viewOnboard}
//              viewHandleClose={viewHandleClose}
//            />
//          </Tab>
//          <Tab
//            eventKey="Experience"
//            title="Experience "
//            style={{ backgroundColor: "white" }}
//          >
//            <ExperienceTab
//              viewOnboard={viewOnboard}
//              viewHandleClose={viewHandleClose}
//            />
//          </Tab>
//        </Tabs> */}
//      </Modal.Body>
//    </Modal>


//             {/* <HRConfirmation /> */}
//             <Table striped bordered hover responsive>
//       <thead>
//         <tr>
//           <th>Onboarding ID</th>
//           <th>Full Name</th>
//           <th>Email</th>
//           <th>Ph.No</th>
//           <th>DOJ</th>
//           <th>Job Title</th>
//           <th>Experience</th>
//           <th>View</th>
          
//         </tr>
//       </thead>

//       <tbody>
//         { data.map((data)=>(
//             <tr>
//           <td>{data.onboardingId}</td>
//           <td>{data.firstName}</td>
//           <td>{data.email}</td>
//           <td>{data.phoneNumber}</td>
//           <td>{data.dateOfJoining}</td>
//           <td>{data.jobTitle}</td>
//           <td>{data.yearsOfExperience}</td>
//           <td>
//           <Button
//                     variant="white "
//                     className="rounded-pill"
//                     onClick={(event) => {
//                       setViewShow(true);
//                       console.log(props);
//                       setViewOnboard(props.data);
//                     }}  
//                   >
//                     {" "}
//                     <FcWebcam /> View
//                   </Button>
//           </td>
//         </tr>
//         ))}
//       </tbody>
//     </Table>

//         </div>