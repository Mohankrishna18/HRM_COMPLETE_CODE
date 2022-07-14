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
    axios.get("/emp/getreportingmanager").then((response) => {
      // console.log(response.data.data);
      setReportingManager(response.data.data);
      // console.log(reportingManager)
    });
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
    e.preventDefault();
    console.log(onboardingid);
    const form1 = Object.assign(form, obj);
    console.log(form1);
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, obj);
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

          <Modal show={onhold} onHide={handleClose} centered >
            <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
              <Modal.Title>Approve and Assign Reporting Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
                <Row style={{ paddingLeft: 180, paddingRight: 25, paddingBottom:10 }}>
                 
                    <Button
                      style={{
                        backgroundColor: "#ff9b44",
                        borderColor: "#ff9b44",
                        float: "right",
                        width: "40%",
                        height: "120%",
                        borderRadius: "25px",
                        
                      }}
                      alignItems="center"
                      paddingLeft = ""
                      type="submit"
                      onClick={ApproveHandler}
                    >
                      Submit
                    </Button>
                  
                </Row>
              
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};
export default Approve;
