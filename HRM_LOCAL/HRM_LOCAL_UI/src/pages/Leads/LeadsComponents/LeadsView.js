import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const ApprovalView = (props) => {
  console.log(props.viewOnboard);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
      leadName,
      startDate,
      endDate,
      companyName,
      companyEmail,
      companyPhoneNumber,
      companyCountry,
      companyAddress,
      sourceName,
      sourceEmail,
      sourcePhoneNumber,
      pocName,
      pocEmail,
      pocPhoneNumber,
      status,
      businessValue,
      leadNotes,

    } = form;
    const newErrors = {};
    if (!leadName || leadName === "" || !leadName.match(/^[aA-zZ\s]+$/))
      newErrors.leadName = "Please Enter Lead Name";

    if (!startDate || startDate === "")
      newErrors.startDate = "Please Enter Start Date";

    if (!endDate || endDate === "")
      newErrors.endDate = "Please Enter End Date";
    if (!companyName || companyName === "" || !companyName.match(/^[aA-zZ\s]+$/))
      newErrors.companyName = "Please Enter Company Name";
    if (!companyEmail || companyEmail === "") newErrors.companyEmail = "Please Enter company Email";
    if (!companyPhoneNumber || companyPhoneNumber === "" || !companyPhoneNumber.match(/^((\\+[1-9]{1}[ \\-]*)|(\\([0-9]{9}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.companyPhoneNumber = "Please Enter company PhoneNumber";
    if (!companyCountry || companyCountry === "") newErrors.companyCountry = "Please Enter Company Country ";
    if (!companyAddress || companyAddress === "") newErrors.companyAddress = "Please Enter Company Address";
    if (!sourceName || sourceName === "" || !sourceName.match(/^[aA-zZ\s]+$/))
      newErrors.sourceName = "Please Enter Source Name";
    if (!sourceEmail || sourceEmail === "") newErrors.sourceEmail = "Please Enter source Email";
    if (!sourcePhoneNumber || sourcePhoneNumber === "" || !sourcePhoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.sourcePhoneNumber = "Please Enter source PhoneNumber";
    if (!pocName || pocName === "" || !pocName.match(/^[aA-zZ\s]+$/))
      newErrors.pocName = "Please Enter POC Name";
    if (!pocEmail || pocEmail === "") newErrors.pocEmail = "Please Enter POC Email";
    if (!pocPhoneNumber || pocPhoneNumber === "" || !pocPhoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.pocPhoneNumber = "Please Enter POC PhoneNumber";
    if (!status || status === "") newErrors.status = "Please Enter Status";
    if (!businessValue || businessValue === "" || !businessValue.match(/^[aA-zZ\s]+$/))
      newErrors.businessValue = "Please Enter Bussiness Value";
    if (!leadNotes || leadNotes === "" || !leadNotes.match(/^[aA-zZ\s]+$/))
      newErrors.leadNotes = "Please Enter Lead Notes";
    return newErrors;

  };
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      axios
        .post("/emp/createNewPotentialEmployee", form)
        .then((response) => {
          const user = response.data;
          toast.success("Form Submitted successfully");
        })
        .catch((err) => {
          toast.error("Unable to fetch data");
        });
    }
  };


  return (
    <div className="scroll">
      <Row style={{ marginTop: 20 }}>
        <Col md="5">
          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px" }}>
                Lead Name   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px"}}>
                {props.viewOnboard.leadName}
              </Card.Text>
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px" }}>
                Start Date:
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px" }}>
                {moment(props.viewOnboard.startDate).format('DD-MM-YYYY')}
              </Card.Text>
            </Col>
          </Row>

          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px" }}>
                End Date:
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px" }}>
                {moment(props.viewOnboard.endDate).format("DD-MM-YYYY")}
              </Card.Text>
            </Col>
          </Row>


          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "13px" }}>
                Company Name   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px" }}>
                {props.viewOnboard.companyName}
              </Card.Text>
            </Col>
          </Row>

          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "13px" }}>
                Company Email   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px" }}>
                {props.viewOnboard.companyEmail}
              </Card.Text>
            </Col>
          </Row>
        </Col>
        <Col md="2">
          <div className="vr" style={{height:"200px"}}>

          </div>
        </Col>
        <Col md="5">
        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px" }}>
                Source Name   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px" }}>
                {props.viewOnboard.sourceName}
              </Card.Text>
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px"}}>
                Source Email   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px" }}>
                {props.viewOnboard.sourceEmail}
              </Card.Text>
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "13px" }}>
                SourcePhoneNumber   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-102px" }}>
                {props.viewOnboard.sourcePhoneNumber}
              </Card.Text>
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px" }}>
                POC Name   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px" }}>
                {props.viewOnboard.pocName}
              </Card.Text>
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px" }}>
                Status   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",marginLeft:"-130px" }}>
                {props.viewOnboard.status}
              </Card.Text>
            </Col>
          </Row>
        </Col>
      </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px"}}>
                Business Value   :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",wordWrap:"break-word", width:"890px",marginLeft:"-200px"}}>
                {props.viewOnboard.businessValue}
              </Card.Text>
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
            <Col>
              <Card.Subtitle style={{ padding: 10, fontSize: "14px" }}>
                Lead Notes  :
              </Card.Subtitle>{" "}
            </Col>
            <Col md={{ offset: 1 }}>
              <Card.Text style={{ paddingBottom: 0, fontSize: "14px",wordWrap:"break-word", width:"890px",marginLeft:"-200px"}}>
                {props.viewOnboard.leadNotes}
              </Card.Text>
            </Col>
          </Row>
    </div>
  );
};

export default ApprovalView;