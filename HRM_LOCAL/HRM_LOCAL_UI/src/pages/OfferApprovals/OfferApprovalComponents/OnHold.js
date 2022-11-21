import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FcLock } from "react-icons/fc";


import axios from "../../../Uri";

const OnHold = () => {
  const [onhold, setOnhold] = useState(false);

  const handleClose = () => setOnhold(false);
  const handleShow = () => setOnhold(true);

  const [designations, setDesignations] = useState([]);
  useEffect(() => {
    axios
      .get("/designation/getAllDesignations")
      .then((response) => {
        setDesignations(response.data);
      })
      .catch(() => {
        toast.error("data is not getting");
      });
  }, []);

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
            <FcLock /> OnHold
          </Button>

          <Modal show={onhold} onHide={handleClose} centered>
            <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white"}}>
              <Modal.Title>Pending Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form role="form">
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>
                    <b>Select Reporting Manager *</b>
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
                  {/* <Form.Select
                required
                type="text"
                placeholder="Designation"
                controlId="desgination"
                value={form.desgination}
                onChange={(e) => setField("desgination", e.target.value)}
                isInvalid={!!errors.desgination}
              >
                <option>Select </option>

                {designations.map((designation) => (
                  <option>{designation.designationName}</option>
                ))}
              </Form.Select> */}
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#ff9b44",
                    color: "#F4F8F6",
                  }}
                >
                  Save
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default OnHold;
