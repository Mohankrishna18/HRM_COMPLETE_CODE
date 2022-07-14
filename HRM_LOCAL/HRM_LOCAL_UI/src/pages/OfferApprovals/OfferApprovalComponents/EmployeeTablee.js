import React, { useEffect, useState } from "react";
import axios from "../../../Uri";
import Approve from "./Approve";
import Reject from "./Reject";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const EmployeeTablee = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(false);
  const [viewStatus, setViewStatus] = useState(false);

  const pull_data = () => {
    setStatus(true);
    setViewStatus(true);
  };

  useEffect(() => {
    approvedData();
  }, [status]); // console.log(users.reportingManager)

  const approvedData = async () => {
  const approvedEmployeesResponse = await axios.get("/emp/getApprovedOnboardedData");
    console.log(approvedEmployeesResponse.data);
    setUsers(approvedEmployeesResponse.data.data);
  }

  //Formate Date
  function formatDate(date) {
    var datePart = date.match(/\d+/g),

      year = datePart[0], // get only two digits

      month = datePart[1],
      day = datePart[2];
    return day + "-" + month + "-" + year;
  }

  return (

    <div>
      <TableContainer sx={{ maxWidth: 1800 }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  fontSize: "1rem",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "#FF9E14"
                }
              }}
            >

              <TableCell scope="col">No</TableCell>
              <TableCell scope="col" class="TableCell-lg">
                Onboarding Id
              </TableCell> <TableCell scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                Designation
              </TableCell> <TableCell scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                Name
              </TableCell>
              {/* <TableCell scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                  Last Name
                </TableCell>  */}
              <TableCell scope="col" class="" style={{ textAlign: 'center' }}>
                Email
              </TableCell> <TableCell scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                Phone Number
              </TableCell> <TableCell scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                Job Title
              </TableCell> <TableCell scope="col" class="col-sm-2" style={{ textAlign: 'center' }} >
                Years Of Experience
              </TableCell> <TableCell scope="col" class="col-sm-2" style={{ textAlign: 'center' }}>
                Date Of Joining
              </TableCell> <TableCell scope="col" class="th-lg" style={{ textAlign: 'center' }}>
                {" "}
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {users.length == 0 ? (<h4 align="center"> Oops..! No Records Found</h4>) : ( */}
              <>
                {users && users.map((user, index) => (
                  <TableRow>
                    <TableCell scope="row">{index + 1}</TableCell>
                    <TableCell
                      style={{ textAlign: 'center' }}>{user.onboardingId}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{user.designation}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{user.firstName}</TableCell>
                    {/* <TableCell style={{ textAlign: 'center' }}>{user.lastName}</TableCell> */}
                    <TableCell style={{ textAlign: 'center' }}>{user.email}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{user.phoneNumber}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{user.jobTitle}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{user.yearsOfExperience}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{formatDate(user.dateOfJoining)}</TableCell>
                    {console.log(user.comments)}
                    <TableCell>
                      <div class="hstack gap-3">
                        <div>
                          <Approve onboardingid={user.onboardingId} reportingManager={user.reportingManager} />
                        </div> <div>
                          <Reject onboardingid={user.onboardingId} comments={user.comments} />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            {/* )} */}
          </TableBody>
        </Table>
      </TableContainer>

    </div >

  );
};
export default EmployeeTablee;