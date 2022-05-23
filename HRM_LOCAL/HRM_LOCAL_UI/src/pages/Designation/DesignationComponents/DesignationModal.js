import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { BsPlusLg } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "../../../Uri";
//comment added for testing purpose

const DesignationModal = () => {
  const notify = () => toast("Designation is added");
  const [designationName, setDesignationName] = useState("");
  const [designationData, setDesignationData] = useState([]);
  const [department, setDepartment] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialvalues = {
    designationName: "",
    departmentName: "",
  };
  const [allData, setAllData] = useState(initialvalues);
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setAllData({
      ...allData,
      [name]: value,
    });
  };

  console.log(allData.departmentName);

  useEffect(() => {
    axios.get("/dept/getAllDepartments").then((res) =>
     {
      setDesignationData(res.data);
      // res.data.map((m)=>{
      //   console.log(m)
      //   setDesignationData(m)
      //   deptarray.push(m)

      // })
    });
  }, []);

  //console.log(deptarray)
  console.log(designationData);
  // console.log(department);
  // var obje1 = designationData.reduce(function (acc, cur, i) {
  //   acc[cur.departmentId] = cur.departmentName;

  //   return acc;
  // }, {});
  // console.log(obje1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    console.log(allData);
    const res = await axios.post("/designation/postDesignationMaster", allData);
    console.log(res.data);
    notify();
   window.location.reload();
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

          {/* <Modal.Footer>
            
          </Modal.Footer> */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DesignationModal;
