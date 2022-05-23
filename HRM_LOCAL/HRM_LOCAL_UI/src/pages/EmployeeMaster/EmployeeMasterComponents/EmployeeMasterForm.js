import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import { Accordion, Card, Spinner } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import EmployeeMasterCard from "./EmployeeMasterCard";




function EmployeeMasterForm() {
    // function formatDate(fromDate){
    //     var datePart = fromDate.match(/\d+/g),
    //       year = datePart[0].substring(2), // get only two digits
    //       month = datePart[1],
    //       day = datePart[2];
    //     return day + "-" + month + "-" + year;
    //    }
      

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object().shape({
        secondaryPhoneNumber: Yup.string()
            .required("required")
            .matches(phoneRegExp, "Phone number is not valid")
            .min(10, "Phone number is not valid")
            .max(10, "Phone number is not valid"),

    });

    const userData = sessionStorage.getItem('userdata')
    // console.log(userData)
    const userData1 = JSON.parse(userData)
    const employeeid = userData1.data.employeeId

    //get call Get the Employee onboarding Details
    const [employeedetails, setEmployeeDetails] = useState([])
    useEffect(() => {
        axios.get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
            .then((response) => {
                setEmployeeDetails(response.data.data);
            })
    }, [])
    //console.log(employeedetails)

    var newFirstName = employeedetails.firstName

    const setNewFirstName = (e) =>{
        newFirstName = e.target.value;
    }

    const [data, setData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        primaryPhoneNumber: "",
        yearsOfExperience: "",
        designation: "",
        primarySkills: "",
        secondarySkills: "",
        dateOfJoining: "",
        dateOfBirth: "",
        bloodGroup: "",
        gender: "",
        maritalStatus: "",
        permanentAdress: "",
        secondaryPhoneNumber: "",
        permanentState: "",
        permanentCountry: "",
        permanentPincode: "",
        currentAdress: "",
        currentState: "",
        currentCountry: "",
        currentPincode: "",
        passportNo: "",
        passportExpiryDate: "",
        postgraduationBoardOfUniversity: "",
        postgraduationInstituteName: "",
        postgraduationInstituteCity: "",
        postgraduationCourseName: "",
        postgraduationJoiningYear: "",
        postgraduationPassedYear: "",
        postgraduationGrade: "",
        graduationBoardOfUniversity: "",
        graduationInstituteName: "",
        graduationInstituteCity: "",
        graduationCourseName: "",
        graduationJoiningYear: "",
        graduationPassedYear: "",
        graduationGrade: "",
        intermediateBoardOfUniversity: "",
        intermediateCollegeName: "",
        intermediateCollegeCity: "",
        intermediateCourseName: "",
        intermediateJoiningYear: "",
        intermediatePassedYear: "",
        intermediateGrade: "",
        sscBoardOfUniversity: "",
        sscSchoolName: "",
        sscSchoolCity: "",
        sscCourseName: "",
        sscJoiningYear: "",
        sscPassedYear: "",
        sscGrade: "",
        previousCompany1_name: "",
        previousCompany1_designation: "",
        previousCompany1_joiningDate: "",
        previousCompany1_relievingDate: "",
        previousCompany1_employeeId: "",
        previousCompany1_grossSalary: "",
        previousCompany1_typeOfEmployment: "",
        previousCompany1_reasonForRelieving: "",
        previousCompany2_name: "",
        previousCompany2_designation: "",
        previousCompany2_joiningDate: "",
        previousCompany2_relievingDate: "",
        previousCompany2_employeeId: "",
        previousCompany2_grossSalary: "",
        previousCompany2_typeOfEmployment: "",
        previousCompany2_reasonForRelieving: "",
        previousCompany3_name: "",
        previousCompany3_designation: "",
        previousCompany3_joiningDate: "",
        previousCompany3_relievingDate: "",
        previousCompany3_employeeId: "",
        previousCompany3_grossSalary: "",
        previousCompany3_typeOfEmployment: "",
        previousCompany3_reasonForRelieving: "",
        profilePhoto: ""

    })
    const {

        firstName,
        middleName,
        lastName,
        email,
        primaryPhoneNumber,
        yearsOfExperience,
        designationName,
        skillSet,
        primarySkills,
        secondarySkills,
        dateOfJoining,
        dateOfBirth,
        secondaryPhoneNumber,
        bloodGroup, gender, maritalStatus,
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
        profilePhoto
    } = data;


    const obj = { firstName: employeedetails.firstName }
    const obj1 = { middleName: employeedetails.middleName }
    const obj2 = { lastName: employeedetails.lastName }
    const obj3 = { email: employeedetails.email }
    const obj4 = { primaryPhoneNumber: employeedetails.primaryPhoneNumber }
    const obj5 = { yearsOfExperience: employeedetails.yearsOfExperience }
    const obj6 = { designationName: employeedetails.designationName }
    const obj7 = { dateOfJoining: employeedetails.dateOfJoining }

    const data1 = Object.assign(data, obj)
    const data2 = Object.assign(data1, obj1)
    const data3 = Object.assign(data, obj2)
    const data4 = Object.assign(data, obj3)
    const data5 = Object.assign(data, obj4)
    const data6 = Object.assign(data, obj5)
    const data7 = Object.assign(data, obj6)
    const data8 = Object.assign(data, obj7)
    console.log(data8)


    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const handleReset = () => {
        formRef.current.reset();
        setValidated(false);
    };

    function refreshPage() {
        window.location.reload(false);
    }

    const onSubmit = async (e) => {
        // setData(" ");
        // data.preventDefault();
        //e.preventDefault()
        // console.log(data)

        // reset();
        await axios.put(`/emp/updateEmployeeDataByEmployeeId/${employeeid}`, data)
        console.log(data);
        // notify();
        toast.success("Form Submitted Successfully");
        // refreshPage();


    }

    //   const onSubmit = async (e) => {
    //     //e.preventDefault()

    //     const res = await axios.put(`/emp/updateEmployeeDataByEmployeeId/${employeeid}`, e)
    //     handleClose(); //Close when click on submit
    //     if (res.data !== null) {
    //       console.log(res.data);

    //       console.log("sucess")
    //       toast.success("Form Submitted Successfully")
    //       notify();
    //     } else {
    //       console.log("");
    //       toast.error("Something Went Wrong")
    //     }
    //   };


    return (

        <Row>
            <Col>
                <Card className='scroll' >
                    <Card.Header>
                        <Card.Body>
                            <Card.Title>Employee Profile</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Employee Profile</Card.Subtitle>

                            <EmployeeMasterCard />

                            <Card.Text style={{ margin: 20, color: "red" }}>* All fields are mandatory. Please fill the form Correctly.</Card.Text>

                            <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}>
                                <Card.Title style={{ margin: 20, textAlign: "center" }}>Personal Details</Card.Title>
                            </Card>

                            {/* <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{ ...data}}
      
    >
      {({
        submitHandler,
        changeHandler,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => ( */}
                            {/* onClick={refreshPage} */}

                            <Form style={{ padding: 10 }} onSubmit={handleSubmit(onSubmit)} onChange={changeHandler}>
                                <Row className="mb-5" >
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Employee Id*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            value={employeedetails.employeeId}
                                            placeholder="Employee ID"
                                        //onChange={(event) => setEmployeeId(event.target.value)}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>First name*</Form.Label>
                                        <Form.Control
                                            required
                                            name='firstName'
                                            type="text"

                                            value={newFirstName}
                                            onChange={setNewFirstName}
                                            //onChange={changeHandler}
                                            controlId="firstName"
                                            //onChange={(event) => setFirstName(event.target.value)}
                                            //onChange={e => onInputChange(e)}
                                            placeholder="First name"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Middle name</Form.Label>
                                        <Form.Control
                                            name="middleName"
                                            type="text"
                                            controlId="middleName"
                                            placeholder="Middle name"
                                            value={employeedetails.middleName}
                                        //onChange={changeHandler}
                                        // onChange={(event) => setMiddleName(event.target.value)}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Last name*</Form.Label>
                                        <Form.Control
                                            required
                                            name="lastName"
                                            type="text"
                                            controlId="lastName"
                                            placeholder="Last name"
                                            value={employeedetails.lastName}
                                        //onChange={changeHandler}
                                        // onChange={(event) => setLastName(event.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="email"
                                            controlId="email"
                                            placeholder="Email"
                                            value={employeedetails.email}
                                        //onChange={changeHandler}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Phone Number*</Form.Label>
                                        <Form.Control
                                            required
                                            contentEditable
                                            type="text"
                                            name='primaryPhoneNumber'
                                            controlId="primaryPhoneNumber"
                                            placeholder="phone Number"
                                            value={employeedetails.primaryPhoneNumber}

                                        //onChange={changeHandler}
                                        // onChange={(event) => setPrimaryPhoneNumber(event.target.value)}
                                        /></Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Secondary Phone Number*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="secondaryPhoneNumber"
                                            placeholder="Secondary phone No"
                                            controlId="secondaryPhoneNumber"
                                            value={secondaryPhoneNumber}

                                            {...register("secondaryPhoneNumber")}
                                            className={`form-control ${errors.secondaryPhoneNumber ? "is-invalid" : ""
                                                }`}

                                        // onChange={(event) => setSecondaryPhoneNumber(event.target.value)}
                                        //onChange={(e) => setField("secondaryPhoneNumber", e.target.value)}
                                        //isInvalid={!!errors.secondaryPhoneNumber}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Years Of Experience*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="yearsOfExperience"
                                            placeholder="Experience "
                                            controlId="yearsOfExperience"
                                            value={employeedetails.yearsOfExperience}

                                        // onChange={changeHandler}
                                        //onChange={(event) => setYearsOfExperience(event.target.value)}

                                        /></Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                        <Form.Label>Date of Birth*</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name="dateOfBirth"
                                            placeholder="DOB"
                                            controlId="dateOfBirth"
                                            value={dateOfBirth}
                                        // onChange={changeHandler}
                                        // onChange={(event) => setDateOfBirth(event.target.value)}
                                        // onChange={(e) => setField("dateOfBirth", e.target.value)}
                                        //onChange={e => onInputChange(e)}
                                        // isInvalid={!!errors.dateOfBirth}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Blood Group*</Form.Label>
                                        <Form.Select
                                            required
                                            type="text"
                                            name="bloodGroup"
                                            placeholder="Blood Group "
                                            controlId="bloodGroup"
                                            value={bloodGroup}
                                        //onChange={(event) => setBloodGroup(event.target.value)}
                                        // onChange={(e) => setField("bloodGroup", e.target.value)}
                                        // onChange={changeHandler}
                                        // isInvalid={!!errors.bloodGroup}
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
                                        // onChange={(event) => setGender(event.target.value)}
                                        // onChange={(e) => setField("gender", e.target.value)}
                                        //onChange={changeHandler}
                                        // isInvalid={!!errors.gender}
                                        >
                                            <option>Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>

                                        </Form.Select>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Marital Status*</Form.Label>
                                        <Form.Select
                                            required
                                            type="text"
                                            name="maritalStatus"
                                            placeholder="Marital Status "
                                            controlId="maritalStatus"
                                            value={maritalStatus}
                                        // onChange={(event) => setMaritalStatus(event.target.value)}
                                        // onChange={(e) => setField("maritalStatus", e.target.value)}
                                        //onChange={changeHandler}
                                        // isInvalid={!!errors.maritalStatus}
                                        >
                                            <option>Select</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Diverced">Other</option>

                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Designation*</Form.Label>
                                        <Form.Control
                                            required
                                            disabled
                                            type="text"
                                            name="designationName"
                                            placeholder="Designation"
                                            controlId="designationName"
                                            value={employeedetails.designationName}
                                        // onChange={changeHandler}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Primary Skills*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="primarySkills"
                                            placeholder="Primary Skills"
                                            controlId="primarySkills"
                                            value={employeedetails.primarySkills}
                                        // onChange={changeHandler}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >

                                        <Form.Label>Secondary Skills*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="secondarySkills"
                                            placeholder="SecondarySkills"
                                            controlId="secondarySkills"
                                            value={employeedetails.secondarySkills}
                                        // onChange={changeHandler}

                                       
                                        />
                                    </Form.Group>
                                   
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                        <Form.Label>Date of Joining*</Form.Label>
                                        <Form.Control
                                            // required
                                            type="date"
                                            name="dateOfJoining"
                                            controlId="dateOfJoining"
                                            placeholder="DOJ"
                                            value={employeedetails.dateOfJoining}

                                            onChange={changeHandler}

                                        // onChange={(event) => setDateOfJoining(event.target.value)}
                                        />
                                    </Form.Group>
                                    <Card style={{ marginLeft: 8, marginRight: 50, marginTop: 20 }} >
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>Permanent Address</Card.Title>
                                    </Card>

                                    <Form.Group as={Col} md="12" style={{ padding: 10 }} >
                                        <Form.Label>Address*</Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea" rows={4}
                                            type="text"
                                            name="permanentAdress"
                                            //ref={register}
                                            placeholder="Address"
                                            controlId="permanentAdress"
                                            value={permanentAdress}
                                            //value={employeedetails.permanentAdress}

                                            {...register("permanentAdress")}
                                            className={`form-control ${errors.permanentAdress ? "is-invalid" : ""
                                                }`}
                                        // onChange={changeHandler}
                                        >

                                        </Form.Control>
                                        <div className="invalid-feedback">
                                            {errors.permanentAdress?.message}
                                        </div>

                                    </Form.Group>

                                    <Form.Group as={Col} md="6" style={{ padding: 15 }} >
                                        <Form.Label>State*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="State"
                                            name="permanentState"
                                            controlId="permanentState"
                                            value={permanentState}
                                        //value={values.permanentState}
                                        //onChange={(event) => setPermanentState(event.target.value)}
                                        // onChange={(e) => setField("permanentState", e.target.value)}
                                        //onChange={changeHandler}
                                        //isInvalid={!!errors.permanentState}
                                        //isValid={touched.firstName && !errors.firstName}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Country*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Country"
                                            name="permanentCountry"
                                            controlId="permanentCountry"
                                            value={permanentCountry}
                                        //onChange={(event) => setPermanentCountry(event.target.value)}
                                        //onChange={(e) => setField("permanentCountry", e.target.value)}
                                        //onChange={changeHandler}
                                        //isInvalid={!!errors.permanentCountry}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Pincode*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Pincode"
                                            controlId="permanentPincode"
                                            name="permanentPincode"
                                            value={permanentPincode}
                                        //onChange={(event) => setPermanentPincode(event.target.value)}
                                        //onChange={(e) => setField("permanentPincode", e.target.value)}
                                        // onChange={changeHandler}
                                        // isInvalid={!!errors.permanentPincode}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 10 }}>
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>Current Address</Card.Title>
                                    </Card>
                                    <Form.Group as={Col} md="12" style={{ padding: 10 }} >
                                        <Form.Label>Address*</Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea" rows={4}
                                            type="text"
                                            placeholder="Address"
                                            controlId="currentAdress"
                                            value={currentAdress}
                                            name="currentAdress"
                                        //onChange={(event) => setCurrentAddress(event.target.value)}
                                        //onChange={(e) => setField("currentAdress", e.target.value)}
                                        //onChange={changeHandler}
                                        // isInvalid={!!errors.currentAdress}
                                        ></Form.Control>

                                    </Form.Group>


                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>State*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="State"
                                            name="currentState"
                                            controlId="currentState"
                                            value={currentState}
                                        //onChange={(event) => setCurrentState(event.target.value)}
                                        //onChange={(e) => setField("currentState", e.target.value)}
                                        //onChange={changeHandler}
                                        // isInvalid={!!errors.currentState}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Country*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Country"
                                            controlId="currentCountry"
                                            value={currentCountry}
                                            name="currentCountry"
                                        //onChange={(event) => setCurrentCountry(event.target.value)}
                                        //onChange={(e) => setField("currentCountry", e.target.value)}
                                        // onChange={changeHandler}
                                        //isInvalid={!!errors.currentCountry}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Pincode*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Pincode"
                                            controlId="currentPincode"
                                            value={currentPincode}
                                            name="currentPincode"
                                        // onChange={(event) => setCurrentPincode(event.target.value)}
                                        //onChange={(e) => setField("currentPincode", e.target.value)}
                                        //onChange={changeHandler}
                                        // isInvalid={!!errors.currentPincode}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}>
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>Passport Details</Card.Title>
                                    </Card>

                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Passport Number</Form.Label>
                                        <Form.Control
                                            //required
                                            type="text"
                                            placeholder="Passport Number"
                                            controlId="passportNo"
                                            value={passportNo}
                                            name="passportNo"
                                        // onChange={(event) => setGraduationBoardOfUniversity(event.target.value)}
                                        //onChange={(e) => setField("passportNo", e.target.value)}
                                        // onChange={changeHandler}
                                        // isInvalid={!!errors.graduationBoardOfUniversity}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Passport Expiry Date</Form.Label>
                                        <Form.Control
                                            // required
                                            type="date"
                                            placeholder="Passport Expiry Date"
                                            controlId="passportExpiryDate"
                                            name="passportExpiryDate"
                                            value={passportExpiryDate}
                                        //onChange={(event) => setGraduationInstituteName(event.target.value)}
                                        // onChange={(e) => setField("passportExpiryDate", e.target.value)}
                                        //onChange={changeHandler}
                                        //isInvalid={!!errors.passportExpiryDate}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 10, marginBottom: 20 }}>
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>Educational Qualifications</Card.Title>
                                    </Card>
                                    <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 10, marginBottom: 20 }}>
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>Post Graduation Details</Card.Title>
                                    </Card>
                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Post Graduation</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>University Name*</Form.Label>
                                                        <Form.Control

                                                            type="text"
                                                            placeholder="University Name"
                                                            controlId="postgraduationBoardOfUniversity"
                                                            name="postgraduationBoardOfUniversity"
                                                            value={postgraduationBoardOfUniversity}
                                                        // onChange={(e) => setField("postgraduationBoardOfUniversity", e.target.value)}
                                                        // onChange={changeHandler}

                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Institute Name*</Form.Label>
                                                        <Form.Control

                                                            type="text"
                                                            placeholder="Institute Name "
                                                            controlId="postgraduationInstituteName"
                                                            value={postgraduationInstituteName}
                                                            name="postgraduationInstituteName"
                                                        // onChange={(event) => setPostgraduationInstituteName(event.target.value)}
                                                        // onChange={(e) => setField("postgraduationInstituteName", e.target.value)}
                                                        // onChange={changeHandler}

                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Institute City*</Form.Label>
                                                        <Form.Control

                                                            type="text"
                                                            placeholder="Institute City"
                                                            controlId="postgraduationInstituteCity"
                                                            value={postgraduationInstituteCity}
                                                            name="postgraduationInstituteCity"
                                                        //onChange={(event) => setPostgraduationInstituteCity(event.target.value)}
                                                        // onChange={(e) => setField("postgraduationInstituteCity", e.target.value)}
                                                        // onChange={changeHandler}

                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Course Name*</Form.Label>
                                                        <Form.Control

                                                            type="text"
                                                            placeholder="Course Name"
                                                            controlId="postgraduationCourseName"
                                                            value={postgraduationCourseName}
                                                            name="postgraduationCourseName"
                                                        //onChange={(event) => setPostgraduationCourseName(event.target.value)}
                                                        //onChange={(e) => setField("postgraduationCourseName", e.target.value)}
                                                        //onChange={changeHandler}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Joining Year*</Form.Label>
                                                        <Form.Control

                                                            type="date"
                                                            placeholder="Joining Year"
                                                            controlId="postgraduationJoiningYear"
                                                            value={postgraduationJoiningYear}
                                                            name="postgraduationJoiningYear"
                                                        //onChange={(event) => setPostgraduationJoiningYear(event.target.value)}
                                                        //onChange={(e) => setField("postgraduationJoiningYear", e.target.value)}
                                                        //onChange={changeHandler}

                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Passed-out Year</Form.Label>
                                                        <Form.Control

                                                            type="date"
                                                            placeholder="Passed out year"
                                                            controlId="postgraduationPassedYear"
                                                            value={postgraduationPassedYear}
                                                            name="postgraduationPassedYear"
                                                        //onChange={(event) => setPostgraduationPassedYear(event.target.value)}
                                                        //onChange={(e) => setField("postgraduationPassedYear", e.target.value)}
                                                        //onChange={changeHandler}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Grade</Form.Label>
                                                        <Form.Control

                                                            type="text"
                                                            placeholder="Percentage/Grade/CGPA/GPA"
                                                            controlId="postgraduationGrade"
                                                            value={postgraduationGrade}
                                                            name="postgraduationGrade"
                                                        //  onChange={(event) => setPostgraduationGrade(event.target.value)}
                                                        //onChange={(e) => setField("postgraduationGrade", e.target.value)}
                                                        // onChange={changeHandler}
                                                        />
                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                    <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}>
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>Graduation Details</Card.Title>
                                    </Card>

                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>University Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="University Name"
                                            controlId="graduationBoardOfUniversity"
                                            value={graduationBoardOfUniversity}
                                            // onChange={(event) => setGraduationBoardOfUniversity(event.target.value)}
                                            //onChange={(e) => setField("graduationBoardOfUniversity", e.target.value)}
                                            //onChange={changeHandler}
                                            name="graduationBoardOfUniversity"
                                        //isInvalid={!!errors.graduationBoardOfUniversity}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Institute Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Institute Name "
                                            controlId="graduationInstituteName"
                                            value={graduationInstituteName}
                                            //onChange={(event) => setGraduationInstituteName(event.target.value)}
                                            //onChange={(e) => setField("graduationInstituteName", e.target.value)}
                                            // onChange={changeHandler}
                                            name="graduationInstituteName"
                                        // isInvalid={!!errors.graduationInstituteName}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Institute City*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"

                                            placeholder="Institute City"
                                            controlId="graduationInstituteCity"
                                            value={graduationInstituteCity}
                                            //onChange={changeHandler}
                                            name="graduationInstituteCity"
                                        //onChange={(event) => setGraduationInstituteCity(event.target.value)}
                                        //onChange={(e) => setField("graduationInstituteCity", e.target.value)}
                                        //onChange={e => onInputChange(e)}
                                        //isInvalid={!!errors.graduationInstituteCity}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Course Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Course Name"
                                            name="graduationCourseName"
                                            controlId="graduationCourseName"
                                            value={graduationCourseName}
                                        //onChange={changeHandler}

                                        //onChange={(event) => setGraduationCourseName(event.target.value)}
                                        //onChange={(e) => setField("graduationCourceName", e.target.value)}

                                        // isInvalid={!!errors.graduationCourseName}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Joining Year*</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            placeholder="Joining Year"
                                            name="graduationJoiningYear"
                                            controlId="graduationJoiningYear"
                                            value={graduationJoiningYear}
                                        //onChange={(event) => setGraduationJoiningYear(event.target.value)}
                                        //onChange={(e) => setField("graduationJoiningYear", e.target.value)}

                                        // onChange={changeHandler}


                                        // isInvalid={!!errors.graduationJoiningYear}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Passed-out Year*</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            placeholder="Passed out year"
                                            controlId="graduationPassedYear"
                                            name="graduationPassedYear"
                                            value={graduationPassedYear}
                                            //onChange={(event) => setGraduationPassedYear(event.target.value)}
                                            //onChange={(e) => setField("graduationPassedYear", e.target.value)}
                                            onChange={changeHandler}

                                        // isInvalid={!!errors.graduationPassedYear}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Grade*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Percentage/Grade/GPA/CGPA"
                                            controlId="graduationGrade"
                                            value={graduationGrade}
                                            // onChange={(event) => setGraduationGrade(event.target.value)}
                                            //onChange={(e) => setField("graduationGrade", e.target.value)}
                                            //onChange={changeHandler}
                                            name="graduationGrade"
                                            {...register("graduationGrade")}
                                            className={`form-control ${errors.graduationGrade ? "is-invalid" : ""
                                                }`}
                                        // isInvalid={!!errors.graduationGrade}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 20 }}>
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>Intermediate Details</Card.Title>
                                    </Card>

                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Board* </Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Board"
                                            controlId="intermediateBoardOfUniversity"
                                            value={intermediateBoardOfUniversity}
                                            //onChange={(event) => setIntermediateBoardOfUniversity(event.target.value)}
                                            //onChange={(e) => setField("intermediateBoardOfUniversity", e.target.value)}
                                            // onChange={changeHandler}
                                            name="intermediateBoardOfUniversity"
                                        //isInvalid={!!errors.intermediateBoardOfUniversity}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>School/College Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="School/College Name "
                                            controlId="intermediateCollegeName"
                                            value={intermediateCollegeName}
                                            // onChange={(event) => setIntermediateInstituteName(event.target.value)}
                                            // onChange={(e) => setField("intermediateInstituteName", e.target.value)}
                                            // onChange={changeHandler}
                                            name="intermediateCollegeName"
                                        // isInvalid={!!errors.intermediateInstituteName}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>School/College City*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="School/College City"
                                            controlId="intermediateCollegeCity"
                                            value={intermediateCollegeCity}
                                            //onChange={(event) => setIntermediateInsituteCity(event.target.value)}
                                            // onChange={(e) => setField("intermediateInstituteCity", e.target.value)}
                                            // onChange={changeHandler}
                                            name="intermediateCollegeCity"
                                        // isInvalid={!!errors.intermediateInstituteCity}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Course Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Course Name"
                                            name="intermediateCourseName"
                                            controlId="intermediateCourseName"
                                            value={intermediateCourseName}
                                        // onChange={changeHandler}
                                        // onChange={(event) => setIntermediateCourseName(event.target.value)}
                                        // onChange={(e) => setField("intermediateCourseName", e.target.value)}

                                        //isInvalid={!!errors.intermediateCourseName}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Joining Year*</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            placeholder="Joining Year"
                                            controlId="intermediateJoiningYear"
                                            value={intermediateJoiningYear}
                                            //onChange={(event) => setIntermediateJoiningYear(event.target.value)}
                                            //onChange={(e) => setField("intermediateJoiningYear", e.target.value)}
                                            // onChange={changeHandler}
                                            name="intermediateJoiningYear"
                                        // isInvalid={!!errors.intermediateJoiningYear}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Passed-out Year*</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            placeholder="Passed out year"
                                            controlId="intermediatePassedYear"
                                            value={intermediatePassedYear}
                                            // onChange={(event) => setIntermediatePassedYear(event.target.value)}
                                            //onChange={(e) => setField("intermediatePassedYear", e.target.value)}
                                            // onChange={changeHandler}
                                            name="intermediatePassedYear"
                                        // isInvalid={!!errors.intermediatePassedYear}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Grade*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Percentage/Grade/GPA/CGPA"
                                            controlId="intermediateGrade"
                                            value={intermediateGrade}
                                            // onChange={(event) => setIntermediateGrade(event.target.value)}
                                            //onChange={(e) => setField("intermediateGrade", e.target.value)}
                                            // onChange={changeHandler}
                                            name="intermediateGrade"
                                            // isInvalid={!!errors.intermediateGrade}
                                            {...register("intermediateGrade")}
                                            className={`form-control ${errors.intermediateGrade ? "is-invalid" : ""
                                                }`}
                                        ></Form.Control>

                                    </Form.Group>

                                    <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 15 }}>
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>SSC Details</Card.Title>
                                    </Card>

                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Board*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Board"
                                            controlId="sscBoardOfUniversity"
                                            value={sscBoardOfUniversity}
                                            // onChange={(event) => setSscBoardOfUniversity(event.target.value)}
                                            //onChange={(e) => setField("sscBoardOfUniversity", e.target.value)}
                                            //onChange={changeHandler}
                                            name="sscBoardOfUniversity"
                                        //isInvalid={!!errors.sscBoardOfUniversity}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>School Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="School Name "
                                            controlId="sscSchoolName"
                                            value={sscSchoolName}
                                            //onChange={(event) => setSscInstituteName(event.target.value)}
                                            //onChange={(e) => setField("sscInstituteName", e.target.value)}
                                            //onChange={changeHandler}
                                            name="sscSchoolName"
                                        // isInvalid={!!errors.sscInstituteName}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>School City*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="School City"
                                            controlId="sscSchoolCity"
                                            value={sscSchoolCity}
                                            name="sscSchoolCity"
                                        //onChange={(event) => setSscInstituteCity(event.target.value)}
                                        //onChange={(e) => setField("sscInstituteCity", e.target.value)}
                                        // onChange={changeHandler}
                                        //isInvalid={!!errors.sscInstituteCity}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Course Name*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Course Name"
                                            controlId="sscCourseName"
                                            value={sscCourseName}
                                            name="sscCourseName"
                                        // onChange={(event) => setSscCourseName(event.target.value)}
                                        //onChange={(e) => setField("sscCourseName", e.target.value)}
                                        // onChange={changeHandler}
                                        //isInvalid={!!errors.sscCourseName}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Joining Year*</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name="sscJoiningYear"
                                            placeholder="Joining Year"
                                            controlId="sscJoiningYear"
                                            value={sscJoiningYear}
                                        // onChange={(event) => setSscJoiningYear(event.target.value)}
                                        //onChange={(e) => setField("sscJoiningYear", e.target.value)}
                                        // onChange={changeHandler}
                                        // isInvalid={!!errors.sscJoiningYear}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Passed-out Year*</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name="sscPassedYear"
                                            placeholder="Passed out year"
                                            controlId="sscPassedYear"
                                            value={sscPassedYear}
                                        // onChange={(event) => setSscPassedYear(event.target.value)}
                                        // onChange={(e) => setField("sscPassedYear", e.target.value)}
                                        //onChange={changeHandler}
                                        //isInvalid={!!errors.sscPassedYear}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                        <Form.Label>Grade*</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Percentage/Grade/GPA/CGPA"
                                            controlId="sscGrade"
                                            value={sscGrade}
                                            // onChange={(event) => setSscGrade(event.target.value)}
                                            //onChange={(e) => setField("sscGrade", e.target.value)}
                                            //onChange={changeHandler}
                                            name="sscGrade"
                                            // isInvalid={!!errors.sscGrade}
                                            {...register("sscGrade")}
                                            className={`form-control ${errors.sscGrade ? "is-invalid" : ""
                                                }`}
                                        ></Form.Control>

                                    </Form.Group>
                                    <Card style={{ marginTop: "10px", marginBottom: "20px", marginLeft: 8, marginRight: 8 }}>
                                        <Card.Title style={{ margin: 20, textAlign: "center" }}>Work Experience</Card.Title>
                                    </Card>
                                    <Accordion defaultActiveKey="1" >
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Experience-1</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Company Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Company Name"
                                                            controlId="previousCompany1_name"
                                                            value={previousCompany1_name}
                                                            //onChange={(event) => setPreviousCompany1_name(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany1_name", e.target.value)}
                                                            // onChange={changeHandler}
                                                            name="previousCompany1_name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Designation</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Designation"
                                                            controlId="previousCompany1_designation"
                                                            value={previousCompany1_designation}
                                                            // onChange={(event) => setPreviousCompany1_designation(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany1_designation", e.target.value)}
                                                            // onChange={changeHandler}
                                                            name="previousCompany1_designation"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Joining date</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Date of Joining"
                                                            controlId="previousCompany1_joiningDate"
                                                            value={previousCompany1_joiningDate}
                                                            // onChange={(event) => setPreviousCompany1_joiningDate(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany1_joiningDate", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany1_joiningDate"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Relieving Date</Form.Label>
                                                        <Form.Control
                                                            type="Date"
                                                            placeholder="Date of Relieving"
                                                            controlId="previousCompany1_relievingDate"
                                                            value={previousCompany1_relievingDate}
                                                            // onChange={(event) => setPreviousCompany1_relievingDate(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany1_relievingDate", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany1_relievingDate"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Employee ID</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Employee ID"
                                                            controlId="previousCompany1_employeeId"
                                                            value={previousCompany1_employeeId}
                                                            //onChange={(event) => setPreviousCompany1_employeeId(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany1_employeeId", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany1_employeeId"
                                                        />
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Employment Type</Form.Label>
                                                        <Form.Select
                                                            type="text"
                                                            placeholder="Employment Type"
                                                            controlId="previousCompany1_typeOfEmployeement"
                                                            value={previousCompany1_typeOfEmployment}
                                                            //onChange={(event) => setPreviousCompany1_typeOfEmployement(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany1_typeOfEmployement", e.target.value)}
                                                            // onChange={changeHandler}
                                                            name="previousCompany1_typeOfEmployment"
                                                        >
                                                            <option>Select</option>
                                                            <option value="Full Time Employment ">FTE(Full Time Employment)</option>
                                                            <option value="Freelancer ">Freelancer</option>
                                                            <option value="Part Time">Part Time</option>
                                                            <option value="Contract">Contract</option>
                                                            <option value="Other">Other</option></Form.Select>

                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Reason for Relieving</Form.Label>
                                                        <Form.Control
                                                            as="textarea" rows={2}
                                                            type="text"
                                                            placeholder="Reason"
                                                            controlId="previousCompany1_reasonForRelieving"
                                                            value={previousCompany1_reasonForRelieving}
                                                            // onChange={(event) => setPreviousCompany1_reasonForRelieving(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany1_reasonForRelieving", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany1_reasonForRelieving"
                                                        />
                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="1" >
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Experience-2</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Company Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Company Name"
                                                            controlId="previousCompany2_name"
                                                            value={previousCompany2_name}
                                                            // onChange={(event) => setPreviousCompany2_name(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany2_name", e.target.value)}
                                                            onChange={changeHandler}
                                                            name="previousCompany2_name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Designation</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Designation"
                                                            controlId="previousCompany2_designation"
                                                            value={previousCompany2_designation}
                                                            //onChange={(event) => setPreviousCompany2_designation(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany2_designation", e.target.value)}
                                                            onChange={changeHandler}
                                                            name="previousCompany2_designation"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Joining date</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Date of Joining"
                                                            controlId="previousCompany2_joiningDate"
                                                            value={previousCompany2_joiningDate}
                                                            // onChange={(event) => setPreviousCompany2_joiningDate(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany2_joiningDate", e.target.value)}
                                                            onChange={changeHandler}
                                                            name="previousCompany2_joiningDate"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Relieving Date</Form.Label>
                                                        <Form.Control
                                                            type="Date"
                                                            placeholder="Date of Relieving"
                                                            controlId="previousCompany2_relievingDate"
                                                            value={previousCompany2_relievingDate}
                                                            // onChange={(event) => setPreviousCompany2_relievingDate(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany2_relievingDate", e.target.value)}
                                                            onChange={changeHandler}
                                                            name="previousCompany2_relievingDate"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Employee ID</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Employee ID"
                                                            controlId="previousCompany2_employeeId"
                                                            value={previousCompany2_employeeId}
                                                            // onChange={(event) => setPreviousCompany2_employeeId(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany2_employeeId", e.target.value)}
                                                            onChange={changeHandler}
                                                            name="previousCompany2_employeeId"
                                                        />
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Employment Type</Form.Label>
                                                        <Form.Select
                                                            type="text"
                                                            placeholder="Employment Type"
                                                            controlId="previousCompany2_typeOfEmployment"
                                                            value={previousCompany2_typeOfEmployment}
                                                            // onChange={(event) => setPreviousCompany2_typeOfEmployement(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany2_typeOfEmployement", e.target.value)}
                                                            onChange={changeHandler}
                                                            name="previousCompany2_typeOfEmployment"
                                                        >
                                                            <option>Select</option>
                                                            <option value="Full Time Employment ">FTE(Full Time Employment)</option>
                                                            <option value="Freelancer ">Freelancer</option>
                                                            <option value="Part Time">Part Time</option>
                                                            <option value="Contract">Contract</option>
                                                            <option value="Other">Other</option></Form.Select>

                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 15 }} >
                                                        <Form.Label>Reason for Relieving</Form.Label>
                                                        <Form.Control
                                                            as="textarea" rows={2}
                                                            type="text"
                                                            placeholder="Reason"
                                                            controlId="previousCompany2_reasonForRelieving"
                                                            value={previousCompany2_reasonForRelieving}
                                                            // onChange={(event) => setPreviousCompany2_reasonForRelieving(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany2_reasonForRelieving", e.target.value)}
                                                            onChange={changeHandler}
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
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Company Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Company Name"
                                                            controlId="previousCompany3_name"
                                                            value={previousCompany3_name}
                                                            // onChange={(event) => setPreviousCompany3_name(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany3_name", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany3_name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Designation</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Designation"
                                                            controlId="previousCompany3_designation"
                                                            value={previousCompany3_designation}
                                                            // onChange={(event) => setPreviousCompany3_designation(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany3_designation", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany3_designation"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Joining date</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Date of Joining"
                                                            controlId="previousCompany3_joiningDate"
                                                            value={previousCompany3_joiningDate}
                                                            //onChange={(event) => setPreviousCompany3_joiningDate(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany3_joiningDate", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany3_joiningDate"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Relieving Date</Form.Label>
                                                        <Form.Control
                                                            type="Date"
                                                            placeholder="Date of Relieving"
                                                            controlId="prevoiusCompany3_relievingDate"
                                                            value={previousCompany3_relievingDate}
                                                            //  onChange={(event) => setPreviousCompany3_relievingDate(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany3_relievingDate", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany3_relievingDate"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Employee ID</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Employee ID"
                                                            controlId="previousCompany3_employeeId"
                                                            value={previousCompany3_employeeId}
                                                            // onChange={(event) => setPreviousCompany3_employeeId(event.target.value)}
                                                            //onChange={(e) => setField("previousCompany3_employeeId", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany3_employeeId"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Employment Type</Form.Label>
                                                        <Form.Select
                                                            type="text"
                                                            placeholder="Employment Type"
                                                            controlId="previousCompany3_typeOfEmployment"
                                                            value={previousCompany3_typeOfEmployment}
                                                            //onChange={(event) => setPreviousCompany3_typeOfEmployement(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany3_typeOfEmployement", e.target.value)}
                                                            //onChange={changeHandler}
                                                            // name="previousCompany3_typeOfEmployment"
                                                            name="previousCompany3_typeOfEmployment"
                                                        >
                                                            <option>Select</option>
                                                            <option value="Full Time Employment ">FTE(Full Time Employment)</option>
                                                            <option value="Freelancer ">Freelancer</option>
                                                            <option value="Part Time">Part Time</option>
                                                            <option value="Contract">Contract</option>
                                                            <option value="Other">Other</option>

                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" style={{ padding: 10 }} >
                                                        <Form.Label>Reason for Relieving</Form.Label>
                                                        <Form.Control
                                                            as="textarea" rows={2}
                                                            type="text"
                                                            placeholder="Reason"
                                                            controlId="previousCompany3_reasonForRelieving"
                                                            value={previousCompany3_reasonForRelieving}
                                                            // onChange={(event) => setPreviousCompany3_reasonForRelieving(event.target.value)}
                                                            // onChange={(e) => setField("previousCompany3_reasonForRelieving", e.target.value)}
                                                            //onChange={changeHandler}
                                                            name="previousCompany3_reasonForRelieving"
                                                        />
                                                    </Form.Group>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Form.Group controlId="formFile" className="mb-3" style={{ paddingTop: 20 }}>
                                        <Form.Label>Choose Your Photo</Form.Label>
                                        <Form.Control
                                            // required
                                            type="file"
                                            controlId="profilePhoto"
                                            name="profilePhoto"
                                            value={profilePhoto}
                                        // onChange={changeHandler}
                                        />
                                    </Form.Group>
                                </Row>
                                <Button style={{ backgroundColor: "#eb4509", float: "right" }} type="submit">

                                    Submit
                                </Button>
                            </Form>
                            {/* )}
                    </Formik> */}
                        </Card.Body>
                    </Card.Header></Card></Col></Row>
    )
}
export default EmployeeMasterForm;

