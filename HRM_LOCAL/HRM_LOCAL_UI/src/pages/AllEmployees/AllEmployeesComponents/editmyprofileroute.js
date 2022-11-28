import React, { useEffect, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Accordion, Button, Card, Form, InputGroup, Tabs } from "react-bootstrap";
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
// import PersonalDetailsTab from "../../EmployeeMaster/EmployeeMasterComponents/PersonalDetailsTab";
// import AddressTab from "../../EmployeeMaster/EmployeeMasterComponents/AddressTab";
// import AditionalDetailsTab from "../../EmployeeMaster/EmployeeMasterComponents/AdditionalDetailsTab";
// import EmploymentDetailsTab from "../../EmployeeMaster/EmployeeMasterComponents/EmploymentDetailsTab";
// import EducationalDetailsTab from "../../EmployeeMaster/EmployeeMasterComponents/EducationalDetailsTab";
// import ExperienceTab from "../../EmployeeMaster/EmployeeMasterComponents/ExperienceTab";
// import ProjectsTab from "../../EmployeeMaster/EmployeeMasterComponents/ProjectsTab";
import { FiArrowLeftCircle } from "react-icons/fi";

import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaBookReader, FaBusinessTime, FaGraduationCap, FaRegAddressCard } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import { TiBusinessCard } from 'react-icons/ti';
import { GrUserExpert } from "react-icons/gr";
import { VscProject } from "react-icons/vsc";
import { AiOutlineProject } from 'react-icons/ai';
import ProfilePersonalDetailsTab from "../../MyProfile/MyProfileComponents/ProfilePersonalDetailsTab";
import ProfileAddressTab from "../../MyProfile/MyProfileComponents/ProfileAddressTab";
import ProfileAdditionalDetailsTab from "../../MyProfile/MyProfileComponents/ProfileAdditionalDetsilsTab";
import ProfileEmploymentDetailsTab from "../../MyProfile/MyProfileComponents/ProfileEmploymentDetailsTab";
import ProfileEducationalDetailsTab from "../../MyProfile/MyProfileComponents/ProfileEducationalDetailsTab";
import ProfileExperienceTab from "../../MyProfile/MyProfileComponents/ProfileExperienceTab";
import ProfileProjectTab from "../../MyProfile/MyProfileComponents/ProfileProjectTab";

function EmployeeMasterForms(props) {
    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;
    let history = useHistory();

    const localitem = localStorage.getItem('item')
    console.log(localitem)

    const[profile,setProfile] = useState(localitem);
    console.log(profile)
    
    // const navigate = useNavigate();
  
    function handleClick() {
        history.push("/");
      }

    function fnGoBack() {
        history.push("/app/dashboard");
    } 

    const coursesPage = () => {
        history.push("/allEmployees")
    }

    const [value, setValue] = React.useState('1');
    const handleChange1 = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="example">
            <Row>
                <Col>
                    <Card  style={{ marginTop: 10 }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Title>Employee Profile</Card.Title>
                                    </Col>
                                    <Col>
                                    <button type="button" 
                                    onClick={fnGoBack}
                                     //onClick={() => history.goBack()} 
                                     style={{float:"right",border:"none",backgroundColor:"white"}}>
                                        <FiArrowLeftCircle style={{ fontSize: "30px"}} />
                                    </button>                                      
                                    </Col>
                                </Row>
                                <Row>
                                <EmployeeMasterCard profile={profile}/>
                                </Row>
                                <Row>
                                <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{justifyContent:"center"}}>
    <TabList onChange={handleChange1} aria-label="lab API tabs example" sx={{ "& button.Mui-selected": { background: "white",color:"#f5896e" }}} style={{ background: "#f5896e", borderRadius: "3px", fontSize: "10px",height:"60px",paddingRight:0,color:"white" }}
       // textColor="secondary"
        indicatorColor="#f5896e">
      <Tab label="Personal Info." value="1" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<BsFillPersonLinesFill style={{ fontSize: "20px" }} />}/>
      <Tab label="Address" value="2" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<FaRegAddressCard style={{ fontSize: "20px" }} />} />
      <Tab label="Additional Details" value="3" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<FiUserPlus style={{ fontSize: "20px" }} />}/>
      <Tab label="Employment" value="4" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<TiBusinessCard style={{ fontSize: "20px" }} />}/>
      <Tab label="Educational" value="5" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<FaGraduationCap style={{ fontSize: "20px" }} />}/>
      <Tab label="Experience" value="6" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<FaBusinessTime style={{ fontSize: "20px" }} />}/>
      <Tab label="Projects" value="7" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<AiOutlineProject style={{ fontSize: "20px" }} />}/>
     

    </TabList>
  </Box>
  <TabPanel value="1"><ProfilePersonalDetailsTab profile={profile}/></TabPanel>
  <TabPanel value="2"> <ProfileAddressTab profile={profile}/></TabPanel>
  <TabPanel value="3"><ProfileAdditionalDetailsTab profile={profile}/></TabPanel>
  <TabPanel value="4"><ProfileEmploymentDetailsTab profile={profile}/></TabPanel>
  <TabPanel value="5"><ProfileEducationalDetailsTab profile={profile}/></TabPanel>
  <TabPanel value="6"><ProfileExperienceTab profile={profile}/></TabPanel>
  <TabPanel value="7"><ProfileProjectTab profile={profile}/></TabPanel>
  {/* <TabPanel value="8"><ProfileRecognizationTab/></TabPanel> */} 
  <TabPanel value="8"></TabPanel>
</TabContext>

                                    {/* <Tabs
                                        defaultActiveKey="Personal Details"
                                        transition={true}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                        style={{ justifyContent: "center", color: "white", backgroundColor: "white", fontSize: "18px", padding: 0 }}
                                    >
                                        <Tab eventKey="Personal Details" title="Personal Details" style={{ backgroundColor: "white" }}>
                                            <PersonalDetailsTab />
                                        </Tab>
                                        <Tab eventKey="Address" title="Address" style={{ backgroundColor: "white" }}>
                                            <AddressTab />
                                        </Tab>
                                        <Tab eventKey="Additional Details" title="Additional Details" style={{ backgroundColor: "white" }}>
                                            <AditionalDetailsTab/>
                                        </Tab>
                                        <Tab eventKey="Employment Details" title="Employment Details" style={{ backgroundColor: "white" }}>
                                            <EmploymentDetailsTab />
                                        </Tab>
                                        <Tab eventKey="Educational Details" title="Educational Details" style={{ backgroundColor: "white" }}>
                                            <EducationalDetailsTab/>
                                        </Tab>
                                        <Tab eventKey="Experience" title="Experience " style={{ backgroundColor: "white" }}>
                                            <ExperienceTab />
                                        </Tab>
                                        <Tab eventKey="Project" title="Project " style={{ backgroundColor: "white" }}>
                                            <ProjectsTab />
                                        </Tab>

                                    </Tabs> */}
                                </Row>



                                {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 20, backgroundColor: "#FAFDD0" }}>
                                    <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                        Personal Details
                                    </Card.Title>
                                </Card> */}

                                {/* 
                                <Form
                                    onSubmit={(e) => changeHandler(e)}
                                    style={{ padding: 10 }}
                                >
                                    <Row className="mb-5">
                                        <Form.Group
                                            as={Col}
                                            className="mb-3"
                                            md="6"
                                            controlid="formBasicEmail"
                                        >
                                            <Form.Label>First Name *</Form.Label>
                                            <Form.Control
                                                disabled
                                                value={firstName}
                                                // disabled
                                                required
                                                maxLength={30}
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
                                                disabled
                                                name="middleName"
                                                type="text"
                                                placeholder="Middle name"
                                                maxLength={30}
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
                                            controlid="formBasicEmail"
                                        >
                                            <Form.Label>Last Name *</Form.Label>
                                            <Form.Control
                                                value={lastName}
                                                disabled
                                                required
                                                maxLength={30}
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

                                        <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
                                            <Form.Label>Phone Number *</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    +91
                                                </InputGroup.Text>
                                                <Form.Control
                                                    disabled
                                                    required
                                                    type="number"
                                                    name="primaryPhoneNumber"
                                                    placeholder="phone Number"
                                                    maxLength={10}
                                                    value={primaryPhoneNumber}
                                                    onChange={(e) => {
                                                        setPrimaryPhoneNumber(e.target.value);
                                                        if (e.target.value.length > 10) {
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
                                            controlid="formBasicEmail"
                                        >
                                            <Form.Label>Emergency Phone Number </Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    +91
                                                </InputGroup.Text>
                                                <Form.Control
                                                    disabled
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
                                                disabled
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
                                                disabled
                                                required
                                                type="date"
                                                name="dateOfBirth"
                                                placeholder="DOB"
                                                controlid="dateOfBirth"
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
                                                disabled
                                                required
                                                type="text"
                                                name="bloodGroup"
                                                placeholder="Blood Group "
                                                controlid="bloodGroup"
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
                                                disabled
                                                required
                                                type="text"
                                                name="gender"
                                                placeholder="Gender "
                                                controlid="gender"
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
                                                disabled
                                                required
                                                type="text"
                                                name="maritalStatus"
                                                placeholder="Marital Status "
                                                controlid="maritalStatus"
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



                                        <Row>
                                            <Col>

                                                <Card
                                                    style={{ marginLeft: 0, marginRight: 0, marginTop: 20, backgroundColor: "#FAFDD0" }}
                                                >
                                                    <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                        Permanent Address
                                                    </Card.Title>
                                                </Card>

                                                <Form.Group as={Col} md="12" style={{ paddingTop: 10 }}>
                                                    <Form.Label>Address *</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        as="textarea"
                                                        rows={4}
                                                        type="text"
                                                        name="permanentAdress"
                                                        placeholder="Address"
                                                        controlid="permanentAdress"
                                                        value={permanentAdress}
                                                        isInvalid={elevenerrors}
                                                        maxLength={125}
                                                        onChange={(e) => {
                                                            setPermanentAddress(e.target.value)
                                                            if (primarySkills === "") {
                                                                setTenerror(" Secondary skill is Required");
                                                            }
                                                            else {
                                                                setTenerror("")
                                                            }
                                                        }}

                                                    ></Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {elevenerrors}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" style={{ paddingTop: 20 }}>
                                                    <Form.Label>State *</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        type="text"
                                                        placeholder="State"
                                                        name="permanentState"
                                                        controlid="permanentState"
                                                        maxLength={50}
                                                        isInvalid={tweleveerror}
                                                        value={permanentState}
                                                        onChange={(e) => {
                                                            setPermanentState(e.target.value)
                                                            if (permanentAdress === "") {
                                                                setElevenErrors(" Address is Required");
                                                            }
                                                            else {
                                                                setElevenErrors("")
                                                            }
                                                        }}
                                                    ></Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {tweleveerror}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" style={{ paddingTop: 20 }}>
                                                    <Form.Label>Country *</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        type="text"
                                                        placeholder="Country"
                                                        name="permanentCountry"
                                                        controlid="permanentCountry"
                                                        maxLength={50}
                                                       
                                                        value={permanentCountry}
                                                        isInvalid={thirteenerrors}
                                                        onChange={(e) => {
                                                            setPermanentCountry(e.target.value)
                                                            if (permanentState === "") {
                                                                setTweleveerror(" State is Required");
                                                            }
                                                            else {
                                                                setTweleveerror("")
                                                            }
                                                        }}
                                                    >
                                                    

                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {thirteenerrors}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                               
                                                <Form.Group as={Col} md="12" style={{ paddingTop: 20, }}>
                                                    <Form.Label>Pincode *</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        type="number"
                                                        placeholder="Pincode"
                                                        controlid="permanentPincode"
                                                        name="permanentPincode"
                                                        isInvalid={fourteenerror}
                                                        value={permanentPincode}
                                                        maxLength={6}
                                                        size={6}
                                                        onChange={(event) => {
                                                            setPermanentPincode(event.target.value)
                                                            if (event.target.value.length > 6) {
                                                                setFourteenerror(" Pincode length should be 6 characters");;
                                                            }
                                                            if (permanentCountry === "") {
                                                                setThirteenErrors("Country is Required");
                                                            }
                                                            else {
                                                                setThirteenErrors("")
                                                            }
                                                        }}
                                                    ></Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {fourteenerror}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Card
                                                    style={{ marginLeft: 10, marginRight: 0, marginTop: 20, backgroundColor: "#FAFDD0" }}
                                                >
                                                    <Card.Title style={{ margin: 20, textAlign: "center",paddingLeft:20 }}>
                                                        Current Address
                                                    </Card.Title>
                                                </Card>
                                                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                                    <Form.Label>Address *</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        as="textarea"
                                                        rows={4}
                                                        type="text"
                                                        placeholder="Address"
                                                        controlid="currentAdress"
                                                        isInvalid={fifteenerrors}
                                                        value={currentAdress}
                                                        name="currentAdress"
                                                        maxLength={125}
                                                        onChange={(e) => {
                                                            setCurrentAddress(e.target.value)
                                                            if (permanentPincode === "") {
                                                                setFourteenerror(" Pincode is Required");
                                                            }
                                                            else {
                                                                setFourteenerror("")
                                                            }
                                                        }}
                                                    ></Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {fifteenerrors}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                                    <Form.Label>State *</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        type="text"
                                                        placeholder="State"
                                                        name="currentState"
                                                        controlid="currentState"
                                                        maxLength={50}
                                                        isInvalid={sixteenerror}
                                                        value={currentState}
                                                        onChange={(e) => {
                                                            setCurrentState(e.target.value)
                                                            if (currentAdress === "") {
                                                                setFifteenErrors("Address is Required");
                                                            }
                                                            else {
                                                                setFifteenErrors("")
                                                            }
                                                        }}
                                                    ></Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {sixteenerror}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                                    <Form.Label>Country *</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        type="text"
                                                        placeholder="Country"
                                                        //controlid="currentCountry"
                                                        value={currentCountry}
                                                        isInvalid={seventeenerror}
                                                        maxLength={50}
                                                        name="currentCountry"
                                                        onChange={(e) => {
                                                            setCurrentCountry(e.target.value)
                                                            if (currentState === "") {
                                                                setSixteenerror(" State is Required");
                                                            }
                                                            else {
                                                                setSixteenerror("")
                                                            }
                                                        }
                                                        }
                                                    ></Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {seventeenerror}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                                    <Form.Label>Pincode *</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        type="number"
                                                        placeholder="Pincode"
                                                        controlid="currentPincode"
                                                        value={currentPincode}
                                                        isInvalid={eighteenerror}
                                                        name="currentPincode"
                                                        maxLength={6}
                                                        onChange={(e) => {
                                                            setCurrentPincode(e.target.value)
                                                            if (e.target.value.length > 6) {
                                                                setEighteenerror(" Pincode length should be 6 characters");;
                                                            }
                                                            if (currentCountry === "") {
                                                                setSeventeenerror(" Country is Required");
                                                            }
                                                            else {
                                                                setSeventeenerror("")
                                                            }
                                                        }}
                                                    ></Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {eighteenerror}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 20, backgroundColor: "#FAFDD0" }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Employment Details
                                            </Card.Title>
                                        </Card>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Primary Skills</Form.Label>
                                            <Form.Control
                                                disabled
                                                type="text"
                                                placeholder="Primary Skills"
                                                controlid="primarySkils"
                                                value={primarySkills}
                                                maxLength={15}
                                                name="primarySkills"
                                                onChange={(e) =>
                                                    setPrimarySkills(e.target.value)


                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Secondary Skills</Form.Label>
                                            <Form.Control
                                                disabled
                                                type="text"
                                                placeholder="Secondary Skills"
                                                controlid="secondarySkills"
                                                value={secondarySkills}
                                                maxLength={15}
                                                name="secondarySkills"
                                                onChange={(e) =>
                                                    setSecondarySkills(e.target.value)

                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Employment Type</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Type of Employee"
                                                controlid="employmentType"
                                                value={employmentType}
                                                maxLength={15}
                                                name="employmentType"
                                                onChange={(e) =>
                                                    setEmploymentType(e.target.value)


                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Band</Form.Label>
                                            <Form.Select
                                                type="text"
                                                placeholder="Band"
                                                controlid="band"

                                                name="band"
                                                value={band}
                                                onChange={(event) => setBand(event.target.value)}
                                            >
                                                <option>Select</option>
                                                <option value="Band-1">Band-1</option>
                                                <option value="Band-2">Band-2</option>
                                                <option value="Band-3">Band-3</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Department</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Department Name"
                                                controlid="departmentName"
                                                value={departmentName}
                                                maxLength={15}
                                                name="departmentName"
                                                onChange={(e) =>
                                                    setDepartmentName(e.target.value)


                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Designation</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Designation Name"
                                                controlid="designationName"
                                                value={designationName}
                                                maxLength={15}
                                                name="designationName"
                                                onChange={(e) =>
                                                    setDesignationName(e.target.value)


                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Reporting Manager *</Form.Label>
                                            <Form.Select
                                                placeholder="select Gender"
                                                value={reportingManager}
                                                onChange={(e) => {
                                                    setReportingManager(e.target.value)
                                                }}
                                            >
                                                <option>Select </option>
                                                <option value="Revanth Kumar">Revanth Kumar</option>
                                                <option value="Revanth Kumar1">Revanth Kumar1</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Project</Form.Label>
                                            <Form.Select
                                                type="text"
                                                placeholder="Project"
                                                controlid="project"
                                                value={projectName}
                                                maxLength={15}
                                                name="projectName"
                                                onChange={(e) =>
                                                    setProjectName(e.target.value)
                                                }
                                            >
                                                <option>Select</option>
                                                <option value="HRM">HRM</option>
                                                <option value="DEP">DEP</option>
                                                <option value="PropertEase">PropertEase</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 20, backgroundColor: "#FAFDD0" }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Additional Details
                                            </Card.Title>
                                        </Card>


                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passport Number</Form.Label>
                                            <Form.Control
                                                disabled
                                                type="text"
                                                placeholder="Passport Number"
                                                controlid="passportNo"
                                                value={passportNo}
                                                maxLength={15}
                                                name="passportNo"
                                                onChange={(e) =>
                                                    setPassportNo(e.target.value)

                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passport Expiry Date</Form.Label>
                                            <Form.Control
                                                disabled
                                                type="date"
                                                placeholder="Passport Expiry Date"
                                                controlid="passportExpiryDate"
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
                                                disabled
                                                type="text"
                                                placeholder="PAN Card Number"
                                                controlid="panNumber"
                                                name="panNumber"
                                                maxLength={15}
                                                value={panNumber}
                                                onChange={(event) => setPanNumber(event.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Aadhar Card Number *</Form.Label>
                                            <Form.Control
                                                disabled
                                                required
                                                type="number"
                                                placeholder="Aadhar Card Number"
                                                controlid="aadharNumber"
                                                name="panNumber"
                                                maxLength={12}
                                                isInvalid={nineteenerror}
                                                value={aadharNumber}
                                                onChange={(event) => {
                                                    setAadharNumber(event.target.value)
                                                    if (event.target.value.length > 12) {
                                                        setNineteenerror(" Aadharcard Number length should be 12 characters");;
                                                    }
                                                    if (currentPincode === "") {
                                                        setEighteenerror(" Pincode is Required");
                                                    }
                                                    else {
                                                        setEighteenerror("")
                                                    }
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {nineteenerror}
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>UAN Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="UAN Number"
                                                controlid="uanNumber"
                                                name="uanNumber"
                                                value={uanNumber}
                                                maxLength={12}
                                                onChange={(event) => setUanNumber(event.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Bank Name *</Form.Label>
                                            <Form.Control
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Bank Name"
                                                controlid="bankName"
                                                name="bankName"
                                                maxLength={30}
                                                value={bankName}
                                                isInvalid={twentyerror}
                                                onChange={(event) => {
                                                    setBankName(event.target.value)
                                                    if (aadharNumber === "") {
                                                        setNineteenerror(" Aadhar Card Number is Required");
                                                    }
                                                    else {
                                                        setNineteenerror("")
                                                    }
                                                }}
                                            ></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                {twentyerror}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Bank Account Number *</Form.Label>
                                            <Form.Control
                                                disabled
                                                required
                                                type="number"
                                                placeholder="Account Number"
                                                controlid="accountNumber"
                                                name="accountNumber"
                                                maxLength={30}
                                                value={accountNumber}
                                                isInvalid={twentyoneerror}
                                                onChange={(event) => {
                                                    setAccountNumber(event.target.value)
                                                    if (event.target.value.length > 16) {
                                                        setTwentyoneerror(" Bank Account Number should be 16 characters");;
                                                    }
                                                    //comment   
                                                    if (bankName === "") {
                                                        setTwentyerror(" Bank Name is Required");
                                                    }
                                                    else {
                                                        setTwentyerror("")
                                                    }
                                                }}
                                            ></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                {twentyoneerror}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>IFSC Code *</Form.Label>
                                            <Form.Control
                                                disabled
                                                required
                                                type="text"
                                                placeholder="IFSC Code"
                                                controlid="ifscCode"
                                                name="ifscCode"
                                                maxLength={10}
                                                value={ifscCode}
                                                isInvalid={twentytwoerror}
                                                onChange={(event) => {
                                                    setIfscCode(event.target.value)
                                                    if (accountNumber === "") {
                                                        setTwentyoneerror(" Account Number is Required");
                                                    }
                                                    else {
                                                        setTwentyoneerror("")
                                                    }
                                                }}
                                            ></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                {twentytwoerror}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Branch Name *</Form.Label>
                                            <Form.Control
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Branch Name"
                                                controlid="branchName"
                                                name="branch"
                                                maxLength={30}
                                                value={branch}
                                                isInvalid={twentythreerror}

                                                onChange={(event) => {
                                                    setBranch(event.target.value)
                                                    if (ifscCode === "") {
                                                        setTwentytwoerror(" IFSC Code is Required");
                                                    }
                                                    else {
                                                        setTwentytwoerror("")
                                                    }
                                                }
                                                }
                                            ></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                {twentythreerror}
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                        <Card
                                            style={{
                                                marginLeft: 8,
                                                marginRight: 8,
                                                marginTop: 10,
                                                marginBottom: 20, backgroundColor: "#FAFDD0"
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
                                                marginBottom: 20, backgroundColor: "#FAFDD0"
                                            }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center", }}>
                                                Post Graduation Details
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
                                                                disabled
                                                                required
                                                                type="text"
                                                                placeholder="Type Of Post Graduation"
                                                                controlid="postgraduationType"
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
                                                                disabled
                                                                type="text"
                                                                placeholder="University Name"
                                                                controlid="postgraduationBoardOfUniversity"
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
                                                                disabled
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Institute City"
                                                                controlid="postgraduationInstituteCity"
                                                                value={postgraduationInstituteCity}
                                                                maxLength={30}
                                                                name="postgraduationInstituteCity"
                                                                onChange={(e) =>
                                                                    setPostgraduationInstituteCity(e.target.value)
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Course Name </Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                type="text"
                                                                placeholder="Course Name"
                                                                controlid="postgraduationCourseName"
                                                                value={postgraduationCourseName}
                                                                maxLength={30}
                                                                name="postgraduationCourseName"
                                                                onChange={(e) =>
                                                                    setPostgraduationCourseName(e.target.value)
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Joining Year </Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                type="date"
                                                                placeholder="Joining Year"
                                                                controlid="postgraduationJoiningYear"
                                                                value={postgraduationJoiningYear}
                                                                maxLength={30}
                                                                name="postgraduationJoiningYear"
                                                                onChange={(e) =>
                                                                    setPostgraduationJoiningYear(e.target.value)
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Passed-out Year</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                type="date"
                                                                placeholder="Passed out year"
                                                                controlid="postgraduationPassedYear"
                                                                value={postgraduationPassedYear}

                                                                min={postgraduationJoiningYear}
                                                                maxLength={30}
                                                                name="postgraduationPassedYear"
                                                                onChange={(e) =>
                                                                    setPostgraduationPassedYear(e.target.value)
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Grade</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                type="text"
                                                                placeholder="Percentage/Grade/CGPA/GPA"
                                                                controlid="postgraduationGrade"
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
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 20, backgroundColor: "#FAFDD0" }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Graduation Details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Type of Graduation *</Form.Label>
                                            <Form.Select
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Type Of Graduation"
                                                controlid="graduationType"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="University Name"
                                                controlid="graduationBoardOfUniversity"
                                                name="graduationBoardOfUniversity"
                                                // pattern="/^[a-zA-Z\s]*$/"

                                                value={graduationBoardOfUniversity}
                                                isInvalid={twentyfiveerror}
                                                maxLength={50}

                                                onChange={(e) => {
                                                    setGraduationBoardOfUniversity(e.target.value)
                                                    // if (reg_name_lastname.test($('#graduationBoardOfUniversity').val())) { //
                                                    //     setTwentyfiveerror("Correct your First Name: only letters and spaces.");
                                                    //     valid = false;
                                                    // }
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Institute Name "
                                                controlid="graduationInstituteName"
                                                name="graduationInstituteName"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Institute City"
                                                controlid="graduationInstituteCity"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Course Name"
                                                name="graduationCourseName"
                                                maxLength={30}
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
                                                required
                                                disabled
                                                type="date"
                                                placeholder="Joining Year"
                                                name="graduationJoiningYear"
                                                controlid="graduationJoiningYear"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="date"
                                                placeholder="Passed out year"
                                                controlid="graduationPassedYear"
                                                name="graduationPassedYear"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Percentage/Grade/GPA/CGPA"
                                                controlid="graduationGrade"
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
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                12th Grade/Intermediate Details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Board * </Form.Label>
                                            <Form.Control
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Board"
                                                controlid="intermediateBoardOfUniversity"
                                                value={intermediateBoardOfUniversity}
                                                isInvalid={thirtytwoerror}
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="School/College Name "
                                                controlid="intermediateCollegeName"
                                                value={intermediateCollegeName}
                                                isInvalid={thirtythreeerror}
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="School/College City"
                                                controlid="intermediateCollegeCity"
                                                value={intermediateCollegeCity}
                                                isInvalid={thirtyfourerror}
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Course Name"
                                                name="intermediateCourseName"
                                                controlid="intermediateCourseName"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="date"
                                                placeholder="Joining Year"
                                                controlid="intermediateJoiningYear"
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
                                                disabled
                                                required
                                                type="date"
                                                placeholder="Passed out year"
                                                controlid="intermediatePassedYear"
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Percentage/Grade/GPA/CGPA"
                                                controlid="intermediateGrade"
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
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                10th Grade Details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Board *</Form.Label>
                                            <Form.Control
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Board"
                                                controlid="sscBoardOfUniversity"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="School Name "
                                                controlid="sscSchoolName"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="School City"
                                                controlid="sscSchoolCity"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Course Name"
                                                controlid="sscCourseName"
                                                maxLength={30}
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
                                                disabled
                                                required
                                                type="date"
                                                name="sscJoiningYear"
                                                placeholder="Joining Year"
                                                controlid="sscJoiningYear"
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
                                                disabled
                                                required
                                                type="date"
                                                name="sscPassedYear"
                                                placeholder="Passed out year"
                                                controlid="sscPassedYear"
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
                                                disabled
                                                required
                                                type="text"
                                                placeholder="Percentage/Grade/GPA/CGPA"
                                                controlid="sscGrade"
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
                                        <Card
                                            style={{
                                                marginTop: "10px",
                                                marginBottom: "20px",
                                                marginLeft: 8,
                                                marginRight: 8, backgroundColor: "#FAFDD0"
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Company Name"
                                                                controlid="previousCompany1_name"
                                                                value={previousCompany1_name}
                                                                maxLength={30}
                                                                onChange={(e) =>
                                                                    setPreviousCompany1_name(e.target.value)
                                                                }
                                                                name="previousCompany1_name"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Designation</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                type="text"
                                                                placeholder="Designation"
                                                                controlid="previousCompany1_designation"
                                                                value={previousCompany1_designation}
                                                                maxLength={30}
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
                                                                disabled
                                                                type="date"
                                                                placeholder="Date of Joining"
                                                                controlid="previousCompany1_joiningDate"
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
                                                                disabled
                                                                type="Date"
                                                                placeholder="Date of Relieving"
                                                                controlid="previousCompany1_relievingDate"
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Employee ID"
                                                                controlid="previousCompany1_employeeId"
                                                                value={previousCompany1_employeeId}
                                                                maxLength={30}
                                                                onChange={(e) =>
                                                                    setPreviousCompany1_employeeId(e.target.value)
                                                                }
                                                                name="previousCompany1_employeeId"
                                                            />
                                                        </Form.Group>

                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Employment Type</Form.Label>
                                                            <Form.Select
                                                                disabled
                                                                type="text"
                                                                placeholder="Employment Type"
                                                                controlid="previousCompany1_typeOfEmployeement"
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
                                                                disabled
                                                                as="textarea"
                                                                rows={2}
                                                                type="text"
                                                                maxLength={120}
                                                                placeholder="Reason"
                                                                controlid="previousCompany1_reasonForRelieving"
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Company Name"
                                                                controlid="previousCompany2_name"
                                                                maxLength={30}
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Designation"
                                                                controlid="previousCompany2_designation"
                                                                maxLength={30}
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
                                                                disabled
                                                                type="date"
                                                                placeholder="Date of Joining"
                                                                controlid="previousCompany2_joiningDate"
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
                                                                disabled
                                                                type="Date"
                                                                placeholder="Date of Relieving"
                                                                controlid="previousCompany2_relievingDate"
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Employee ID"
                                                                controlid="previousCompany2_employeeId"
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Employment Type"
                                                                controlid="previousCompany2_typeOfEmployment"
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
                                                                disabled
                                                                as="textarea"
                                                                rows={2}
                                                                type="text"
                                                                placeholder="Reason"
                                                                controlid="previousCompany2_reasonForRelieving"
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Company Name"
                                                                controlid="previousCompany3_name"
                                                                maxLength={30}
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Designation"
                                                                controlid="previousCompany3_designation"
                                                                maxLength={30}
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
                                                                disabled
                                                                type="date"
                                                                placeholder="Date of Joining"
                                                                controlid="previousCompany3_joiningDate"
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
                                                                disabled
                                                                type="Date"
                                                                placeholder="Date of Relieving"
                                                                controlid="prevoiusCompany3_relievingDate"
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Employee ID"
                                                                controlid="previousCompany3_employeeId"
                                                                maxLength={30}
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
                                                                disabled
                                                                type="text"
                                                                placeholder="Employment Type"
                                                                controlid="previousCompany3_typeOfEmployment"
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
                                                                disabled
                                                                as="textarea"
                                                                rows={2}
                                                                type="text"
                                                                maxLength={120}
                                                                placeholder="Reason"
                                                                controlid="previousCompany3_reasonForRelieving"
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
                                                controlid="exitDate"
                                                value={exitDate}
                                                onChange={(e) => setExitDate(e.target.value)}
                                                name="exitDate"
                                            />
                                        </Form.Group>
                                        <Form.Group style={{ padding: 10, paddingTop: 20 }}>
                                            <Form.Label>
                                                Upload Profile Picture * (Size should be less than 1 MB)
                                            </Form.Label>
                                            <Form.Control
                                                // required
                                                //    value={imge.name}
                                                disabled
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
                                        style={{ backgroundColor: "#f5896e", float: "right" }}
                                        type="submit"
                                        size="lg"
                                    >
                                        Submit
                                    </Button>
                                </Form> */}
                            </Card.Body>
                        </Card.Header>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default EmployeeMasterForms;

