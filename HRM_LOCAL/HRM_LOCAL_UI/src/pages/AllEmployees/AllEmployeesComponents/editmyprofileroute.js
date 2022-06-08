import React, { useEffect, useState } from "react"; 
import { Accordion, Button, Card, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import EmployeeMasterCard from "../../EmployeeMaster/EmployeeMasterComponents/EmployeeMasterCard";
import { useHistory } from "react-router-dom";
import { set } from "lodash";
import { Formik } from "formik";

function EmployeeMasterForms(props) {
  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;
  const mohan = localStorage.getItem('item')
  //const mohan1 =JSON.parse(mohan);
  console.log(mohan)

  var doj = new Date(dateOfJoining);
  var dd = String(doj.getDate()).padStart(2, "0");
  var mm = String(doj.getMonth() + 1).padStart(2, "0");
  var yyyy = doj.getFullYear();
  doj = yyyy + "-" + mm + "-" + dd;
  // console.log(doj);

  // const [fromDate, setFromDate] = useState("");
  // const [toDate, setToDate] = useState("");

  const [graduationJoiningYear, setGraduationJoiningYear] = useState("");
  const [graduationPassedYear, setGraduationPassedYear] = useState("");

  // const assignFromDate = e => {
  //   console.log(e.target.value);
  //   setGraduationJoiningYear(e.target.value);
  // };

  // Here usestate has been used in order
  // to set and get values from the jsx
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(" ");
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
  const [graduationBoardOfUniversity, setGraduationBoardOfUniversity] =
    useState("");
  const [graduationInstituteName, setGraduationInstituteName] = useState("");
  const [graduationInstituteCity, setGraduationInstituteCity] = useState("");
  const [graduationCourseName, setGraduationCourseName] = useState("");
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
  //const [reportingManager, setReportingManager] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  //Date Format
  // var dob = new Date(dateOfBirth);
  // var dd = String(dob.getDate()).padStart(2, '0');
  // var mm = String(dob.getMonth() + 1).padStart(2, '0');
  // var yyyy = dob.getFullYear();
  // const dob1 = dd + '-' + mm + '-' + yyyy;
  // console.log(dob1);

  // Useeffect take care that page will be rendered only once
  // useEffect(() => {
  //     // setname(localStorage.getItem('Name'))
  //     // setage(localStorage.getItem('Age'))
  //     // setid(localStorage.getItem('id'))
  // }, [])

  // console.log(dateOfBirth)
  var dob = new Date(dateOfBirth);
  var dd = String(dob.getDate()).padStart(2, "0");
  var mm = String(dob.getMonth() + 1).padStart(2, "0");
  var yyyy = dob.getFullYear();
  dob = yyyy + "-" + mm + "-" + dd;
  // console.log(dob);

  // console.log(dateOfJoining)
  // var doj = new Date(dateOfJoining);
  // var dd = String(doj.getDate());
  // var mm = String(doj.getMonth());
  // var yyyy = doj.getFullYear();
  //  doj = yyyy + '-' + mm + '-' + dd;
  // console.log(doj);

  console.log(props.empdata);
  console.log("jekdkdk");

  //get call Get the Employee onboarding Details
  const [employeedetails, setEmployeeDetails] = useState([]);
  
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${mohan}`)
      .then((response) => {
          console.log("hij")
          console.log(response)
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
        console.log(props.empdata);
        console.log("jekdkdk");
      });
  
  // console.log(firstName)
  // console.log(passportExpiryDate)

  // console.log(dateOfJoining)
  // console.log(dateOfBirth)
  // console.log(passportExpiryDate)
  // console.log(postgraduationPassedYear)

  // function for handling the edit and
  // pushing changes of editing/updating
  const changeHandler = async (e) => {
    e.preventDefault();
    await axios.put(`/emp/updateEmployeeDataByEmployeeId/${mohan}`, {
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
      postgraduationBoardOfUniversity,
      postgraduationInstituteName,
      postgraduationInstituteCity,
      postgraduationCourseName,
      postgraduationJoiningYear,
      postgraduationPassedYear,
      postgraduationGrade,
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
    });
    // console.log(firstName);
    // console.log(lastName);
    // console.log(passportExpiryDate)

    toast.success("Form Submitted Successfully");
  };

  return (
    <div>
      <Row>
        <Col>
          <Card className="scroll" style={{ marginTop: 10 }}>
            <Card.Header>
              <Card.Body>
                <Card.Title>Employee Profile</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Employee Profile
                </Card.Subtitle>
                
                <Card.Text style={{ margin: 20, color: "red" }}>
                  * All fields are mandatory. Please fill the form Correctly.
                </Card.Text>

                <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}>
                  <Card.Title style={{ margin: 20, textAlign: "center" }}>
                    Personal Details
                  </Card.Title>
                </Card>

                {/* <Formik
      validationSchema={SignupSchema}
      onClick ={changeHandler}
      validateOnChange={false}
      // validatenOnBlur={false}
      initialValues={{
      
        bloodGroup : "",
        
      }}
      // handleChange={handleChange}
      // isValid={validated}
    >
      {({
        handleSubmit,
        handleChange,
        changeHandler,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isValidating
      }) => ( */}

                <Form style={{ padding: 10 }}>
                  <Row className="mb-5">
                    {/* setting a name from the input textfiled */}
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      md="6"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Employee Id*</Form.Label>
                      <Form.Control
                        required
                        disabled
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        type="text"
                        placeholder="Enter  Name"
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      md="6"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control
                        value={firstName}
                        // disabled
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        placeholder="Enter Name"
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
                      <Form.Label>Middle name</Form.Label>
                      <Form.Control
                        name="middleName"
                        type="text"
                        placeholder="Middle name"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      md="6"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Last Name*</Form.Label>

                      <Form.Control
                        value={lastName}
                        // disabled
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder="Enter Name"
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
                      <Form.Label>Phone Number*</Form.Label>
                      <InputGroup>
                        <InputGroup.Text id="inputGroupPrepend">
                          +91
                        </InputGroup.Text>
                        <Form.Control
                          required
                          type="text"
                          name="primaryPhoneNumber"
                          placeholder="phone Number"
                          value={primaryPhoneNumber}
                          onChange={(e) =>
                            setPrimaryPhoneNumber(e.target.value)
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      md="6"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>secondaryPhone*</Form.Label>
                      <InputGroup>
                        <InputGroup.Text id="inputGroupPrepend">
                          +91
                        </InputGroup.Text>
                        <Form.Control
                          value={secondaryPhoneNumber}
                          required
                          onChange={(e) => setSecondaryPhone(e.target.value)}
                          type="text"
                          placeholder="Enter Phone"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Email*</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Years Of Experience*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="yearsOfExperience"
                        placeholder="Experience "
                        controlId="yearsOfExperience"
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Date of Birth*</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="dateOfBirth"
                        placeholder="DOB"
                        controlId="dateOfBirth"
                        value={dob}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Blood Group*</Form.Label>
                      <Form.Select
                        required
                        type="text"
                        name="bloodGroup"
                        placeholder="Blood Group "
                        controlId="bloodGroup"
                        value={bloodGroup}
                        // isValid={touched.bloodGroup && !errors.bloodGroup}
                        // isInvalid={touched.bloodGroup && !!errors.bloodGroup}

                        onChange={(e) => setBloodGroup(e.target.value)}
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
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Gender*</Form.Label>
                      <Form.Select
                        required
                        type="text"
                        name="gender"
                        placeholder="Gender "
                        controlId="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Marital Status*</Form.Label>
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
                      <Form.Label>Designation*</Form.Label>
                      <Form.Control
                        required
                        disabled
                        type="text"
                        name="designationName"
                        placeholder="Designation"
                        controlId="designationName"
                        value={designationName}
                        onChange={(e) => setDesignationName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Primary Skills*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="primarySkills"
                        placeholder="Primary Skills"
                        controlId="primarySkills"
                        value={primarySkills}
                        onChange={(e) => setPrimarySkills(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Secondary Skills*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="secondarySkills"
                        placeholder="SecondarySkills"
                        controlId="secondarySkills"
                        value={secondarySkills}
                        onChange={(e) => setSecondarySkills(e.target.value)}
                      />
                    </Form.Group>
                    {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Date of Joining*</Form.Label>
                                            <Form.Control
                                                required
                                                // disabled
                                                type="date"
                                                name="dateOfJoining"
                                                controlId="dateOfJoining"
                                                placeholder="DOJ"
                                                value={doj}
                                                onChange={(e) => setDateOfJoining(e.target.value)}
                                            />
                                        </Form.Group> */}
                    <Card
                      style={{ marginLeft: 8, marginRight: 50, marginTop: 20 }}
                    >
                      <Card.Title style={{ margin: 20, textAlign: "center" }}>
                        Permanent Address
                      </Card.Title>
                    </Card>

                    <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                      <Form.Label>Address*</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={4}
                        type="text"
                        name="permanentAdress"
                        placeholder="Address"
                        controlId="permanentAdress"
                        value={permanentAdress}
                        onChange={(e) => setPermanentAddress(e.target.value)}
                        // {...register("permanentAdress")}
                        // className={`form-control ${errors.permanentAdress ? "is-invalid" : ""
                        //     }`}
                        // onChange={changeHandler}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 15 }}>
                      <Form.Label>State*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="State"
                        name="permanentState"
                        controlId="permanentState"
                        value={permanentState}
                        onChange={(e) => setPermanentState(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Country*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Country"
                        name="permanentCountry"
                        controlId="permanentCountry"
                        value={permanentCountry}
                        onChange={(e) => setPermanentCountry(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Pincode*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Pincode"
                        controlId="permanentPincode"
                        name="permanentPincode"
                        value={permanentPincode}
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
                      <Form.Label>Address*</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={4}
                        type="text"
                        placeholder="Address"
                        controlId="currentAdress"
                        value={currentAdress}
                        name="currentAdress"
                        onChange={(e) => setCurrentAddress(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>State*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="State"
                        name="currentState"
                        controlId="currentState"
                        value={currentState}
                        onChange={(e) => setCurrentState(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Country*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Country"
                        //controlId="currentCountry"
                        value={currentCountry}
                        name="currentCountry"
                        onChange={(e) => setCurrentCountry(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Pincode*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Pincode"
                        controlId="currentPincode"
                        value={currentPincode}
                        name="currentPincode"
                        onChange={(e) => setCurrentPincode(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Card
                      style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}
                    >
                      <Card.Title style={{ margin: 20, textAlign: "center" }}>
                        Passport Details
                      </Card.Title>
                    </Card>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Passport Number</Form.Label>
                      <Form.Control
                        //required
                        type="text"
                        placeholder="Passport Number"
                        controlId="passportNo"
                        value={passportNo}
                        name="passportNo"
                        onChange={(e) => setPassportNo(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Passport Expiry Date</Form.Label>
                      <Form.Control
                        // required
                        type="date"
                        placeholder="Passport Expiry Date"
                        controlId="passportExpiryDate"
                        name="passportExpiryDate"
                        value={passportExpiryDate}
                        onChange={(event) =>
                          setPassportExpiryDate(event.target.value)
                        }
                      ></Form.Control>
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
                              <Form.Label>University Name*</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="University Name"
                                controlId="postgraduationBoardOfUniversity"
                                name="postgraduationBoardOfUniversity"
                                value={postgraduationBoardOfUniversity}
                                onChange={(e) =>
                                  setPostgraduationBoardOfUniversity(
                                    e.target.value
                                  )
                                }
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                              <Form.Label>Institute Name*</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Institute Name "
                                controlId="postgraduationInstituteName"
                                value={postgraduationInstituteName}
                                name="postgraduationInstituteName"
                                onChange={(e) =>
                                  setPostgraduationInstituteName(e.target.value)
                                }
                                // onChange={(e) => setField("postgraduationInstituteName", e.target.value)}
                                // onChange={changeHandler}
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                              <Form.Label>Institute City*</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Institute City"
                                controlId="postgraduationInstituteCity"
                                value={postgraduationInstituteCity}
                                name="postgraduationInstituteCity"
                                onChange={(e) =>
                                  setPostgraduationInstituteCity(e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                              <Form.Label>Course Name*</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Course Name"
                                controlId="postgraduationCourseName"
                                value={postgraduationCourseName}
                                name="postgraduationCourseName"
                                onChange={(e) =>
                                  setPostgraduationCourseName(e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                              <Form.Label>Joining Year*</Form.Label>
                              <Form.Control
                                type="date"
                                placeholder="Joining Year"
                                controlId="postgraduationJoiningYear"
                                value={postgraduationJoiningYear}
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
                                onChange={(e) =>
                                  setPostgraduationGrade(e.target.value)
                                }
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
                      <Form.Label>University Name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="University Name"
                        controlId="graduationBoardOfUniversity"
                        value={graduationBoardOfUniversity}
                        onChange={(e) =>
                          setGraduationBoardOfUniversity(e.target.value)
                        }
                        name="graduationBoardOfUniversity"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Institute Name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Institute Name "
                        controlId="graduationInstituteName"
                        value={graduationInstituteName}
                        onChange={(e) =>
                          setGraduationInstituteName(e.target.value)
                        }
                        name="graduationInstituteName"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Institute City*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Institute City"
                        controlId="graduationInstituteCity"
                        value={graduationInstituteCity}
                        //onChange={changeHandler}
                        name="graduationInstituteCity"
                        onChange={(e) =>
                          setGraduationInstituteCity(e.target.value)
                        }
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Course Name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Course Name"
                        name="graduationCourseName"
                        value={graduationCourseName}
                        onChange={(e) =>
                          setGraduationCourseName(e.target.value)
                        }
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Joining Year*</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        placeholder="Joining Year"
                        name="graduationJoiningYear"
                        controlId="graduationJoiningYear"
                        value={graduationJoiningYear}
                        onChange={(e) =>
                          setGraduationJoiningYear(e.target.value)
                        }
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Passed-out Year*</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        placeholder="Passed out year"
                        controlId="graduationPassedYear"
                        name="graduationPassedYear"
                        min={graduationJoiningYear}
                        value={graduationPassedYear}
                        onChange={(e) =>
                          setGraduationPassedYear(e.target.value)
                        }
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Grade*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Percentage/Grade/GPA/CGPA"
                        controlId="graduationGrade"
                        value={graduationGrade}
                        onChange={(e) => setGraduationGrade(e.target.value)}
                        name="graduationGrade"
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
                        Intermediate Details
                      </Card.Title>
                    </Card>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Board* </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Board"
                        controlId="intermediateBoardOfUniversity"
                        value={intermediateBoardOfUniversity}
                        onChange={(e) =>
                          setIntermediateBoardOfUniversity(e.target.value)
                        }
                        name="intermediateBoardOfUniversity"
                        //isInvalid={!!errors.intermediateBoardOfUniversity}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>School/College Name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="School/College Name "
                        controlId="intermediateCollegeName"
                        value={intermediateCollegeName}
                        onChange={(e) =>
                          setIntermediateCollegeName(e.target.value)
                        }
                        name="intermediateCollegeName"
                        // isInvalid={!!errors.intermediateInstituteName}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>School/College City*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="School/College City"
                        controlId="intermediateCollegeCity"
                        value={intermediateCollegeCity}
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
                        value={intermediateCourseName}
                        // onChange={changeHandler}
                        onChange={(e) =>
                          setIntermediateCourseName(e.target.value)
                        }
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Joining Year*</Form.Label>
                      <Form.Control
                        required
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
                      <Form.Label>Passed-out Year*</Form.Label>
                      <Form.Control
                        required
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
                      <Form.Label>Grade*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Percentage/Grade/GPA/CGPA"
                        controlId="intermediateGrade"
                        value={intermediateGrade}
                        onChange={(e) => setIntermediateGrade(e.target.value)}
                        name="intermediateGrade"
                      ></Form.Control>
                    </Form.Group>

                    <Card
                      style={{ marginLeft: 8, marginRight: 8, marginTop: 15 }}
                    >
                      <Card.Title style={{ margin: 20, textAlign: "center" }}>
                        SSC Details
                      </Card.Title>
                    </Card>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Board*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Board"
                        controlId="sscBoardOfUniversity"
                        value={sscBoardOfUniversity}
                        onChange={(e) =>
                          setSscBoardOfUniversity(e.target.value)
                        }
                        name="sscBoardOfUniversity"
                        //isInvalid={!!errors.sscBoardOfUniversity}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>School Name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="School Name "
                        controlId="sscSchoolName"
                        value={sscSchoolName}
                        onChange={(e) => setSscSchoolName(e.target.value)}
                        name="sscSchoolName"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>School City*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="School City"
                        controlId="sscSchoolCity"
                        value={sscSchoolCity}
                        name="sscSchoolCity"
                        onChange={(e) => setSscSchoolCity(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Course Name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Course Name"
                        controlId="sscCourseName"
                        value={sscCourseName}
                        name="sscCourseName"
                        onChange={(e) => setSscCourseName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Joining Year*</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="sscJoiningYear"
                        placeholder="Joining Year"
                        controlId="sscJoiningYear"
                        value={sscJoiningYear}
                        onChange={(e) => setSscJoiningYear(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                      <Form.Label>Passed-out Year*</Form.Label>
                      <Form.Control
                        required
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
                      <Form.Label>Grade*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Percentage/Grade/GPA/CGPA"
                        controlId="sscGrade"
                        value={sscGrade}
                        onChange={(e) => setSscGrade(e.target.value)}
                        name="sscGrade"
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
                              <Form.Label>Reason for Relieving</Form.Label>
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
                              <Form.Label>Reason for Relieving</Form.Label>
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
                              <Form.Label>Reason for Relieving</Form.Label>
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
                    {/* <Form.Group controlId="formFile" className="mb-3" style={{ paddingTop: 20 }}>
                                            <Form.Label>Choose Your Photo</Form.Label>
                                            <Form.Control
                                                // required
                                                type="file"
                                                controlId="profilePhoto"
                                                name="profilePhoto"
                                                value={profilePhoto}
                                                onChange={(e) => setProfilePhoto(e.target.value)}
                                            />
                                        </Form.Group> */}
                    {/* Hadinling an onclick event running an edit logic */}
                  </Row>
                  <Button
                    className="rounded-pill"
                    style={{ backgroundColor: "#eb4509", float: "right" }}
                    onClick={(e) => changeHandler(e)}
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

export default EmployeeMasterForms;
