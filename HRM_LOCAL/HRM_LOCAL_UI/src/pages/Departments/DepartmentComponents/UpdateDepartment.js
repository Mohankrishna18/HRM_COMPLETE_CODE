import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const UpdateDepartment = (props) => {

  console.log(props.updateOnboard);

 

  const[departmentName,setDepartmentName]=useState(props.updateOnboard.departmentName);
  const[businessUnitHead,setBusinessUnitHead]=useState(props.updateOnboard.businessUnitHead);



  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow();
  const forms = useRef(null);

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  }

  const validateForm = () => {
    const {

      departmentName,
      businessUnitHead,

    } = form;
    const newErrors = {};


    if (!departmentName || departmentName === "")
      newErrors.departmentName = "Please Enter Business Unit";
    if (!businessUnitHead || businessUnitHead === "")
      newErrors.businessUnitHead = "Please Enter Business Unit Head";


    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/dept/update/${props.updateOnboard.departmentId}`, {

        departmentName,
        businessUnitHead,
      })
      .then((response) => {
        const user = response.data;
        console.log(response);
        if (response.data) {
          props.func();
        }
        else {
          console.log("Props not Send")
        }
        toast.success("Business Unit updated successfully!!!");
        // console.log(user);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");

      });
    props.handleClose();
  };


  const [empIDs, setEmpIDs] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((response) => {
        setEmpIDs(response.data.data);
      })
      .catch(() => {
        toast.error("data is not getting");
      });
  }, []);


  const [role, setRole] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getUsersNamesByBand")
      .then((response) => {
        setRole(response.data);
        console.log(response.data)
      })
      .catch(() => {
        toast.error("Data is not getting");
      });
    // console.log(departments)
  }, []);

  const Close = () => setShow(false);

  return (
    <div>
          <Form
            ref={forms}
            className="formone"
            style={{ paddingLeft: 25, paddingRight: 25, paddingBottom:10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">

            <Form.Group className="mb-3">
                <Form.Label>Business Unit*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Business Unit"
                  controlId="departmentName"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  isInvalid={!!errors.departmentName}
                >
                
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>Business Unit Head*</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Business Unit Head"
                  controlId="businessUnitHead"
                  value={businessUnitHead}
                  onChange={(e) => setBusinessUnitHead(e.target.value)}
                  isInvalid={!!errors.businessUnitHead}
                >
                 
                 <option>Select </option>
                  {role.map((role1) => (
                    <option value={role1.employeeId}>
                      {role1.name}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row>
              <Col>
            <Button
              style={{
                backgroundColor: "#ff9b44",
                borderColor: "#ff9b44",
                float: "right",
                width: "40%",
                height: "120%",
                borderRadius: "25px",
              }}
              type="submit"
              onclick={handleSubmit}
            >
              Submit
            </Button>
            {/* <Button variant="secondary" onClick={Close}>
            Close
          </Button> */}
            <Col>
           
            </Col>
            </Col>
            </Row>
          </Form>

    </div>
  );
};

export default UpdateDepartment;
