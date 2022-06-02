import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Table, Container } from "react-bootstrap";

import { BsPlusLg } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import EditDesignation from "./EditDesignation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "../../../Uri";
//comment added for testing purpose

const DesignationModal = () => {
  const notify = () => toast("Designation is deleted Successfully");
  const [designations, setDesignations] = useState([]);
   // const notify = () => toast("Designation is added");
   const [designationName, setDesignationName] = useState("");
   const [designationData, setDesignationData] = useState([]);
   const [department, setDepartment] = useState("");
 
   const [show, setShow] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/designation/getAllDesignations");
    setDesignations(res.data);
    // console.log(res.data);
    // console.log("designations");
    
  };


  const deleteDesignation = async (designationId) => {
    const res = await axios.delete(`/designation/deleteDesignation/${designationId}`);
    loadData();
    // console.log(res);
    notify();
  };

 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialvalues = {
    designationName: "",
    departmentName: "",
  };
  const [allData, setAllData] = useState(initialvalues);
  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setAllData({
      ...allData,
      [name]: value,
    });
  };

  // console.log(allData.departmentName);

  useEffect(() => {
    axios.get("/dept/getAllDepartments").then((res) =>
     {
      setDesignationData(res.data);
      
    });
  }, []);

  // console.log(designationData);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    // console.log(allData);
    const res = await axios.post("/designation/postDesignationMaster", allData);
    // console.log(res.data);
    loadData();
    notify();
  };

  return (
    <div className="pb-5 me-3">
      <Button
        variant="warning"
        onClick={handleShow}
        style={{
          backgroundColor: "#ff9b44",
          color: "#F4F8F6",
          float: "right",
          borderRadius: "25px",
        }}
      >
        {" "}
        <BsPlusLg />
        Add Designation
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} role="form">
            <Form.Group className="mb-3">
              <Form.Label>Designation Name</Form.Label>
              <Form.Control
                type="text"
                value={allData.designationName}
                name="designationName"
                onChange={handleChange}
                placeholder="Enter designation name..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <div style={{ marginTop: 10 }}>
                <select
                  value={allData.departmentName}
                  onChange={handleChange}
                  name="departmentName"
                >
                  {designationData.map((designation) => (
                    <option
                       id={designation.departmentName}
                      value={designation.departmentName}
                    >
                      {designation.departmentName}
                    </option>
                  ))}
                </select>
              </div>
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
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Container-fluid>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Designation Id</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {designations.map((designation, index) => (
              <tr>
                {/* <td>{designation.designationId}</td> */}
                <th scope="row">{index+1}</th>
                <td>{designation.designationName}</td>
                <td>{designation.departmentName}</td>
                <td><EditDesignation id={designation.designationId} designations={designations}/></td>

                <Button
                  className="rounded-pill"
                  variant="white"
                  onClick={() => deleteDesignation(designation.designationId)}
                >
                  {" "}
                  <MdDelete />
                  Delete
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container-fluid>
    </div>
  );
};

export default DesignationModal;
