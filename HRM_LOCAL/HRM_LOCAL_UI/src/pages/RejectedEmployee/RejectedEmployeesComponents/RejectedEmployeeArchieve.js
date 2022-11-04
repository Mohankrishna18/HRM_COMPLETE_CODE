import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

import axios from "../../../Uri";

function RejectedEmployeeArchieve() {
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "Onboarding Id",
      field: "onboardingId",
      type: "text",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
        title: "Designation",
        field: "designation",
        type: "text",
  
        headerStyle: {
          backgroundColor: "#FF9E14",
          color: "white",
        },
    },
    {
      title: "First Name",
      field: "firstName",
      type: "text",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
        title: "Last Name",
        field: "lastName",
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
      title: "PhoneNumber",
      field: "phoneNumber",
      type: "text",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },

    {
      title: "Date of Joining",
      field: "dateOfJoining",
      type:'date',

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Experience",
      field: "yearsOfExperience",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Reason",
      field: "comments",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
  ];

  useEffect(() => {
    axios
     .get("/emp/getRejectedData")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container>
      <Grid xs={12}>
        <MaterialTable
          title="Rejected Onboards Archive"
          data={data}
          sx={{ color: "white" }}
          columns={columns}
          options={{
            exportButton: false,
            pageSize: 5,
            actionsColumnIndex: -1,
            grouping: false,
            addRowPosition: "first",
            headerStyle: {
              backgroundColor: "#f5896e",
              color: "white",
              fontSize: "12px",
              //height: "10px",
              //fontWeight: 'bold'
          },
          rowStyle: {
              fontSize: 14,
          },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default RejectedEmployeeArchieve;