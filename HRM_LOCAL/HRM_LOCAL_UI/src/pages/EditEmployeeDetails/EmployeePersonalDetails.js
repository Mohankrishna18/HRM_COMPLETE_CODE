import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function EmployeePersonalDetails() {
  const params=useParams();
    console.log(params.id);
  

  // console.log(props.updateOnboard1);
  
  const payload = {
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    phoneNumber,
    secondaryPhoneNumber,
    email,
    primarySkills,
    secondarySkills,
    bloodGroup,
    gender,
    maritalStatus,
  };

  const [ferrors, setFErrors] = useState("");
  const [serror, setSerror] = useState("");
  const [thirderrors, setThirdErrors] = useState("");
  const [fourerror, setFourerror] = useState("");
  const [fiveerrors, setFiveErrors] = useState("");
  const [sixerror, setSixerror] = useState("");
  const [sevenerrors, setSevenErrors] = useState("");
  const [eighterror, setEighterror] = useState("");
  const [nineerrors, setNineErrors] = useState("");
  const [tenerror, setTenerror] = useState("");
  const [elevenerror, setElevenerror] = useState("");
  const [twelveerror, setTwelveError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [secondaryPhoneNumber, setSecondaryPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [primarySkills, setPrimarySkills] = useState("");
  const [secondarySkills, setSecondarySkills] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");


  useEffect(() => {
    axios.get(`/emp/getnullvaluescount/${params.id}`).then((response) => {
      console.log(response.data);
      setStatus(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByOnboardingId/${params.id}`)
      .then((response) => {
        setFirstName(response.data.data.firstName);
        setLastName(response.data.data.lastName);
        setSecondaryPhone(response.data.data.secondaryPhoneNumber);
        setFirstName(response.data.data.firstName);
        setMiddleName(response.data.data.middleName);
        setLastName(response.data.data.lastName);
        setPhoneNumber(response.data.data.phoneNumber);
        setSecondaryPhone(response.data.data.secondaryPhoneNumber);
        setEmail(response.data.data.email);
        setDateOfBirth(response.data.data.dateOfBirth);
        setBloodGroup(response.data.data.bloodGroup);
        setGender(response.data.data.gender);
        setMaritalStatus(response.data.data.maritalStatus);
        setPrimarySkills(response.data.data.primarySkills);
        setSecondarySkills(response.data.data.secondarySkills);
      });
  }, []);
  // console.log(dateOfBirth);
  const changeHandler = async (e) => {
    e.preventDefault();
    await axios.put(
      `/emp/updatePersonalDetailsInPreOnboarding/${params.id}`,
      {
        firstName,
        lastName,
        middleName,
        dateOfBirth,
        phoneNumber,
        secondaryPhoneNumber,
        email,
        primarySkills,
        secondarySkills,
        bloodGroup,
        gender,
        maritalStatus,
      }
    );
    

    const url = `/emp/upload/${params.id}/`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(formData);
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        toast.success("Form Submitted Successfully");
      })
      .catch((error) => {
        console.log("oops not uploaded!");
        toast.error("Please Enter Valid Details")
      });
  };

  const [file, setFile] = useState("");
  const handleChange = (event) => {
    const file = event.target.files[0];
  console.log(file);
    if (file.size > 1000000 )
 toast.error("Size Should be less then 1Mb")
else setFile(event.target.files[0]);
console.log(event.target.files[0]);

}

  const [imge, setImge] = useState([]);
  useEffect(() => {
    axios
      .get(`/emp/files/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setImge(response.data);
      })
      .catch((error) => {
        console.log(error);

        console.log("something wrong");
      });
  }, []);

  return (
    <div>
      {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 20, textAlign: "center" }}>
                    Personal Details
                </Card.Title>
            </Card> */}

      <Form onSubmit={(e) => changeHandler(e)} style={{ padding: 10 }}>
        <Row className="mb-5">
          <Form.Group
            as={Col}
            className="mb-3"
            md="6"
            controlId="formBasicEmail"
          >
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              value={firstName}
              // disabled
              required
              maxLength={50}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z]+$/)) {
                  setFErrors("Invalid First Name");
                } else {
                  setFErrors("");
                }
              }}
              type="text"
              placeholder="Enter Name"
              isInvalid={ferrors}
            />
            <Form.Control.Feedback type="invalid">
              {ferrors}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
            <Form.Label>Middle name</Form.Label>
            <Form.Control
              name="middleName"
              type="text"
              placeholder="Middle name"
              maxLength={50}
              isInvalid={tenerror}
              value={middleName}
              onChange={(e) => {
                setMiddleName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z]+$/)) {
                  setTenerror("Invalid Middle Name");
                } else {
                  setTenerror("");
                }
              }}
            />
            <Form.Control.Feedback type="invalid">
              {tenerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            className="mb-3"
            md="6"
            controlId="formBasicEmail"
          >
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              value={lastName}
              // disabled
              required
              maxLength={50}
              onChange={(e) => {
                if (firstName === "") {
                  setFErrors("First Name is required");
                } else {
                  setFErrors("");
                }
                setLastName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z]+$/)) {
                  setSerror("Invalid Last Name");
                } else {
                  setSerror("");
                }
                
              }}
              type="text"
              placeholder="Enter Name"
              isInvalid={serror}
            />
            <Form.Control.Feedback type="invalid">
              {serror}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
            <Form.Label>Phone Number *</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              <Form.Control
                required
                type="number"
                name="primaryPhoneNumber"
                placeholder="Phone Number"
                maxLength={10}
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (
                    e.target.value.length > 10 ||
                    e.target.value.length < 10
                  ) {
                    setThirdErrors(
                      " Phone Number length should be 10 characters"
                    );
                  } else {
                    setThirdErrors("");
                  }
                  if (lastName === "") {
                    setSerror("Last Name is Required");
                  } else {
                    setSerror("");
                  }
                }}
                isInvalid={thirderrors}
              />
              <Form.Control.Feedback type="invalid">
                {thirderrors}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            className="mb-3"
            md="6"
            style={{ padding: 10 }}
            controlId="formBasicEmail"
          >
            <Form.Label>Emergency Phone Number </Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              <Form.Control
                value={secondaryPhoneNumber}
                maxLength={10}
                isInvalid={nineerrors}
                onChange={(e) => {
                  setSecondaryPhone(e.target.value);
                  if (
                    e.target.value.length > 10 ||
                    e.target.value.length < 10
                  ) {
                    setNineErrors(
                      " Phone Number length should be 10 characters"
                    );
                  } else {
                    setNineErrors("");
                  }
                }}
                type="number"
                placeholder="Enter Phone"
              />
            </InputGroup>
            <Form.Control.Feedback type="invalid">
              {nineerrors}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Email *</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={email}
              isInvalid={fourerror}
              onChange={(e) => {
                if (phoneNumber === "") {
                  setThirdErrors("Phone Number is Required");
                } else {
                  setThirdErrors("");
                }
                if (
                  !e.target.value.match(
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                  )
                ) {
                  setFourerror("Invalid Email");
                } else {
                  setFourerror("");
                }
                setEmail(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {fourerror}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Date of Birth *</Form.Label>
            <Form.Control
              required
              type="date"
              name="dateOfBirth"
              // max={today}
              // max={new Date(BackDate).toISOString().split("T")[0]}
              placeholder="DOB"
              controlId="dateOfBirth"
              value={dateOfBirth}
              isInvalid={fiveerrors}
              
              onChange={(e) => {
                setDateOfBirth(e.target.value);
                if (email === "") {
                  setFourerror("Email is Required");
                } else {
                  setFourerror("");
                }
                setDateOfBirth(e.target.value);
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {fiveerrors}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Blood Group *</Form.Label>
            <Form.Select
              required
              type="text"
              name="bloodGroup"
              placeholder="Blood Group "
              controlId="bloodGroup"
              isInvalid={sixerror}
              value={bloodGroup}
              onChange={(e) => {
                setBloodGroup(e.target.value);
                if (dateOfBirth === "") {
                  setFiveErrors("Email is Required");
                } else {
                  setFiveErrors("");
                }
              }}
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {sixerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Gender *</Form.Label>
            <Form.Select
              required
              type="text"
              name="gender"
              placeholder="Gender "
              controlId="gender"
              value={gender}
              isInvalid={sevenerrors}
              onChange={(e) => {
                setGender(e.target.value);
                if (bloodGroup === "") {
                  setSixerror(" Blood group is Required");
                } else {
                  setSixerror("");
                }
              }}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {sevenerrors}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Marital Status *</Form.Label>
            <Form.Select
              required
              type="text"
              name="maritalStatus"
              placeholder="Marital Status "
              controlId="maritalStatus"
              value={maritalStatus}
              isInvalid={eighterror}
              onChange={(event) => {
                setMaritalStatus(event.target.value);
                if (gender === "") {
                  setSevenErrors(" Gender is Required");
                } else {
                  setSevenErrors("");
                }
              }}
            >
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Diverced">Other</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {eighterror}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Primary Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Primary Skills"
              controlId="primarySkils"
              value={primarySkills}
              maxLength={15}
              name="primarySkills"
              isInvalid={elevenerror}
              onChange={(e) => {
                setPrimarySkills(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                  setElevenerror("Enter Valid Skill Name");
                } else {
                  setElevenerror("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {elevenerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Secondary Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Secondary Skills"
              controlId="secondarySkills"
              value={secondarySkills}
              maxLength={15}
              name="secondarySkills"
              isInvalid={twelveerror}
              onChange={(e) =>{
                 setSecondarySkills(e.target.value);
                 if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                    setTwelveError("Enter Valid Skill Name");
                  } else {
                    setTwelveError("");
                  }
                }
                }
            ></Form.Control>
             <Form.Control.Feedback type="invalid">
              {twelveerror}
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group style={{ padding: 10, paddingTop: 20 }}>
            <Form.Label>
              Upload Profile Picture * (Size should be less than 1 MB)
            </Form.Label>
            <Form.Control
              required
              //    value={imge.name}
              type="file"
              // isInvalid={fourtysix}
              onChange={handleChange}
            />
            {/* <Form.Control.Feedback type="invalid">
                            {fourtysix}
                        </Form.Control.Feedback> 
          </Form.Group> */}
          <Row>
            <Col></Col>
            <Col>
              <Button
                className="rounded-pill"
                md="3"
                style={{ backgroundColor: "#f5896e",
                borderColor: "#f5896e", float: "right" }}
                type="submit"
                size="lg"
                
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Row>
      </Form>
    </div>
  );
}
export default EmployeePersonalDetails;
