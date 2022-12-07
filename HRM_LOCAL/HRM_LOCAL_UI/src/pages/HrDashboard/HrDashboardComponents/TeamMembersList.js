import React, { useState, useEffect, useContext } from "react";
import MaterialTable from "material-table";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Projects/ProjectsComponents/ProjectUpdateTabs";

function TeamMembersList(props) {
  console.log(props.data);
  console.log(props.data.projectId);

  // const rowData = props.rowData;
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async (e) => {
    const response = await axios.get(
      `clientProjectMapping/getAllProjectTeams/Active/${props.data.projectId}`
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  const [data, setData] = useState([]);

  const [columns, setColumns] = useState([
    {
      title: "Employee ID",
      field: "employeeId",
      type: "text",
      editable: "never",
    },
    {
      title: "Name",
      field: "fullName",
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
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "Allocation End Date",
      field: "endDate",
      type: "date",
      editable: "never",
      dateSetting: { locale: "en-GB" },
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
      lookup: { Active: "Active", InActive: "InActive" },
    },
  ]);

 
  return (
    // <>
    //   <ListGroup as="ol" numbered>
    //     {data.map((team) => (
    //       <ListGroup.Item as="li" value={team.employeeprojectId}>
    //         {team.employeeName}
    //       </ListGroup.Item>
    //     ))}
    //   </ListGroup>
    // </>
    <MaterialTable
    title={" Project Name  : " + props.data.projectName}
    columns={columns}
    data={data}
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

      maxBodyHeight: 1050,

      addRowPosition: "first",

      actionsColumnIndex: -1,

      //grouping: true,

      exportButton: true,
    }}
   
  />
  );
}

export default TeamMembersList;
