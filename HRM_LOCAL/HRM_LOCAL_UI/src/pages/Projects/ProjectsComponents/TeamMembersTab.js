import React, { useState, useEffect,useContext} from "react";
import MaterialTable from "material-table";
import {useParams} from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "./ProjectUpdateTabs";


function TeamMembersTab(props) {
  const {data } = useContext(UserContext)
  console.log(props.rowData.data.projectName)
 // const rowData = props.rowData;
  useEffect(() => {
    loadData();
  }, [props.data]);
const params = useParams()
console.log(params)
  const loadData = async (e) => {
    const response = await axios.get(`clientProjectMapping/getAllProjectTeams/Active/${params.id}`);
    setData(response.data.data);
    console.log(response.data.data);
  };

  const [columns, setColumns] = useState([
    {
      title: "Employee ID",
      field: "employeeId",
      type: "text",
      editable: "never",
    },
    {
      title: "Name",
      field: "employeeName",
      type: "text",
      editable: "never",
    },
    {
      title: "Designation",
      field: "designationName",
      type: "text",
      editable: "never",
    },
    {
      title: "Business Unit",
      field: "departmentName",
      type: "text",
      editable: "never",
    },
    {
      title: "Allocation Start Date",
      field: "startDate",
      type: "date",
      editable: "never",
    },
    {
      title: "Allocation End Date",
      field: "endDate",
      type: "date",
      editable: "never",
    },
   
    {
      title: "Project Allocation(%)",
      field: "projectAllocation",
      type: "text",
     
    },
    {
      title: "Status",
      field: "status",
      type: "text",
      lookup:{Active: "Active",InActive:"InActive"},
     
    },
  ]);

  const [data1, setData] = useState([]);
  //const [filteredData, setFileteredData] = useState([]);

  //const result = data.filter(emp => emp.status === "Active")
  //setFileteredData(result)

  return (
    <MaterialTable
      title= {" Project Name  : " + data}
      columns={columns}
      data={data1}
      options={{
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

        pageSize: 10,

        pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

        maxBodyHeight: 650,

        addRowPosition: "first",

        actionsColumnIndex: -1,

        //grouping: true,

        exportButton: true,
      }}
      editable={{
        // onRowAdd: (newData) =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       setData([...data, newData]);

        //       resolve();
        //     }, 1000);
        //   }),
          onRowUpdate: (updatedRow, oldRow) =>
          new Promise((resolve, reject) => {
            console.log(oldRow);
            console.log(updatedRow);
            const index = oldRow.employeeprojectId;
            console.log(index);
            const updatedRows = [...data];
            console.log(updatedRows);
            updatedRows[oldRow.tableData.id] = updatedRow;
            console.log(updatedRows);

            setTimeout(async() => {
              console.log(index);
              console.log(updatedRow);
              const res = await axios
                .put(`/clientProjectMapping/updateProjectTeamById/${index}`, updatedRow)
                .then((resp) => {
                  console.log(resp);
                  loadData();
                  setData(updatedRows);
                })

                .catch((err) => {
                  console.log("not updated");
                  // toast.error("Server error");
                });

              setData(updatedRows);
              console.log("updated");
              toast.success(" Updated Successfully");
              console.log(updatedRows);
              resolve();
            });
          }),
       
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(oldData);
                const dataDelete = [...data];
                const index = oldData.employeeprojectId;
                dataDelete.splice(index, 1);
                const res = axios
                  .delete(`/clientProjectMapping/deleteProjectTeam/${index}`)
                  .then((res) => {
                    console.log(res);
                    loadData();
                  });
                console.log(dataDelete);
                //setData(dataDelete);

                resolve();
              }, 1000);
            }),
      }}
    />
  );
}

export default TeamMembersTab;