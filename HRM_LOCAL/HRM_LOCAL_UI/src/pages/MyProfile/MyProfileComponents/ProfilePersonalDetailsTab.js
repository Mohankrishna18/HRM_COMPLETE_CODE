import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button, Modal } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import EditIcon from '@mui/icons-material/Edit';



function ProfilePersonalDetailsTab() {

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [personalDetails, setPersonalDetails] = useState("");

    var doj = new Date(dateOfJoining);
    var dd = String(doj.getDate()).padStart(2, "0");
    var mm = String(doj.getMonth() + 1).padStart(2, "0");
    var yyyy = doj.getFullYear();
    doj = yyyy + "-" + mm + "-" + dd;


    // Here usestate has been used in order
    // to set and get values from the jsx
    // for error usestates
    const [ferrors, setFErrors] = useState("");
    const [serror, setSerror] = useState("");
    const [thirderrors, setThirdErrors] = useState("");
    const [fourerror, setFourerror] = useState("");
    const [fiveerrors, setFiveErrors] = useState("");
    const [sixerror, setSixerror] = useState("");
    const [sevenerrors, setSevenErrors] = useState("");
    const [eighterror, setEighterror] = useState("");

    const [fourtysix, setFourtysix] = useState("");
    const [fourtyseven, setFourtyseven] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState(" ");
    const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState(" ");
    const [secondaryPhoneNumber, setSecondaryPhone] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [email, setEmail] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");


    useEffect(() => {
        axios
            .get(`/emp/getPersonalDetails/${employeeid}`)
            .then((response) => {
                setSecondaryPhone(response.data.data.secondaryPhoneNumber);
                setPrimaryPhoneNumber(response.data.data.primaryPhoneNumber)
                setEmployeeId(response.data.data.employeeId);
                setFirstName(response.data.data.firstName);
                setMiddleName(response.data.data.middleName);
                setLastName(response.data.data.lastName);
                setEmail(response.data.data.email);
                setDateOfBirth(response.data.data.dateOfBirth);
                setBloodGroup(response.data.data.bloodGroup);
                setGender(response.data.data.gender);
                setMaritalStatus(response.data.data.maritalStatus);

            });
    }, []);
    console.log(dateOfBirth)

    // function for handling the edit and
    // pushing changes of editing/updating
    const changeHandler = async (e) => {
        e.preventDefault();
        await axios.put(`/emp/updatePersonalDetails/${employeeid}`, {
            employeeId,
            firstName,
            lastName,
            middleName,
            dateOfBirth,
            primaryPhoneNumber,
            secondaryPhoneNumber,
            email,
            bloodGroup,
            gender,
            maritalStatus,

        });
        toast.success("Form Submitted Successfully");
        handleClose();
        const url = `/emp/upload/${employeeid}/`;
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
            })
            .catch((error) => {
                console.log("oops not uploaded!");
            });
    };
    const [file, setFile] = useState("");
    const onSubmit = async (e) => {
        // setData(" ");
        // data.preventDefault();
        //e.preventDefault()
        // console.log(data)

        // reset();
        await axios.put(`/emp/updatePersonalDetails/${employeeid}`, data);
        console.log(data);
        // notify();
        toast.success("Form Submitted Successfully");
        // refreshPage();
        const url = `/emp/upload/${employeeid}/`;
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
            })
            .catch((error) => {
                console.log("oops not uploaded!");
            });
    };
    function handleChange(event) {
        setFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }
    const current = new Date();
    console.log(current)

    const [imge, setImge] = useState([]);
    useEffect(() => {
        axios
            .get(`/emp/files/${employeeid}`)
            .then((response) => {
                console.log(response.data);
                setImge(response.data)
            })
            .catch((error) => {
                console.log(error);

                console.log("something wrong");
            });
    }, []);

    console.log(imge);



    useEffect(() => {
        axios
            .get(`/emp/getPersonalDetails/${employeeid}`)
            .then((response) => {
                setPersonalDetails(response.data)
                console.log(personalDetails)
            });
    }, []);

    var tempDate = new Date(dateOfBirth);
    var dob = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    return (
        <div style={{ paddingLeft: 30, paddingBottom: 0 }}>
            <Card.Title>
                <Row>
                    <Col> <h5>Personal Information:</h5></Col>
                    <Col style={{ float: "right", paddingLeft: "750px" }}><EditIcon onClick={handleShow} /></Col>
                </Row>

            </Card.Title>
            <Card.Body >
                <Row style={{ paddingLeft: 55, paddingBottom: 30, paddingTop: 20 }}>
                    <Col>
                        <Card.Subtitle>
                            Email:
                        </Card.Subtitle>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        <Card.Subtitle style={{ color: "#999897" }}>
                            {email}
                        </Card.Subtitle>
                    </Col>
                </Row>
                <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
                    <Col>
                        <Card.Subtitle
                        >
                            Phone Number:
                        </Card.Subtitle>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        <Card.Subtitle style={{ color: "#999897" }}>
                            {primaryPhoneNumber}
                        </Card.Subtitle>
                    </Col>
                </Row>
                <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
                    <Col>
                        <Card.Subtitle

                        >
                            Date of Birth:
                        </Card.Subtitle>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        {dateOfBirth ? (<Card.Subtitle style={{ color: "#999897" }}>
                            {dob}
                        </Card.Subtitle>) : (<div></div>)}

                    </Col>
                </Row>
                <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
                    <Col>
                        <Card.Subtitle
                        >
                            Blood Group:
                        </Card.Subtitle>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        <Card.Subtitle style={{ color: "#999897" }} >
                            {bloodGroup}
                        </Card.Subtitle>
                    </Col>
                </Row>
                <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
                    <Col>
                        <Card.Subtitle style={{}}
                        >
                            Gender:
                        </Card.Subtitle>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        <Card.Subtitle style={{ color: "#999897" }}>
                            {gender}
                        </Card.Subtitle>
                    </Col>
                </Row>
                <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
                    <Col>
                        <Card.Subtitle>
                            Marital Status:
                        </Card.Subtitle>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        <Card.Subtitle style={{ color: "#999897" }}>
                            {maritalStatus}
                        </Card.Subtitle>
                    </Col>
                </Row>
            </Card.Body>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton style={{ backgroundColor: "#FE924A" }}>
                    <Modal.Title>Personal Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>

                        <Form
                            onSubmit={(e) => changeHandler(e)}
                            style={{ padding: 10 }}
                        >
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
                                        disabled
                                        required
                                        maxLength={50}
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="Enter Name"
                                        isInvalid={ferrors}
                                    />
                               _     <Form.Control.Feedback type="invalid">
                                        {ferrors}
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
                                    <Form.Label>Middle name</Form.Label>
                                    <Form.Control
                                        disabled
                                        name="middleName"
                                        type="text"
                                        placeholder="Middle name"
                                        maxLength={50}
                                        value={middleName}
                                        onChange={(e) => {

                                            setMiddleName(e.target.value);
                                        }}
                                    />
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
                                        disabled
                                        required
                                        maxLength={50}
                                        onChange={(e) => {
                                            if (firstName == "") {
                                                setFErrors("First Name is required")
                                            }
                                            else {
                                                setFErrors("")
                                            }
                                            setLastName(e.target.value);
                                        }}
                                        isInvalid={serror}
                                        type="text"
                                        placeholder="Enter Name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {serror}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* <PhoneInput

// country={"india"}
className="marginBottom"
value={primaryPhoneNumber}
onChange={(e) => setPrimaryPhoneNumber(e.target.value)}
/> */}
                                <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
                                    <Form.Label>Phone Number *</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            +91
                                        </InputGroup.Text>
                                        <Form.Control
                                            required
                                            type="number"
                                            name="primaryPhoneNumber"
                                            placeholder="phone Number"
                                            maxLength={10}
                                            value={primaryPhoneNumber}
                                            onChange={(e) => {
                                                setPrimaryPhoneNumber(e.target.value);
                                                if (e.target.value.length > 10 || e.target.value.length < 10) {
                                                    setThirdErrors(" Phonenumber length should be 10 characters");;
                                                }
                                                else{
                                                    setThirdErrors("");
                                                }
                                                if (lastName === "") {
                                                    setSerror("Last Name is Required");
                                                }
                                                else {
                                                    setSerror("")
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
                                        <InputGroup.Text id="inputGroupPrepend">
                                            +91
                                        </InputGroup.Text>
                                        <Form.Control
                                            value={secondaryPhoneNumber}
                                            maxLength={10}
                                            isInvalid={fourtyseven}
                                            onChange={(e) => {
                                                setSecondaryPhone(e.target.value);
                                                if (e.target.value.length > 10) {
                                                    setFourtyseven(" Phonenumber length should be 10 characters");;
                                                }
                                            }}
                                            type="number"
                                            placeholder="Enter Phone"
                                        />
                                    </InputGroup>
                                    <Form.Control.Feedback type="invalid">
                                        {fourtyseven}
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
                                            if (primaryPhoneNumber === "") {
                                                setThirdErrors("Phone Number is Required");
                                            }
                                            else {
                                                setThirdErrors("")
                                            }
                                            if(email === "" ||
                                                !email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
                                                        setFourerror("Enter valid Email")
                                                        console.log(e.target.value);
                                                    }
                                                    else{
                                                        setFourerror("")
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
                                        disabled
                                        type="date"
                                        name="dateOfBirth"
                                        placeholder="DOB"
                                        controlId="dateOfBirth"
                                        value={dateOfBirth}
                                        isInvalid={fiveerrors}
                                        onChange={(e) => {
                                            setDateOfBirth(e.target.value);
                                            if (email === "") {
                                                setFourerror("Email is Required");
                                            }
                                            else {
                                                setFourerror("")
                                            }

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
                                        disabled
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
                                            }
                                            else {
                                                setFiveErrors("")
                                            }
                                        }}
                                    >
                                        <option>Select</option>
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
                                        disabled
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
                                            }
                                            else {
                                                setSixerror("")
                                            }
                                        }}
                                    >
                                        <option>Select</option>
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
                                        disabled
                                        type="text"
                                        name="maritalStatus"
                                        placeholder="Marital Status "
                                        controlId="maritalStatus"
                                        value={maritalStatus}
                                        isInvalid={eighterror}
                                        onChange={(event) => {
                                            setMaritalStatus(event.target.value)
                                            if (gender === "") {
                                                setSevenErrors(" Gender is Required");
                                            }
                                            else {
                                                setSevenErrors("")
                                            }
                                        }}
                                    >
                                        <option>Select</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Diverced">Other</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {eighterror}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group style={{ padding: 10, paddingTop: 20 }}>
                                    <Form.Label>
                                        Upload Profile Picture * (Size should be less than 1 MB)
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={imge.name}
                                        type="file"
                                        isInvalid={fourtysix}
                                        onChange={handleChange}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {fourtysix}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Row>
                                    <Col>
                                    </Col>
                                    <Col>
                                        <Button md="6"
                                            className="rounded-pill"
                                            style={{ backgroundColor: "#eb4509", float: "right" }}
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
                </Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
            </Modal>
        </div>
    )
}
export default ProfilePersonalDetailsTab;

