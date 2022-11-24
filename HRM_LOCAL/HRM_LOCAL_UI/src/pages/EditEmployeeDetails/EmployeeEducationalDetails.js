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
import axios from "../../Uri";
import { toast } from "react-toastify";
import { BASE_URL } from "../../Constant";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function EmployeeEducationalDetails(props) {

    console.log(props.updateOnboard1);

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


  const [postgraduationType, setTypeOfPostGraduation] = useState(props.updateOnboard1.postgraduationType);
  const [postgraduationBoardOfUniversity, setPostgraduationBoardOfUniversity] =useState(props.updateOnboard1.postgraduationBoardOfUniversity);
  const [postgraduationInstituteName, setPostgraduationInstituteName] = useState(props.updateOnboard1.postgraduationInstituteName);
  const [postgraduationInstituteCity, setPostgraduationInstituteCity] =useState(props.updateOnboard1.postgraduationInstituteCity);
  const [postgraduationCourseName, setPostgraduationCourseName] = useState(props.updateOnboard1.postgraduationCourseName);
  const [postgraduationJoiningYear, setPostgraduationJoiningYear] =useState(props.updateOnboard1.postgraduationJoiningYear);
  const [postgraduationPassedYear, setPostgraduationPassedYear] = useState(props.updateOnboard1.postgraduationPassedYear);
  const [postgraduationGrade, setPostgraduationGrade] = useState(props.updateOnboard1.postgraduationGrade);
  const [graduationType, setTypeOfGraduation] = useState(props.updateOnboard1.graduationType);
  const [graduationBoardOfUniversity, setGraduationBoardOfUniversity] =useState(props.updateOnboard1.graduationBoardOfUniversity);
  const [graduationInstituteName, setGraduationInstituteName] = useState(props.updateOnboard1.graduationInstituteName);
  const [graduationInstituteCity, setGraduationInstituteCity] = useState(props.updateOnboard1.graduationInstituteCity);
  const [graduationCourseName, setGraduationCourseName] = useState(props.updateOnboard1.graduationCourseName);
  const [graduationJoiningYear, setGraduationJoiningYear] = useState(props.updateOnboard1.graduationJoiningYear);
  const [graduationPassedYear, setGraduationPassedYear] = useState(props.updateOnboard1.graduationPassedYear);
  // const [graduationJoiningYear, setGraduationJoiningYear] = useState("");
  // const [graduationPassedYear, setGraduationPassedYear] = useState("");
  const [graduationGrade, setGraduationGrade] = useState(props.updateOnboard1.graduationGrade);
  const [intermediateBoardOfUniversity, setIntermediateBoardOfUniversity] =useState(props.updateOnboard1.intermediateBoardOfUniversity);
  const [intermediateCollegeName, setIntermediateCollegeName] = useState(props.updateOnboard1.intermediateCollegeName);
  const [intermediateCollegeCity, setIntermediateCollegeCity] = useState(props.updateOnboard1.intermediateCollegeCity);
  const [intermediateCourseName, setIntermediateCourseName] = useState(props.updateOnboard1.intermediateCourseName);
  const [intermediateJoiningYear, setIntermediateJoiningYear] = useState(props.updateOnboard1.intermediateJoiningYear);
  const [intermediatePassedYear, setIntermediatePassedYear] = useState(props.updateOnboard1.intermediatePassedYear);
  const [intermediateGrade, setIntermediateGrade] = useState(props.updateOnboard1.intermediateGrade);
  const [sscBoardOfUniversity, setSscBoardOfUniversity] = useState(props.updateOnboard1.sscSchoolName);
  const [sscSchoolName, setSscSchoolName] = useState(props.updateOnboard1.sscSchoolName);
  const [sscSchoolCity, setSscSchoolCity] = useState(props.updateOnboard1.sscSchoolCity);
  const [sscCourseName, setSscCourseName] = useState(props.updateOnboard1.sscCourseName);
  const [sscJoiningYear, setSscJoiningYear] = useState(props.updateOnboard1.sscJoiningYear);
  const [sscPassedYear, setSscPassedYear] = useState(props.updateOnboard1.sscPassedYear);
  const [sscGrade, setSscGrade] = useState(props.updateOnboard1.sscGrade);
  const [sscQualification,setSscQualification]=useState(props.updateOnboard1.sscQualification);
  const [intermediateQualification,setIntermediateQualification]=useState(props.updateOnboard1.intermediateQualification);

  const [file, setFile] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByOnboardingId/${props.updateOnboard1.onboardingId}`)
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
        setIntermediateQualification(response.data.data.intermediateQualification);
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
    await axios.put(
      `/emp/updateEducationalDetailsInPreOnboarding/${props.updateOnboard1.onboardingId}`,
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
        sscQualification
      }
    );
    toast.success("Form Submitted Successfully");
    const url = `/api/post/image/${props.updateOnboard1.onboardingId}/EducationalDetails?image`;
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
  };
  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const [documents, setDocuments] = useState("");
  const loadData = () => {
    axios
      .get(`${BASE_URL}/api/get/imageByTitle/EducationalDetails/${props.updateOnboard1.onboardingId}`)
      .then((response) => {
        setDocuments(response);
        console.log(response);
      });

  }
  useEffect(() => {
    loadData();

  }, []);

  console.log(documents);

  const viewUploadFile = () => {
    // window.open(`api/get/image/${imageName}/${onboardingId}`)

    axios
      .get(`api/get/imageByTitle/EducationalDetails/${props.updateOnboard1.onboardingId}`, {
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
        <Card.Title style={{ margin: 7, textAlign: "center" }}>
          Postgraduation Details
        </Card.Title>
      </Card>

      <Form onSubmit={(e) => changeHandler(e)} style={{ padding: 10 }}>
        <Row className="mb-5">

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="span">Post Graduation Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          <Row>
                  <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                    <Form.Label>Qualification </Form.Label>
                    <Form.Select
                      // required
                      type="text"
                      placeholder="Qualification"
                      controlid="postgraduationType"
                      name="postgraduationType"
                      value={postgraduationType}
                      maxLength={50}
                      onChange={(e) => setTypeOfPostGraduation(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Master of Arts (MA)">
                        Master of Arts (MA){" "}
                      </option>
                      <option value="Master of Science (MS, MSc) ">
                        Master of Science (MS, MSc){" "}
                      </option>
                      <option value="Master of Business Administration (MBA)">
                        Master of Business Administration (MBA)
                      </option>
                      <option value="Master of Research (MRes)">
                        Master of Research (MRes){" "}
                      </option>
                      <option value="Master by Research (MPhil)">
                        Master by Research (MPhil)
                      </option>
                      <option value="Master of Studies (MSt)">
                        Master of Studies (MSt)
                      </option>
                      <option value="Master of Library Science (MLS, MLIS, MSLS)">
                        Master of Library Science (MLS, MLIS, MSLS)
                      </option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                    <Form.Label>University Name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="University Name"
                      controlid="postgraduationBoardOfUniversity"
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
                      controlid="postgraduationInstituteName"
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
                      controlid="postgraduationInstituteCity"
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
                      controlid="postgraduationCourseName"
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
                      controlid="postgraduationJoiningYear"
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
                      controlid="postgraduationPassedYear"
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
                      controlid="postgraduationGrade"
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
            <Form.Select
              required
              type="text"
              placeholder="Qualification"
              controlid="graduationType"
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
              <option value="">Select</option>
              <option value="Bachelor of Engineering">
                Bachelor of Engineering{" "}
              </option>
              <option value="Bachelor of Arts">Bachelor of Arts</option>
              <option value="Bachelor of Science">Bachelor of Science</option>
              <option value="Bachelor of Commerce">
                Bachelor of Commerce{" "}
              </option>
              <option value="Bachelor of Law">Bachelor of Law</option>
              <option value="Bachelor of Medicine (MBBS)">
                Bachelor of Medicine (MBBS)
              </option>
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
              controlid="graduationBoardOfUniversity"
              name="graduationBoardOfUniversity"
              value={graduationBoardOfUniversity}
              isInvalid={twentyfiveerror}
              maxLength={50}
              onChange={(e) => {
                setGraduationBoardOfUniversity(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                  setTwentyfiveerror("Enter valid University Name");
                }
                else {
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
              controlid="graduationInstituteName"
              name="graduationInstituteName"
              maxLength={50}
              value={graduationInstituteName}
              isInvalid={twentysixerror}
              onChange={(e) => {
                setGraduationInstituteName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-., ])*$/)) {
                  setTwentysixerror("Enter valid Institute Name");
                }
                else {
                  setTwentysixerror("");
                }
                if (graduationBoardOfUniversity === "") {
                  setTwentyfiveerror("University Name is Required");
                } else {
                  setTwentyfiveerror("");
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
              controlid="graduationInstituteCity"
              maxLength={50}
              value={graduationInstituteCity}
              isInvalid={twentysevenerror}
              //onChange={changeHandler}
              name="graduationInstituteCity"
              onChange={(e) => {
                setGraduationInstituteCity(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-0-9, ])*$/)) {
                  setTwentysevenerror("Enter valid Institute City/Town");
                }
                else {
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
                setGraduationCourseName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                  setTwentyeighterror("Enter valid course Name");
                }
                else {
                  setTwentyeighterror("");
                }
                if (graduationInstituteCity === "") {
                  setTwentysevenerror("Institute City is Required");
                } else {
                  setTwentysevenerror("");
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
              controlid="graduationJoiningYear"
              maxLength={50}
              value={graduationJoiningYear}
              isInvalid={twentynineerror}
              onChange={(e) => {
                setGraduationJoiningYear(e.target.value);
                if (graduationCourseName === "") {
                  setTwentyeighterror("Course Name is Required");
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
              controlid="graduationPassedYear"
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
            <Form.Label>Grade *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Percentage/Grade/GPA/CGPA"
              controlid="graduationGrade"
              isInvalid={thirtyoneerror}
              value={graduationGrade}
              name="graduationGrade"
              maxLength={5}
              onChange={(e) => {
                setGraduationGrade(e.target.value);
                if(!e.target.value.match(/^[a-zA-Z0-9.%-,]+(\s[a-zA-Z-, ])*$/)){
                  setThirtyoneerror("Enter valid Grade")
                }
                else{
                  setThirtyoneerror("")
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
            <Form.Select
              required
              type="text"
              placeholder="Qualification"
              controlid="graduationType"
              maxLength={50}
              name="graduationType"
              value={intermediateQualification}
              isInvalid={fourtysix}
              onChange={(e) => {
                setIntermediateQualification(e.target.value);
               
              }}
            >
              <option value="">Select</option>
              <option value="Intermediate">Intermediate</option>
              <option value="12th Grade">12th Grade</option>
              <option value="Other">Other</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {fourtysix}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Board * </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Board"
              controlid="intermediateBoardOfUniversity"
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
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                  setThirtytwoerror("Enter valid Board");
                }
                else {
                  setThirtytwoerror("");
                }
                if (graduationGrade === "") {
                  setThirtyoneerror("Grade is Required");
                } else {
                  setThirtyoneerror("");
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
              controlid="intermediateCollegeName"
              value={intermediateCollegeName}
              isInvalid={thirtythreeerror}
              maxLength={50}
              onChange={(e) => {
                setIntermediateCollegeName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-., ])*$/)) {
                  setThirtythreeerror("Enter Valid School/College Name");
                }
                else {
                  setThirtythreeerror("");
                }
                if (intermediateBoardOfUniversity === "") {
                  setThirtytwoerror("University Name is Required");
                } else {
                  setThirtytwoerror("");
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
              controlid="intermediateCollegeCity"
              value={intermediateCollegeCity}
              isInvalid={thirtyfourerror}
              maxLength={50}
              onChange={(e) => {
                setIntermediateCollegeCity(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-0-9, ])*$/)) {
                  setThirtyfourerror("Enter valid City/Town");
                }
                else {
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
            <Form.Label>Course Name*</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Course Name"
              name="intermediateCourseName"
              controlid="intermediateCourseName"
              maxLength={50}
              value={intermediateCourseName}
              isInvalid={thirtyfiveerror}
              // onChange={changeHandler}
              onChange={(e) => {
                setIntermediateCourseName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                  setThirtyfiveerror("Enter Valid Course Name");
                }
                else {
                  setThirtyfiveerror("");
                }
                if (intermediateCollegeCity === "") {
                  setThirtyfourerror("College City is Required");
                } else {
                  setThirtyfourerror("");
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
              controlid="intermediateJoiningYear"
              name="intermediateJoiningYear"
              value={intermediateJoiningYear}
              isInvalid={thirtysixerror}
              onChange={(e) => {
                setIntermediateJoiningYear(e.target.value);
                if (intermediateCourseName === "") {
                  setThirtyfiveerror("Cource Name is Required");
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
              controlid="intermediatePassedYear"
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
            <Form.Label>Grade *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Percentage/Grade/GPA/CGPA"
              controlid="intermediateGrade"
              maxLength={5}
              value={intermediateGrade}
              isInvalid={thirtyeighterror}
              name="intermediateGrade"
              onChange={(e) => {
                setIntermediateGrade(e.target.value);
                if(!e.target.value.match(/^[a-zA-Z0-9.%-,]+(\s[a-zA-Z-, ])*$/)){
                  setThirtyeighterror("Enter valid Grade")
                }
                else{
                  setThirtyeighterror("")
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
            <Form.Select
              required
              type="text"
              placeholder="Qualification"
              controlid="graduationType"
              maxLength={50}
              name="graduationType"
              value={sscQualification}
              isInvalid={fourtyseven}
              onChange={(e) => 
                setSscQualification(e.target.value)}
                
            >
            <option value="">Select</option>
            <option value="SSC">SSC</option>
            <option value="10th Grade">10th Grade</option>
            <option value="Other">Other</option>
             
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {fourtyseven}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Board *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Board"
              controlid="sscBoardOfUniversity"
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
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                  setThirtynineerror("Enter Valid Board");
                }
                else {
                  setThirtynineerror("");
                }
                if (intermediateGrade === "") {
                  setThirtyeighterror("Grade is Required");
                } else {
                  setThirtyeighterror("");
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
              controlid="sscSchoolName"
              maxLength={50}
              value={sscSchoolName}
              isInvalid={fourty}
              onChange={(e) => {
                setSscSchoolName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-., ])*$/)) {
                  setFourty("Enter Valid School Name");
                }
                else {
                  setFourty("");
                }
                
                if (sscBoardOfUniversity === "") {
                  setThirtynineerror("University Name is Required");
                } else {
                  setThirtynineerror("");
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
              controlid="sscSchoolCity"
              maxLength={50}
              value={sscSchoolCity}
              isInvalid={fourtyone}
              name="sscSchoolCity"
              onChange={(e) => {
                setSscSchoolCity(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-0-9, ])*$/)) {
                  setFourtyone("Enter Valid School City/Town");
                }
                else {
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
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Course Name *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Course Name"
              controlid="sscCourseName"
              maxLength={50}
              value={sscCourseName}
              isInvalid={fourtytwo}
              name="sscCourseName"
              onChange={(e) => {
                setSscCourseName(e.target.value);
                if (!e.target.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                  setFourtytwo("Enter Valid Course Name");
                }
                else {
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
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Joining Year *</Form.Label>
            <Form.Control
              //required
              type="date"
              name="sscJoiningYear"
              placeholder="Joining Year"
              controlid="sscJoiningYear"
              value={sscJoiningYear}
              isInvalid={fourtythree}
              onChange={(e) => {
                setSscJoiningYear(e.target.value);
                if (sscCourseName === "") {
                  setFourtytwo("City Name is Required");
                } else {
                  setFourtytwo("");
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
              controlid="sscPassedYear"
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
            <Form.Label>Grade *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Percentage/Grade/GPA/CGPA"
              controlid="sscGrade"
              value={sscGrade}
              maxLength={5}
              name="sscGrade"
              isInvalid={fourtyfive}
              onChange={(e) => {
                setSscGrade(e.target.value);
                if(!e.target.value.match(/^[a-zA-Z0-9.%-,]+(\s[a-zA-Z-, ])*$/)){
                  setFourtyfive("Enter valid Grade")
                }
                else{
                  setFourtyfive("")
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
              <Form.Group controlid="formFileMultiple">
                <Form.Label>
                  <p className="fw-bold">
                    Please Upload Your Educational Certificates(PG,UG,12th,10th in PDF format only)
                  </p>
                </Form.Label>
                <Form.Control type="file" onChange={handleChange} />
              </Form.Group>
            </Form.Group>
            {documents.statusText === "OK" ? (<Col>
              <a href={`${BASE_URL}/api/get/imageByTitle/EducationalDetails/${onboardingId}`}>
              Educational Documents
              </a>
            </Col>) : (<></>)
            }
            
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
          Submit
        </Button>
              </Col>
            </Row>
         
          </Row>
        </Row>

       
      </Form>
    </div>
  );

} 

export default EmployeeEducationalDetails;
