import React, { useEffect, useState } from 'react';
import { Button, Modal, Tab, Table, Tabs } from 'react-bootstrap';
import HRConfirmation from '../../HRApproval/HRConfirmation';
import axios from "../../../Uri"
import { FcWebcam } from 'react-icons/fc';


function OnboardingsToday() {

    const [data, setData] = useState([]);
    const [value, setValue] = React.useState('1');
    const [viewShow, setViewShow] = useState(false);
    const [viewOnboard, setViewOnboard] = useState({});
    const viewHandleClose = () => setViewShow(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        loadData();
      }, []);
    const onboardingStatus = "CEOApproved";
    const loadData = async () => {
    const res = await axios.get(
      `/emp/getDetailsforPMOApprovalByOnboardingStatus/${onboardingStatus}`
    );
    setData(res.data.data);
    console.log(res.data.data);
  };


  console.log(data);



    return (
        <div className="responsive">

<Modal show={viewShow} onHide={viewHandleClose} size="xl">
     
     <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
       <Modal.Title>Onboarding Form</Modal.Title>
     </Modal.Header>
    
     <Modal.Body>
      

       {/* <ApprovalView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          /> */}
     
       {/* <Tabs
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
         <Tab
           eventKey="Employment Details"
           title="Employment Details"
           style={{ backgroundColor: "white" }}
         >
           <EmploymentDetailsTab
           viewOnboard={viewOnboard} 
           viewHandleClose={viewHandleClose}/>
         </Tab>

         {/* <Tab
              eventKey="Employment Details"
              title="Employment Details"
              style={{ backgroundColor: "white" }}
            >
              <EmploymentDetailsTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
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
       </Tabs> */}
     </Modal.Body>
   </Modal>


            {/* <HRConfirmation /> */}
            <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Onboarding ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Ph.No</th>
          <th>DOJ</th>
          <th>Job Title</th>
          <th>Experience</th>
          <th>View</th>
          
        </tr>
      </thead>

      <tbody>
        { data.map((data)=>(
            <tr>
          <td>{data.onboardingId}</td>
          <td>{data.firstName}</td>
          <td>{data.email}</td>
          <td>{data.phoneNumber}</td>
          <td>{data.dateOfJoining}</td>
          <td>{data.jobTitle}</td>
          <td>{data.yearsOfExperience}</td>
          <td>
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
          </td>
        </tr>
        ))}
      </tbody>
    </Table>

        </div>
    )
}


export default OnboardingsToday;