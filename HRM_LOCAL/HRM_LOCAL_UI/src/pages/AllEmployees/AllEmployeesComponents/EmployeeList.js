import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

import axios from "../../../Uri";


function EmployeeList() {


  const [data, setData] = useState([]);

  const columns = [
    {
      title: "Employee Id",
      field: "employeeId",
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

      .get("/emp/getAllEmployeeMasterData")

      .then((res) => {
        setData(res.data.data);

        console.log(res.data.data);
      })

      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);



  return (
    <Grid container>
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
  );
}

export default EmployeeList;
