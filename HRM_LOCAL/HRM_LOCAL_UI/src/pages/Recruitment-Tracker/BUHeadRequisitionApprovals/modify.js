import React from "react";
import { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";

const BUHRequisitionApprove = (props) => {
  // console.log(props.empID);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [buheadApprove, setBuheadApprove] = useState("");

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const handleClose = () => setShow();

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const ApproveHandler = (e) => {
    // e.prevetDefault();
    const notify = () => toast("Approved");
    // handleClose();
    // const form1 = Object.assign(form, obj);
    let employeeId = props.onboardID.employeeId;
    console.log(props.onboardID);
    const obj = { status: "BUHeadApproved" };
    const form1 = Object.assign(form, obj);
    axios
      .put(
        `/recruitmentTracker/modifyRequisitionStatus/${employeeId}/${empID}`,
        form1
      )
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          props.func();
        } else {
          console.log("props not send");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something wrong");
      });
    props.handleClose();

    notify();
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form role="form">
              <Form.Group
                controlid="formFileSm"
                className="mb-3"
                style={{ marginTop: "30px" }}
              >
                <Form.Label> Upload Documents</Form.Label>
                <Form.Control
                  type="file"
                  className={`${!fileLimit ? "" : "disabled"} `}
                  size="sm"
                  onChange={handleFileEvent}
                  multiple
                  // accept="application/pdf, image/png"
                />
                <div className="uploaded-files-list">
                  {uploadedFiles.map((file) => (
                    <div>{file.name}</div>
                  ))}
                </div>
              </Form.Group>
              <Form.Group md="12" style={{ padding: 0 }}>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={2}
                  className="buheadApprove"
                  type="text"
                  controlid="buheadApprove"
                  placeholder="Approve Reason"
                  value={buheadApprove}
                  onChange={(e) => setBuheadApprove(e.target.value)}
                  isInvalid={!!errors.buheadApprove}
                ></Form.Control>
              </Form.Group>
            </Form>
            <Row>
              <Col style={{ paddingLeft: "180px", marginTop: "10px" }}>
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#f5896e",
                    borderColor: "#f5896e",
                    float: "left",
                  }}
                  onClick={ApproveHandler}
                  type="submit"
                >
                  Submit
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#B6B6B4",
                    borderColor: "#B6B6B4",
                    alignItems: "center",
                  }}
                  onClick={handleClose}
                  type="cancel"
                >
                  Cancel
                </Button>
              </Col>
            </Row>
            <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BUHRequisitionApprove;



