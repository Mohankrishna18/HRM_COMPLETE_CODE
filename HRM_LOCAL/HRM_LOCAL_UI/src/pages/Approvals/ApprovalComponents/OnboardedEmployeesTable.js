import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

import axios from "../../../Uri";
import { date } from "yup";
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function OnboardedEmployeesTable() {
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
        type: 'date',
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
    
  ];

  useEffect(() => {
    axios
      .get("/emp/waitingForApprovelStatus")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

    <div>
         
    
    <Grid container>
      <Grid xs={12}>
        <MaterialTable
          title="Onboard Employees"
          data={data}
          sx={{ color: "white" }}
          columns={columns}
          editable={{
            // onRowAdd: newData =>

            //     new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //             console.log(newData)
            //             const res = axios.post("/designation/postDesignationMaster", newData)
            //             console.log(res)
            //             setData([...data, newData]);
            //             loadData();
                        

            //             resolve();
            //         }, 1000)
            //     }),
            onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                    console.log(oldRow);
                    console.log(updatedRow);
                    const index = oldRow.onboardingId;
                    console.log(index);
                    const updatedRows = [...data];
                    console.log(updatedRows);
                    updatedRows[oldRow.tableData.id] = updatedRow;
                    console.log(updatedRows);

                    setTimeout(() => {

                        console.log(index)
                        console.log(updatedRow)
                        const res = axios.put(`/updateApprovStatus/${index}`, updatedRow)
                            .then((resp) => {
                                console.log(resp);
                                loadData()
                                setData(updatedRows)
                            })

                            .catch((err) => {
                                console.log("not updated")
                                // toast.error("Server error");
                            });

                        setData(updatedRows);
                        console.log("updated")
                        // toast.success(" Updated Successfully");
                        console.log(updatedRows);
                        resolve();
                    });
                }),
              }}

          options={{
            exportButton: true,
            pageSize: 20,
            actionsColumnIndex: -1,
            grouping: true,
            addRowPosition: "first",
            headerStyle: {
              backgroundColor: "#FF9E14",
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

export default OnboardedEmployeesTable;
