import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";

import axios from "../../../Uri";

const Approve = (props) => {
  const [onhold, setOnhold] = useState(false);

  const handleClose = () => setOnhold(false);
  const handleShow = () => setOnhold(true);

  const [approvedStatus, setApprovedStatus] = useState(false);
  const [reportingManager1, setReportingManager] = useState("");

  let onboardingid = props.onboardingid;
  let reportingManager = props.reportingManager;
  // console.log(props.onboardingid);
  // console.log(approvedStatus);
  //console.log(reportingManager);


  const updateAPIData = () => {
    handleClose;
    setApprovedStatus(true);
    axios.put(
      `/emp/updateApprovStatus/${onboardingid}`,
      {
        approvedStatus: true,
        // reportingManager: setReportingManager,
      }
      // .then(setApprovedStatus(true), console.log(approvedStatus))
    );
  };

  return (
    <div>
      <Row>
        <Col>
          <Button
            variant="white "
            className="rounded-pill"
            onClick={handleShow}
          >
            {" "}
            <FcApproval /> Approve
          </Button>

          <Modal show={onhold} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Approve and Assign Reporting Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form role="form">
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>
                    <b>Select Reporting Manager *</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    required
                    value={reportingManager}
                    onChange={(e) => setReportingManager(e.target.value)}
                  >
                    <option> Select options</option>
                    <option value="Web Developement">Revanth Kumar1 </option>

                    <option value="Bootstrap Developement">
                      Revanth Kumar2
                    </option>

                    <option value="Android Design">Revanth Kumar3</option>
                  </Form.Select>
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#ff9b44",
                    color: "#F4F8F6",
                  }}
                  onClick={updateAPIData}
                >
                  &nbsp; Save
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};
export default Approve;
