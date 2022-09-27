import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ApprovalView = (props) => {
  console.log(props.viewOnboard);
  // console.log(props.firstName)


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
  //testing for commit
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // console.log(form);
      // console.log("form submitted");
      axios
        .post("/emp/createNewPotentialEmployee", form)
        .then((response) => {
          const user = response.data;
          toast.success("Form Submitted successfully");
          // console.log(user);
        })
        .catch((err) => {
          toast.error("Unable to fetch data");
        });
    }
  };


  return (
    <div className="scroll">

      {/* Attributes / fields */}
      <Row style={{ marginTop: 20 }}>
        <Col>
          <Card style={{ padding: 30, paddingBottom: 20 }}>

            {/* Lead name */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Lead Name   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.leadName}
                </Card.Text>
              </Col>
            </Row>

  
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Company Name   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.companyName}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Company Email   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.companyEmail}
                </Card.Text>
              </Col>
            </Row>

          
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Company PhoneNumber   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.companyPhoneNumber}
                </Card.Text>
              </Col>
            </Row>

             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Company Country   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                {props.viewOnboard.companyCountry}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Company Address   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                {props.viewOnboard.companyAddress}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Source Name   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.sourceName}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Source Email   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.sourceEmail}
                </Card.Text>
              </Col>
            </Row>

          
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Source PhoneNumber   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.sourcePhoneNumber}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  POC Name   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.pocName}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  POC Email   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.pocEmail}
                </Card.Text>
              </Col>
            </Row>

             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  POC PhoneNumber   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.pocPhoneNumber}
                </Card.Text>
              </Col>
            </Row>
            {/* status */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Status   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.status}
                </Card.Text>
              </Col>
            </Row>

             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Business Value   :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.businessValue}
                </Card.Text>
              </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Lead Notes  :
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.leadNotes}
                </Card.Text>
              </Col>
            </Row>

          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ApprovalView;