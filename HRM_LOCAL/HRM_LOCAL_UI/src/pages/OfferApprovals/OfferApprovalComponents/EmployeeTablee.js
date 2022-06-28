
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
        setUsers(onboardingEmployeesResponse.data);
        console.log(onboardingEmployeesResponse.data);
      })
      .catch((err) => console.error(err));
  }, []); // console.log(users.reportingManager) //Formate Date 
  function formatDate(date) {
    var datePart = date.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];
    return day + "-" + month + "-" + year;
  }
  return (

    <div class="table-responsive .text-nowrap" id="DataTable">
      <Row>
        <Col md={12}>
          <table
            class="table table-hover table-bordered w-auto"
            cellspacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col" class="th-lg">
                  Onboarding Id
                </th> <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                  Designation
                </th> <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                   Name
                </th> 
                {/* <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                  Last Name
                </th>  */}
                <th scope="col" class="" style={{ textAlign: 'center' }}>
                  Email
                </th> <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                  Phone Number
                </th> <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                  Job Title
                </th> <th scope="col" class="" style={{ textAlign: 'center' }}>
                  Years Of Experience
                </th> <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                  Date Of Joining
                </th> <th scope="col" class="th-lg" style={{ textAlign: 'center' }}>
                  {" "}
                  Actions
                </th>
              </tr>
            </thead> <tbody>
              {users &&
                users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td style={{ textAlign: 'center' }}>{user.onboardingId}</td> 
                    <td style={{ textAlign: 'center' }}>{user.designation}</td> 
                    <td style={{ textAlign: 'center' }}>{user.firstName}</td>
                    {/* <td style={{ textAlign: 'center' }}>{user.lastName}</td> */}
                    <td style={{ textAlign: 'center' }}>{user.email}</td> 
                    <td style={{ textAlign: 'center' }}>{user.phoneNumber}</td> 
                    <td style={{ textAlign: 'center' }}>{user.jobTitle}</td> 
                    <td style={{ textAlign: 'center' }}>{user.yearsOfExperience}</td>
                    <td style={{ textAlign: 'center' }}>{user.dateOfJoining}</td>
                    {console.log(user.comments)}
                    <td>
                      <div class="hstack gap-3">
                        <div>
                          <Approve onboardingid={user.onboardingId} reportingManager={user.reportingManager} />
                        </div> <div>
                          <Reject onboardingid={user.onboardingId} comments={user.comments} />
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

  );
};
export default EmployeeTablee;

