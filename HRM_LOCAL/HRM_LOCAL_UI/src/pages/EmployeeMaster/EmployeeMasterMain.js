import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import EmployeeMasterCard from "./EmployeeMasterComponents/EmployeeMasterCard";
import EmployeeMasterForm from "./EmployeeMasterComponents/EmployeeMasterForm";
import EmployeeMasterTabs from "./EmployeeMasterComponents/EmployeeMasterTabs";

const EmployeeMaster = (props) => {

  const da = JSON.parse(sessionStorage.getItem('userdata'))
  const empID = da.data.employeeId;

  const[profile,setProfile] = useState(empID);
  console.log(profile)

  const [employeedetails, setEmployeeDetails] = useState([])
   
    // useEffect(() => {
    //     axios.get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
    //         .then((response) => {
    //             setEmployeeDetails(response.data.data);
    //         })
    // }, [])

  return (
    <div>
      <Row>
        <Col xs={12}>
        <Card className="example" >
                        <Card.Body>
                            <Card.Title>Edit My Profile</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Employees / Edit My Profile
                            </Card.Subtitle>
                            <EmployeeMasterCard profile={profile}/>
                            <EmployeeMasterTabs/>
                        </Card.Body>
          {/* <EmployeeMasterForm /> */}
          
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeMaster;