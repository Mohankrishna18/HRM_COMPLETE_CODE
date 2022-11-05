// import React, { useState, memo } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./Sign-in.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "../../Uri";
// import { useHistory } from "react-router-dom";
// import { Container, Row, Col, NavLink, Card } from "react-bootstrap";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import image from "../../Images/arshaalogo.png";

// const Sign = () => {

//   var userStatus = null;
//   const [employeeId, setEmployeeId] = useState("");
//   const [password, setPassword] = useState("");
//   // const [token, setToken] = useState("");
//   // const navigate = useNavigate();
//   const history = useHistory();
//   const intialValues = {
//     employeeId,
//     password,
//   };
//   // function validateForm() {
//   //   return employeeId.length > 0 && password.length > 0;
//   // }
//   const [validated, setValidated] = useState(false);
//   const handleSubmit = (event) => {
//     //1 prevent propagation
//     event.preventDefault();
//     // const form = event.currentTarget;
//     // if (form.checkValidity() === false) {
//     //   event.preventDefault();
//     // }
//     setValidated(true);
//     //2 make the async call and set the session storage on successful login
//     const sendLoginRequest = async () => {
//       try {
//         const resp = await axios.get(
//           `/login/authenticateUser?employeeId=${employeeId}&password=${password}`
//         );
//         userStatus = resp.data;

//         // sessionStorage.setItem("userdata", JSON.stringify(userStatus));
//         if (userStatus.status === true) {
//           sessionStorage.setItem("userdata", JSON.stringify(userStatus));
//           history.push("/app");
//           toast.success("You are successfully Logged In");
//         }
//         else {
//           toast.error("Login Failed, Invalid Employee ID and Password.");
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     sendLoginRequest();
//   };
//   return (
//     <>
//       <Container
//         style={{
//           backgroundColor: "#FFFFFF",
//           borderRadius: "15px",
//           paddingLeft: "190px",
//         }}
//       >
//         <Card style={{border:"none", position:"absolute"}}>
//           <Row>
//             <Col xs={5}>
//               <img src={image} style = {{height:"750px", width:"750px"}} />
//             </Col>
//             <Col
//               className="p-5 m-auto shadow-sm rounded-lg"
//               style={{
//                 height: "750px",
//                 width: "450px",
//                 alignments: "center",

//                 backgroundColor: "#FFFFFF",
//                 boxShadow: "10px 10px 10px",
//               }}
//               lg={5}
//               md={6}
//               sm={12}
//             >

//         <Form noValidate className="login" validated={validated} onSubmit={handleSubmit}>
//           <Row style={{ marginTop: "50px", marginLeft: "40px" ,paddingLeft:"300px"}}>
//             <Col
//               className="p-5 m-auto shadow-sm rounded-lg"
//               style={{
//                 height: "620px",
//                 width: "430px",
//                 alignments: "center",
//                 background: "linear-gradient(#FFB914,#FF6914,#F1340C)",
//                 borderRadius: "25px",

//               }}
//               lg={5}
//               md={6}
//               sm={12}
//             >
//               {/* <img
//                 src={image}
//                 style={{
//                   height: "110px",
//                   width: "200px",
//                   paddingLeft: "120px",
//                   borderRadius: "15px",
//                 }}
//               ></img> */}
//               <h2 style={{ textAlign: "center", paddingTop: "10px" }}>Arshaa Login</h2>
//               <Form.Group as={Col} md="12" controlId="validationCustom03">
//                 <Form.Label style={{ marginTop: "20px", fontWeight: "bold" }}>Employee ID</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your Employee Id " required style={{ borderRadius: "15px" }}
//                   size="lg"
//                   value={employeeId}
//                   id="employeeId"
//                   maxLength={14}
//                   onChange={(e) => {
//                     const str = e.target.value;
//                     //let length = f.length;
//                     if (`${str.length}` > 12) {
//                       alert("Employee Id Length should not be more than 12 characters");
//                     }
//                     else {
//                       setEmployeeId(e.target.value.toUpperCase())
//                     }
//                   }
//                   } />
//                 <Form.Control.Feedback class="valid-tooltip" type="invalid" style={{ color: 'blue' }}>
//                   Please Enter valid Employee Id.
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="12" controlId="validationCustom04">
//                 <Form.Label style={{ marginTop: "20px", fontWeight: "bold" }}>Password</Form.Label>
//                 <Form.Control type="Password" placeholder="Enter your Password" required
//                   style={{ borderRadius: "15px" }}
//                   size="lg"
//                   value={password}
//                   id="password"
//                   maxLength={14}
//                   validate={{
//                     required: {
//                       value: true,
//                       errorMessage: "Please enter your password",
//                     },
//                     pattern: {
//                       value: "^[A-Za-z0-9]+$",
//                       errorMessage:
//                         "Your password must be composed only with letter and numbers",
//                     },
//                     minLength: {
//                       value: 6,
//                       errorMessage:
//                         "Your password must be between 6 and 16 characters",
//                     },
//                     maxLength: {
//                       value: 16,
//                       errorMessage:
//                         "Your password must be between 6 and 16 characters",
//                     },
//                   }}
//                   onChange={(e) => {
//                     const str = e.target.value;
//                     //let length = f.length;
//                     if (`${str.length}` > 12) {
//                       alert("Password should not be more than 12 characters");
//                     }
//                     else {
//                       setPassword(e.target.value)
//                     }
//                   }
//                   } />
//                 <Form.Control.Feedback type="invalid" style={{ color: 'blue' }}>
//                   Please Enter Valid Password.
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <NavLink
//                   class="text-muted"
//                   href="/resetPassword"
//                   style={{
//                     fontWeight: "bold",
//                     color: "black",
//                     paddingLeft: "10px",
//                   }}
//                 >
//                   Reset Password?
//                 </NavLink>
//               </Form.Group>
//               <div>
//                 <Button
//                   size="lg"
//                   type="submit"
//                   value="Sign in"
//                   style={{
//                     width: "100%",
//                     background: "#19fa0a",
//                     borderRadius: "15px",
//                     color: "black"
//                   }}
//                   onClick={handleSubmit}
//                 >
//                   Sign in
//                 </Button>
//                 {/* <ToastContainer limit={1}></ToastContainer> */}
//               </div>
//             </Col>
//           </Row>
//           </Col>
//           </Row>
//         </Form>
//         </Card>
//       </Container>
//     </>
//   );
// };
// export default memo(Sign);

import React, { useState, memo } from "react";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import "./Sign-in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../Uri";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
// import background from "../../images/login screen.jpg";
import image from "../../Images/arshaalogo.png";
import "react-toastify/dist/ReactToastify.css";
import BlockImage from 'react-block-image'

const Sign = () => {
  var userStatus = null;
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [fourtytwo, setFourtytwo] = useState("");
  const [fourtythree, setfourtythree] = useState("");
  // const [token, setToken] = useState("");
  // const navigate = useNavigate();
  const history = useHistory();

  const intialValues = {
    employeeId,
    password,
  };
  // function validateForm() {
  //   return employeeId.length > 0 && password.length < 0;
  // }
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    //1 prevent propagation
    event.preventDefault();
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
          toast.success("You are successfully logged into application");
          console.log("login success");
        } else {
          console.log("Something")
          toast.error("Invalid EmployeeId and Password , please try again");
        }
      } catch (err) {
        console.error(err);
        toast.error("Login Failed, Invalid Employee Id and Password.");
        console.log(err);
        console.log("login failed");
      }
    };

    sendLoginRequest();
  };

  return (
    <>
      <Container
        style={{
          backgroundColor:"#b0afac",
          // backgroundColor: "#FFFFFF",
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
            // background: "linear-gradient(to right, #cbcbc5, #cbcaa5)",
            // background: "linear-gradient(#FFB914,#FF6914,#F1340C)",
            background:"#b0afac",
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
                height: "650px",

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

              <Form style={{ paddingTop: "40px" }}>
                <Form.Group controlld="validationCustom03">
                  <Form.Label
                    style={{ fontWeight: "bold", paddingLeft: "10px" }}
                  >
                    Employee ID
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="employeeId"
                    placeholder="Enter your Employee-ID"
                    required
                    size="lg"
                    maxLength={14}
                    isInvalid={fourtytwo}
                    value={employeeId}
                    onChange={(e) => {
                      setEmployeeId(e.target.value.toUpperCase());
                      if (e.target.value > 12) {
                        setFourtytwo(
                          "Employee ID Length should not be more than 12 characters"
                        );
                      } else {
                        setFourtytwo("");
                      }
                    }}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ color: "black" }}
                  >
                    {fourtytwo}
                  </Form.Control.Feedback>
                  {/* <Form.Control.Feedback class="valid-tooltip" type="invalid" style={{ color: 'blue' }}>
                  Please Enter valid Employee Id.
                </Form.Control.Feedback> */}
                </Form.Group>
                &nbsp;
                <Form.Group controlid="fornBasicPassword">
                  <Form.Label
                    style={{ fontWeight: "bold", paddingLeft: "10px" }}
                  >
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    size="lg"
                    value={password}
                    maxLength={14}
                    isInvalid={fourtythree}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please Enter your Password",
                      },
                      pattern: {
                        value: "^[A-Za-z0-9]+$",
                        errorMessage:
                          "Your password must be composed only with letter and numbers",
                      },
                      minLength: {
                        value: 8,
                        errorMessage:
                          "Your Password must be between 8 and 16 characters",
                      },
                      maxLength: {
                        value: 16,
                        errorMessage:
                          "Your Password must be between 8 and 16 characters",
                      },
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      //let length = f.length;
                      if (e.target.value.length > 12) {
                        setfourtythree(
                          "Password should not be more than 12 characters"
                        );
                      } else {
                        setfourtythree("");
                      }
                    }}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ color: "black" }}
                  >
                    {fourtythree}
                  </Form.Control.Feedback>
                </Form.Group>
                &nbsp;
                <div>
                  <p
                    onClick={() => history.push("/ResetPassword")}
                    style={{
                      fontWeight: "bold",
                      paddingLeft: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Reset password?
                  </p>
                </div>
                &nbsp;
                <Button
                  size="lg"
                  type="submit"
                  style={{
                    // width: "100%",
                    // background: "linear-gradient(#e66465, #9198e5)",
                    // borderRadius: "10px",
                    // color: "black",
                    width: "100%",
                    // background: "linear-gradient(#FFB914,#FF6914,#F1340C)",
                    background:"#f77659",
                    borderRadius: "15px",
                    color: "white",
                  }}
                  //  disabled={!validateForm()}
                  onClick={handleSubmit}
                >
                  SIGN IN
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default memo(Sign);