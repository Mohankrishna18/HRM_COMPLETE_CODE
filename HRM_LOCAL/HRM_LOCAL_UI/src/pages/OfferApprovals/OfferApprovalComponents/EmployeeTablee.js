import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import Approve from "./Approve";
import Reject from "./Reject";

const EmployeeTablee = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    axios
      .get("/emp/waitingForApprovelStatus")
      .then((onboardingEmployeesResponse) => {
        setUsers(onboardingEmployeesResponse.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // console.log(users.reportingManager)

  //Formate Date

  function formatDate(date) {
    var datePart = date.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];
    return day + "-" + month + "-" + year;
  }

  return (
    <div>
      <div class="table-responsive .text-nowrap" id="DataTable">
        <Row>
          <Col md={12}>
            <table
              class="table table-hover table-bordered  w-auto"
              cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col" class="th-lg">
                    Onboarding Id
                  </th>

                  <th scope="col" class="col-sm-2">
                    Designation
                  </th>

                  <th scope="col" class="col-sm-2">
                    First Name
                  </th>

                  <th scope="col" class="col-sm-2">
                    Last Name
                  </th>

                  <th scope="col" class="">
                    Email
                  </th>

                  <th scope="col" class="col-sm-2">
                    Phone Number
                  </th>

                  <th scope="col" class="col-sm-2">
                    Job Title
                  </th>

                  <th scope="col" class="">
                    Years Of Experience
                  </th>

                  <th scope="col" class="col-sm-2">
                    Date Of Joining
                  </th>

                  <th scope="col" class="th-lg">
                    {" "}
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users &&
                  users.map((user, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{user.onboardingId}</td>

                      <td>{user.designation}</td>

                      <td>{user.firstName}</td>

                      <td>{user.lastName}</td>
                      <td>{user.email}</td>

                      <td>{user.phoneNumber}</td>

                      <td>{user.jobTitle}</td>

                      <td style={{textAlign: 'center'}}>{user.yearsOfExperience}</td>
                      <td>{user.dateOfJoining}</td>
                       {console.log(user.comments)}
                      <td>
                        <div class="hstack gap-3">
                          <div>
                            <Approve onboardingid={user.onboardingId} reportingManager={ user.reportingManager} />
                          </div>

                          <div>
                            <Reject onboardingid={user.onboardingId} comments={user.comments}/>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
      {/* <div class="panel-footer">
 <div class="row">
   <div class="col col-xs-4">Page 1 of 5
   </div>
   <div class="col col-xs-8">
     <ul class="pagination hidden-xs pull-right">
       <li><a href="#">1</a></li>
       <li><a href="#">2</a></li>
       <li><a href="#">3</a></li>
       <li><a href="#">4</a></li>
       <li><a href="#">5</a></li>
     </ul>
     <ul class="pagination visible-xs pull-right">
         <li><a href="#">«</a></li>
         <li><a href="#">»</a></li>
     </ul>
   </div>
 </div>
 </div> */}
    </div>
  );
};
export default EmployeeTablee;
