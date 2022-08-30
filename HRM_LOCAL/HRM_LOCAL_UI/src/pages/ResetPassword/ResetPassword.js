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
  // testing 
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidated(true);
    try {
      if (oldPassword != "" && newPassword != "" && confirmNewPassword != "") {
        if (newPassword === confirmNewPassword) {
          history.push("/");
          toast.success("Password changed");
        }
       else {
        toast.error("Password does'nt match");
      }
      }
      else{
        toast.error("Every Field is Mandatory");
      }
    }
    catch (err) {
      console.error(err);
    }
    // if (newPassword === confirmNewPassword) {
    //   history.push("/");
    //   toast.success("Password changed");

    // } else {

    //   toast.error("Password do not match");
    // }
    const changePasswordCall = await axios.put(
      "login/resetPassword",
      intialValues
    );
    // changePasswordCall();
  };
  return (
    <>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row style={{ marginTop: "40px", marginLeft: "40px" }}>
            <Col
              className="p-5 m-auto shadow-sm rounded-lg"
              style={{
                height: "700px",
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
              <Form style={{ paddingTop: "10px" }}>
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label style={{ marginTop: "10px", fontWeight: "bold" }}>Old Password</Form.Label>
                  <Form.Control type="Password" placeholder="Enter your Old Password" required
                    style={{ borderRadius: "15px" }}
                    size="lg"
                    value={oldPassword}
                    id="oldPassword"
                    maxLength={14}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please enter your Old Password",
                      },
                      pattern: {
                        value: "^[A-Za-z0-9]+$",
                        errorMessage:
                          "Your password must be composed only with letter and numbers",
                      },
                      minLength: {
                        value: 6,
                        errorMessage:
                          "Your password must be between 6 and 16 characters",
                      },
                      maxLength: {
                        value: 16,
                        errorMessage:
                          "Your password must be between 6 and 16 characters",
                      },
                    }}
                    onChange={(e) => {
                      const str = e.target.value;
                      //let length = f.length;
                      if (`${str.length}` > 12) {
                        alert("Password should not be nore than 12 characters");
                      }
                      else {
                        setOldPassword(e.target.value)
                      }
                    }
                    } />
                  <Form.Control.Feedback type="invalid" style={{ color: 'blue' }}>
                    Please Enter Valid New Password.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label style={{ marginTop: "20px", fontWeight: "bold" }}>New Password</Form.Label>
                  <Form.Control type="Password" placeholder="Enter your New Password" required
                    style={{ borderRadius: "15px" }}
                    size="lg"
                    value={newPassword}
                    id="newPassword"
                    maxLength={14}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please enter your New Password",
                      },
                      pattern: {
                        value: "^[A-Za-z0-9]+$",
                        errorMessage:
                          "Your password must be composed only with letter and numbers",
                      },
                      minLength: {
                        value: 6,
                        errorMessage:
                          "Your password must be between 6 and 16 characters",
                      },
                      maxLength: {
                        value: 16,
                        errorMessage:
                          "Your password must be between 6 and 16 characters",
                      },
                    }}
                    onChange={(e) => {
                      const str = e.target.value;
                      if (`${str.length}` > 12) {
                        alert("Password should not be nore than 12 characters");
                      }
                      else {
                        setNewPassword(e.target.value)
                      }
                    }
                    } />
                  <Form.Control.Feedback type="invalid" style={{ color: 'blue' }}>
                    Please Enter Valid New Password.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label style={{ marginTop: "20px", fontWeight: "bold" }}>Confirm New Password</Form.Label>
                  <Form.Control type="Password" placeholder="Enter your Confirm New Password" required
                    style={{ borderRadius: "15px" }}
                    size="lg"
                    value={confirmNewPassword}
                    id="confirmNewPassword"
                    maxLength={14}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please enter your Confirm New Password",
                      },
                      pattern: {
                        value: "^[A-Za-z0-9]+$",
                        errorMessage:
                          "Your password must be composed only with letter and numbers",
                      },
                      minLength: {
                        value: 6,
                        errorMessage:
                          "Your password must be between 6 and 16 characters",
                      },
                      maxLength: {
                        value: 16,
                        errorMessage:
                          "Your password must be between 6 and 16 characters",
                      },
                    }}
                    onChange={(e) => {
                      const str = e.target.value;
                      //let length = f.length;
                      if (`${str.length}` > 12) {
                        alert("Confirm New Password should not be nore than 12 characters");
                      }
                      else {
                        setConfirmNewPassword(e.target.value)
                      }
                    }
                    } />
                  <Form.Control.Feedback type="invalid" style={{ color: 'blue' }}>
                    Please Enter Valid Confirm New Password.
                  </Form.Control.Feedback>
                </Form.Group>
                &nbsp;
                <Button
                  size="lg"
                  type="submit"
                  value="Reset Password"
                  style={{
                    width: "100%",
                    background: "#19fa0a",
                    borderRadius: "15px",
                    color: "black",
                  }}
                  // disabled={!validateForm()}
                  onClick={handleSubmit}
                >
                  Reset Password
                </Button>
              </Form>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
