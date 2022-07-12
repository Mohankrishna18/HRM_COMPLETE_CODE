import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function ExperienceTab() {

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;

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


    useEffect(() => {
        axios
            .get(`/emp/getExperienceDetails/${employeeid}`)
            .then((response) => {
                setPreviousCompany1_name(response.data.data.previousCompany1_name);
                setPreviousCompany1_designation(response.data.data.previousCompany1_designation);
                setPreviousCompany1_joiningDate(response.data.data.previousCompany1_joiningDate);
                setPreviousCompany1_relievingDate(response.data.data.previousCompany1_relievingDate);
                setPreviousCompany1_employeeId(response.data.data.previousCompany1_employeeId);
                setPreviousCompany1_typeOfEmployement(response.data.data.previousCompany1_typeOfEmployment);
                setPreviousCompany1_reasonForRelieving(response.data.data.previousCompany1_reasonForRelieving);
                setPreviousCompany2_name(response.data.data.previousCompany2_name);
                setPreviousCompany2_designation(response.data.data.previousCompany2_designation);
                setPreviousCompany2_joiningDate(response.data.data.previousCompany2_joiningDate);
                setPreviousCompany2_relievingDate(response.data.data.previousCompany2_relievingDate);
                setPreviousCompany2_employeeId(response.data.data.previousCompany2_employeeId);
                setPreviousCompany2_typeOfEmployement(response.data.data.previousCompany2_typeOfEmployment);
                setPreviousCompany2_reasonForRelieving(response.data.data.previousCompany2_reasonForRelieving);
                setPreviousCompany3_name(response.data.data.previousCompany3_name);
                setPreviousCompany3_designation(response.data.data.previousCompany3_designation);
                setPreviousCompany3_joiningDate(response.data.data.previousCompany3_joiningDate);
                setPreviousCompany3_relievingDate(response.data.data.previousCompany3_relievingDate);
                setPreviousCompany3_employeeId(response.data.data.previousCompany3_employeeId);
                setPreviousCompany3_typeOfEmployement(response.data.data.previousCompany3_typeOfEmployment);
                setPreviousCompany3_reasonForRelieving(response.data.data.previousCompany3_reasonForRelieving);
            });
    }, []);

    const changeHandler = async (e) => {
        e.preventDefault();
        try{
        await axios.put(`/emp/updateExperience/${employeeid}`, {
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
        toast.success("Form Submitted Successfully");
    }
    catch(error){
        toast.error("Somethingwent Wrong");
  }
    };

    return (

        <div>
            <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 12, textAlign: "center" }}>
                    Work Experience
                </Card.Title>
            </Card>

            <Form
                onSubmit={(e) => changeHandler(e)}
                style={{ padding: 10 }}
            >

                <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 15, backgroundColor: "#FAFDD0" }}>
                    <Card.Title style={{ margin: 12, textAlign: "center" }}>
                        Experience-1
                    </Card.Title>
                </Card>
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
                    </Form.Group></Row>
                <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 15, backgroundColor: "#FAFDD0" }}>
                    <Card.Title style={{ margin: 12, textAlign: "center" }}>
                        Experience-2
                    </Card.Title>
                </Card>
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
                <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 15, backgroundColor: "#FAFDD0" }}>
                    <Card.Title style={{ margin: 12, textAlign: "center" }}>
                        Experience-3
                    </Card.Title>
                </Card>
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


                    {/* 
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
                                        </Form.Group> */}

                </Row>



                <Button
                    className="rounded-pill" md="3"
                    style={{ backgroundColor: "#eb4509", float: "right" }}
                    type="submit"
                    size="lg"
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default ExperienceTab;