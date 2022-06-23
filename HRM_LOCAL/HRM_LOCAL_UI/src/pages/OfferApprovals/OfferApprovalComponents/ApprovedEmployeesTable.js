import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";

const ApprovedEmployeesTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/emp/getApprovedData")
      .then((approvedEmployeesResponse) => {
        setUsers(approvedEmployeesResponse.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

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

                  <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                    Designation
                  </th>

                  <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                     Name
                  </th>

                  {/* <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                    Last Name
                  </th> */}

                  <th scope="col" class="" style={{textAlign: 'center'}}>
                    Email
                  </th>

                  <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                    Phone Number
                  </th>

                  <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                    Job Title
                  </th>

                  <th scope="col" class="" style={{ textAlign: 'center' }}>
                    Years Of Experience
                  </th>

                  <th scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                    Date Of Joining
                  </th>
                </tr>
              </thead>

              <tbody>
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

                      <td style={{textAlign: 'center'}}>{user.yearsOfExperience}</td>
                      <td style={{ textAlign: 'center' }}>{user.dateOfJoining}</td>

                      
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
export default ApprovedEmployeesTable;
