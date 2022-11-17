import React, { useState, memo } from "react";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import "../LoginPage/Sign-in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../Uri";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../../Images/arshaalogo.png"
import { useFormik } from "formik";
import BlockImage from 'react-block-image'
import { BsArrowLeftShort } from 'react-icons/bs';

const ResetPassword = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      employeeId: "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },

    onSubmit: (values) => {
      axios
        .put("/login/resetPassword", values)
        .then((response) => {
          console.log(response.data);
          console.log({ values });
          toast.success("Password Updated Successfully",{
            autoClose: 1000,
          });
          history.push("/");
        })
        .catch((error) => {
          console.log(error.response.data);
          toast.error("Invalid EmployeeId and OldPassword", {

            autoClose: 1000,
          });
        });
    },
    validate: (values) => {
      let errors = {};
      // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      
      //email valiation
      // if(!values.employeeId) {
      //   errors.employeeId = "Employee-ID is required";
      // } else if (!test(values.employeeId)) {
      //   errors.employeeId = "This is not a valid Employee-ID format!";
      // }

      // Employee-ID validation
      if (!values.employeeId) {
        errors.employeeId = "Employee-ID is required";
      } else if (values.employeeId.length > 15) {
        errors.employeeId = "Employee-ID must be mimimum of 6 characters";
      } else if (values.employeeId.length > 15) {
        errors.employeeId = "Employee-ID cannot exceed more than 15 characters";
      }else if (!values.employeeId.match(/[A-Z]/)) {
        errors.employeeId =
          "Employee-ID should contain Upper case characters";
      } else if (!values.employeeId.match(/[0-9]/)) {
        errors.employeeId = "Employee-ID should contain a Number";
      }

      //old password validation
      if (!values.oldPassword) {
        errors.oldPassword = "Old Password is required";
      } else if (values.oldPassword.length < 8) {
        errors.oldPassword = "Password must be mimimum of 8 characters";
      } else if (values.oldPassword.length > 15) {
        errors.oldPassword = "Password cannot exceed more than 15 characters";
      }
      //newPassword validation
      if (!values.newPassword) {
        errors.newPassword = "New Password is required";
      } else if (values.newPassword.length < 8) {
        errors.newPassword = "Password must be mimimum of 8 characters";
      } else if (!values.newPassword.match(/[a-z]/)) {
        errors.newPassword =
          "Password should contain atleast lower case character";
      } else if (!values.newPassword.match(/[A-Z]/)) {
        errors.newPassword =
          "Password should contain atleast upper case character";
      } else if (!values.newPassword.match(/[0-9]/)) {
        errors.newPassword = "Password should contain atleast a number";
      } else if (!values.newPassword.match(/[!@#$%^&*()_+=.,;'":`~]/)) {
        errors.newPassword =
          "Password should contain atleast a special character";
      } else if(values.newPassword==values.oldPassword) {
        errors.newPassword = "Password cannot be same as old password"
      }
      else if (values.newPassword.length > 15) {
        errors.newPassword = "Password cannot exceed more than 15 characters";
      } else if (values.newPassword != values.confirmNewPassword) {
        errors.newPassword = "Password does not match";
      }
      //confirmNewPassword validation
      if (!values.confirmNewPassword) {
        errors.confirmNewPassword = "Confirm New Password is required";
      } else if (values.confirmNewPassword.length < 8) {
        errors.confirmNewPassword = "Password must be mimimum of 8 characters";
      } else if (!values.confirmNewPassword.match(/[a-z]/)) {
        errors.confirmNewPassword =
          "Password should contain atleast lower case character";
      } else if (!values.confirmNewPassword.match(/[A-Z]/)) {
        errors.confirmNewPassword =
          "Password should contain atleast upper case character";
      } else if (!values.confirmNewPassword.match(/[0-9]/)) {
        errors.confirmNewPassword = "Password should contain atleast a number";
      } else if (!values.confirmNewPassword.match(/[!@#$%^&*()_+=.,;'":`~]/)) {
        errors.confirmNewPassword =
          "Password should contain atleast a special character";
      } else if (values.confirmNewPassword.length > 15) {
        errors.confirmNewPassword =
          "Password cannot exceed more than 15 characters";
      } else if (values.newPassword != values.confirmNewPassword) {
        errors.confirmNewPassword = "Password does not match";
      }
      return errors;
    },
  });
  
  const setEmployeeId = (e) => {
    if(e.which ==32)
    {
       e.preventDefault();
       return false;
    }
  }

  const goBack =() =>{
    history.push("/");
  }
  return (
    <>
      <Container
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          paddingLeft: "190px",
        }}
      >
        <Card 
        style={{
          paddingLeft: "50px",
          paddingRight: "100px",
          position: "absolute",
          marginTop: "50px",
          background: "linear-gradient(to right, #cbcbc5, #cbcaa5)",
          // background: "linear-gradient(#FFB914,#FF6914,#F1340C)",
          borderRadius: "45px", 
          }}
        >
          <Row>
            <Col xs={5}>
              <BlockImage className="arshaalogo"
                src={image}
                style={{ paddingTop: "200px", height: "400px", width: "300px",marginTop:"120px" }}
              />
            </Col>

            <Col
              className="p-5 m-auto shadow-sm rounded-lg"
              style={{
                height: "700px",

                width: "450px",
                alignments: "center",

                // backgroundColor: "#FFFFFF",
                boxShadow: "10px 10px 10px",
                borderRadius: "45px",
                // background: "linear-gradient(to right, #334d50, #cbcaa5)"
              }}
              lg={5}
              md={6}
              sm={12}
            >

              <h4 style={{ textAlign: "center", paddingTop: "10px" }}>
                Welcome To Arshaa
              </h4>
                            <Button

size="lg"
onClick={goBack}

style={{
  float:"right",
  width: "30%",
  border:"none",
  color:"black",
  background: "none",
  fontsize:"15px"

}}
><BsArrowLeftShort/>
Back
</Button>
              <br />
              <br />
              <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                <Form.Group controlld="emailId">
                  <Form.Label style={{ paddingLeft: "10px", fontSize: "14px",fontWeight:'bold' }}>
                    EMPLOYEE-ID
                  </Form.Label>
                  <Form.Control
                    type="employeeId"
                    name="employeeId"
                    id="employeeId"
                    placeholder="Enter your Employee-ID"
                    size="small"
                    value={formik.values.employeeId}
                    onChange={formik.handleChange}
                    onKeyDown={e=>setEmployeeId(e)}
                  />
                  {formik.errors.employeeId ? (
                    <div className="error" style={{ color: "red" }}>
                      {formik.errors.employeeId}
                    </div>
                  ) : null}
                </Form.Group>
                &nbsp;
                <Form.Group controlld="oldPassword">
                  <Form.Label style={{ paddingLeft: "10px", fontSize: "14px",fontWeight:"bold" }}>
                    OLD PASSWORD
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    placeholder="Enter your Old password"
                    size="small"
                    value={formik.values.oldPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.oldPassword ? (
                    <div className="error" style={{ color: "red" }}>
                      {formik.errors.oldPassword}
                    </div>
                  ) : null}
                </Form.Group>
                &nbsp;
                <Form.Group controlid="fornBasicPassword">
                  <Form.Label style={{ paddingLeft: "10px", fontSize: "14px",fontWeight:"bold" }}>
                    NEW PASSWORD
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="new password"
                    name="newPassword"
                    placeholder="Enter your New Password"
                    size="small"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.newPassword ? (
                    <div className="error" style={{ color: "red" }}>
                      {formik.errors.newPassword}
                    </div>
                  ) : null}
                </Form.Group>
                &nbsp;
                <Form.Group controlid="fornBasicPassword">
                  <Form.Label style={{ paddingLeft: "10px", fontSize: "14px",fontWeight:"bold" }}>
                    CONFIRM NEW PASSWORD
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="confirm new password"
                    name="confirmNewPassword"
                    placeholder="Re-Enter your New Password"
                    size="small"
                    value={formik.values.confirmNewPassword}
                    onChange={formik.handleChange}
                  />

                  {formik.errors.confirmNewPassword ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.confirmNewPassword}
                    </div>
                  ) : null}
                </Form.Group>
                &nbsp;
                {/* <Link
                onClick={goBack}
                style={{float: 'right',color:'black', padding:"10px",fontSize:"20px"}}
                ><BsArrowLeftShort/>
                Back
                </Link> */}
                
                <Button
                  size="lg"
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#f5896e",
                    borderColor: "#f5896e",
                  }}
                >
                  Submit
                </Button>
                
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default ResetPassword;