import React, { useEffect, useState } from "react";
import axios from "../../../Uri";
import { Card, Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import { BASE_URL } from "../../../Constant";

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#fd7e14",
  borderDotColor: "#ced4da",
  titleColor: "#000000",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};

function ExperienceTab(props) {

  const userData = sessionStorage.getItem("userdata");
  // console.log(userData);
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;
  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);
  //var dateTime = getEmployeeDetails.dateOfJoining;

  const [imge, setImge] = useState([]);
//commit
  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
      .then((response) => {
        setGetEmployeeDetails(response.data.data);
      });
  }, []);
  console.log(getEmployeeDetails)

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
  console.log(imge)

  const [projects, setProjects] = useState(false)

  useEffect(() => {
    axios
      .get(`/emp/getUserClientDetailsbyEmployeeId/${employeeid}`)
      .then((response) => {
        setProjects(response.data);
      });
  }, []);
  console.log(projects)




  // function formatDate(fromDate){
  //   var datePart = fromDate.match(/\d+/g),
  //     year = datePart[0].substring(2), // get only two digits
  //     month = datePart[1],
  //     day = datePart[2];
  //   return day + "-" + month + "-" + year;
  //  }

  // console.log(getEmployeeDetails.dateOfJoining)

  var doj = new Date(getEmployeeDetails.dateOfJoining);
  var dd = String(doj.getDate()).padStart(2, '0');
  var mm = String(doj.getMonth() + 1).padStart(2, '0');
  var yyyy = doj.getFullYear();
  var doj1 = dd + '-' + mm + '-' + yyyy;
  console.log(doj1);



  console.log(getEmployeeDetails.dateOfBirth)

  // function ChangeFormateDate(getEmployeeDetails.dateOfBirth)
  // {
  //    return oldDate.toString().split("/").reverse().join("/");
  // }

  // console.log(dob)
  //  var dob12 = dob.split("-").reverse().join("-");
  //  console.log(dob12)

  // var dd = dob.getDate();
  // var mm = dob.getMonth()+1;
  // var yyyy = dob.getFullYear();
  // var dob1 = dd + '-' + mm + '-' + yyyy;
  //  console.log(dob1);
  //comment for pull req
  // console.log(getEmployeeDetails.passportExpiryDate)
  var passportDate = new Date(getEmployeeDetails.passportExpiryDate);
  var dd = String(passportDate.getDate()).padStart(2, '0');
  var mm = String(passportDate.getMonth() + 1).padStart(2, '0');
  var yyyy = passportDate.getFullYear();
  var passportDate1 = dd + '-' + mm + '-' + yyyy;
  console.log(passportDate1);

  var GraduationJoiningYear = new Date(getEmployeeDetails.graduationJoiningYear);
  var dd = String(GraduationJoiningYear.getDate()).padStart(2, '0');
  var mm = String(GraduationJoiningYear.getMonth() + 1).padStart(2, '0');
  var yyyy = GraduationJoiningYear.getFullYear();
  var GraduationJoiningYear1 = dd + '-' + mm + '-' + yyyy;
  console.log(GraduationJoiningYear1);



  var tempDate = new Date(props.viewOnboard.previousCompany1_joiningDate);
  var previousCompany1_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.previousCompany1_relievingDate);
  var previousCompany1_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

  var tempDate = new Date(props.viewOnboard.previousCompany2_joiningDate);
    var previousCompany2_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    var tempDate = new Date(props.viewOnboard.previousCompany2_relievingDate);
    var previousCompany2_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    var tempDate = new Date(props.viewOnboard.previousCompany3_joiningDate);
    var previousCompany3_joiningDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    var tempDate = new Date(props.viewOnboard.previousCompany3_relievingDate);
    var previousCompany3_relievingDate1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    const viewUploadFile = () => {
      // window.open(`api/get/image/${imageName}/${onboardingId}`)
  
      axios
        .get(`api/get/imageByTitle/ExperienceDetails/${props.viewOnboard.oboardingId}`, {
          contentType: "application/pdf",
        })
        .then((res) => {
          console.log(res.data.url);
          setImageName(res.data);
          setUrl(res.data.url);
          saveAs(url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    // <div className= "scroll">
    //   {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
    //             <Card.Title style={{ margin: 20, textAlign: "center" }}>
    //                 Work Experience
    //             </Card.Title>
    //         </Card> */}

    //   <Form style={{ padding: 10 }}>
    //     {/* <Card
    //       style={{
    //         marginLeft: 8,
    //         marginRight: 8,
    //         marginTop: 15,
    //         backgroundColor: "#FAFDD0",
    //       }}
    //     >
    //       <Card.Title style={{ margin: 8, textAlign: "center" }}>
    //         Experience-1
    //       </Card.Title>
    //     </Card> */}
    //     <h5><b>Experience 1 : </b></h5>
    //     <Row>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Company Name</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany1_name"

    //           value={props.viewOnboard.previousCompany1_name}
    //           maxLength={50}
    //           name="previousCompany1_name"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Designation</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany1_designation"
    //           value={props.viewOnboard.previousCompany1_designation}
    //           maxLength={50}
    //           name="previousCompany1_designation"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Joining date</Form.Label>
    //         <Form.Control
    //           type="date"
    //           controlId="previousCompany1_joiningDate"
    //           value={props.viewOnboard.previousCompany1_joiningDate}
    //           name="previousCompany1_joiningDate"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Relieving Date</Form.Label>
    //         <Form.Control
    //           type="Date"
    //           controlId="previousCompany1_relievingDate"
    //           value={props.viewOnboard.previousCompany1_relievingDate}
    //           name="previousCompany1_relievingDate"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Employee ID</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany1_employeeId"
    //           value={props.viewOnboard.previousCompany1_employeeId}
    //           maxLength={50}
    //           name="previousCompany1_employeeId"
    //         />
    //       </Form.Group>

    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Employment Type</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany1_typeOfEmployeement"
    //           value={props.viewOnboard.previousCompany1_typeOfEmployment}
    //           name="previousCompany1_typeOfEmployment"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Reason for Exit</Form.Label>
    //         <Form.Control
    //           as="textarea"
    //           rows={2}
    //           type="text"
    //           controlId="previousCompany1_reasonForRelieving"
    //           value={props.viewOnboard.previousCompany1_reasonForRelieving}
    //           name="previousCompany1_reasonForRelieving"
    //         />
    //       </Form.Group>
    //     </Row>
    //     {/* <Card
    //       style={{
    //         marginLeft: 8,
    //         marginRight: 8,
    //         marginTop: 15,
    //         backgroundColor: "#FAFDD0",
    //       }}
    //     >
    //       <Card.Title style={{ margin: 20, textAlign: "center" }}>
    //         Experience-2
    //       </Card.Title>
    //     </Card> */}
    //     <br></br>
    //     <h5><b>Experience 2 : </b></h5>
    //     <Row>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Company Name</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany2_name"
    //           maxLength={50}
    //           value={props.viewOnboard.previousCompany2_name}
    //           name="previousCompany2_name"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Designation</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany2_designation"
    //           maxLength={50}
    //           value={props.viewOnboard.previousCompany2_designation}
    //           name="previousCompany2_designation"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Joining date</Form.Label>
    //         <Form.Control
    //           type="date"
    //           controlId="previousCompany2_joiningDate"
    //           value={props.viewOnboard.previousCompany2_joiningDate}
    //           name="previousCompany2_joiningDate"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Relieving Date</Form.Label>
    //         <Form.Control
    //           type="Date"
    //           controlId="previousCompany2_relievingDate"
    //           value={props.viewOnboard.previousCompany2_relievingDate}
    //           name="previousCompany2_relievingDate"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Employee ID</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany2_employeeId"
    //           value={props.viewOnboard.previousCompany2_employeeId}
    //           name="previousCompany2_employeeId"
    //         />
    //       </Form.Group>

    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Employment Type</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany2_typeOfEmployment"
    //           value={props.viewOnboard.previousCompany2_typeOfEmployment}
    //           name="previousCompany2_typeOfEmployment"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 15 }}>
    //         <Form.Label>Reason for Exit</Form.Label>
    //         <Form.Control
    //           as="textarea"
    //           rows={2}
    //           type="text"
    //           controlId="previousCompany2_reasonForRelieving"
    //           value={props.viewOnboard.previousCompany2_reasonForRelieving}
    //           name="previousCompany2_reasonForRelieving"
    //         />
    //       </Form.Group>
    //     </Row>
    //     {/* <Card
    //       style={{
    //         marginLeft: 8,
    //         marginRight: 8,
    //         marginTop: 15,
    //         backgroundColor: "#FAFDD0",
    //       }}
    //     >
    //       <Card.Title style={{ margin: 20, textAlign: "center" }}>
    //         Experience-3
    //       </Card.Title>
    //     </Card> */}
    //      <h5><b>Experience 3 : </b></h5>
    //     <Row>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Company Name</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany3_name"
    //           maxLength={50}
    //           value={props.viewOnboard.previousCompany3_name}
    //           name="previousCompany3_name"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Designation</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany3_designation"
    //           maxLength={50}
    //           value={props.viewOnboard.previousCompany3_designation}
    //           name="previousCompany3_designation"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Joining date</Form.Label>
    //         <Form.Control
    //           type="date"
    //           controlId="previousCompany3_joiningDate"
    //           value={props.viewOnboard.previousCompany3_joiningDate}
    //           name="previousCompany3_joiningDate"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Relieving Date</Form.Label>
    //         <Form.Control
    //           type="Date"
    //           controlId="prevoiusCompany3_relievingDate"
    //           value={props.viewOnboard.previousCompany3_relievingDate}
    //           name="previousCompany3_relievingDate"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Employee ID</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany3_employeeId"
    //           maxLength={50}
    //           value={props.viewOnboard.previousCompany3_employeeId}
    //           name="previousCompany3_employeeId"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Employment Type</Form.Label>
    //         <Form.Control
    //           type="text"
    //           controlId="previousCompany3_typeOfEmployment"
    //           value={props.viewOnboard.previousCompany3_typeOfEmployment}
    //           name="previousCompany3_typeOfEmployment"
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    //         <Form.Label>Reason for Exit</Form.Label>
    //         <Form.Control
    //           as="textarea"
    //           rows={2}
    //           type="text"
    //           controlId="previousCompany3_reasonForRelieving"
    //           value={props.viewOnboard.previousCompany3_reasonForRelieving}
    //           name="previousCompany3_reasonForRelieving"
    //         />
    //       </Form.Group>
    //     </Row>
    //   </Form>
    // </div>
    
    <div style={{ padding: 20, marginTop: 0, paddingBottom:"53px", marginLeft: 10, marginRight: 20 }}>
    <Card.Title>
      <h5>Experience:</h5>
    </Card.Title>
    <Card.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
      <Table>
        <thead>
          <tr>

            <th>Company Name</th>
            <th>Employee ID</th>
            <th>Designation</th>
            <th>Joining Date</th>
            <th>Relieving Date</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.viewOnboard.previousCompany1_name}</td>
            <td>{props.viewOnboard.previousCompany1_employeeId}</td>
            <td>{props.viewOnboard.previousCompany1_designation}</td>
            <td> {props.viewOnboard.previousCompany1_joiningDate ? (<td>
              {previousCompany1_joiningDate1}
            </td>) : (<div></div>)}</td>
            <td>{props.viewOnboard.previousCompany1_relievingDate ? (<td>
              {previousCompany1_relievingDate1}
            </td>) : (<div></div>)}</td>
          </tr>
          <tr>
            <td>{props.viewOnboard.previousCompany2_name}</td>
            <td>{props.viewOnboard.previousCompany2_employeeId}</td>
            <td>{props.viewOnboard.previousCompany2_designation}</td>
            <td> {props.viewOnboard.previousCompany2_joiningDate ? (<td>
              {previousCompany2_joiningDate1}
            </td>) : (<div></div>)}</td>
            <td>{props.viewOnboard.previousCompany2_relievingDate ? (<td>
              {previousCompany2_relievingDate1}
            </td>) : (<div></div>)}</td>
          </tr>
          <tr>
            <td>{props.viewOnboard.previousCompany3_name}</td>
            <td>{props.viewOnboard.previousCompany3_employeeId}</td>
            <td>{props.viewOnboard.previousCompany3_designation}</td>
            <td> {props.viewOnboard.previousCompany3_joiningDate ? (<td>
              {previousCompany3_joiningDate1}
            </td>) : (<div></div>)}</td>
            <td>{props.viewOnboard.previousCompany3_relievingDate ? (<td>
              {previousCompany3_relievingDate1}
            </td>) : (<div></div>)}</td>
          </tr>

        </tbody>
      </Table>
      <Col md="6" style={{padding: 0 }}>
              <a
                href={`${BASE_URL}/api/get/imageByTitle/ExperienceDetails/${props.viewOnboard.onboardingId}`}
              >
                Download Documents
              </a>
            </Col>
    </Card.Body>
  </div>
  );
}
export default ExperienceTab;
