import React, { useEffect, useState, useRef } from "react";
import { Accordion, Button, Card, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import countries from "./Countries";
import CountryDropdown from 'country-dropdown-with-flags-for-react';

import PhoneInput from "react-phone-input-2";


import * as Yup from "yup";
import EmployeeMasterCard from "./EmployeeMasterCard";
import { useHistory } from "react-router-dom";
import { set } from "lodash";
import { FormHelperText } from "@mui/material";


let maxLength = 6;

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


function PersonalDetailsTab() {
    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;

    var doj = new Date(dateOfJoining);
    var dd = String(doj.getDate()).padStart(2, "0");
    var mm = String(doj.getMonth() + 1).padStart(2, "0");
    var yyyy = doj.getFullYear();
    doj = yyyy + "-" + mm + "-" + dd;
    // console.log(doj);

    // var dob = new Date(dateOfBirth);
    // var dd = String(dob.getDate()).padStart(2, '0');
    // var mm = String(dob.getMonth() + 1).padStart(2, '0');
    // var yyyy = dob.getFullYear();
    //  var dob1 = yyyy + '-' + mm + '-' + dd;
    // console.log(dob1);

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
    const [nineerrors, setNineErrors] = useState("");
    const [tenerror, setTenerror] = useState("");
    const [elevenerrors, setElevenErrors] = useState("");
    const [tweleveerror, setTweleveerror] = useState("");
    const [thirteenerrors, setThirteenErrors] = useState("");
    const [fourteenerror, setFourteenerror] = useState("");
    const [fifteenerrors, setFifteenErrors] = useState("");
    const [sixteenerror, setSixteenerror] = useState("");
    const [seventeenerror, setSeventeenerror] = useState("");
    const [eighteenerror, setEighteenerror] = useState("");
    const [nineteenerror, setNineteenerror] = useState("");
    const [twentyerror, setTwentyerror] = useState("");
    const [twentyoneerror, setTwentyoneerror] = useState("");
    const [twentytwoerror, setTwentytwoerror] = useState("");
    const [twentythreerror, setTwentythreerror] = useState("");
    const [twentyfourerror, setTwentyfourerror] = useState("");
    const [twentyfiveerror, setTwentyfiveerror] = useState("");
    const [twentysixerror, setTwentysixerror] = useState("");
    const [twentysevenerror, setTwentysevenerror] = useState("");
    const [twentyeighterror, setTwentyeighterror] = useState("");
    const [twentynineerror, setTwentynineerror] = useState("");
    const [thirtyerror, setThirtyerror] = useState("");
    const [thirtyoneerror, setThirtyoneerror] = useState("");
    const [thirtytwoerror, setThirtytwoerror] = useState("");
    const [thirtythreeerror, setThirtythreeerror] = useState("");
    const [thirtyfourerror, setThirtyfourerror] = useState("");
    const [thirtyfiveerror, setThirtyfiveerror] = useState("");
    const [thirtysixerror, setThirtysixerror] = useState("");
    const [thirtysevenerror, setThirtysevenerror] = useState("");
    const [thirtyeighterror, setThirtyeighterror] = useState("");
    const [thirtynineerror, setThirtynineerror] = useState("");
    const [fourty, setFourty] = useState("");
    const [fourtyone, setFourtyone] = useState("");
    const [fourtytwo, setFourtytwo] = useState("");
    const [fourtythree, setFourtythree] = useState("");
    const [fourtyfour, setFourtyfour] = useState("");
    const [fourtyfive, setFourtyfive] = useState("");
    const [fourtysix, setFourtysix] = useState("");
    const [fourtyseven, setFourtyseven] = useState("");
    const [fourtyeight, setFourtyeight] = useState("");
    const [fourtynine, setFourtynine] = useState("");


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState(" ");
    const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState(" ");
    const [secondaryPhoneNumber, setSecondaryPhone] = useState("");
    const [yearsOfExperience, setYearsOfExperience] = useState(" ");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [passportExpiryDate, setPassportExpiryDate] = useState("");
    const [passportNo, setPassportNo] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [primarySkills, setPrimarySkills] = useState("");
    const [secondarySkills, setSecondarySkills] = useState("");
    const [email, setEmail] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [designationName, setDesignationName] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [reportingManager, setReportingManager] = useState("");
    const [permanentAdress, setPermanentAddress] = useState("");
    const [permanentState, setPermanentState] = useState("");
    const [permanentCountry, setPermanentCountry] = useState("");
    const [permanentPincode, setPermanentPincode] = useState("");
    const [currentAdress, setCurrentAddress] = useState("");
    const [currentState, setCurrentState] = useState("");
    const [currentCountry, setCurrentCountry] = useState("");
    const [currentPincode, setCurrentPincode] = useState("");
    const [postgraduationType, setTypeOfPostGraduation] = useState("");
    const [postgraduationBoardOfUniversity, setPostgraduationBoardOfUniversity] = useState("");
    const [postgraduationInstituteName, setPostgraduationInstituteName] = useState("");
    const [postgraduationInstituteCity, setPostgraduationInstituteCity] = useState("");
    const [postgraduationCourseName, setPostgraduationCourseName] = useState("");
    const [postgraduationJoiningYear, setPostgraduationJoiningYear] = useState("");
    const [postgraduationPassedYear, setPostgraduationPassedYear] = useState("");
    const [postgraduationGrade, setPostgraduationGrade] = useState("");
    const [graduationType, setTypeOfGraduation] = useState("");
    const [graduationBoardOfUniversity, setGraduationBoardOfUniversity] = useState("");
    const [graduationInstituteName, setGraduationInstituteName] = useState("");
    const [graduationInstituteCity, setGraduationInstituteCity] = useState("");
    const [graduationCourseName, setGraduationCourseName] = useState("");
    const [graduationJoiningYear, setGraduationJoiningYear] = useState("");
    const [graduationPassedYear, setGraduationPassedYear] = useState("");
    // const [graduationJoiningYear, setGraduationJoiningYear] = useState("");
    // const [graduationPassedYear, setGraduationPassedYear] = useState("");
    const [graduationGrade, setGraduationGrade] = useState("");
    const [intermediateBoardOfUniversity, setIntermediateBoardOfUniversity] = useState("");
    const [intermediateCollegeName, setIntermediateCollegeName] = useState("");
    const [intermediateCollegeCity, setIntermediateCollegeCity] = useState("");
    const [intermediateCourseName, setIntermediateCourseName] = useState("");
    const [intermediateJoiningYear, setIntermediateJoiningYear] = useState("");
    const [intermediatePassedYear, setIntermediatePassedYear] = useState("");
    const [intermediateGrade, setIntermediateGrade] = useState("");
    const [sscBoardOfUniversity, setSscBoardOfUniversity] = useState("");
    const [sscSchoolName, setSscSchoolName] = useState("");
    const [sscSchoolCity, setSscSchoolCity] = useState("");
    const [sscCourseName, setSscCourseName] = useState("");
    const [sscJoiningYear, setSscJoiningYear] = useState("");
    const [sscPassedYear, setSscPassedYear] = useState("");
    const [sscGrade, setSscGrade] = useState("");
    const [previousCompany1_name, setPreviousCompany1_name] = useState("");
    const [previousCompany1_designation, setPreviousCompany1_designation] = useState("");
    const [previousCompany1_joiningDate, setPreviousCompany1_joiningDate] = useState("");
    const [previousCompany1_relievingDate, setPreviousCompany1_relievingDate] = useState("");
    const [previousCompany1_employeeId, setPreviousCompany1_employeeId] = useState("");
    const [previousCompany1_typeOfEmployment, setPreviousCompany1_typeOfEmployement] = useState("");
    const [previousCompany1_reasonForRelieving, setPreviousCompany1_reasonForRelieving] = useState("");
    const [previousCompany2_name, setPreviousCompany2_name] = useState("");
    const [previousCompany2_designation, setPreviousCompany2_designation] = useState("");
    const [previousCompany2_joiningDate, setPreviousCompany2_joiningDate] = useState("");
    const [previousCompany2_relievingDate, setPreviousCompany2_relievingDate] = useState("");
    const [previousCompany2_employeeId, setPreviousCompany2_employeeId] = useState("");
    const [previousCompany2_typeOfEmployment, setPreviousCompany2_typeOfEmployement] = useState("");
    const [previousCompany2_reasonForRelieving, setPreviousCompany2_reasonForRelieving] = useState("");
    const [previousCompany3_name, setPreviousCompany3_name] = useState("");
    const [previousCompany3_designation, setPreviousCompany3_designation] = useState("");
    const [previousCompany3_joiningDate, setPreviousCompany3_joiningDate] = useState("");
    const [previousCompany3_relievingDate, setPreviousCompany3_relievingDate] = useState("");
    const [previousCompany3_employeeId, setPreviousCompany3_employeeId] = useState("");
    const [previousCompany3_typeOfEmployment, setPreviousCompany3_typeOfEmployement] = useState("");
    const [previousCompany3_reasonForRelieving, setPreviousCompany3_reasonForRelieving] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [projectName, setProjectName] = useState("");

    const [panNumber, setPanNumber] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [uanNumber, setUanNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [branch, setBranch] = useState("");
    const [band, setBand] = useState("");
    const [exitDate, setExitDate] = useState("");

    const [employeedetails, setEmployeeDetails] = useState([]);

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
    // console.log(firstName)

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
    console.log(graduationJoiningYear)

    return (
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
                                                // disabled
                                                required
                                                maxLength={50}
                                                onChange={(e) => {
                                                    setFirstName(e.target.value);
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
                                                // disabled
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
                                                // required
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
                                                    setEmail(e.target.value);
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
                                                // required
                                                //    value={imge.name}
                                                type="file"
                                                isInvalid={fourtysix}
                                                onChange={handleChange}

                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {fourtysix}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Button
                                        className="rounded-pill"
                                        style={{ backgroundColor: "#eb4509", float: "right" }}
                                        type="submit"
                                        size="lg"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                          
                
        </div>
    );
}

export default PersonalDetailsTab;








// import React, { useEffect, useState } from "react";
// import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
// import axios from "../../../Uri";
// import { toast } from "react-toastify";



// function PersonalDetailsTab() {

//     const userData = sessionStorage.getItem("userdata");
//     const userData1 = JSON.parse(userData);
//     const employeeid = userData1.data.employeeId;

//     const payload = {
//         employeeId,
//         firstName,
//         lastName,
//         middleName,
//         dateOfBirth,
//         primaryPhoneNumber,
//         secondaryPhoneNumber,
//         email,
//         primarySkills,
//         secondarySkills,
//         bloodGroup,
//         gender,
//         maritalStatus,
//     }


//     const [ferrors, setFErrors] = useState("");
//     const [serror, setSerror] = useState(""); 
//     const [thirderrors, setThirdErrors] = useState("");
//     const [fourerror, setFourerror] = useState("");
//     const [fiveerrors, setFiveErrors] = useState("");
//     const [sixerror, setSixerror] = useState("");
//     const [sevenerrors, setSevenErrors] = useState("");
//     const [eighterror, setEighterror] = useState("");
//     const [nineerrors, setNineErrors] = useState("");
//     const [tenerror, setTenerror] = useState("");  

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [middleName, setMiddleName] = useState(" ");
//     const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState(" ");
//     const [secondaryPhoneNumber, setSecondaryPhone] = useState("");
//     const [dateOfBirth, setDateOfBirth] = useState("");
//     const [employeeId, setEmployeeId] = useState("");
//     const [primarySkills, setPrimarySkills] = useState("");
//     const [secondarySkills, setSecondarySkills] = useState("");
//     const [email, setEmail] = useState("");
//     const [bloodGroup, setBloodGroup] = useState("");
//     const [gender, setGender] = useState("");
//     const [maritalStatus, setMaritalStatus] = useState("");
//     const [dateOfJoining, setDateOfJoining] = useState("");
//     const [imge, setImge] = useState([]);
    
//     const [file, setFile] = useState("");


//     useEffect(() => {
//         axios
//             .get(`/emp/getPersonalDetails/${employeeid}`)
//             .then((response) => {
//                 setEmployeeId(response.data.data.employeeId);
//                 setFirstName(response.data.data.firstName);
//                 setLastName(response.data.data.lastName);
//                 setSecondaryPhone(response.data.data.secondaryPhoneNumber);
//                 setEmployeeId(response.data.data.employeeId);
//                 setFirstName(response.data.data.firstName);
//                 setMiddleName(response.data.data.middleName);
//                 setLastName(response.data.data.lastName);
//                 setPrimaryPhoneNumber(response.data.data.primaryPhoneNumber);
//                 setSecondaryPhone(response.data.data.secondaryPhoneNumber);
//                 setEmail(response.data.data.email);
//                 setDateOfBirth(response.data.data.dateOfBirth);
//                 setBloodGroup(response.data.data.bloodGroup);
//                 setGender(response.data.data.gender);
//                 setMaritalStatus(response.data.data.maritalStatus);

//             });
//     }, []);

//     const changeHandler = async (e) => {
//         e.preventDefault();
//         try{
//         await axios.put(`/emp/updatePersonalDetails/${employeeid}`, {
//             employeeId,
//             firstName,
//             lastName,
//             middleName,
//             dateOfBirth,
//             primaryPhoneNumber,
//             secondaryPhoneNumber,
//             email,
//             primarySkills,
//             secondarySkills,
//             bloodGroup,
//             gender,
//             maritalStatus
//         });
//         toast.success("Form Submitted Successfully");
//         const url = `/emp/upload/${employeeid}/`;
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("fileName", file.name);
//         const config = {
//             headers: {
//                 "content-type": "multipart/form-data",
//             },
//         };
//         console.log(formData);
//         axios
//             .post(url, formData, config)
//             .then((response) => {
//                 console.log(response.data);
//             })
//             .catch((error) => {
//                 console.log("oops not uploaded!");
//             });
            
//         }
//         catch (error) {
//             toast.error("Somethingwent Wrong");
//     }


//     // const onSubmit = async (e) => {
//     //     // setData(" ");
//     //     // data.preventDefault();
//     //     //e.preventDefault()
//     //     // console.log(data)

//     //     // reset();
//     //     await axios.put(`/emp/updateEmployeeDataByEmployeeId/${employeeid}`, data);
//     //     console.log(data);
//     //     // notify();
//     //     toast.success("Form Submitted Successfully");
//     //     // refreshPage();
//     //     const url = `/emp/upload/${employeeid}/`;
//     //     const formData = new FormData();
//     //     formData.append("file", file);
//     //     formData.append("fileName", file.name);
//     //     const config = {
//     //         headers: {
//     //             "content-type": "multipart/form-data",
//     //         },
//     //     };
//     //     console.log(formData);
//     //     axios
//     //         .post(url, formData, config)
//     //         .then((response) => {
//     //             console.log(response.data);
//     //         })
//     //         .catch((error) => {
//     //             console.log("oops not uploaded!");
//     //         });
//     // };

//     const handleChange =(event) => {
//         setFile(event.target.files[0]);
//         console.log(event.target.files[0]);
//     }
//     const current = new Date();
//     console.log(current)

//     const [imge, setImge] = useState([]);
//     useEffect(() => {
//         axios
//             .get(`/emp/files/${employeeid}`)
//             .then((response) => {
//                 console.log(response.data);
//                 setImge(response.data)
//             })
//             .catch((error) => {
//                 console.log(error);

//                 console.log("something wrong");
//             });
//     }, []);

//     console.log(imge);
// }
        
    

//     return (

//         <div>
//             {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
//                 <Card.Title style={{ margin: 12, textAlign: "center" }}>
//                     Personal Details
//                 </Card.Title>
//             </Card> */}

//             <Form
//                 onSubmit={(e) => changeHandler(e)}
//                 style={{ padding: 10 }}
//             >
//                 <Row className="mb-5">
//                     <Form.Group
//                         as={Col}
//                         className="mb-3"
//                         md="6"
//                         controlId="formBasicEmail"
//                     >
//                         <Form.Label>First Name *</Form.Label>
//                         <Form.Control
//                             value={firstName}
//                             // disabled
//                             required
//                             maxLength={50}
//                             onChange={(e) => {
//                                 setFirstName(e.target.value);
//                             }}
//                             type="text"
//                             placeholder="Enter Name"
//                             isInvalid={ferrors}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {ferrors}
//                         </Form.Control.Feedback>
//                     </Form.Group>


//                     <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
//                         <Form.Label>Middle name</Form.Label>
//                         <Form.Control
//                             name="middleName"
//                             type="text"
//                             placeholder="Middle name"
//                             maxLength={50}
//                             value={middleName}
//                             onChange={(e) => {

//                                 setMiddleName(e.target.value);
//                             }}
//                         />
//                     </Form.Group>
//                     <Form.Group
//                         as={Col}
//                         className="mb-3"
//                         md="6"
//                         controlId="formBasicEmail"
//                     >
//                         <Form.Label>Last Name *</Form.Label>
//                         <Form.Control
//                             value={lastName}
//                             // disabled
//                             required
//                             maxLength={50}
//                             onChange={(e) => {
//                                 if (firstName == "") {
//                                     setFErrors("First Name is required")
//                                 }
//                                 else {
//                                     setFErrors("")
//                                 }
//                                 setLastName(e.target.value);
//                             }}
//                             isInvalid={serror}
//                             type="text"
//                             placeholder="Enter Name"
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {serror}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
//                         <Form.Label>Phone Number *</Form.Label>
//                         <InputGroup>
//                             <InputGroup.Text id="inputGroupPrepend">
//                                 +91
//                             </InputGroup.Text>
//                             <Form.Control
//                                 required
//                                 type="number"
//                                 name="primaryPhoneNumber"
//                                 placeholder="phone Number"
//                                 maxLength={10}
//                                 value={primaryPhoneNumber}
//                                 onChange={(e) => {
//                                     setPrimaryPhoneNumber(e.target.value);
//                                     if (e.target.value.length > 10) {
//                                         setThirdErrors(" Phonenumber length should be 10 characters");
//                                     }
//                                     if (lastName === "") {
//                                         setSerror("Last Name is Required");
//                                     }
//                                     else {
//                                         setSerror("")
//                                     }
//                                 }}
//                                 isInvalid={thirderrors}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {thirderrors}
//                             </Form.Control.Feedback>
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group
//                         as={Col}
//                         className="mb-3"
//                         md="6"
//                         style={{ padding: 10 }}
//                         controlId="formBasicEmail"
//                     >
//                         <Form.Label>Emergency Phone Number </Form.Label>
//                         <InputGroup>
//                             <InputGroup.Text id="inputGroupPrepend">
//                                 +91
//                             </InputGroup.Text>
//                             <Form.Control
//                                 value={secondaryPhoneNumber}
//                                 maxLength={10}
//                                 isInvalid={nineerrors}
//                                 onChange={(e) => {
//                                     setSecondaryPhone(e.target.value);
//                                     if (e.target.value.length > 10) {
//                                         setNineErrors(" Phonenumber length should be 10 characters");;
//                                     }
//                                 }}
//                                 type="number"
//                                 placeholder="Enter Phone"
//                             />
//                         </InputGroup>
//                         <Form.Control.Feedback type="invalid">
//                             {/* {fourtyseven} */}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Email *</Form.Label>
//                         <Form.Control
//                             required
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             isInvalid={fourerror}
//                             onChange={(e) => {
//                                 if (primaryPhoneNumber === "") {
//                                     setThirdErrors("Phone Number is Required");
//                                 }
//                                 else {
//                                     setThirdErrors("")
//                                 }
//                                 setEmail(e.target.value);
//                             }}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {fourerror}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Date of Birth *</Form.Label>
//                         <Form.Control
//                             // required
//                             type="date"
//                             name="dateOfBirth"
//                             placeholder="DOB"
//                             controlId="dateOfBirth"
//                             value={dateOfBirth}
//                             isInvalid={fiveerrors}
//                             onChange={(e) => {
//                                 setDateOfBirth(e.target.value);
//                                 if (email === "") {
//                                     setFourerror("Email is Required");
//                                 }
//                                 else {
//                                     setFourerror("")
//                                 }
//                                 setDateOfBirth(e.target.value);
//                             }}
//                         ></Form.Control>
//                         <Form.Control.Feedback type="invalid">
//                             {fiveerrors}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Blood Group *</Form.Label>
//                         <Form.Select
//                             required
//                             type="text"
//                             name="bloodGroup"
//                             placeholder="Blood Group "
//                             controlId="bloodGroup"
//                             isInvalid={sixerror}
//                             value={bloodGroup}

//                             onChange={(e) => {
//                                 setBloodGroup(e.target.value);
//                                 if (dateOfBirth === "") {
//                                     setFiveErrors("Email is Required");
//                                 }
//                                 else {
//                                     setFiveErrors("")
//                                 }
//                             }}
//                         >
//                             <option>Select</option>
//                             <option value="A+">A+</option>
//                             <option value="A-">A-</option>
//                             <option value="B+">B+</option>
//                             <option value="B-">B-</option>
//                             <option value="AB+">AB+</option>
//                             <option value="AB-">AB-</option>
//                             <option value="O+">O+</option>
//                             <option value="O-">O-</option>
//                         </Form.Select>
//                         <Form.Control.Feedback type="invalid">
//                             {sixerror}
//                         </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Gender *</Form.Label>
//                         <Form.Select
//                             required
//                             type="text"
//                             name="gender"
//                             placeholder="Gender "
//                             controlId="gender"
//                             value={gender}
//                             isInvalid={sevenerrors}
//                             onChange={(e) => {
//                                 setGender(e.target.value);
//                                 if (bloodGroup === "") {
//                                     setSixerror(" Blood group is Required");
//                                 }
//                                 else {
//                                     setSixerror("")
//                                 }
//                             }}
//                         >
//                             <option>Select</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                         </Form.Select>
//                         <Form.Control.Feedback type="invalid">
//                             {sevenerrors}
//                         </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Marital Status *</Form.Label>
//                         <Form.Select
//                             required
//                             type="text"
//                             name="maritalStatus"
//                             placeholder="Marital Status "
//                             controlId="maritalStatus"
//                             value={maritalStatus}
//                             isInvalid={eighterror}
//                             onChange={(event) => {
//                                 setMaritalStatus(event.target.value)
//                                 if (gender === "") {
//                                     setSevenErrors(" Gender is Required");
//                                 }
//                                 else {
//                                     setSevenErrors("")
//                                 }
//                             }}
//                         >
//                             <option>Select</option>
//                             <option value="Single">Single</option>
//                             <option value="Married">Married</option>
//                             <option value="Diverced">Other</option>
//                         </Form.Select>
//                         <Form.Control.Feedback type="invalid">
//                             {eighterror}
//                         </Form.Control.Feedback>
//                     </Form.Group>
//                     {/* <Form.Group style={{ padding: 10, paddingTop: 20 }}>
//                                              <Form.Label>
//                                                  Upload Profile Picture * (Size should be less than 1 MB)
//                                              </Form.Label>
//                                              <Form.Control
                                               
//                                                 value={imge.name}
//                                                 type="file"
//                                                 //isInvalid={}
//                                                // onChange={handleChange}
//                                             />
//                                             <Form.Control.Feedback type="invalid">
//                                                  {fourtysix}
//                                             </Form.Control.Feedback>
//                                         </Form.Group> */}
//                                         <Form.Group style={{ padding: 10, paddingTop: 20 }}>
//                                             <Form.Label>
//                                                 Upload Profile Picture * (Size should be less than 1 MB)
//                                             </Form.Label>
//                                             <Form.Control
//                                                 required
//                                                    value={imge.name}
//                                                 type="file"
//                                                 onChange={handleChange}

//                                             />
//                                             <Form.Control.Feedback type="invalid">
                                               
//                                             </Form.Control.Feedback>
//                                         </Form.Group>


//                     <Row>

//                     </Row>

//                 </Row>
//                 <Button
//                     className="rounded-pill" md="3"
//                     style={{ backgroundColor: "#eb4509", float: "right" }}
//                     type="submit"
//                     size="lg"
//                 >
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     )
// }
// export default PersonalDetailsTab;
