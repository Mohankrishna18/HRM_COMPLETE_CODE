import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";
//import { Link } from "@mui/material";
import { Link } from "react-router-dom";

// import EmployeeMasterForms from "./editmyprofileroute";

import axios from "../../../Uri";

function RoleUnderEmployees() {

  const [data, setData] = useState([]);
  const [eid, setEid] = useState("");

  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;


  const myProfile = (e) => {
    console.log(e.target.innerText);
    setEid(e.target.innerText);
    localStorage.setItem("item", e.target.innerText);
    axios
      .get(`/emp/getEmployeeDataByEmployeeId/${e.target.innerText}`)
      .then((response) => {
        console.log(response.data.data);
      });
  };



  const columns = [
    {
      title: "Employee Id",
      field: "employeeId",
    //   render: (rowData) => (
    //     <Link to="/app/editmyprofileroute" onClick={myProfile}>
    //       {rowData.employeeId}
    //     </Link>
    //   ),
      type: "text",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Employee Name",
      field: "firstName",
      type: "text",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Email",
      field: "email",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Department",
      field: "departmentName",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Designation",
      field: "designationName",
      type: "text",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },

    {
      title: "Date of Joining",
      field: "dateOfJoining",
      type: "date",
      dateSetting: { locale: "en-GB" },
      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Skill set",
      field: "primarySkills",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Reporting Manager",
      field: "reportingManager",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
  ];




  useEffect(() => {
    axios

      .get(`/emp/getRoleBasedEmployeesByEmployeeId/${employeeid}`)

      .then((res) => {
        setData(res.data.data);

        console.log(res.data.data);
        console.log(res.data.data.employeeid);
      })

      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);
  console.log(eid);
  return (
    <div className="scroll">
      <Grid container data1={eid}>
        <Grid xs={12}>
          <MaterialTable
            title="All Employees"
            data={data}
            sx={{ color: "white" }}
            columns={columns}
            options={{
              exportButton: true,
              pageSize: 20,
              actionsColumnIndex: -1,
              grouping: true,
              addRowPosition: "first",
              headerStyle: {
                backgroundColor: "#1E90FF",
                color: "white",
                fontSize: "15px",
                //height: "10px",
                //fontWeight: 'bold'
              },
              rowStyle: {
                fontSize: 16,
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default RoleUnderEmployees;

