import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button, Accordion } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function EducationalDetailsTab() {

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
            .get(`/emp/getEducationDetails/${employeeid}`)
            .then((response) => {
                setTypeOfPostGraduation(response.data.data.postgraduationType)
                setPostgraduationBoardOfUniversity(response.data.data.postgraduationBoardOfUniversity);
                setPostgraduationInstituteName(response.data.data.postgraduationInstituteName);
                setPostgraduationInstituteCity(response.data.data.postgraduationInstituteCity);
                setPostgraduationCourseName(response.data.data.postgraduationCourseName);
                setPostgraduationJoiningYear(response.data.data.postgraduationJoiningYear);
                setPostgraduationPassedYear(response.data.data.postgraduationPassedYear);
                setPostgraduationGrade(response.data.data.postgraduationGrade);
                setGraduationBoardOfUniversity(response.data.data.graduationBoardOfUniversity);
                setTypeOfGraduation(response.data.data.graduationType)
                setGraduationInstituteName(response.data.data.graduationInstituteName);
                setGraduationInstituteCity(response.data.data.graduationInstituteCity);
                setGraduationCourseName(response.data.data.graduationCourseName);
                setGraduationJoiningYear(response.data.data.graduationJoiningYear);
                setGraduationPassedYear(response.data.data.graduationPassedYear);
                setGraduationGrade(response.data.data.graduationGrade);
                setIntermediateBoardOfUniversity(response.data.data.intermediateBoardOfUniversity);
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
            });
    }, []);

    const changeHandler = async (e) => {
        e.preventDefault();
        await axios.put(`/emp/updateEducationalDetails/${employeeid}`, {
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

        });
        toast.success("Form Submitted Successfully");

    };

    return (

        <div>
            <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 12, textAlign: "center" }}>
                    Educational Details
                </Card.Title>
            </Card>

            <Form
                onSubmit={(e) => changeHandler(e)}
                style={{ padding: 10 }}
            >
                <Row className="mb-5">
                <Card style={{ marginLeft: 0, marginRight: 0, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 12, textAlign: "center" }}>
                    Postgraduation Details
                </Card.Title>
            </Card>
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Post Graduation</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                        <Form.Label>Type of Post Graduation *</Form.Label>
                                        <Form.Select
                                            required
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

                                                // if (postgraduationGrade > maxLength) {
                                                //     setElevenErrors("Length of grade should be less then 5 characters");
                                                // }
                                            }}

                                        />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Card
                        style={{ marginLeft: 8, marginRight: 0, marginTop: 20, backgroundColor: "#FAFDD0" }}
                    >
                        <Card.Title style={{ margin: 12, textAlign: "center" }}>
                            Graduation Details
                        </Card.Title>
                    </Card>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Type of Graduation *</Form.Label>
                        <Form.Select
                            required
                            type="text"
                            placeholder="Type Of Graduation"
                            controlId="graduationType"
                            maxLength={50}
                            name="graduationType"
                            value={graduationType}
                            isInvalid={twentyfourerror}
                            onChange={(e) => {
                                setTypeOfGraduation(
                                    e.target.value)
                                if (branch === "") {
                                    setTwentythreerror("Branch is Required");
                                }
                                else {
                                    setTwentythreerror("")
                                }
                            }}
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
                        <Form.Control.Feedback type="invalid">
                            {twentyfourerror}
                        </Form.Control.Feedback>
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
                            isInvalid={twentyfiveerror}
                            maxLength={50}

                            onChange={(e) => {
                                setGraduationBoardOfUniversity(e.target.value)
                                if (graduationType === "") {
                                    setTwentyfourerror("Type of Graduation is Required");
                                }
                                else {
                                    setTwentyfourerror("")
                                }
                            }
                            }
                        >
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentyfiveerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Institute Name *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Institute Name "
                            controlId="graduationInstituteName"
                            name="graduationInstituteName"
                            maxLength={50}
                            value={graduationInstituteName}
                            isInvalid={twentysixerror}
                            onChange={(e) => {
                                setGraduationInstituteName(e.target.value)
                                if (graduationBoardOfUniversity === "") {
                                    setTwentyfiveerror("University Name is Required");
                                }
                                else {
                                    setTwentyfiveerror("")
                                }
                            }}

                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentysixerror}
                        </Form.Control.Feedback>
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
                            isInvalid={twentysevenerror}

                            //onChange={changeHandler}
                            name="graduationInstituteCity"
                            onChange={(e) => {
                                setGraduationInstituteCity(e.target.value)
                                if (graduationInstituteName === "") {
                                    setTwentysixerror("Institute Name is Required");
                                }
                                else {
                                    setTwentysixerror("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentysevenerror}
                        </Form.Control.Feedback>
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
                            isInvalid={twentyeighterror}
                            onChange={(e) => {
                                setGraduationCourseName(e.target.value)
                                if (graduationInstituteCity === "") {
                                    setTwentysevenerror("Institute City is Required");
                                }
                                else {
                                    setTwentysevenerror("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentyeighterror}
                        </Form.Control.Feedback>
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
                            isInvalid={twentynineerror}
                            onChange={(e) => {
                                setGraduationJoiningYear(e.target.value)
                                if (graduationCourseName === "") {
                                    setTwentyeighterror("Course Name is Required");
                                }
                                else {
                                    setTwentyeighterror("")
                                }
                            }
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentynineerror}
                        </Form.Control.Feedback>
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
                            isInvalid={thirtyerror}
                            onChange={(e) => {
                                setGraduationPassedYear(e.target.value)
                                if (graduationJoiningYear === "") {
                                    setTwentynineerror("Joining Year is Required");
                                }
                                else {
                                    setTwentynineerror("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtyerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Grade *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Percentage/Grade/GPA/CGPA"
                            controlId="graduationGrade"
                            isInvalid={thirtyoneerror}
                            value={graduationGrade}
                            name="graduationGrade"
                            maxLength={5}
                            onChange={(e) => {
                                setGraduationGrade(e.target.value)
                                if (graduationPassedYear === "") {
                                    setThirtyerror("Passed-out Year is Required");
                                }
                                else {
                                    setThirtyerror("")
                                }
                            }}

                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtyoneerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Card
                        style={{ marginLeft: 8, marginRight: 8, marginTop: 20, backgroundColor: "#FAFDD0" }}
                    >
                        <Card.Title style={{ margin: 12, textAlign: "center" }}>
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
                            isInvalid={thirtytwoerror}
                            maxLength={50}
                            onChange={(e) => {
                                setIntermediateBoardOfUniversity(e.target.value)
                                if (graduationGrade === "") {
                                    setThirtyoneerror("Grade is Required");
                                }
                                else {
                                    setThirtyoneerror("")
                                }
                            }}
                            name="intermediateBoardOfUniversity"

                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtytwoerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>School/College Name *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="School/College Name "
                            controlId="intermediateCollegeName"
                            value={intermediateCollegeName}
                            isInvalid={thirtythreeerror}
                            maxLength={50}
                            onChange={(e) => {
                                setIntermediateCollegeName(e.target.value)
                                if (intermediateBoardOfUniversity === "") {
                                    setThirtytwoerror("University Name is Required");
                                }
                                else {
                                    setThirtytwoerror("")
                                }
                            }}
                            name="intermediateCollegeName"
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtythreeerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>School/College City/Town *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="School/College City"
                            controlId="intermediateCollegeCity"
                            value={intermediateCollegeCity}
                            isInvalid={thirtyfourerror}
                            maxLength={50}
                            onChange={(e) => {
                                setIntermediateCollegeCity(e.target.value)
                                if (intermediateCollegeName === "") {
                                    setThirtythreeerror("College Name is Required");
                                }
                                else {
                                    setThirtythreeerror("")
                                }
                            }}
                            name="intermediateCollegeCity"
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtyfourerror}
                        </Form.Control.Feedback>
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
                            isInvalid={thirtyfiveerror}
                            // onChange={changeHandler}
                            onChange={(e) => {
                                setIntermediateCourseName(e.target.value)
                                if (intermediateCollegeCity === "") {
                                    setThirtyfourerror("College City is Required");
                                }
                                else {
                                    setThirtyfourerror("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtyfiveerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Joining Year *</Form.Label>
                        <Form.Control
                            //required
                            type="date"
                            placeholder="Joining Year"
                            controlId="intermediateJoiningYear"
                            name="intermediateJoiningYear"
                            value={intermediateJoiningYear}
                            isInvalid={thirtysixerror}
                            onChange={(e) => {
                                setIntermediateJoiningYear(e.target.value)
                                if (intermediateCourseName === "") {
                                    setThirtyfiveerror("Cource Name is Required");
                                }
                                else {
                                    setThirtyfiveerror("")
                                }
                            }}

                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtysixerror}
                        </Form.Control.Feedback>
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
                            isInvalid={thirtysevenerror}
                            onChange={(e) => {
                                setIntermediatePassedYear(e.target.value)
                                if (intermediateJoiningYear === "") {
                                    setThirtysixerror("Joining year is Required");
                                }
                                else {
                                    setThirtysixerror("")
                                }
                            }}
                            name="intermediatePassedYear"
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtysevenerror}
                        </Form.Control.Feedback>
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
                            isInvalid={thirtyeighterror}
                            name="intermediateGrade"
                            onChange={(e) => {
                                setIntermediateGrade(e.target.value)

                                if (intermediatePassedYear === "") {
                                    setThirtysevenerror("Passed-out year is Required");
                                }
                                else {
                                    setThirtysevenerror("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtyeighterror}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Card
                        style={{ marginLeft: 8, marginRight: 8, marginTop: 15, backgroundColor: "#FAFDD0" }}
                    >
                        <Card.Title style={{ margin: 12, textAlign: "center" }}>
                            10th Grade details
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
                            isInvalid={thirtynineerror}
                            onChange={(e) => {
                                setSscBoardOfUniversity(e.target.value)
                                if (intermediateGrade === "") {
                                    setThirtyeighterror("Grade is Required");
                                }
                                else {
                                    setThirtyeighterror("")
                                }
                            }}
                            name="sscBoardOfUniversity"
                        //isInvalid={!!errors.sscBoardOfUniversity}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {thirtynineerror}
                        </Form.Control.Feedback>
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
                            isInvalid={fourty}
                            onChange={(e) => {
                                setSscSchoolName(e.target.value)
                                if (sscBoardOfUniversity === "") {
                                    setThirtynineerror("University Name is Required");
                                }
                                else {
                                    setThirtynineerror("")
                                }
                            }}
                            name="sscSchoolName"
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {fourty}
                        </Form.Control.Feedback>
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
                            isInvalid={fourtyone}
                            name="sscSchoolCity"
                            onChange={(e) => {
                                setSscSchoolCity(e.target.value)
                                if (sscSchoolName === "") {
                                    setFourty("School Name is Required");
                                }
                                else {
                                    setFourty("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {fourtyone}
                        </Form.Control.Feedback>
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
                            isInvalid={fourtytwo}
                            name="sscCourseName"
                            onChange={(e) => {
                                setSscCourseName(e.target.value)
                                if (sscSchoolCity === "") {
                                    setFourtyone("City Name is Required");
                                }
                                else {
                                    setFourtyone("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {fourtytwo}
                        </Form.Control.Feedback>
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
                            isInvalid={fourtythree}
                            onChange={(e) => {
                                setSscJoiningYear(e.target.value)
                                if (sscCourseName === "") {
                                    setFourtytwo("City Name is Required");
                                }
                                else {
                                    setFourtytwo("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {fourtythree}
                        </Form.Control.Feedback>
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
                            isInvalid={fourtyfour}
                            onChange={(e) => {
                                setSscPassedYear(e.target.value)
                                if (sscJoiningYear === "") {
                                    setFourtythree("Joining year is Required");
                                }
                                else {
                                    setFourtythree("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {fourtyfour}
                        </Form.Control.Feedback>
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
                            isInvalid={fourtyfive}
                            onChange={(e) => {
                                setSscGrade(e.target.value)
                                if (sscPassedYear === "") {
                                    setFourtyfour("Passed-out year is Required");
                                }
                                else {
                                    setFourtyfour("")
                                }
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {fourtyfive}
                        </Form.Control.Feedback>
                    </Form.Group>
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
export default EducationalDetailsTab;
