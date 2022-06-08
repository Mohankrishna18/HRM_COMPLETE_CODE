import { React, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import axios from "../../../Uri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Stack, Container } from "react-bootstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";

const AddRole = () => {
  function formatDate(fromDate) {
    var datePart = fromDate.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];
    return day + "-" + month + "-" + year;
  }

  useEffect(() => {
    loadData();

  }, []);

  const loadData = async () => {
    const res = await axios.get("/holiday/getAllHolidays").then((res) => {
      // console.log(res.data.data);
      setRoleName(res.data.data);
    })

  }


  const notify = () => toast("Role is Added");

  const [show, setShow] = useState(false);
  const [roleName, setRoleName] = useState([]);
  const [module1, setModule1] = useState([]);
  const [module2, setModule2] = useState([]);
  const [module3, setModule3] = useState([]);
  const [module4, setModule4] = useState([]);
  const [module5, setModule5] = useState([]);
  const validationSchema = Yup.object().shape({
    roleName: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid Name ").required("Role Name is required"),
    // holidayDate: Yup.string().required("Holiday Date is required"),
  });

  const handleClose = () => {
    setShow(false);
    // notify();
  };

  const handleShow = () => {
    setShow(true);
  };

  const onSubmit = async (e) => {
    // console.log(e);
    const res = await axios.post("/holiday/addholiday", e);
    handleClose(); //Close when click on submit
    loadData();
    if (res.data !== null) {
      // console.log(res.data);
      notify();
    } else {
      // console.log("");
    }
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div>
      <Row>
        <Col md={12}>
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
            Add Role
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>

          <Modal
            show={show}
            onHide={handleClose}
            centered
            style={{ borderRadius: "250px" }}
          >
            <div class="col-md-12 text-center">
              <Modal.Title>Add Role</Modal.Title>
              <Modal.Header closeButton></Modal.Header>
            </div>
            <Modal.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={3}>
                  <div className="form-group">
                    <Stack gap={3}>
                      <Row>
                        <Col md={12}>
                          <label>Role Name</label>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <input
                            name="roleName"
                            type="text"
                            {...register("roleName")}
                            className={`form-control ${errors.roleName ? "is-invalid" : ""
                              }`}
                          />
                          <div className="invalid-feedback">
                            {errors.roleName?.message}
                          </div>
                        </Col>
                      </Row>
                    </Stack>
                  </div>
                  {/* <div className="form-group">
                    <Stack gap={3}>
                      <Row>
                        <Col md={12}>
                          <label>Holiday Date</label>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <input
                            name="holidayDate"
                            type="date"
                            {...register("holidayDate")}
                            className={`form-control ${errors.holidayDate ? "is-invalid" : ""
                              }`}
                          />
                          <div className="invalid-feedback">
                            {errors.holidayDate?.message}
                          </div>
                        </Col>
                      </Row>
                    </Stack>
                  </div> */}  
                  <Row>
                  <Form.Group as ={Col} md="6">
                    <Form.Label>Module-1</Form.Label>
                    {/* <Form.Control value={module1}></Form.Control> */}
                    <Form.Select 
                    required
                    type="text"
                    value={module1}
                    onChange={(e)=>setModule1(e.target.value)}
                    >
                      <option>Select</option>
                      <option>OnBoarding Form</option>
                      <option>All Employees</option>
                      <option>Departments</option>
                      <option>Designations</option>
                      
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as ={Col} md="6">
                    <Form.Label>Module-2</Form.Label>
                    <Form.Select 
                    required
                    type="text"
                    value={module2}
                    onChange={(e)=>setModule2(e.target.value)}
                    >
                      <option>Select</option>
                      <option>OnBoarding Form</option>
                      <option>All Employees</option>
                      <option>Departments</option>
                      <option>Designations</option>
                      
                    </Form.Select>

                  </Form.Group>
                  <Form.Group as ={Col} md="6">
                    <Form.Label>Module-3</Form.Label>
                    <Form.Select 
                    required
                    type="text"
                    value={module3}
                    onChange={(e)=>setModule3(e.target.value)}
                    >
                      <option>Select</option>
                      <option>OnBoarding Form</option>
                      <option>All Employees</option>
                      <option>Departments</option>
                      <option>Designations</option>
                      
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as ={Col} md="6">
                    <Form.Label>Module-4</Form.Label>
                    <Form.Select 
                    required
                    type="text"
                    value={module4}
                    onChange={(e)=>setModule4(e.target.value)}
                    >
                      <option>Select</option>
                      <option>OnBoarding Form</option>
                      <option>All Employees</option>
                      <option>Departments</option>
                      <option>Designations</option>
                      
                    </Form.Select>

                  </Form.Group>
                  <Form.Group as ={Col} md="6">
                    <Form.Label>Module-5</Form.Label>
                    <Form.Select 
                    required
                    type="text"
                    value={module5}
                    onChange={(e)=>setModule5(e.target.value)}
                    >
                      <option>Select</option>
                      <option>OnBoarding Form</option>
                      <option>All Employees</option>
                      <option>Departments</option>
                      <option>Designations</option>
                      
                    </Form.Select>

                  </Form.Group>
                  </Row>
                  <Stack gap={3}></Stack>
                  <div class="d-flex justify-content-around">
                    {/* <Modal.Footer> */}
                    {/* <div className="form-group"> */}
                    <div class="col-md-12 text-center">
                      <Row>
                        <Col md={12}>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            style={{
                              borderRadius: "25px",
                              backgroundColor: "#ff9b44",
                              color: "#F4F8F6"
                            }}
                          >
                            Submit
                          </button>
                        </Col>
                      </Row>
                    </div>
                    {/* </Modal.Footer> */}
                  </div>
                </Stack>
              </form>
            </Modal.Body>
          </Modal>

        </Col>
      </Row>

        <Row>
          <Col md={12}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Role Id</th>
                  <th scope="col">Role Name</th>
                  <th scope="col">Module-1</th>
                  <th scope="col">Module-2</th>
                  <th scope="col">Module-3</th>
                  <th scope="col">Module-4</th>
                  <th scope="col">Module-5</th>
                </tr>
              </thead>

              {/* <tbody>
                {holiday && holiday.map((h, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{h.roleName}</td>
                    <td>{formatDate(h.holidayDate)}</td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </Col>
        </Row>

    </div>
  );

};

export default AddRole;