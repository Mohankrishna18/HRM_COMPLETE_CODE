// import React from "react";
// import {
//   Button,
//   Card,
//   Col,
//   Container,
//   ProgressBar,
//   Row,
// } from "react-bootstrap";
// import {
//   Timeline,
//   BodyContent,
//   Section,
//   Description,
// } from "vertical-timeline-component-react";

// const EmpAttendanceCard = (props) => {
//   const customTheme = {
//     yearColor: "#405b73",
//     lineColor: "#d0cdc4",
//     dotColor: "#fd7e14",
//     borderDotColor: "#ced4da",
//     titleColor: "#000000",
//     subtitleColor: "#bf9765",
//     textColor: "#262626",
//   };
//   return (
//     <div>
//       <Row>
//         <Col>
//           <Card style={{ width: "20rem", height: "35em" }}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "30px" }}>Timesheet</Card.Title>
//               <Card.Text className="text-muted">11 Mar 2020</Card.Text>
//               <Button
//                 variant="outline-secondary"
//                 style={{
//                   width: "13rem",
//                   height: "5em",
//                   marginTop: "20px",
//                   marginLeft: "40px",
//                 }}
//               >
//                 <b>Punch In at</b>
//                 <p>Wed, 11th Mar 2020 10.00AM</p>
//               </Button>

//               <Button
//                 type="button"
//                 class="btn btn-primary punch-btn"
//                 style={{
//                   marginTop: "150px",
//                   marginLeft: "50px",
//                   width: "10rem",
//                   height: "5em",
//                   backgroundColor: "#ff9b44",
//                   borderRadius: "30px",
//                 }}
//               >
//                 Punch Out
//               </Button>

//               <div class="statistics" style={{ marginTop: "40px" }}>
//                 <div class="row">
//                   <div class="col-md-6 col-6 text-center">
//                     <div class="stats-box">
//                       <p>Break</p>
//                       <h6>1.21 hrs</h6>
//                     </div>
//                   </div>
//                   <div class="col-md-6 col-6 text-center">
//                     <div class="stats-box">
//                       <p>Overtime</p>
//                       <h6>3 hrs</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card style={{ width: "20rem", height: "35em" }}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "30px" }}>Statistics</Card.Title>
//               <Card>
//                 <Card.Header>
//                   <Card.Body>
//                     <Card.Title>Today</Card.Title>
//                     <ProgressBar now={60} label={`60%`} />
//                   </Card.Body>
//                 </Card.Header>
//               </Card>
//               <Card>
//                 <Card.Header>
//                   <Card.Body>
//                     <Card.Title>This week</Card.Title>
//                     <ProgressBar variant="success" now={40} label={`40%`} />
//                   </Card.Body>
//                 </Card.Header>
//               </Card>
//               <Card>
//                 <Card.Header>
//                   <Card.Body>
//                     <Card.Title>This Month</Card.Title>
//                     <ProgressBar variant="info" now={30} label={`30%`} />
//                   </Card.Body>
//                 </Card.Header>
//               </Card>
//               <Card>
//                 <Card.Header>
//                   <Card.Body>
//                     <Card.Title>Remaining</Card.Title>
//                     <ProgressBar variant="warning" now={40} label={`40%`} />
//                   </Card.Body>
//                 </Card.Header>
//               </Card>
//               <Card>
//                 <Card.Header>
//                   <Card.Body>
//                     <Card.Title>Overtime</Card.Title>
//                     <ProgressBar variant="danger" now={40} label={`40%`} />
//                   </Card.Body>
//                 </Card.Header>
//               </Card>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card style={{ width: "20rem", height: "35em" }}>
//             <Card.Body>
//               <Card.Title style={{ fontSize: "30px" }}>
//                 Today Activity
//               </Card.Title>
//               <Card.Text style={{ marginTop: "40px" }}>
//                 <Timeline theme={customTheme}>
//                   <BodyContent>
//                     <Section title="Punch In at">
//                       <Description text="10.00AM" />
//                     </Section>

//                     <Section title="Punch Out at">
//                       <Description text="11.00AM" />
//                     </Section>

//                     <Section title="Punch In at">
//                       <Description text="11.15AM" />
//                     </Section>

//                     <Section title="Punch Out at">
//                       <Description text="01.30PM" />
//                     </Section>

//                     <Section title="Punch In at">
//                       <Description text="02.00PM" />
//                     </Section>

//                     <Section title="Punch Out at">
//                       <Description text="07.30PM" />
//                     </Section>
//                   </BodyContent>
//                 </Timeline>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default EmpAttendanceCard;
