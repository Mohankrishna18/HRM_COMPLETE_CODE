import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import { AiFillEdit } from "react-icons/ai";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../Uri";

const EditDepartment = ({id}) => {
  
  const [lgShow, setLgShow] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  
  const handleClose = () => setLgShow(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    console.log(departmentName);
    //setDeptId(id)
    const res = await  axios.put(`/dept/update/${id}`, {departmentName})

    if (res.data !== null) {
      console.log(res.data);
    } else {
      console.log("");
    }
    console.log(res.data);
    notify();

    window.location.reload();
  };

  


  return (
    <div style={{ justifyContent: "center" }}>
      <Button
        onClick={() => setLgShow(true)}
        variant="white"
        className="rounded-pill"
      >
        {" "}
        <AiFillEdit /> Edit
      </Button>
      <Modal
        size="xs"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit Department
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Department Name</Form.Label>
              <Form.Control type="text" value={departmentName}  onChange={(e) => setDepartmentName(e.target.value)} autoFocus />
            </Form.Group>
          </Form>
          <div class="text-center">
            <Button
              variant="warning"
              className="rounded-pill"
              type="submit"
              style={{
                backgroundColor: "#FF6200",
                color: "white",
                float: "center",
              }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditDepartment;
