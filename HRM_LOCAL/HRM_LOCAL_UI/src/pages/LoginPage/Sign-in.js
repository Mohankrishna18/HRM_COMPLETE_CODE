import React, { useState, memo } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Sign-in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../Uri";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  function validateForm() {
    return employeeId.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    //1 prevent propagation
    event.preventDefault();
    //2 make the async call and set the session storage on successful login
    const sendLoginRequest = async () => {
      try {
        const resp = await axios.get(
          `/login/authenticateUser?employeeId=${employeeId}&password=${password}`
        );
        console.log("login is successful");
        userStatus = resp.data;
        sessionStorage.setItem("userdata", JSON.stringify(userStatus));

        if (userStatus.status === true) {
          history.push("/app");
          toast.success("You are successfully Logged In");
        }
        else
        {
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
            <h2 style={{ textAlign: "center", paddingTop: "10px"}}>Arshaa Login</h2>
            <Form style={{ paddingTop: "40px" }}>
              <Form.Group controlld="employeeId">
                <Form.Label style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                  Employee Id
                </Form.Label>
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="text"
                  placeholder="Enter your Employee Id"
                  size="lg"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </Form.Group>
              &nbsp;
              <Form.Group controlid="fornBasicPassword">
                <Form.Label style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                  Password
                </Form.Label>
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="password"
                  placeholder="Enter your Password"
                  size="lg"
                  value={password}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              &nbsp;
              <div>
                <a
                  class="text-muted"
                  href="/resetPassword"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    paddingLeft: "10px",
                  }}
                >
                  Reset password?
                </a>
              </div>
              &nbsp;
              <Button
                size="lg"
                type="submit"
                style={{
                  width: "100%",
                  background: "#19fa0a",
                  borderRadius: "15px",
                  color:"black"
                }}
                disabled={!validateForm()}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default memo(Sign);
