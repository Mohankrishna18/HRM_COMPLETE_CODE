import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

function ExperienceTab(props) {
  return (
    <div className= "scroll">
      {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 20, textAlign: "center" }}>
                    Work Experience
                </Card.Title>
            </Card> */}

      <Form style={{ padding: 10 }}>
        {/* <Card
          style={{
            marginLeft: 8,
            marginRight: 8,
            marginTop: 15,
            backgroundColor: "#FAFDD0",
          }}
        >
          <Card.Title style={{ margin: 8, textAlign: "center" }}>
            Experience-1
          </Card.Title>
        </Card> */}
        <h5><b>Experience 1 : </b></h5>
        <Row>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany1_name"

              value={props.viewOnboard.previousCompany1_name}
              maxLength={50}
              name="previousCompany1_name"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany1_designation"
              value={props.viewOnboard.previousCompany1_designation}
              maxLength={50}
              name="previousCompany1_designation"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Joining date</Form.Label>
            <Form.Control
              type="date"
              controlId="previousCompany1_joiningDate"
              value={props.viewOnboard.previousCompany1_joiningDate}
              name="previousCompany1_joiningDate"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Relieving Date</Form.Label>
            <Form.Control
              type="Date"
              controlId="previousCompany1_relievingDate"
              value={props.viewOnboard.previousCompany1_relievingDate}
              name="previousCompany1_relievingDate"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany1_employeeId"
              value={props.viewOnboard.previousCompany1_employeeId}
              maxLength={50}
              name="previousCompany1_employeeId"
            />
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Employment Type</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany1_typeOfEmployeement"
              value={props.viewOnboard.previousCompany1_typeOfEmployment}
              name="previousCompany1_typeOfEmployment"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Reason for Exit</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              type="text"
              controlId="previousCompany1_reasonForRelieving"
              value={props.viewOnboard.previousCompany1_reasonForRelieving}
              name="previousCompany1_reasonForRelieving"
            />
          </Form.Group>
        </Row>
        {/* <Card
          style={{
            marginLeft: 8,
            marginRight: 8,
            marginTop: 15,
            backgroundColor: "#FAFDD0",
          }}
        >
          <Card.Title style={{ margin: 20, textAlign: "center" }}>
            Experience-2
          </Card.Title>
        </Card> */}
        <br></br>
        <h5><b>Experience 2 : </b></h5>
        <Row>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany2_name"
              maxLength={50}
              value={props.viewOnboard.previousCompany2_name}
              name="previousCompany2_name"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany2_designation"
              maxLength={50}
              value={props.viewOnboard.previousCompany2_designation}
              name="previousCompany2_designation"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Joining date</Form.Label>
            <Form.Control
              type="date"
              controlId="previousCompany2_joiningDate"
              value={props.viewOnboard.previousCompany2_joiningDate}
              name="previousCompany2_joiningDate"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Relieving Date</Form.Label>
            <Form.Control
              type="Date"
              controlId="previousCompany2_relievingDate"
              value={props.viewOnboard.previousCompany2_relievingDate}
              name="previousCompany2_relievingDate"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany2_employeeId"
              value={props.viewOnboard.previousCompany2_employeeId}
              name="previousCompany2_employeeId"
            />
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Employment Type</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany2_typeOfEmployment"
              value={props.viewOnboard.previousCompany2_typeOfEmployment}
              name="previousCompany2_typeOfEmployment"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 15 }}>
            <Form.Label>Reason for Exit</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              type="text"
              controlId="previousCompany2_reasonForRelieving"
              value={props.viewOnboard.previousCompany2_reasonForRelieving}
              name="previousCompany2_reasonForRelieving"
            />
          </Form.Group>
        </Row>
        {/* <Card
          style={{
            marginLeft: 8,
            marginRight: 8,
            marginTop: 15,
            backgroundColor: "#FAFDD0",
          }}
        >
          <Card.Title style={{ margin: 20, textAlign: "center" }}>
            Experience-3
          </Card.Title>
        </Card> */}
         <h5><b>Experience 3 : </b></h5>
        <Row>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany3_name"
              maxLength={50}
              value={props.viewOnboard.previousCompany3_name}
              name="previousCompany3_name"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany3_designation"
              maxLength={50}
              value={props.viewOnboard.previousCompany3_designation}
              name="previousCompany3_designation"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Joining date</Form.Label>
            <Form.Control
              type="date"
              controlId="previousCompany3_joiningDate"
              value={props.viewOnboard.previousCompany3_joiningDate}
              name="previousCompany3_joiningDate"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Relieving Date</Form.Label>
            <Form.Control
              type="Date"
              controlId="prevoiusCompany3_relievingDate"
              value={props.viewOnboard.previousCompany3_relievingDate}
              name="previousCompany3_relievingDate"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany3_employeeId"
              maxLength={50}
              value={props.viewOnboard.previousCompany3_employeeId}
              name="previousCompany3_employeeId"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Employment Type</Form.Label>
            <Form.Control
              type="text"
              controlId="previousCompany3_typeOfEmployment"
              value={props.viewOnboard.previousCompany3_typeOfEmployment}
              name="previousCompany3_typeOfEmployment"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Reason for Exit</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              type="text"
              controlId="previousCompany3_reasonForRelieving"
              value={props.viewOnboard.previousCompany3_reasonForRelieving}
              name="previousCompany3_reasonForRelieving"
            />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
export default ExperienceTab;