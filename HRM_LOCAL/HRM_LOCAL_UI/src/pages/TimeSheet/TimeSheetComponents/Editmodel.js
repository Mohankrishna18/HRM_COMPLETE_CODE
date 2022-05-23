import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const Edit = () => {
  // const [smShow, setSmShow]  = useState(false);
  const [lgShow, setLgShow] = useState(false);
  // const [datas,setDatas]=useState([ ])
  const [option, setOption] = useState("");
  const [date, setDate] = useState("");
  const [date1, setDate1] = useState("");
  const [number, setNumber] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [text, setText] = useState("");
  const [validated, setValidated] = useState(false);
  const notify = () => toast("Changes saved successful");

  const handleClose = () => setLgShow(false);

  // const initialvalues={option,date,date1,number,number1,number2,text

  const handleSubmit = (ee) => {
    ee.preventDefault();
    const form = ee.currentTarget;
    if (form.checkValidity() === false) {
      notify();
      ee.preventDefault();

      ee.stopPropagation();
    }
    setValidated(true);

    console.log(lgShow);
    console.log(option);
    console.log(date);
    console.log(date1);
    console.log(number);
    console.log(number1);
    console.log(number2);
    console.log(text);

    //put call to the data base

    //  axios.put("", { initialvalues}).then(res => {
    //   const PutData = res.data;
    // setDatas(PutData)
    //   console.log(datas);

    //  })
  };

  return (
    <div style={{ justifyContent: "center" }}>
      <Button
        onClick={() => setLgShow(true)}
        variant="white "
        className="rounded-pill"
      >
        {" "}
        <AiFillEdit /> Edit
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
            Edit work details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                required
                onChange={(e) => setOption(e.target.value)}
              >
                <option> Select options</option>
                <option value="Web Developement">Web Developement</option>

                <option value="Bootstrap Developement">
                  Bootstrap Developement
                </option>

                <option value="Android Design">Android Design</option>
              </Form.Select>

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

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
                      onChange={(e) => setDate(e.target.value)}
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
                      onChange={(e) => setNumber(e.target.value)}
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
                      onChange={(e) => setDate1(e.target.value)}
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
                  onChange={(e) => setText(e.target.value)}
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
                // onClick={handlesubmit}
                type="submit"
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Edit;
