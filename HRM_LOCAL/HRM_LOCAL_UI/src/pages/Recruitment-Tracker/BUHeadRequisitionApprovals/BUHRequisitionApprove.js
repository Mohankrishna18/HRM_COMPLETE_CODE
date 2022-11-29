import React from "react";
import { useState } from "react";
import "./BUHRequisitionApprove.css";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

const MAX_COUNT = 5;
const BUHRequisitionApprove = (props) => {
  console.log(props.data.rrfId);
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

  const validateForm = () => {
    const { buheadApprove } = form;

    const newErrors = {};

    if (
      !buheadApprove ||
      buheadApprove === "" ||
      !buheadApprove.match(/^[aA-zZ\s]+$/)
    )
      newErrors.buheadApprove = "Please Add Comments";
    return newErrors;
  };

  const ApproveHandler = (e) => {
    // e.prevetDefault();

    const notify = () => toast("Approved");
    // handleClose();

    const da = JSON.parse(sessionStorage.getItem("userdata"));
    const userType = da.data.userType;
    console.log(da.data.employeeID);
    const employeeID = da.data.employeeId;
    console.log(userType);
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log("Form validation error");
    } else {
      let rrfId = props.data.rrfId;
      console.log(props.data.empID);
      const obj = { workflowStatus: "Waiting for PMO Approval", buheadId : employeeID };
      console.log(obj);
      const form1 = Object.assign(form, obj);
      console.log(uploadedFiles);
      const formData = new FormData();
      for (let i = 0; i < uploadedFiles.length; i++) {
        formData.append("files", uploadedFiles[i]);
      }
      console.log(formData);
      axios
        .put(
          `/recruitmentTracker/modifyRequisitionStatus/${rrfId}/${userType}`,
          form1
        )
        .then((res) => {
          console.log(res);
          if(res.statusText === "OK"){
            props.func();
          }else{
            console.log("Files Not Uploded")
          }
          notify();
          axios
            .post(`api/requisitionUploads/${rrfId}`, formData)
            .then((response) => {
              console.log(response);
              // if(response)
              props.func();
            });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something wrong");
          setErrors(formErrors);
          props.func();
        });
    }
    props.handleClose();
  };
  return (
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col>
            <Form role="form">
              <Form.Group
                controlid="formFileSm"
                className="mb-3"
                style={{ marginTop: "10px" }}
              >
                <Form.Label> Upload Documents</Form.Label>
                <br></br>
                <input
                  id="fileUpload"
                  type="file"
                  multiple
                  accept="application/pdf, image/png"
                  onChange={handleFileEvent}
                  disabled={fileLimit}
                />

                <label htmlFor="fileUpload">
                  <a
                    className={`btn btn-warning ${
                      !fileLimit ? "" : "disabled"
                    } `}
                  >
                    Upload Files
                  </a>
                </label>

                <div className="uploaded-files-list">
                  {uploadedFiles.map((file) => (
                    <div>{file.name}</div>
                  ))}
                </div>
              </Form.Group>
              <Form.Group md="12" style={{ padding: 0 }}>
                <Form.Label>Comment *</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={2}
                  className="buheadApprove"
                  type="text"
                  controlid="buheadApprove"
                  placeholder="Approve Reason"
                  value={form.buheadApprove}
                  onChange={(e) => setField("buheadApprove", e.target.value)}
                  isInvalid={!!errors.buheadApprove}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.buheadApprove}
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Row>
              <Col style={{ paddingLeft: "180px", marginTop: "10px" }}>
                <Button
                  
                  style={{
                    backgroundColor: "#f5896e",
 borderColor: "#f5896e",
                    float: "left",
                  }}
                  onClick={ApproveHandler}
                  type="submit"
                >
                  Approve
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
