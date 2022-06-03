import Button from "react-bootstrap/esm/Button";
import { Modal, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPlusLg } from "react-icons/bs";
import axios from "../../../Uri";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function DepartmentModal() {
  const notify = () => toast("Department is added");
  const [departmentName, setDepartmentName] = useState("");
  const [xsShow, setxsShow] = useState(false);

  const handleClose = () => setxsShow(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    console.log(departmentName);

    const res = await axios.post("/dept/postDepartmentMaster", {
      departmentName,
    });
    if (res.data !== null) {
      console.log(res.data);
    } else {
      console.log("");
    }
    console.log(res.data);
    notify();

  };

  

  return (
    <div className="pb-5 me-3">
      <Container-fluid>
            <Button
              onClick={() => setxsShow(true)}
              className="rounded-pill"
              variant="warning"
              style={{
                backgroundColor: "#FF6200",
                color: "white",
                float: "right",
              }}
            >
              {" "}
              <BsPlusLg /> Add Department
            </Button>
         
        <div style={{ justifyItems: "center" }}>
          <Modal
            size="xs"
            show={xsShow}
            onHide={() => setxsShow(false)}
            aria-labelledby="example-modal-sizes-title-xs"
            centered
          >
            <div class="col-md-12 text-center">
              <Modal.Header closeButton class="btn btn-default btn-circle">
                <Modal.Title
                  id="example-modal-sizes-title-lg"
                  style={{
                    display: "flex",
                    justifyContent: "centered",
                    alignItems: "centered",
                  }}
                >
                  Add Department
                </Modal.Title>
              </Modal.Header>
            </div>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div class="col-md-12 text-center">
                    <Form.Label>Department Name</Form.Label>
                  </div>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <div class="text-center">
                <Button
                  variant="warning"
                  className="rounded-pill"
                  style={{
                    backgroundColor: "#FF6200",
                    color: "white",
                    float: "center",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </Container-fluid>
    </div>
  );
}

export default DepartmentModal;
