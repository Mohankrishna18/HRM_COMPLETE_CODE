import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountryDropdown from 'country-dropdown-with-flags-for-react';

import * as Yup from "yup";
import EmployeeMasterCard from "./EmployeeMasterCard";
import { useHistory } from "react-router-dom";
import { set } from "lodash";
import { FormHelperText } from "@mui/material";
import countries from "./Countries";

const INITIAL_FORM_STATE = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    secondaryPhone: "",

    bloodGroup: "",
    JoiningDate: "",
    gender: "",
    maritalStatus: "",
};

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid FirstName ")
        .required("Required"),
    middleName: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid FirstName "),

    lastName: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid LastName ")
        .required("Required"),

    email: Yup.string().email("Invalid email.").required("Required"),

    secondaryPhone: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "Phone number is not valid")
        .max(10, "Phone number is not valid"),

    dateOfBirth: Yup.string()
        .required("DOB is Required")
        .test(
            "DOB",
            "Please choose a valid date of birth",
            (date) => moment().diff(moment(date), "years") >= 12
        ),

    bloodGroup: Yup.string()
        .matches(/^(A|B|AB|O)[+-]$/, {
            message: "Please enter valid Blood Group.",
            excludeEmptyString: false,
        })
        .required("Required"),
});

function EmployeeMasterForm() {
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
    const [permanentAdress, setPermanentAddress] = useState("");
    const [permanentState, setPermanentState] = useState("");
    const [permanentCountry, setPermanentCountry] = useState("");
    const [permanentPincode, setPermanentPincode] = useState("");
    const [currentAdress, setCurrentAddress] = useState("");
    const [currentState, setCurrentState] = useState("");
    const [currentCountry, setCurrentCountry] = useState("");
    const [currentPincode, setCurrentPincode] = useState("");
    const [postgraduationType, setTypeOfPostGraduation] = useState("");
    const [postgraduationBoardOfUniversity, setPostgraduationBoardOfUniversity] =
        useState("");
    const [postgraduationInstituteName, setPostgraduationInstituteName] =
        useState("");
    const [postgraduationInstituteCity, setPostgraduationInstituteCity] =
        useState("");
    const [postgraduationCourseName, setPostgraduationCourseName] = useState("");
    const [postgraduationJoiningYear, setPostgraduationJoiningYear] =
        useState("");
    const [postgraduationPassedYear, setPostgraduationPassedYear] = useState("");
    const [postgraduationGrade, setPostgraduationGrade] = useState("");
    const [graduationType, setTypeOfGraduation] = useState("");
    const [graduationBoardOfUniversity, setGraduationBoardOfUniversity] =
        useState("");
    const [graduationInstituteName, setGraduationInstituteName] = useState("");
    const [graduationInstituteCity, setGraduationInstituteCity] = useState("");
    const [graduationCourseName, setGraduationCourseName] = useState("");
    const [graduationJoiningYear, setGraduationJoiningYear] = useState("");
    const [graduationPassedYear, setGraduationPassedYear] = useState("");
    // const [graduationJoiningYear, setGraduationJoiningYear] = useState("");
    // const [graduationPassedYear, setGraduationPassedYear] = useState("");
    const [graduationGrade, setGraduationGrade] = useState("");
    const [intermediateBoardOfUniversity, setIntermediateBoardOfUniversity] =
        useState("");
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
    const [previousCompany1_designation, setPreviousCompany1_designation] =
        useState("");
    const [previousCompany1_joiningDate, setPreviousCompany1_joiningDate] =
        useState("");
    const [previousCompany1_relievingDate, setPreviousCompany1_relievingDate] =
        useState("");
    const [previousCompany1_employeeId, setPreviousCompany1_employeeId] =
        useState("");
    const [
        previousCompany1_typeOfEmployment,
        setPreviousCompany1_typeOfEmployement,
    ] = useState("");
    const [
        previousCompany1_reasonForRelieving,
        setPreviousCompany1_reasonForRelieving,
    ] = useState("");
    const [previousCompany2_name, setPreviousCompany2_name] = useState("");
    const [previousCompany2_designation, setPreviousCompany2_designation] =
        useState("");
    const [previousCompany2_joiningDate, setPreviousCompany2_joiningDate] =
        useState("");
    const [previousCompany2_relievingDate, setPreviousCompany2_relievingDate] =
        useState("");
    const [previousCompany2_employeeId, setPreviousCompany2_employeeId] =
        useState("");
    const [
        previousCompany2_typeOfEmployment,
        setPreviousCompany2_typeOfEmployement,
    ] = useState("");
    const [
        previousCompany2_reasonForRelieving,
        setPreviousCompany2_reasonForRelieving,
    ] = useState("");
    const [previousCompany3_name, setPreviousCompany3_name] = useState("");
    const [previousCompany3_designation, setPreviousCompany3_designation] =
        useState("");
    const [previousCompany3_joiningDate, setPreviousCompany3_joiningDate] =
        useState("");
    const [previousCompany3_relievingDate, setPreviousCompany3_relievingDate] =
        useState("");
    const [previousCompany3_employeeId, setPreviousCompany3_employeeId] =
        useState("");
    const [
        previousCompany3_typeOfEmployment,
        setPreviousCompany3_typeOfEmployement,
    ] = useState("");
    const [
        previousCompany3_reasonForRelieving,
        setPreviousCompany3_reasonForRelieving,
    ] = useState("");

    const [panNumber, setPanNumber] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [uanNumber, setUanNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [branch, setBranch] = useState("");
    const [band, setBand] = useState("");
    const [exitDate, setExitDate] = useState("");
    //const [reportingManager, setReportingManager] = useState("");

    // Useeffect take care that page will be rendered only once
    // useEffect(() => {
    //     // setname(localStorage.getItem('Name'))
    //     // setage(localStorage.getItem('Age'))
    //     // setid(localStorage.getItem('id'))
    // }, [])

    //get call Get the Employee onboarding Details
    const [employeedetails, setEmployeeDetails] = useState([]);
    const initialvalue = {
        employeeId,
        firstName,
        lastName,
        middleName,
        dateOfBirth,
        primaryPhoneNumber,
        secondaryPhoneNumber,
        email,
        yearsOfExperience,
        designationName,
        primarySkills,
        secondarySkills,
        dateOfJoining,
        bloodGroup,
        gender,
        maritalStatus,
        permanentAdress,
        permanentState,
        permanentCountry,
        permanentPincode,
        currentAdress,
        currentState,
        currentCountry,
        currentPincode,
        passportNo,
        passportExpiryDate,
        postgraduationType,
        postgraduationBoardOfUniversity,
        postgraduationInstituteName,
        postgraduationInstituteCity,
        postgraduationCourseName,
        postgraduationJoiningYear,
        postgraduationPassedYear,
        postgraduationGrade,
        graduationType,
        graduationBoardOfUniversity,
        graduationInstituteName,
        graduationInstituteCity,
        graduationCourseName,
        graduationJoiningYear,
        graduationPassedYear,
        graduationGrade,
        intermediateBoardOfUniversity,
        intermediateCollegeName,
        intermediateCollegeCity,
        intermediateCourseName,
        intermediateJoiningYear,
        intermediatePassedYear,
        intermediateGrade,
        sscBoardOfUniversity,
        sscSchoolName,
        sscSchoolCity,
        sscCourseName,
        sscJoiningYear,
        sscPassedYear,
        sscGrade,
        previousCompany1_name,
        previousCompany1_designation,
        previousCompany1_joiningDate,
        previousCompany1_relievingDate,
        previousCompany1_employeeId,
        previousCompany1_typeOfEmployment,
        previousCompany1_reasonForRelieving,
        previousCompany2_name,
        previousCompany2_designation,
        previousCompany2_joiningDate,
        previousCompany2_relievingDate,
        previousCompany2_employeeId,
        previousCompany2_typeOfEmployment,
        previousCompany2_reasonForRelieving,
        previousCompany3_name,
        previousCompany3_designation,
        previousCompany3_joiningDate,
        previousCompany3_relievingDate,
        previousCompany3_employeeId,
        previousCompany3_typeOfEmployment,
        previousCompany3_reasonForRelieving,

        panNumber,
        aadharNumber,
        uanNumber,
        bankName,
        accountNumber,
        ifscCode,
        branch,
        band,
        exitDate,
    };
    useEffect(() => {
        axios
            .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
            .then((response) => {
                setEmployeeId(response.data.data.employeeId);
                setFirstName(response.data.data.firstName);
                setLastName(response.data.data.lastName);
                setSecondaryPhone(response.data.data.secondaryPhoneNumber);
                setPassportExpiryDate(response.data.data.passportExpiryDate);
                setPassportNo(response.data.data.passportNo);
                setEmployeeId(response.data.data.employeeId);
                setFirstName(response.data.data.firstName);
                setMiddleName(response.data.data.middleName);
                setLastName(response.data.data.lastName);
                setPrimaryPhoneNumber(response.data.data.primaryPhoneNumber);
                setSecondaryPhone(response.data.data.secondaryPhoneNumber);
                setEmail(response.data.data.email);
                setYearsOfExperience(response.data.data.yearsOfExperience);
                setDateOfBirth(response.data.data.dateOfBirth);
                // setPassportExpiryDate(response.data.data.passportExpiryDate)
                // setPassportNo(response.data.data.passportNo)
                setDesignationName(response.data.data.designationName);
                setBloodGroup(response.data.data.bloodGroup);
                setGender(response.data.data.gender);
                setMaritalStatus(response.data.data.maritalStatus);
                setPrimarySkills(response.data.data.primarySkills);
                setSecondarySkills(response.data.data.secondarySkills);
                setDateOfJoining(response.data.data.dateOfJoining);
                setPermanentAddress(response.data.data.permanentAdress);
                setPermanentState(response.data.data.permanentState);
                setPermanentCountry(response.data.data.permanentCountry);
                setPermanentPincode(response.data.data.permanentPincode);
                setCurrentAddress(response.data.data.currentAdress);
                setCurrentState(response.data.data.currentState);
                setCurrentCountry(response.data.data.currentCountry);
                setCurrentPincode(response.data.data.currentPincode);
                // setPassportNo(response.data.data.passportNo);
                // setPassportExpiryDate(response.data.data.passportExpiryDate)
                setTypeOfPostGraduation(response.data.data.postgraduationType)
                setPostgraduationBoardOfUniversity(
                    response.data.data.postgraduationBoardOfUniversity
                );
                setPostgraduationInstituteName(
                    response.data.data.postgraduationInstituteName
                );
                setPostgraduationInstituteCity(
                    response.data.data.postgraduationInstituteCity
                );
                setPostgraduationCourseName(
                    response.data.data.postgraduationCourseName
                );
                setPostgraduationJoiningYear(
                    response.data.data.postgraduationJoiningYear
                );
                setPostgraduationPassedYear(
                    response.data.data.postgraduationPassedYear
                );
                setPostgraduationGrade(response.data.data.postgraduationGrade);
                setGraduationBoardOfUniversity(
                    response.data.data.graduationBoardOfUniversity
                );
                setTypeOfGraduation(response.data.data.graduationType)
                setGraduationInstituteName(response.data.data.graduationInstituteName);
                setGraduationInstituteCity(response.data.data.graduationInstituteCity);
                setGraduationCourseName(response.data.data.graduationCourseName);
                setGraduationJoiningYear(response.data.data.graduationJoiningYear);
                setGraduationPassedYear(response.data.data.graduationPassedYear);
                setGraduationGrade(response.data.data.graduationGrade);
                setIntermediateBoardOfUniversity(
                    response.data.data.intermediateBoardOfUniversity
                );
                setIntermediateCollegeName(response.data.data.intermediateCollegeName);
                setIntermediateCollegeCity(response.data.data.intermediateCollegeCity);
                setIntermediateCourseName(response.data.data.intermediateCourseName);
                setIntermediateJoiningYear(response.data.data.intermediateJoiningYear);
                setIntermediatePassedYear(response.data.data.intermediatePassedYear);
                setIntermediateGrade(response.data.data.intermediateGrade);
                setSscBoardOfUniversity(response.data.data.sscBoardOfUniversity);
                setSscSchoolName(response.data.data.sscSchoolName);
                setSscSchoolCity(response.data.data.sscSchoolCity);
                setSscCourseName(response.data.data.sscCourseName);
                setSscJoiningYear(response.data.data.sscJoiningYear);
                setSscPassedYear(response.data.data.sscPassedYear);
                setSscGrade(response.data.data.sscGrade);
                setPreviousCompany1_name(response.data.data.previousCompany1_name);
                setPreviousCompany1_designation(
                    response.data.data.previousCompany1_designation
                );
                setPreviousCompany1_joiningDate(
                    response.data.data.previousCompany1_joiningDate
                );
                setPreviousCompany1_relievingDate(
                    response.data.data.previousCompany1_relievingDate
                );
                setPreviousCompany1_employeeId(
                    response.data.data.previousCompany1_employeeId
                );
                setPreviousCompany1_typeOfEmployement(
                    response.data.data.previousCompany1_typeOfEmployment
                );
                setPreviousCompany1_reasonForRelieving(
                    response.data.data.previousCompany1_reasonForRelieving
                );
                setPreviousCompany2_name(response.data.data.previousCompany2_name);
                setPreviousCompany2_designation(
                    response.data.data.previousCompany2_designation
                );
                setPreviousCompany2_joiningDate(
                    response.data.data.previousCompany2_joiningDate
                );
                setPreviousCompany2_relievingDate(
                    response.data.data.previousCompany2_relievingDate
                );
                setPreviousCompany2_employeeId(
                    response.data.data.previousCompany2_employeeId
                );
                setPreviousCompany2_typeOfEmployement(
                    response.data.data.previousCompany2_typeOfEmployment
                );
                setPreviousCompany2_reasonForRelieving(
                    response.data.data.previousCompany2_reasonForRelieving
                );
                setPreviousCompany3_name(response.data.data.previousCompany3_name);
                setPreviousCompany3_designation(
                    response.data.data.previousCompany3_designation
                );
                setPreviousCompany3_joiningDate(
                    response.data.data.previousCompany3_joiningDate
                );
                setPreviousCompany3_relievingDate(
                    response.data.data.previousCompany3_relievingDate
                );
                setPreviousCompany3_employeeId(
                    response.data.data.previousCompany3_employeeId
                );
                setPreviousCompany3_typeOfEmployement(
                    response.data.data.previousCompany3_typeOfEmployment
                );
                setPreviousCompany3_reasonForRelieving(
                    response.data.data.previousCompany3_reasonForRelieving
                );

                setPanNumber(response.data.data.panNumber);
                setAadharNumber(response.data.data.aadharNumber);
                setUanNumber(response.data.data.uanNumber);
                setBankName(response.data.data.bankName);
                setAccountNumber(response.data.data.accountNumber);
                setIfscCode(response.data.data.ifscCode);
                setBranch(response.data.data.branch);
                setBand(response.data.data.band);
                setExitDate(response.data.data.exitDate);
            });
    }, []);
    // console.log(firstName)

    // function for handling the edit and
    // pushing changes of editing/updating
    const changeHandler = async (e) => {
        e.preventDefault();
        await axios.put(`/emp/updateEmployeeDataByEmployeeId/${employeeid}`, {
            employeeId,
            firstName,
            lastName,
            middleName,
            dateOfBirth,
            primaryPhoneNumber,
            secondaryPhoneNumber,
            email,
            yearsOfExperience,
            designationName,
            primarySkills,
            secondarySkills,
            dateOfJoining,
            bloodGroup,
            gender,
            maritalStatus,
            permanentAdress,
            permanentState,
            permanentCountry,
            permanentPincode,
            currentAdress,
            currentState,
            currentCountry,
            currentPincode,
            passportNo,
            passportExpiryDate,
            postgraduationType,
            postgraduationBoardOfUniversity,
            postgraduationInstituteName,
            postgraduationInstituteCity,
            postgraduationCourseName,
            postgraduationJoiningYear,
            postgraduationPassedYear,
            postgraduationGrade,
            graduationType,
            graduationBoardOfUniversity,
            graduationInstituteName,
            graduationInstituteCity,
            graduationCourseName,
            graduationJoiningYear,
            graduationPassedYear,
            graduationGrade,
            intermediateBoardOfUniversity,
            intermediateCollegeName,
            intermediateCollegeCity,
            intermediateCourseName,
            intermediateJoiningYear,
            intermediatePassedYear,
            intermediateGrade,
            sscBoardOfUniversity,
            sscSchoolName,
            sscSchoolCity,
            sscCourseName,
            sscJoiningYear,
            sscPassedYear,
            sscGrade,
            previousCompany1_name,
            previousCompany1_designation,
            previousCompany1_joiningDate,
            previousCompany1_relievingDate,
            previousCompany1_employeeId,
            previousCompany1_typeOfEmployment,
            previousCompany1_reasonForRelieving,
            previousCompany2_name,
            previousCompany2_designation,
            previousCompany2_joiningDate,
            previousCompany2_relievingDate,
            previousCompany2_employeeId,
            previousCompany2_typeOfEmployment,
            previousCompany2_reasonForRelieving,
            previousCompany3_name,
            previousCompany3_designation,
            previousCompany3_joiningDate,
            previousCompany3_relievingDate,
            previousCompany3_employeeId,
            previousCompany3_typeOfEmployment,
            previousCompany3_reasonForRelieving,

            panNumber,
            aadharNumber,
            uanNumber,
            bankName,
            accountNumber,
            ifscCode,
            branch,
            band,
            exitDate,
        });
        // console.log(firstName);
        // console.log(lastName);
        // console.log(passportExpiryDate)

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
        await axios.put(`/emp/updateEmployeeDataByEmployeeId/${employeeid}`, data);
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
            <Row>
                <Col>
                    <Card className="scroll" style={{ marginTop: 10 }}>
                        <Card.Header>
                            <Card.Body>
                                <Card.Title>Edit My Profile</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Edit My Profile
                                </Card.Subtitle>
                                <EmployeeMasterCard />
                                <Card.Text style={{ margin: 20, color: "red" }}>
                                    * All fields are mandatory. Please fill the form Correctly.
                                </Card.Text>

                                <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}>
                                    <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                        Personal Details
                                    </Card.Title>
                                </Card>

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
{/* 
                                        <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        value={firstName}
                        // disabled
                        required
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
                    </Form.Group> */}

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
                                        <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
                                            <Form.Label>Phone Number *</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    +91
                                                </InputGroup.Text>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    name="primaryPhoneNumber"
                                                    placeholder="phone Number"
                                                    maxLength={10}
                                                    value={primaryPhoneNumber}
                                                    onChange={(e) => {
                                                        setPrimaryPhoneNumber(e.target.value);
                                                        if (lastName === "") {
                                                            setSerror("Last Name is Required");
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
                                                    onChange={(e) => {
                                                        setSecondaryPhone(e.target.value);
                                                        if (primaryPhoneNumber === "") {
                                                            thirderrors("Primary number is Required");
                                                        }
                                                    }}
                                                    type="text"
                                                    placeholder="Enter Phone"
                                                />
                                            </InputGroup>
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
                                                isInvalid={sixerror}
                                                onChange={(e) => {
                                                    setDateOfBirth(e.target.value);
                                                    if (yearsOfExperience === "") {
                                                        setFiveErrors(" Year of experience is Required");
                                                    }
                                                }}
                                            ></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                {sixerror}
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
                                                isInvalid={sevenerrors}
                                                value={bloodGroup}
                                                // isValid={touched.bloodGroup && !errors.bloodGroup}
                                                // isInvalid={touched.bloodGroup && !!errors.bloodGroup}

                                                onChange={(e) => {
                                                    setBloodGroup(e.target.value);
                                                    if (dateOfBirth === "") {
                                                        setSixerror(" DOB is Required");
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
                                                {sevenerrors}
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
                                                onChange={(e) => {
                                                    setGender(e.target.value);
                                                    if (bloodGroup === "") {
                                                        setSevenErrors(" Blood group is Required");
                                                    }
                                                }}
                                            >
                                                <option>Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </Form.Select>
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
                                                onChange={(event) =>
                                                    setMaritalStatus(event.target.value)
                                                }
                                            >
                                                <option>Select</option>
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                                <option value="Diverced">Other</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Primary Skills *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="primarySkills"
                                                placeholder="Primary Skills"
                                                controlId="primarySkills"
                                                maxLength={50}
                                                value={primarySkills}
                                                onChange={(e) => setPrimarySkills(e.target.value)}
                                                isInvalid={nineerrors}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {nineerrors}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Secondary Skills *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="secondarySkills"
                                                placeholder="SecondarySkills"
                                                controlId="secondarySkills"
                                                maxLength={50}
                                                value={secondarySkills}
                                                onChange={(e) => {
                                                    setSecondarySkills(e.target.value);
                                                    if (primarySkills === "") {
                                                        setNineErrors(" Primary skill is Required");
                                                    }
                                                }}
                                            />
                                        </Form.Group>

                                        <Card
                                            style={{ marginLeft: 8, marginRight: 50, marginTop: 20 }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Permanent Address
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                            <Form.Label>Address *</Form.Label>
                                            <Form.Control
                                                required
                                                as="textarea"
                                                rows={4}
                                                type="text"
                                                name="permanentAdress"
                                                placeholder="Address"
                                                controlId="permanentAdress"
                                                value={permanentAdress}
                                                maxLength={125}
                                                onChange={(e) => setPermanentAddress(e.target.value)
                                                }
                                            // {...register("permanentAdress")}
                                            // className={`form-control ${errors.permanentAdress ? "is-invalid" : ""
                                            //     }`}
                                            // onChange={changeHandler}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 15 }}>
                                            <Form.Label>Country *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Country"
                                                name="permanentCountry"
                                                controlId="permanentCountry"
                                                maxLength={50}
                                                // options={countries}
                                                value={permanentCountry}
                                                onChange={(e) => setPermanentCountry(e.target.value)}
                                            >
                                               
                                            </Form.Control>
                                            
                                            {/* <CountryDropdown  
                                            md="6"    
                                                preferredCountries={['gb', 'us']}                                                  
                                                required
                                                type="text"
                                                placeholder="Country"
                                                name="permanentCountry"
                                                controlId="permanentCountry"                                                
                                                value={permanentCountry}
                                                onChange={(e) => setPermanentCountry(e.target.value)}>
                                    
                                            </CountryDropdown> */}
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" style={{ padding: 15 }}>
                                            <Form.Label>State *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="State"
                                                name="permanentState"
                                                controlId="permanentState"
                                                maxLength={50}
                                                value={permanentState}
                                                onChange={(e) => setPermanentState(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Pincode *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Pincode"
                                                controlId="permanentPincode"
                                                name="permanentPincode"
                                                value={permanentPincode}

                                                maxLength={6}
                                                onChange={(event) =>
                                                    setPermanentPincode(event.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Current Address
                                            </Card.Title>
                                        </Card>
                                        <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                            <Form.Label>Address *</Form.Label>
                                            <Form.Control
                                                required
                                                as="textarea"
                                                rows={4}
                                                type="text"
                                                placeholder="Address"
                                                controlId="currentAdress"
                                                value={currentAdress}
                                                name="currentAdress"
                                                maxLength={125}
                                                onChange={(e) => setCurrentAddress(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>State *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="State"
                                                name="currentState"
                                                controlId="currentState"
                                                maxLength={50}
                                                value={currentState}
                                                onChange={(e) => setCurrentState(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Country *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Country"
                                                //controlId="currentCountry"
                                                value={currentCountry}
                                                maxLength={50}
                                                name="currentCountry"
                                                onChange={(e) => setCurrentCountry(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Pincode *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Pincode"
                                                controlId="currentPincode"
                                                value={currentPincode}
                                                name="currentPincode"
                                                maxLength={6}
                                                onChange={(e) => setCurrentPincode(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Additional Details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passport Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Passport Number"
                                                controlId="passportNo"
                                                value={passportNo}
                                                maxLength={50}
                                                name="passportNo"
                                                onChange={(e) => {
                                                    setPassportNo(e.target.value)

                                                    if (passportNo === "") {
                                                        setTenerror("Enter Valid Passport Number");
                                                    }
                                                }}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passport Expiry Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                placeholder="Passport Expiry Date"
                                                controlId="passportExpiryDate"
                                                name="passportExpiryDate"
                                                value={passportExpiryDate}
                                                min={new Date()}
                                                onChange={(e) =>
                                                    setPassportExpiryDate(e.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>PAN Card Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="PAN Card Number"
                                                controlId="panNumber"
                                                name="panNumber"
                                                maxLength={50}
                                                value={panNumber}
                                                onChange={(event) => setPanNumber(event.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Aadhar Number *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Aadhar Card Number"
                                                controlId="aadharNumber"
                                                name="panNumber"
                                                maxLength={12}
                                                value={aadharNumber}
                                                onChange={(event) =>
                                                    setAadharNumber(event.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>UAN Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="UAN Number"
                                                controlId="uanNumber"
                                                name="uanNumber"
                                                value={uanNumber}
                                                maxLength={12}
                                                onChange={(event) => setUanNumber(event.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Bank Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Bank Name"
                                                controlId="bankName"
                                                name="bankName"
                                                maxLength={50}
                                                value={bankName}
                                                onChange={(event) => setBankName(event.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Bank Account Number *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Account Number"
                                                controlId="accountNumber"
                                                name="accountNumber"
                                                maxLength={50}
                                                value={accountNumber}
                                                onChange={(event) =>
                                                    setAccountNumber(event.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>IFSC Code *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="IFSC Code"
                                                controlId="ifscCode"
                                                name="ifscCode"
                                                maxLength={50}
                                                value={ifscCode}
                                                onChange={(event) => setIfscCode(event.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Branch Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Branch Name"
                                                controlId="branchName"
                                                name="branch"
                                                maxLength={50}
                                                value={branch}

                                                onChange={(event) => setBranch(event.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>BAND</Form.Label>
                                            <Form.Select
                                                type="text"
                                                placeholder="BAND"
                                                controlId="band"
                                                name="band"
                                                value={band}
                                                onChange={(event) => setBand(event.target.value)}
                                            >
                                                 <option>Select</option>
                                                <option value="BAND-1">BAND-1</option>
                                                <option value="BAND-2">BAND-2</option>
                                                <option value="BAND-3">BAND-3</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Card
                                            style={{
                                                marginLeft: 8,
                                                marginRight: 8,
                                                marginTop: 10,
                                                marginBottom: 20,
                                            }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Educational Qualifications
                                            </Card.Title>
                                        </Card>
                                        <Card
                                            style={{
                                                marginLeft: 8,
                                                marginRight: 8,
                                                marginTop: 10,
                                                marginBottom: 20,
                                            }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Post Graduation Details
                                            </Card.Title>
                                        </Card>
                                        <Accordion defaultActiveKey="1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Post Graduation</Accordion.Header>
                                                <Accordion.Body>
                                                    <Row>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Type of Post Graduation</Form.Label>
                                                            <Form.Select
                                                                type="text"
                                                                placeholder="Type Of Post Graduation"
                                                                controlId="postgraduationType"
                                                                name="postgraduationType"
                                                                value={postgraduationType}
                                                                maxLength={50}
                                                                onChange={(e) =>
                                                                    setTypeOfPostGraduation(
                                                                        e.target.value
                                                                    )
                                                                }
                                                            >
                                                                <option>Select</option>
                                                                <option value="Master of Arts (MA)">Master of Arts (MA) </option>
                                                                <option value="Master of Science (MS, MSc) ">Master of Science (MS, MSc) </option>
                                                                <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                                                                <option value="Master of Research (MRes)">Master of Research (MRes) </option>
                                                                <option value="Master by Research (MPhil)">Master by Research (MPhil)</option>
                                                                <option value="Master of Studies (MSt)">Master of Studies (MSt)</option>
                                                                <option value="Master of Library Science (MLS, MLIS, MSLS)">Master of Library Science (MLS, MLIS, MSLS)</option>
                                                                <option value="Other">Other</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>University Name </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="University Name"
                                                                controlId="postgraduationBoardOfUniversity"
                                                                name="postgraduationBoardOfUniversity"
                                                                maxLength={50}
                                                                value={postgraduationBoardOfUniversity}
                                                                onChange={(e) =>
                                                                    setPostgraduationBoardOfUniversity(
                                                                        e.target.value
                                                                    )
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Institute Name </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Institute Name "
                                                                controlId="postgraduationInstituteName"
                                                                value={postgraduationInstituteName}
                                                                maxLength={50}
                                                                name="postgraduationInstituteName"
                                                                onChange={(e) =>
                                                                    setPostgraduationInstituteName(e.target.value)
                                                                }
                                                            // onChange={(e) => setField("postgraduationInstituteName", e.target.value)}
                                                            // onChange={changeHandler}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Institute City/Town </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Institute City"
                                                                controlId="postgraduationInstituteCity"
                                                                value={postgraduationInstituteCity}
                                                                maxLength={50}
                                                                name="postgraduationInstituteCity"
                                                                onChange={(e) =>
                                                                    setPostgraduationInstituteCity(e.target.value)
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Course Name </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Course Name"
                                                                controlId="postgraduationCourseName"
                                                                value={postgraduationCourseName}
                                                                maxLength={50}
                                                                name="postgraduationCourseName"
                                                                onChange={(e) =>
                                                                    setPostgraduationCourseName(e.target.value)
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Joining Year </Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                placeholder="Joining Year"
                                                                controlId="postgraduationJoiningYear"
                                                                value={postgraduationJoiningYear}
                                                                maxLength={50}
                                                                name="postgraduationJoiningYear"
                                                                onChange={(e) =>
                                                                    setPostgraduationJoiningYear(e.target.value)
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Passed-out Year</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                placeholder="Passed out year"
                                                                controlId="postgraduationPassedYear"
                                                                value={postgraduationPassedYear}
                                                              
                                                                min={postgraduationJoiningYear}
                                                                maxLength={50}
                                                                name="postgraduationPassedYear"
                                                                onChange={(e) =>
                                                                    setPostgraduationPassedYear(e.target.value)
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Grade</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Percentage/Grade/CGPA/GPA"
                                                                controlId="postgraduationGrade"
                                                                value={postgraduationGrade}

                                                                name="postgraduationGrade"
                                                                maxLength={5}
                                                                onChange={(e) => {
                                                                    setPostgraduationGrade(e.target.value)

                                                                    if (postgraduationGrade > maxLength) {
                                                                        setElevenErrors("Length of grade should be less then 5 characters");
                                                                    }
                                                                }}

                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Graduation Details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Type of Graduation</Form.Label>
                                            <Form.Select
                                                type="text"
                                                placeholder="Type Of Graduation"
                                                controlId="graduationType"
                                                maxLength={50}
                                                name="graduationType"
                                                value={graduationType}
                                                onChange={(e) =>
                                                    setTypeOfGraduation(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option>Select</option>
                                                <option value="Bachelor of Engineering">Bachelor of Engineering </option>
                                                <option value="Bachelor of Arts">Bachelor of Arts</option>
                                                <option value="Bachelor of Science">Bachelor of Science</option>
                                                <option value="Bachelor of Commerce">Bachelor of Commerce </option>
                                                <option value="Bachelor of Law">Bachelor of Law</option>
                                                <option value="Bachelor of Medicine (MBBS)">Bachelor of Medicine (MBBS)</option>
                                                <option value="BMS/BBA/BBS">BMS/BBA/BBS</option>
                                                <option value="Other">Other</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>University Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="University Name"
                                                controlId="graduationBoardOfUniversity"
                                                name="graduationBoardOfUniversity"
                                                value={graduationBoardOfUniversity}
                                                maxLength={50}
                                                isInvalid={thirteenerrors}
                                                onChange={(e) =>{
                                                    setGraduationBoardOfUniversity(e.target.value)
                                                    if (graduationBoardOfUniversity === /^[a-zA-Z]*$/g) {
                                                        setThirteenErrors("enter Board Of university")
                                                    }
                                                    }
                                                }
                                                // if (primarySkills === "") {
                                                //     setNineErrors(" Primary skill is Required");
                                                // }
                                              
                                            >
                                                 {/* <Form.Control.Feedback type="isInvalid">
                                                {graduationBoardOfUniversity}
                                            </Form.Control.Feedback> */}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Institute Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Institute Name "
                                                controlId="graduationInstituteName"
                                                maxLength={50}
                                                value={graduationInstituteName}
                                                onChange={(e) =>
                                                    setGraduationInstituteName(e.target.value)
                                                }
                                                name="graduationInstituteName"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Institute City/Town *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Institute City"
                                                controlId="graduationInstituteCity"
                                                maxLength={50}
                                                value={graduationInstituteCity}
                                                //onChange={changeHandler}
                                                name="graduationInstituteCity"
                                                onChange={(e) =>
                                                    setGraduationInstituteCity(e.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Course Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Course Name"
                                                name="graduationCourseName"
                                                maxLength={50}
                                                value={graduationCourseName}
                                                onChange={(e) =>
                                                    setGraduationCourseName(e.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Joining Year *</Form.Label>
                                            <Form.Control
                                                // required
                                                type="date"
                                                placeholder="Joining Year"
                                                name="graduationJoiningYear"
                                                controlId="graduationJoiningYear"
                                                maxLength={50}
                                                value={graduationJoiningYear}
                                                onChange={(e) =>
                                                    setGraduationJoiningYear(e.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passed-out Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                placeholder="Passed out year"
                                                controlId="graduationPassedYear"
                                                name="graduationPassedYear"
                                                maxLength={50}
                                                min={graduationJoiningYear}
                                                value={graduationPassedYear}
                                                onChange={(e) =>
                                                    setGraduationPassedYear(e.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Grade *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Percentage/Grade/GPA/CGPA"
                                                controlId="graduationGrade"

                                                value={graduationGrade}
                                                name="graduationGrade"
                                                maxLength={5}
                                                onChange={(e) => {
                                                    setGraduationGrade(e.target.value)

                                                    if (graduationGrade > maxLength) {
                                                        setElevenErrors("Length of grade should be less then 5 characters");
                                                    }
                                                }}
                                            // {...register("graduationGrade")}
                                            // className={`form-control ${errors.graduationGrade ? "is-invalid" : ""
                                            //     }`}
                                            // isInvalid={!!errors.graduationGrade}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                12th Grade/Intermediate Details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Board * </Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Board"
                                                controlId="intermediateBoardOfUniversity"
                                                value={intermediateBoardOfUniversity}
                                                maxLength={50}
                                                onChange={(e) =>
                                                    setIntermediateBoardOfUniversity(e.target.value)
                                                }
                                                name="intermediateBoardOfUniversity"
                                            //isInvalid={!!errors.intermediateBoardOfUniversity}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>School/College Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="School/College Name "
                                                controlId="intermediateCollegeName"
                                                value={intermediateCollegeName}
                                                maxLength={50}
                                                onChange={(e) =>
                                                    setIntermediateCollegeName(e.target.value)
                                                }
                                                name="intermediateCollegeName"
                                            // isInvalid={!!errors.intermediateInstituteName}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>School/College City/Town *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="School/College City"
                                                controlId="intermediateCollegeCity"
                                                value={intermediateCollegeCity}
                                                maxLength={50}
                                                onChange={(e) =>
                                                    setIntermediateCollegeCity(e.target.value)
                                                }
                                                name="intermediateCollegeCity"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Course Name*</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Course Name"
                                                name="intermediateCourseName"
                                                controlId="intermediateCourseName"
                                                maxLength={50}
                                                value={intermediateCourseName}
                                                // onChange={changeHandler}
                                                onChange={(e) =>
                                                    setIntermediateCourseName(e.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Joining Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                placeholder="Joining Year"
                                                controlId="intermediateJoiningYear"
                                                value={intermediateJoiningYear}

                                                onChange={(e) =>
                                                    setIntermediateJoiningYear(e.target.value)
                                                }
                                                name="intermediateJoiningYear"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passed-out Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                placeholder="Passed out year"
                                                controlId="intermediatePassedYear"
                                                value={intermediatePassedYear}
                                                min={intermediateJoiningYear}
                                                onChange={(e) =>
                                                    setIntermediatePassedYear(e.target.value)
                                                }
                                                name="intermediatePassedYear"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Grade *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Percentage/Grade/GPA/CGPA"
                                                controlId="intermediateGrade"
                                                maxLength={5}
                                                value={intermediateGrade}
                                                name="intermediateGrade"
                                                onChange={(e) => {
                                                    setIntermediateGrade(e.target.value)

                                                    if (postgraduationGrade > maxLength) {
                                                        setTweleveerror("Length of grade should be less then 5 characters");
                                                    }
                                                }}
                                            ></Form.Control>
                                        </Form.Group>

                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 15 }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                10th grade details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Board *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Board"
                                                controlId="sscBoardOfUniversity"
                                                maxLength={50}
                                                value={sscBoardOfUniversity}
                                                onChange={(e) =>
                                                    setSscBoardOfUniversity(e.target.value)
                                                }
                                                name="sscBoardOfUniversity"
                                            //isInvalid={!!errors.sscBoardOfUniversity}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>School Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="School Name "
                                                controlId="sscSchoolName"
                                                maxLength={50}
                                                value={sscSchoolName}
                                                onChange={(e) => setSscSchoolName(e.target.value)}
                                                name="sscSchoolName"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>School City/Town *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="School City"
                                                controlId="sscSchoolCity"
                                                maxLength={50}
                                                value={sscSchoolCity}
                                                name="sscSchoolCity"
                                                onChange={(e) => setSscSchoolCity(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Course Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Course Name"
                                                controlId="sscCourseName"
                                                maxLength={50}
                                                value={sscCourseName}
                                                name="sscCourseName"
                                                onChange={(e) => setSscCourseName(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Joining Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                name="sscJoiningYear"
                                                placeholder="Joining Year"
                                                controlId="sscJoiningYear"
                                                value={sscJoiningYear}
                                                onChange={(e) => setSscJoiningYear(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passed-out Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                name="sscPassedYear"
                                                placeholder="Passed out year"
                                                controlId="sscPassedYear"
                                                value={sscPassedYear}
                                                min={sscJoiningYear}
                                                onChange={(e) => setSscPassedYear(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Grade *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Percentage/Grade/GPA/CGPA"
                                                controlId="sscGrade"
                                                value={sscGrade}
                                                maxLength={5}
                                                name="sscGrade"
                                                onChange={(e) => {
                                                    setSscGrade(e.target.value)

                                                    if (postgraduationGrade > maxLength) {
                                                        setT("Length of grade should be less then 5 characters");
                                                    }
                                                }}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Card
                                            style={{
                                                marginTop: "10px",
                                                marginBottom: "20px",
                                                marginLeft: 8,
                                                marginRight: 8,
                                            }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Work Experience
                                            </Card.Title>
                                        </Card>
                                        <Accordion defaultActiveKey="1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Experience-1</Accordion.Header>
                                                <Accordion.Body>
                                                    <Row>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Company Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Company Name"
                                                                controlId="previousCompany1_name"
                                                                value={previousCompany1_name}
                                                                maxLength={50}
                                                                onChange={(e) =>
                                                                    setPreviousCompany1_name(e.target.value)
                                                                }
                                                                name="previousCompany1_name"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Designation</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Designation"
                                                                controlId="previousCompany1_designation"
                                                                value={previousCompany1_designation}
                                                                maxLength={50}
                                                                onChange={(e) =>
                                                                    setPreviousCompany1_designation(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany1_designation"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Joining date</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                placeholder="Date of Joining"
                                                                controlId="previousCompany1_joiningDate"
                                                                value={previousCompany1_joiningDate}
                                                                onChange={(e) =>
                                                                    setPreviousCompany1_joiningDate(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany1_joiningDate"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Relieving Date</Form.Label>
                                                            <Form.Control
                                                                type="Date"
                                                                placeholder="Date of Relieving"
                                                                controlId="previousCompany1_relievingDate"
                                                                value={previousCompany1_relievingDate}
                                                                min={previousCompany1_joiningDate}
                                                                onChange={(e) =>
                                                                    setPreviousCompany1_relievingDate(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany1_relievingDate"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Employee ID</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Employee ID"
                                                                controlId="previousCompany1_employeeId"
                                                                value={previousCompany1_employeeId}
                                                                maxLength={50}
                                                                onChange={(e) =>
                                                                    setPreviousCompany1_employeeId(e.target.value)
                                                                }
                                                                name="previousCompany1_employeeId"
                                                            />
                                                        </Form.Group>

                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Employment Type</Form.Label>
                                                            <Form.Select
                                                                type="text"
                                                                placeholder="Employment Type"
                                                                controlId="previousCompany1_typeOfEmployeement"
                                                                value={previousCompany1_typeOfEmployment}

                                                                onChange={(e) =>
                                                                    setPreviousCompany1_typeOfEmployement(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany1_typeOfEmployment"
                                                            >
                                                                <option>Select</option>
                                                                <option value="Full Time Employment ">
                                                                    FTE(Full Time Employment)
                                                                </option>
                                                                <option value="Freelancer ">Freelancer</option>
                                                                <option value="Part Time">Part Time</option>
                                                                <option value="Contract">Contract</option>
                                                                <option value="Other">Other</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Reason for Exit</Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={2}
                                                                type="text"
                                                                placeholder="Reason"
                                                                controlId="previousCompany1_reasonForRelieving"
                                                                value={previousCompany1_reasonForRelieving}
                                                                onChange={(e) =>
                                                                    setPreviousCompany1_reasonForRelieving(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany1_reasonForRelieving"
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Accordion defaultActiveKey="1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Experience-2</Accordion.Header>
                                                <Accordion.Body>
                                                    <Row>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Company Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Company Name"
                                                                controlId="previousCompany2_name"
                                                                maxLength={50}
                                                                value={previousCompany2_name}
                                                                onChange={(event) =>
                                                                    setPreviousCompany2_name(event.target.value)
                                                                }
                                                                name="previousCompany2_name"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Designation</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Designation"
                                                                controlId="previousCompany2_designation"
                                                                maxLength={50}
                                                                value={previousCompany2_designation}
                                                                onChange={(e) =>
                                                                    setPreviousCompany2_designation(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany2_designation"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Joining date</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                placeholder="Date of Joining"
                                                                controlId="previousCompany2_joiningDate"
                                                                value={previousCompany2_joiningDate}
                                                                onChange={(e) =>
                                                                    setPreviousCompany2_joiningDate(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                //onChange={changeHandler}
                                                                name="previousCompany2_joiningDate"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Relieving Date</Form.Label>
                                                            <Form.Control
                                                                type="Date"
                                                                placeholder="Date of Relieving"
                                                                controlId="previousCompany2_relievingDate"
                                                                value={previousCompany2_relievingDate}
                                                                min={previousCompany2_joiningDate}
                                                                onChange={(e) =>
                                                                    setPreviousCompany2_relievingDate(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany2_relievingDate"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Employee ID</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Employee ID"
                                                                controlId="previousCompany2_employeeId"
                                                                value={previousCompany2_employeeId}
                                                                onChange={(e) =>
                                                                    setPreviousCompany2_employeeId(e.target.value)
                                                                }
                                                                name="previousCompany2_employeeId"
                                                            />
                                                        </Form.Group>

                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Employment Type</Form.Label>
                                                            <Form.Select
                                                                type="text"
                                                                placeholder="Employment Type"
                                                                controlId="previousCompany2_typeOfEmployment"
                                                                value={previousCompany2_typeOfEmployment}
                                                                onChange={(e) =>
                                                                    setPreviousCompany2_typeOfEmployement(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany2_typeOfEmployment"
                                                            >
                                                                <option>Select</option>
                                                                <option value="Full Time Employment ">
                                                                    FTE(Full Time Employment)
                                                                </option>
                                                                <option value="Freelancer ">Freelancer</option>
                                                                <option value="Part Time">Part Time</option>
                                                                <option value="Contract">Contract</option>
                                                                <option value="Other">Other</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 15 }}>
                                                            <Form.Label>Reason for Exit</Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={2}
                                                                type="text"
                                                                placeholder="Reason"
                                                                controlId="previousCompany2_reasonForRelieving"
                                                                value={previousCompany2_reasonForRelieving}
                                                                onChange={(e) =>
                                                                    setPreviousCompany2_reasonForRelieving(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany2_reasonForRelieving"
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Accordion defaultActiveKey="1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Experience-3</Accordion.Header>
                                                <Accordion.Body>
                                                    <Row>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Company Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Company Name"
                                                                controlId="previousCompany3_name"
                                                                maxLength={50}
                                                                value={previousCompany3_name}
                                                                onChange={(e) =>
                                                                    setPreviousCompany3_name(e.target.value)
                                                                }
                                                                name="previousCompany3_name"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Designation</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Designation"
                                                                controlId="previousCompany3_designation"
                                                                maxLength={50}
                                                                value={previousCompany3_designation}
                                                                onChange={(e) =>
                                                                    setPreviousCompany3_designation(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany3_designation"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Joining date</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                placeholder="Date of Joining"
                                                                controlId="previousCompany3_joiningDate"
                                                                value={previousCompany3_joiningDate}
                                                                onChange={(e) =>
                                                                    setPreviousCompany3_joiningDate(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany3_joiningDate"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Relieving Date</Form.Label>
                                                            <Form.Control
                                                                type="Date"
                                                                placeholder="Date of Relieving"
                                                                controlId="prevoiusCompany3_relievingDate"
                                                                value={previousCompany3_relievingDate}
                                                                min={previousCompany3_joiningDate}
                                                                onChange={(e) =>
                                                                    setPreviousCompany3_relievingDate(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany3_relievingDate"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Employee ID</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Employee ID"
                                                                controlId="previousCompany3_employeeId"
                                                                maxLength={50}
                                                                value={previousCompany3_employeeId}
                                                                onChange={(e) =>
                                                                    setPreviousCompany3_employeeId(e.target.value)
                                                                }
                                                                name="previousCompany3_employeeId"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Employment Type</Form.Label>
                                                            <Form.Select
                                                                type="text"
                                                                placeholder="Employment Type"
                                                                controlId="previousCompany3_typeOfEmployment"
                                                                value={previousCompany3_typeOfEmployment}
                                                                onChange={(e) =>
                                                                    setPreviousCompany3_typeOfEmployement(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany3_typeOfEmployment"
                                                            >
                                                                <option>Select</option>
                                                                <option value="Full Time Employment ">
                                                                    FTE(Full Time Employment)
                                                                </option>
                                                                <option value="Freelancer ">Freelancer</option>
                                                                <option value="Part Time">Part Time</option>
                                                                <option value="Contract">Contract</option>
                                                                <option value="Other">Other</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Reason for Exit</Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={2}
                                                                type="text"
                                                                placeholder="Reason"
                                                                controlId="previousCompany3_reasonForRelieving"
                                                                value={previousCompany3_reasonForRelieving}
                                                                onChange={(e) =>
                                                                    setPreviousCompany3_reasonForRelieving(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                name="previousCompany3_reasonForRelieving"
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                        <Form.Group
                                            as={Col}
                                            md="6"
                                            style={{ padding: 10, paddingTop: 20 }}
                                        >
                                            <Form.Label>Exit Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                placeholder="Exit Date"
                                                controlId="exitDate"
                                                value={exitDate}
                                                onChange={(e) => setExitDate(e.target.value)}
                                                name="exitDate"
                                            />
                                        </Form.Group>
                                        <Form.Group style={{ padding: 10, paddingTop: 20 }}>
                                            <Form.Label>
                                                Upload Profile Picture * (Size should be less than 1 Mb)
                                            </Form.Label>
                                            <Form.Control
                                                // required
                                                //    value={imge.name}
                                                type="file"
                                                onChange={handleChange}
                                            />
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
                            </Card.Body>
                        </Card.Header>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default EmployeeMasterForm;

