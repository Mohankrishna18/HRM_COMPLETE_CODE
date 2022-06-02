import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../LoginPage/Sign-in.css";
import axios from "../../Uri";


import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import image from "../../Images/arshaalogo.png";
import { useHistory } from "react-router-dom";



export default function ResetPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const history = useHistory();
  const intialValues = {
    oldPassword,
    newPassword,
    confirmNewPassword,
  };
  
  function validateForm() {
    return (
      oldPassword.length > 0 &&
      newPassword.length > 0 &&
      confirmNewPassword.length > 0
    );
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (newPassword === confirmNewPassword) {
      
      history.push("/");
      toast.success("Password changed");

    } else {
      
      toast.error("Password do not match");
      
    }

    const changePasswordCall = await axios.put(
      "login/resetPassword",
      intialValues
    );
    changePasswordCall();
  };
  return (
    <>
      <Container>
        <Row style={{ marginTop: "40px", marginLeft: "40px" }}>
          <Col
            className="p-5 m-auto shadow-sm rounded-lg"
            style={{
              height: "650px",
              width: "430px",
              alignments: "center",
              background: "linear-gradient(#FFB914,#FF6914,#F1340C)",
              borderRadius: "25px",
            }}
            lg={5}
            md={6}
            sm={12}
          >
            <img
              src={image}
              style={{
                height: "110px",
                width: "200px",
                paddingLeft: "120px",
                borderRadius: "15px",
              }}
            ></img>
            <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
              Reset Password
            </h1>
            <Form style={{ paddingTop: "40px" }}>
              <Form.Group controlid="fornBasicPassword">
                <Form.Label style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                  Old Password
                </Form.Label>
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="password"
                  placeholder="Enter your Old Password."
                  size="lg"
                  value={oldPassword}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please Enter your Old Password",
                    },
                    pattern: {
                      value: "^[A-Za-z0-9]+$",
                      errorMessage:
                        "Your password must be composed only with letter and numbers",
                    },
                    minLength: {
                      value: 8,
                      errorMessage:
                        "Your password must be between 6 and 16 characters",
                    },
                    maxLength: {
                      value: 16,
                      errorMessage:
                        "Your password must be between 6 and 16 characters",
                    },
                  }}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </Form.Group>
              &nbsp;
              <Form.Group controlid="fornBasicPassword">
                <Form.Label style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                  New Password
                </Form.Label>
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="password"
                  placeholder="Enter your New password."
                  size="lg"
                  value={newPassword}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please Enter your New Password",
                    },
                    pattern: {
                      value: "^[A-Za-z0-9]+$",
                      errorMessage:
                        "Your password must be composed only with letter and numbers",
                    },
                    minLength: {
                      value: 8,
                      errorMessage:
                        "Your password must be between 6 and 16 characters",
                    },
                    maxLength: {
                      value: 16,
                      errorMessage:
                        "Your password must be between 6 and 16 characters",
                    },
                  }}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>
              &nbsp;{" "}
              <Form.Group controlid="fornBasicPassword">
                <Form.Label style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                  Confirm New Password
                </Form.Label>
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="password"
                  placeholder="Enter your Confrom New password."
                  size="lg"
                  value={confirmNewPassword}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please Enter your Confrom New Password",
                    },
                    pattern: {
                      value: "^[A-Za-z0-9]+$",
                      errorMessage:
                        "Your password must be composed only with letter and numbers",
                    },
                    minLength: {
                      value: 8,
                      errorMessage:
                        "Your password must be between 6 and 16 characters",
                    },
                    maxLength: {
                      value: 16,
                      errorMessage:
                        "Your password must be between 6 and 16 characters",
                    },
                  }}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </Form.Group>
              &nbsp;
              <Button
                size="lg"
                type="submit"
                style={{
                  width: "100%",
                  background: "#19fa0a",
                  borderRadius: "15px",
                  color: "black",
                }}
                disabled={!validateForm()}
                onClick={handleSubmit}
              >
                Reset Password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
