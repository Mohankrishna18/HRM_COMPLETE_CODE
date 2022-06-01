import { React, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import axios from "../../../Uri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Stack } from "react-bootstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";

const HolidayModal = () => {
  const notify = () => toast("Holiday is added");

  const [show, setShow] = useState(false);
  const validationSchema = Yup.object().shape({
    holidayTitle: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid Name ").required("holidayTitle is required"),
    holidayDate: Yup.string().required("Holiday Date is required"),
  });

  const handleClose = () => {
    setShow(false);
    // notify();
  };

  const handleShow = () => {
    setShow(true);
  };

  const onSubmit = async (e) => {
    console.log(e);
    const res = await axios.post("/holiday/addholiday", e);
    handleClose(); //Close when click on submit
    if (res.data !== null) {
      console.log(res.data);
      notify();
      window.location.reload();
    } else {
      console.log("");
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
        Add holiday
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
          <Modal.Title>Add Holiday</Modal.Title>
          <Modal.Header closeButton></Modal.Header>
        </div>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={3}>
            <div className="form-group">
            <Stack gap={3}>
              <Row>
                <Col md={12}>
              <label>Holiday Title</label>
              </Col>
              </Row>
              <Row>
                <Col md={12}>
              <input
                name="holidayTitle"
                type="text"
                {...register("holidayTitle")}
                className={`form-control ${
                  errors.holidayTitle ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.holidayTitle?.message}
              </div>
              </Col>
              </Row>
              </Stack>
            </div>
            <div className="form-group">
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
                className={`form-control ${
                  errors.holidayDate ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.holidayDate?.message}
              </div>
              </Col>
              </Row>
              </Stack>
            </div>
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
    </div>
  );
};

export default HolidayModal;