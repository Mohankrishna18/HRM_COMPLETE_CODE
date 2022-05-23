import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FcCancel } from "react-icons/fc";

const Reject = (props) => {
  const [onhold, setOnhold] = useState(false);
  const handleClose = () => setOnhold(false);
  const handleShow = () => setOnhold(true);

  let onboardingid = props.onboardingid;
  const [rejectedStatus, setRejectedStatus] = useState(false);

  const[comments,setComments] = useState("");

  const updateAPIData = () => {
    handleClose;
    setRejectedStatus(true);
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, {
      rejectedStatus: true,
      comments

    });
  };

  return (
    <>
      <Row>
        <Col>
          <Button className="rounded-pill" variant="white" onClick={handleShow}>
            <FcCancel /> Reject
          </Button>

          <Modal show={onhold} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Reject </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form role="form">
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        //
                      />
                    </Form.Group>
                  </Col>
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#ff9b44",
                    color: "#F4F8F6",
                  }}
                  onClick={updateAPIData}
                >
                  &nbsp; Reject
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </>
  );
};

export default Reject;
