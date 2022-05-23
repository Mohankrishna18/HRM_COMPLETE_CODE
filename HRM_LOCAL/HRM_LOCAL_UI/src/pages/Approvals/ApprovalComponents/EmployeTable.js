import React, { useEffect, useState } from "react";



import axios from "../../../Uri";


import Edit from "./Edit";





import Reject from "./Reject";



const EmployeeTable = (props) => {
  const [users, setUsers] = useState([]);


  // const approve = { approvedStatus: true };


  useEffect(() => {
    axios
      .get("/emp/waitingForApprovelStatus")



      .then((onboardingEmployeesRseponse) => {
        console.log(onboardingEmployeesRseponse.data);
        setUsers(onboardingEmployeesRseponse.data.data);
      });
  }, []);


  console.log(users);

  // if (!users.approvedStatus) {
  //   let approvedStatus = true;
  //   let text = approvedStatus.toString();
  //   console.log(approvedStatus);
  // } else {
  //   console.log("error");
  // }



  

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Onboarding Id</th>



          <th scope="col">Designation</th>



          <th scope="col">First Name</th>


          <th scope="col">Last Name</th>
          <th scope="col">Email</th>

          <th scope="col">Phone Number</th>


          <th scope="col">Years Of Experience</th>
          <th scope="col">Job Tiltle</th>
          <th scope="col">Date Of Joining</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>



      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.onboardingId}</td>


            <td>{user.designation}</td>

            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>


            <td>{user.phoneNumber}</td>



            <td>{user.yearsOfExperience}</td>
            <td>{user.jobTitle}</td>
            <td>{user.dateOfJoining}</td>

            <td>
              <div class="hstack gap-3">
                <div>
                  <Edit onboardingid={user.onboardingId} />
                </div>

              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

