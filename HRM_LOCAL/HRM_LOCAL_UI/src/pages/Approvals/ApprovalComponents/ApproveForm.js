import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useToasterStore } from "react-hot-toast";
import axios from "../../../Uri";


const ApproveForm = (props) => {
  const [users, setUsers] = useState([]);
  const [onboardingId, setOnboardingId] = useState([]);
  const [approvedStatus, setApprovedStatus] = useState(false);
  const [rejectedStatus, setRejectedStatus] = useState(false);
  let onboardingid = props.onboardingid;
  console.log(props.onboardingid);


  useEffect(() => {
    axios
      .get("/emp/waitingForApprovelStatus")


      .then((onboardingEmployeesRseponse) => {
        console.log(onboardingEmployeesRseponse.data);
        setUsers(onboardingEmployeesRseponse.data.data);
      });
  }, []);


  console.log(users);


  const handlesubmit = (e) => {
    e.preventDefault();
  };


  //* Approve Put Endpoint for Updating Approve_Status as True
  const updateApproveStatusData = () => {
    setApprovedStatus(true);
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, {
      approvedStatus: true,
    });
  };


  //* Reject Put Endpoint for Updating Reject_Status as True
  const updateRejectStatusData = () => {
    setRejectedStatus(true);
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, {
      rejectedStatus: true,
    });
  };


  return (
    <div>


      <Container>
      {users.map((users) => (
        <Form onSubmit={handlesubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Onboarding ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Onboarding ID"
                  //value={props.onboarding_id}
                  //value={props.onboarding_id}

                  value={users.onboardingId}
                  onChange={(e) => setOnboardingId(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Designation"
                  // defaultValue={}={props.designation}
                  value={users.desgination}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your First Name"
                  value={users.firstName}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Middle Name"
                  value={users.middleName}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Last Name"
                  value={users.lastName}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Email"
                  value={users.email}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Phone Number"
                  value={users.phoneNumber}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Years of Experience</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Years of Experience"
                  value={useToasterStore.yearsOfExperience}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Date of Joining</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Date of Joining"
                  value={users.dateOfJoining}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Job Tiltle</Form.Label>
                <Form.Control type="text" placeholder="Enter Job Tiltle" value={users.jobTitle} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col>
              <Form.Group className="mb-3">
                <Form.Label>Reporting Manger</Form.Label>
                <Form.Control type="text" placeholder="Enter Reporting Manager" value={users.reportingManager}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Set Skills</Form.Label>
                <Form.Control type="text" placeholder="Enter Skills" value={users.skillSet} />
              </Form.Group>
            </Col>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control type="text" placeholder="Enter Comments" value={users.comments} />
                </Form.Group>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col>
              <Button
                variant="success"
                type="submit"
                block
                style={{ marginTop: "2em" }}
                onClick={updateApproveStatusData}
              >
                Approve
              </Button>
              <Button
                paddingLeft="20"
                variant="danger"
                type="submit"
                block
                style={{ marginTop: "2em", marginLeft: "2em" }}
                onClick={updateRejectStatusData}
              >
                Reject
              </Button>
            </Col>
          </Row>
        </Form>
         ))}

      </Container>
    </div>
  );
};


export default ApproveForm;

