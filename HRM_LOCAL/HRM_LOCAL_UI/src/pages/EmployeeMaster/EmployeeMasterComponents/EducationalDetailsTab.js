import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  Modal,
} from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../Constant";
import { useParams } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function EducationalDetailsTab() {
    const params=useParams();
    console.log(params.id);

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;

  // const userData = sessionStorage.getItem("userdata");
  // const userData1 = JSON.parse(userData);
  // const onboardingId = userData1.data.onboardingId;

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
  const [sscQualification, setSscQualification] = useState("");
  const [intermediateQualification, setIntermediateQualification] =
    useState("");

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
  const [file, setFile] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    axios
      .get(`/emp/getEducationDetails/${employeeid}`)
      .then((response) => {
        setTypeOfPostGraduation(response.data.data.postgraduationType),
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
        setTypeOfGraduation(response.data.data.graduationType);
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
        setIntermediateQualification(
          response.data.data.intermediateQualification
        );
        setSscQualification(response.data.data.sscQualification);
      });
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const changeHandler = async (e) => {
    e.preventDefault();
    if (
      twentyfourerror === "" &&
      twentyfiveerror === "" &&
      twentysixerror === "" &&
      twentysevenerror === "" &&
      twentyeighterror === "" &&
      twentynineerror === "" &&
      thirtyerror === "" &&
      thirtyoneerror === "" &&
      thirtytwoerror === "" &&
      thirtythreeerror === "" &&
      thirtyfourerror === "" &&
      thirtyfiveerror === "" &&
      thirtysixerror === "" &&
      thirtysevenerror === "" &&
      thirtyeighterror === "" &&
      thirtynineerror === "" &&
      fourty === "" &&
      fourtyone === "" &&
      fourtytwo === "" &&
      fourtythree === "" &&
      fourtyfour === "" &&
      fourtyfive === "" &&
      fourtysix === "" &&
      fourtyseven === ""
    ) {
      await axios.put(
        `/emp/updateEducationalDetails/${employeeid}`,
        {
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
          intermediateQualification,
          sscQualification,
        }
      );
      toast.success("Educational Details Submitted Successfully");
      const url = `/api/post/image/${employeeid}/EducationalDetails?image`;
      const formData = new FormData();
      formData.append("image", file);
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
          setImageName(response.data.imageName);
          loadData();
          // setUrl(response.data.url);
        })
        .catch((error) => {
          console.log("File is Not Upload");
          console.log(error);
        });
    } else {
      console.log("Data Not posted");
      toast.error("Form Not Submitted");
    }
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const [documents, setDocuments] = useState("");
  const loadData = () => {
    axios
      .get(
        `${BASE_URL}/api/get/imageByTitle/EducationalDetails/${employeeid}`
      )
      .then((response) => {
        setDocuments(response);
        console.log(response);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  console.log(documents);

  const viewUploadFile = () => {
    // window.open(`api/get/image/${imageName}/${onboardingId}`)

    axios
      .get(`api/get/imageByTitle/EducationalDetails/${employeeid}`, {
        contentType: "application/pdf",
      })
      .then((res) => {
        console.log(res.data.url);
        setImageName(res.data);
        // setUrl(res.data.url);
        saveAs(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Card
        style={{
          marginLeft: 8,
          marginRight: 8,
          marginTop: 0,
          backgroundColor: "#FAFDD0",
        }}
      >
        <Card.Title style={{ margin: 7, textAlign: "center",color:"black" }}>
          Postgraduation Details
        </Card.Title>
      </Card>

      <Form onSubmit={(e) => changeHandler(e)} style={{ padding: 10,color:"black"  }}>
        <Row className="mb-5">

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Postgraduation Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Row>
                  <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                    <Form.Label>Qualification </Form.Label>
                    <Form.Control
                      // required
                      type="text"
                      placeholder="Qualification"
                      controlId="postgraduationType"
                      name="postgraduationType"
                      value={postgraduationType}
                      maxLength={50}
                      onChange={(e) => setTypeOfPostGraduation(e.target.value)}
                    />
                      
                 
                  </Form.Group>
                  <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                    <Form.Label>Borad </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Borad"
                      controlId="postgraduationBoardOfUniversity"
                      name="postgraduationBoardOfUniversity"
                      maxLength={50}
                      value={postgraduationBoardOfUniversity}
                      onChange={(e) =>
                        setPostgraduationBoardOfUniversity(e.target.value)
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
                    <Form.Label>Specialization </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Specialization"
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
                        setPostgraduationGrade(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Row>
          </Typography>
        </AccordionDetails>
      </Accordion>


          <Card
            style={{
              marginLeft: 8,
              marginRight: 8,
              marginTop: 20,
              backgroundColor: "#FAFDD0",
            }}
          >
            <Card.Title style={{ margin: 7, textAlign: "center" }}>
              Graduation Details
            </Card.Title>
          </Card>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Qualification *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Qualification"
              controlId="graduationType"
              maxLength={50}
              name="graduationType"
              value={graduationType}
              isInvalid={twentyfourerror}
              onChange={(e) => {
                setTypeOfGraduation(e.target.value);
                if (branch === "") {
                  setTwentythreerror("Branch is Required");
                } else {
                  setTwentythreerror("");
                }
              }}
            >
              
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {twentyfourerror}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Board </Form.Label>
            <Form.Control
             
              type="text"
              placeholder="Board"
              controlId="graduationBoardOfUniversity"
              name="graduationBoardOfUniversity"
              value={graduationBoardOfUniversity}
              isInvalid={twentyfiveerror}
              maxLength={50}
              onChange={(e) => {
                setGraduationBoardOfUniversity(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)
                ) {
                  setTwentyfiveerror("Enter valid University Name");
                } else {
                  setTwentyfiveerror("");
                }
                if (graduationType === "") {
                  setTwentyfourerror("Type of Graduation is Required");
                } else {
                  setTwentyfourerror("");
                }
              }}
            ></Form.Control>
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
                setGraduationInstituteName(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-., ])*$/)
                ) {
                  setTwentysixerror("Enter valid Institute Name");
                } else {
                  setTwentysixerror("");
                }
                
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {twentysixerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Institute City/Town </Form.Label>
            <Form.Control
           
              type="text"
              placeholder="Institute City"
              controlId="graduationInstituteCity"
              maxLength={50}
              value={graduationInstituteCity}
              isInvalid={twentysevenerror}
              //onChange={changeHandler}
              name="graduationInstituteCity"
              onChange={(e) => {
                setGraduationInstituteCity(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-0-9, ])*$/)
                ) {
                  setTwentysevenerror("Enter valid Institute City/Town");
                } else {
                  setTwentysevenerror("");
                }
                if (graduationInstituteName === "") {
                  setTwentysixerror("Institute Name is Required");
                } else {
                  setTwentysixerror("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {twentysevenerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Specialization *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Specialization"
              name="graduationCourseName"
              maxLength={50}
              value={graduationCourseName}
              isInvalid={twentyeighterror}
              onChange={(e) => {
                setGraduationCourseName(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)
                ) {
                  setTwentyeighterror("Enter valid Specialization");
                } else {
                  setTwentyeighterror("");
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
                setGraduationJoiningYear(e.target.value);
                if (graduationCourseName === "") {
                  setTwentyeighterror("Specialization is Required");
                } else {
                  setTwentyeighterror("");
                }
              }}
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
                setGraduationPassedYear(e.target.value);
                if (graduationJoiningYear === "") {
                  setTwentynineerror("Joining Year is Required");
                } else {
                  setTwentynineerror("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {thirtyerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Grade </Form.Label>
            <Form.Control
            
              type="text"
              placeholder="Percentage/Grade/GPA/CGPA"
              controlId="graduationGrade"
              isInvalid={thirtyoneerror}
              value={graduationGrade}
              name="graduationGrade"
              maxLength={5}
              onChange={(e) => {
                setGraduationGrade(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z0-9.%-,]+(\s[a-zA-Z-, ])*$/)
                ) {
                  setThirtyoneerror("Enter valid Grade");
                } else {
                  setThirtyoneerror("");
                }
                if (graduationPassedYear === "") {
                  setThirtyerror("Passed-out Year is Required");
                } else {
                  setThirtyerror("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {thirtyoneerror}
            </Form.Control.Feedback>
          </Form.Group>

          <Card
            style={{
              marginLeft: 8,
              marginRight: 8,
              marginTop: 20,
              backgroundColor: "#FAFDD0",
            }}
          >
            <Card.Title style={{ margin: 7, textAlign: "center" }}>
              12th Grade/Intermediate Details
            </Card.Title>
          </Card>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Qualification *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Qualification"
              controlId="graduationType"
              maxLength={50}
              name="graduationType"
              value={intermediateQualification}
              isInvalid={fourtysix}
              onChange={(e) => {
                setIntermediateQualification(e.target.value);
              }}
            >
              
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {fourtysix}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Board </Form.Label>
            <Form.Control

              type="text"
              placeholder="Board"
              controlId="intermediateBoardOfUniversity"
              value={intermediateBoardOfUniversity}
              isInvalid={thirtytwoerror}
              maxLength={50}
              onChange={(e) => {
                setIntermediateBoardOfUniversity(e.target.value);
                if (!setIntermediateQualification) {
                  setFourtysix("Qualification is Required");
                } else {
                  setFourtysix("");
                }
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)
                ) {
                  setThirtytwoerror("Enter valid Board");
                } else {
                  setThirtytwoerror("");
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
                setIntermediateCollegeName(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-., ])*$/)
                ) {
                  setThirtythreeerror("Enter Valid School/College Name");
                } else {
                  setThirtythreeerror("");
                }
                
              }}
              name="intermediateCollegeName"
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {thirtythreeerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>School/College City/Town </Form.Label>
            <Form.Control
            
              type="text"
              placeholder="School/College City"
              controlId="intermediateCollegeCity"
              value={intermediateCollegeCity}
              isInvalid={thirtyfourerror}
              maxLength={50}
              onChange={(e) => {
                setIntermediateCollegeCity(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-0-9, ])*$/)
                ) {
                  setThirtyfourerror("Enter valid City/Town");
                } else {
                  setThirtyfourerror("");
                }
                if (intermediateCollegeName === "") {
                  setThirtythreeerror("College Name is Required");
                } else {
                  setThirtythreeerror("");
                }
              }}
              name="intermediateCollegeCity"
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {thirtyfourerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Specialization *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Specialization"
              name="intermediateCourseName"
              controlId="intermediateCourseName"
              maxLength={50}
              value={intermediateCourseName}
              isInvalid={thirtyfiveerror}
              // onChange={changeHandler}
              onChange={(e) => {
                setIntermediateCourseName(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)
                ) {
                  setThirtyfiveerror("Enter Valid Specialization");
                } else {
                  setThirtyfiveerror("");
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
                setIntermediateJoiningYear(e.target.value);
                if (intermediateCourseName === "") {
                  setThirtyfiveerror("Specialization is Required");
                } else {
                  setThirtyfiveerror("");
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
                setIntermediatePassedYear(e.target.value);
                if (intermediateJoiningYear === "") {
                  setThirtysixerror("Joining year is Required");
                } else {
                  setThirtysixerror("");
                }
              }}
              name="intermediatePassedYear"
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {thirtysevenerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Grade </Form.Label>
            <Form.Control
           
              type="text"
              placeholder="Percentage/Grade/GPA/CGPA"
              controlId="intermediateGrade"
              maxLength={5}
              value={intermediateGrade}
              isInvalid={thirtyeighterror}
              name="intermediateGrade"
              onChange={(e) => {
                setIntermediateGrade(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z0-9.%-,]+(\s[a-zA-Z-, ])*$/)
                ) {
                  setThirtyeighterror("Enter valid Grade");
                } else {
                  setThirtyeighterror("");
                }

                if (intermediatePassedYear === "") {
                  setThirtysevenerror("Passed-out year is Required");
                } else {
                  setThirtysevenerror("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {thirtyeighterror}
            </Form.Control.Feedback>
          </Form.Group>

          <Card
            style={{
              marginLeft: 8,
              marginRight: 8,
              marginTop: 15,
              backgroundColor: "#FAFDD0",
            }}
          >
            <Card.Title style={{ margin: 7, textAlign: "center" }}>
              10th Grade details
            </Card.Title>
          </Card>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Qualification *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Qualification"
              controlId="graduationType"
              maxLength={50}
              name="graduationType"
              value={sscQualification}
              isInvalid={fourtyseven}
              onChange={(e) => setSscQualification(e.target.value)}
            >
             
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {fourtyseven}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Board </Form.Label>
            <Form.Control
              
              type="text"
              placeholder="Board"
              controlId="sscBoardOfUniversity"
              maxLength={50}
              value={sscBoardOfUniversity}
              isInvalid={thirtynineerror}
              onChange={(e) => {
                setSscBoardOfUniversity(e.target.value);
                if (sscQualification === "") {
                  setFourtyseven("Qualification is Required");
                } else {
                  setFourtyseven("");
                }
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)
                ) {
                  setThirtynineerror("Enter Valid Board");
                } else {
                  setThirtynineerror("");
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
                setSscSchoolName(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-., ])*$/)
                ) {
                  setFourty("Enter Valid School Name");
                } else {
                  setFourty("");
                }
              }}
              name="sscSchoolName"
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {fourty}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>School City/Town </Form.Label>
            <Form.Control
          
              type="text"
              placeholder="School City"
              controlId="sscSchoolCity"
              maxLength={50}
              value={sscSchoolCity}
              isInvalid={fourtyone}
              name="sscSchoolCity"
              onChange={(e) => {
                setSscSchoolCity(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-0-9, ])*$/)
                ) {
                  setFourtyone("Enter Valid School City/Town");
                } else {
                  setFourtyone("");
                }
                if (sscSchoolName === "") {
                  setFourty("School Name is Required");
                } else {
                  setFourty("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {fourtyone}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Specialization *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Specialization"
              controlId="sscCourseName"
              maxLength={50}
              value={sscCourseName}
              isInvalid={fourtytwo}
              name="sscCourseName"
              onChange={(e) => {
                setSscCourseName(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)
                ) {
                  setFourtytwo("Enter Valid Specialization");
                } else {
                  setFourtytwo("");
                }
                if (sscSchoolCity === "") {
                  setFourtyone("City Name is Required");
                } else {
                  setFourtyone("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {fourtytwo}
            </Form.Control.Feedback>
          </Form.Group> */}
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
                setSscJoiningYear(e.target.value);
                
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
                setSscPassedYear(e.target.value);
                if (sscJoiningYear === "") {
                  setFourtythree("Joining year is Required");
                } else {
                  setFourtythree("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {fourtyfour}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Grade </Form.Label>
            <Form.Control
          
              type="text"
              placeholder="Percentage/Grade/GPA/CGPA"
              controlId="sscGrade"
              value={sscGrade}
              maxLength={5}
              name="sscGrade"
              isInvalid={fourtyfive}
              onChange={(e) => {
                setSscGrade(e.target.value);
                if (
                  !e.target.value.match(/^[a-zA-Z0-9.%-,]+(\s[a-zA-Z-, ])*$/)
                ) {
                  setFourtyfive("Enter valid Grade");
                } else {
                  setFourtyfive("");
                }
                if (sscPassedYear === "") {
                  setFourtyfour("Passed-out year is Required");
                } else {
                  setFourtyfour("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {fourtyfive}
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Group controlId="formFileMultiple">
                <Form.Label>
                  <p class="fw-bold">
                    Please Upload Your Educational Certificates(PG,UG,12th,10th
                    in PDF format only)
                  </p>
                </Form.Label>
                <Form.Control type="file" onChange={handleChange} />
              </Form.Group>
            </Form.Group>
            {/* {documents.statusText === "OK" ? ( */}
              {/* <Col> */}
                <a
                  href={`${BASE_URL}/api/get/imageByTitle/EducationalDetails/${employeeid}`}
                >
                  Educational Documents
                </a>
              {/* </Col>
            ) : (
              <></>
            )} */}
          </Row>
          <Row>
            <Row>
              <Col>
                <Button
                  className="rounded-pill"
                  md="3"
                  style={{ backgroundColor: "#f5896e",
                  borderColor: "#f5896e", float: "right" }}
                  type="submit"
                  size="lg"
                >
                  Next
                </Button>
              </Col>
            </Row>
          </Row>
        </Row>
      </Form>
    </div>
  );
} //comment

export default EducationalDetailsTab;
