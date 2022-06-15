import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";

import axios from "../../../Uri";
import { date } from "yup";
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function OnboardedEmployeesTable() {
  const [status, setStatus] = useState({});
  const [onboard, setOnboard] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("/dept/getAllDepartments").then((res)=>{
      console.log(res.data)
      setOnboard(res.data)
    });
  }, []);
  console.log(onboard);

  const loadDept=() => {
    onboard.map(row=>status[row.departmentName]=row.departmentName)
    console.log(status)
    setStatus(status)
  }
  useEffect(()=>{
    loadDept()
  })

  // useEffect(()=>{
  //   loadData();  
  // },[]);

    useEffect(()=>{
      axios.get("/designation/getAllDesignations").then((res)=>{
        console.log(res.data)
        setDesignation(res.data)
    });
  },[]);
    const loadDesignation=()=>{
      designation.map(row=>status[row.designationName]=row.designationName)
      console.log(status)
      setStatus(status)
    };
    useEffect(() => {
      loadDesignation()
    })

  const columns = [
    {
      title: "Onboarding Id",
      field: "onboardingId",
      type: "text",
      editable:"false",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Designation",
      field: "designation",
      type: "text",
      lookup: status,

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Department",
      field: "department",
      type: "text",
      lookup:status,

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
    {
      title: "Job Title",
      field: "jobTitle",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Primary Skills",
      field: "primarySkills",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Secondary Skills",
      field: "secondarySkills",

      headerStyle: {
        backgroundColor: "#FF9E14",
        color: "white",
      },
    },
    {
      title: "Type Of Employeement",
      field: "employmentType",

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

    <div >
         
    
    <Grid container >
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
                        const notify = () => toast("Employee Details was updated")
                        const res = axios.put(`/updatedOnbordingDataById/${index}`, updatedRow)

                            .then((resp) => {
                                console.log(resp);
                                loadData()
                                notify();
                                setData(updatedRows)
                                console.log("updated")
                            })

                            .catch((err) => {
                                console.log("not updated")
                                console.log(err)
                                // toast.error("Server error");
                            });

                        setData(updatedRows);
                       
                        // toast.success(" Updated Successfully");
                        //console.log(updatedRows);
                        resolve();
                    });
                }),
              }}

          options={{
            exportButton: true,
            pageSize: 10,
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