import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { MdDelete } from "react-icons/md";
import Form from "react-bootstrap/Form";
const DeleteDepartment = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlechnge = () => {};

  return (
    <>
      <Button className="rounded-pill" variant="white" onClick={handleShow}>
        {" "}
        <MdDelete />
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <div class="col-md-12 text-center">
          <Modal.Header closeButton>
            <Modal.Title>Delete Department</Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div className="text-center">
              <Form.Label>Are you Sure want to delete?</Form.Label>
            </div>
          </Form.Group>
          <div className="text-center">
            <Button
              variant="warning"
              className="rounded-pill"
              style={{
                backgroundColor: "#FF6200",
                color: "white",
                float: "center",
              }}
              onClick={handleClose}
            >
              Delete
            </Button>
            <Button
              variant="warning"
              className="rounded-pill"
              style={{
                backgroundColor: "#24A0ED",
                color: "white",
                float: "center",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteDepartment;
