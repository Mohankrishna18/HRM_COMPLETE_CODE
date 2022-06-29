import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";

import axios from "../../../Uri";

const Approve = (props) => {
  const [onhold, setOnhold] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setOnhold(false);
  const handleShow = () => setOnhold(true);
  const [band, setBand] = useState({});

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios
      .get("/dept/getAllDepartments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch(() => {
        toast.error("data is not getting");
      });
    // console.log(departments)
  }, []);

  const [reportingManager, setReportingManager] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getreportingmanager")
      .then((response) => {
        // console.log(response.data.data);
        setReportingManager(response.data.data);
        // console.log(reportingManager)
      })
    // .catch(() => {
    //   toast.error("data is not getting");
    // });
    console.log(reportingManager);
  }, []);

  let onboardingid = props.onboardingid;
  console.log(onboardingid);
  const obj = { approvedStatus: true };
  console.log(form);
  console.log(obj);

  const ApproveHandler = (e) => {
    // e.preventDefault();
    console.log(onboardingid);
    const form1 = Object.assign(form, obj);
    console.log(form1);
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, form1);
    handleClose();
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
                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Select Reporting Manager *</Form.Label>
                  <Form.Select
                    placeholder="select Gender"
                    value={form.reportingManager}
                    Select
                    onChange={(e) =>
                      setField("reportingManager", e.target.value)
                    }
                  >
                    <option>Select </option>
                    {reportingManager.map((reportingManagerr) => (
                      <option>{reportingManagerr.reportingmanager}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Assign Project Name *</Form.Label>
                  <Form.Select
                    required
                    type="text"
                    placeholder="Project Name"
                    controlId="projectName"
                    value={form.projectName}
                    onChange={(e) => setField("projectName", e.target.value)}
                  ><option>Select</option>
                    <option value="HRM">HRM</option>
                    <option value="Properties">Properties</option>
                    <option value="Digital E Learning">Digital E Learning</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Assign Band *</Form.Label>
                  <Form.Select
                    type="text"
                    placeholder="Band"
                    controlId="band"
                    name="band"
                    value={form.band}
                    onChange={(e) => setField("band", e.target.value)}
                  >
                    <option>Select</option>
                    <option value="Band-1">Band-1</option>
                    <option value="Band-2">Band-2</option>
                    <option value="Band-3">Band-3</option>
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
                  onClick={ApproveHandler}
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