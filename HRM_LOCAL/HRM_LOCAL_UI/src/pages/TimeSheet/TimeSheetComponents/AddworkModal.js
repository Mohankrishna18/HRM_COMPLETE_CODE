import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "../../../Uri";

const Datamodal = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);

  const [option, setOption] = useState("");
  const [timesheetDate, setTimesheetDate] = useState("");
  const [updated_On, setUpdated_On] = useState("");
  const [timesheet_Hours, setTimesheet_Hours] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [description, setDescription] = useState("");
  const [validated, setValidated] = useState(false); //required usestate for validation
  const notifySuccess = () => toast.success("Added successful");
  const notifyError = () => toast.error("there is an error");

  // Validation function
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // notifySuccess()

    // setValidated(true);

    console.log(lgShow);
    console.log(option);
    console.log(timesheetDate);
    console.log(updated_On);
    console.log(timesheet_Hours);
    console.log(number1);
    console.log(number2);
    console.log(description);

    //post call to the data base
    axios
      .post("/timesheet/saveTimesheet", {
        timesheetDate,
        updated_On,
        timesheet_Hours,
        description,
      })
      .then((response) => {
        if (response.data !== null) {
          notifySuccess();
          //  handleClose()
          const postdata = response.data;
          console.log(postdata);
        } else {
          notifyError();
        }
      });
  };

  return (
    <div style={{ justifyContent: "center" }}>
      <Button
        onClick={() => setLgShow(true)}
        className="rounded-pill"
        variant="warning"
        style={{ color: "#F4F8F6", backgroundColor: "#FF9B44", float: "right" }}
      >
        {" "}
        <BsPlusLg /> Add today work
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add today work details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* // form validation */}

          <Form
            noValidate
            validated={validated}
            style={{ padding: 10 }}
            onSubmit={handleSubmit}
          >
            <Form.Group as={Col} md="8" controlId="validationCustom01">
              <Form.Label>
                <b>Project *</b>
              </Form.Label>

              <Form.Select
                aria-label="Default select example"
                Select
                required
                onChange={(e) => setOption(e.target.value)}
              >
                <option type="select"> Select options</option>
                <option value="Web Developement">Web Developement</option>
                <option value="Bootstrap Developement">
                  Bootstrap Developement
                </option>
                <option value="Android Design">Android Design</option>
              </Form.Select>

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              {/* //validation msg */}

              <Row className="mb-5">
                <div class="hstack gap-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label column lg={6}>
                      <b>Deadline</b>{" "}
                    </Form.Label>
                    <Form.Control
                      required
                      type="date"
                      placeholder="dd-mm-yy"
                      onChange={(e) => setTimesheetDate(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    style={{ padding: 10 }}
                    controlId="validationCustom02"
                  >
                    <Form.Label>
                      <b>Total Hours *</b>
                    </Form.Label>
                    <Form.Control
                      required
                      type="Number"
                      placeholder="Number"
                      onChange={(e) => setTimesheet_Hours(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    style={{ padding: 10 }}
                    controlId="validationCustom02"
                  >
                    <Form.Label>
                      <b>Remaining Hours *</b>
                    </Form.Label>

                    <Form.Control
                      required
                      type="number"
                      placeholder="Number"
                      onChange={(e) => setNumber1(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </Row>

              <Row className="mb-5">
                <div class="hstack gap-3">
                  <Form.Group as={Col} md="9" controlId="validationCustom02">
                    <Form.Label>
                      <b>Date *</b>
                    </Form.Label>

                    <Form.Control
                      required
                      type="date"
                      onChange={(e) => setUpdated_On(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="9" controlId="validationCustom02">
                    <Form.Label>
                      <b>Hours *</b>
                    </Form.Label>

                    <Form.Control
                      required
                      type="number"
                      placeholder="Number"
                      onChange={(e) => setNumber2(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </Row>

              <div class="hstack gap-3">
                <Form.Label>
                  <b>Description</b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  type="text"
                  placeholder="Enter text"
                  rows={2}
                  md="15"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </div>
            </Form.Group>
            &nbsp;&nbsp;
            <div class="text-center">
              <Button
                variant="warning"
                className="rounded-pill"
                style={{
                  color: "#F4F8F6",
                  backgroundColor: "#FF9B44",
                  width: "10rem",
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Datamodal;
