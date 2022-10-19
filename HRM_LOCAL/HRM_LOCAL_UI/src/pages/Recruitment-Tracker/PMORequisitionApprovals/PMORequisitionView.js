import React, { useState, useRef } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PMORequisitionView = (props) => {
  console.log(props.data);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(true);

  const forms = useRef(null);

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  }

  const validateForm = () => {
    const {
      jobId,
      jobTitle,
      positions,
      status,
      primarySkills,
      secondarySkills,
      workLocation,
      workTimings,
      rate,
      employmentType,
      project,
      client,
      businessUnit,
      yearsOfExperience,
      description,
      raisedBy,
      raisedOn,
    } = form;

    const newErrors = {};
    if (
      !jobId ||
      jobId === "" ||
      !jobId.match(
        /^((\\+[1-9]{1}[ \\-]*)|(\\([0-9]{9}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.jobId = "Please Enter company PhoneNumber";
    if (!jobTitle || jobTitle === "" || !jobTitle.match(/^[aA-zZ\s]+$/))
      newErrors.jobTitle = "Please Select Client";
    if (
      !primarySkills ||
      primarySkills === "" ||
      !primarySkills.match(/^[aA-zZ\s]+$/)
    )
      newErrors.primarySkills = "";
    if (
      !positions ||
      positions === "" ||
      positions.match(
        /^((\\+[1-9]{1}[ \\-]*)|(\\([0-9]{9}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.positions = "";
    if (
      !secondarySkills ||
      secondarySkills === "" ||
      !secondarySkills.match(/^[aA-zZ\s]+$/)
    )
      if (!workLocation || workLocation === "")
        newErrors.workLocation = "Please Select startDate";

    if (!raisedOn || raisedOn === "")
      newErrors.raisedOn = "Please Select End Date";
    if (!rate || rate === "" || rate.match(/[^0-9]/g))
      newErrors.rate = "Please Enter rate";
    if (!status || status === "") newErrors.status = "Please select status";
    if (!priority || priority === "")
      newErrors.priority = "Please Select priority";

    if (!yearsOfExperience || yearsOfExperience === "")
      newErrors.yearsOfExperience = "";
    if (!description || description === "")
      newErrors.description = "Please Enter Description";
    return newErrors;
  };
  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const userType = da.data.userType;

  const ApproveHandler = (e) => {
    // e.prevetDefault();
    const notify = () => toast("Approved");
    // handleClose();
    // const form1 = Object.assign(form, obj);
    let employeeId = props.data.employeeId;

    console.log(employeeId);
    const obj = { status: "Approved" };
    const form1 = Object.assign(form, obj);
    axios
      .put(
        `/recruitmentTracker/modifyRequisitionStatus/${employeeId}/${userType}`,
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
    <div className="scroll">
      <Row style={{ marginTop: 20 }}>
        <Col>
          <Card style={{ padding: 30, paddingBottom: 20 }}>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>Job ID :</Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.reqId}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Category :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.reqId}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Business unit :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.departmentName}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>Client :</Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.clientName}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>Project :</Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.projectName}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Work Location :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.workLocation}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Technology :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.technology}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Job Title :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.jobTitle}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>Role :</Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.role}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Primary pSkills :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.pSkills}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Secondary Skills :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.sSkills}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  No. of Positions :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.postitions}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Years of Experience :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.yoe}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Job Description :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.textAreaDesc}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>Rate :</Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.rate}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Employment Type :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.empType}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Working Hours :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.workingHours}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Educational Qualification :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.qualification}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  POC Name :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.comments}
                </Card.Text>
              </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Comments :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.data.comments}
                </Card.Text>
              </Col>
            </Row>
            {/* <Row>
                            <Col>
                                <Button
                                    style={{
                                        backgroundColor: "#ff9b44",
                                        borderColor: "#ff9b44",
                                        float: "right",
                                        width: "50%",
                                        height: "100%",
                                        borderRadius: "25px",
                                    }}
                                    type="submit"
                                    // onClick={handleSubmit}
                                >
                                    Send for Approval
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    style={{
                                        backgroundColor: "#B6B6B4",
                                        borderColor: "#B6B6B4",
                                        alignItems: "center",
                                        width: "40%",
                                        height: "100%",
                                        borderRadius: "25px",
                                    }}
                                    type="cancel"
                                    // onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                            </Col>
                        </Row> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PMORequisitionView;
