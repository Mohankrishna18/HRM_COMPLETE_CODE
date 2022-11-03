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
      clientName,
      email,
      phoneNumber,
      pocName,
      startDate,
      endDate,
      status,
      country,
      address,
      tag,
      note,


    } = form;
    const newErrors = {};

    if (!clientName || clientName === "" || !clientName.match(/^[aA-zZ\s]+$/))
      newErrors.clientName = "Please Enter client Name";

    if (!email || email === "") newErrors.email = "Please Enter Email";

    if (
      !phoneNumber ||
      phoneNumber === "" ||
      !phoneNumber.match(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.phoneNumber = "Please Enter the correct Phonenumber";

    if (!pocName || pocName === "" || !pocName.match(/^[aA-zZ\s]+$/))
      newErrors.pocName = "Please Enter POC Name";

    if (!startDate || startDate === "")
      newErrors.startDate = "Please Enter Start Date";

    if (!endDate || endDate === "")
      newErrors.endDate = "Please Enter End Date";

    if (!status || status === "")
      newErrors.status = "Please Enter the status";

    if (!country || country === "")
      newErrors.country = "Please Enter the country";

    if (!address || address === "")
      newErrors.address = "Please Enter the address";

    if (!tag || tag === "")
      newErrors.tag = "Please Enter tag";

    if (!note || note === "")
      newErrors.note = "Please Enter Notes";


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

  // const [departments, setDepartments] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/dept/getAllDepartments")
  //     .then((response) => {
  //       setDepartments(response.data);
  //     })
  //     .catch(() => {
  //       toast.error("data is not getting");
  //     });
  //   // console.log(departments)
  // }, []);

  // date format dd-mm-yy
  var tempDate = new Date(props.viewOnboard.dateOfJoining);
  var dob = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  console.log(dob)

  return (
    <div>

      {/* Attributes / fields */}
      <Row style={{ marginTop: 20 }}>
        <Col>
          <Card style={{ padding: 30, paddingBottom: 20 }}>

            {/* client name */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Client / Company Name:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.clientName}
                </Card.Text>
              </Col>
            </Row>

            {/* email */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Client/ Company Email:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.email}
                </Card.Text>
              </Col>
            </Row>


            {/* phone number */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Phone Number:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.phoneNumber}
                </Card.Text>
              </Col>
            </Row>

             {/* POC Name */}
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  POC:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.pocName}
                </Card.Text>
              </Col>
            </Row>

             {/* startDate
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Start Date:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.startDate}
                </Card.Text>
              </Col>
            </Row> */}

             {/* EndDate
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  End Date:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.endDate}
                </Card.Text>
              </Col>
            </Row> */}

            {/* status */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Status:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.status}
                </Card.Text>
              </Col>
            </Row>

             {/* country */}
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Country:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.country}
                </Card.Text>
              </Col>
            </Row>

            {/* address */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Address:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.address}
                </Card.Text>
              </Col>
            </Row>

             {/* Tag
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Tag:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.tag}
                </Card.Text>
              </Col>
            </Row> */}


            
             {/* note */}
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                Notes/Description:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.note}
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










