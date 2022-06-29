import React, { useState, memo } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Sign-in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../Uri";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../Images/arshaalogo.png";

const Sign = () => {
  var userStatus = null;
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const navigate = useNavigate();
  const history = useHistory();
  const intialValues = {
    employeeId,
    password,
  };
  // function validateForm() {
  //   return employeeId.length > 0 && password.length > 0;
  // }
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    //1 prevent propagation
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    // }
    setValidated(true);
    //2 make the async call and set the session storage on successful login
    const sendLoginRequest = async () => {
      try {
        const resp = await axios.get(
          `/login/authenticateUser?employeeId=${employeeId}&password=${password}`
        );
        userStatus = resp.data;

        // sessionStorage.setItem("userdata", JSON.stringify(userStatus));
        if (userStatus.status === true) {
          sessionStorage.setItem("userdata", JSON.stringify(userStatus));
          history.push("/app");
          toast.success("You are successfully Logged In");
        }
        else {
          toast.error("Login Failed, Please try again.");
        }
      } catch (err) {
        console.error(err);
      }
    };
    sendLoginRequest();
  };
  return (
    <>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row style={{ marginTop: "50px", marginLeft: "40px" }}>
            <Col
              className="p-5 m-auto shadow-sm rounded-lg"
              style={{
                height: "620px",
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
              <h2 style={{ textAlign: "center", paddingTop: "10px" }}>Arshaa Login</h2>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label style={{ marginTop: "20px", fontWeight: "bold" }}>Employee ID</Form.Label>
                <Form.Control type="text" placeholder="Enter your Employee Id " required style={{ borderRadius: "15px" }}
                  size="lg"
                  value={employeeId}
                  maxLength={14}
                  onChange={(e) => {
                    const str = e.target.value;
                    //let length = f.length;
                    if (`${str.length}` > 12) {
                      alert("Employee Id Length should not be more than 12 characters");
                    }
                    else {
                      setEmployeeId(e.target.value)
                    }
                  }
                  } />
                <Form.Control.Feedback class="valid-tooltip" type="invalid" style={{ color: 'blue' }}>
                  Please Enter valid Employee Id.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label style={{ marginTop: "20px", fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control type="Password" placeholder="Enter your Password" required
                  style={{ borderRadius: "15px" }}
                  size="lg"
                  value={password}
                  maxLength={14}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter your password",
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
                      setPassword(e.target.value)
                    }
                  }
                  } />
                <Form.Control.Feedback type="invalid" style={{ color: 'blue' }}>
                  Please Enter Valid Password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <NavLink
                  class="text-muted"
                  href="/resetPassword"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    paddingLeft: "10px",
                  }}
                >
                  Reset Password?
                </NavLink>
              </Form.Group>
              <div>
                <Button
                  size="lg"
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#19fa0a",
                    borderRadius: "15px",
                    color: "black"
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
                {/* <ToastContainer limit={1}></ToastContainer> */}
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default memo(Sign);