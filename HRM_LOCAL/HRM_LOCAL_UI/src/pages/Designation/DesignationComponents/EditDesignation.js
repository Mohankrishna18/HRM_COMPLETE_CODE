import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import axios from "../../../Uri"


const EditDesignation = ({id, designations}) => {
  const [modal, setModal] = useState(false);
  const [departments, setDepartments] = useState([]);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  // console.log(id);
  // console.log(designations)

  const initialvalues = {
    designationName: "",
    departmentName: "",
  };

  useEffect(() => {
    axios.get("/dept/getAllDepartments").then((res) => 
    {
      setDepartments(res.data);
    });
  }, []);

  const [allData, setAllData] = useState(initialvalues);

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setAllData({
      ...allData,
      [name]: value,
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // console.log(id)
    // console.log(allData);
    const res = await axios.put(`/designation/updateDesignations/${id}`, allData)
    {res!==null? console.log('success'): console.log('error')}
    
  }

  return (
    <div>
      <Button variant="white " className="rounded-pill" onClick={handleShow}>
        {" "}
        <AiFillEdit /> Edit
      </Button>

      <Modal show={modal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Designation</Modal.Title>
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
                  {departments.map((department) => (
                    <option
                       id={department.departmentName}
                      value={department.departmentName}
                    >
                      {department.departmentName}
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
    </div>
  );
};

export default EditDesignation;
