import React, { useState, useEffect,useContext} from "react";
import MaterialTable from "material-table";
import {useParams} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../Projects/ProjectsComponents/ProjectUpdateTabs";



function TeamMembersList(props) {
  console.log(props.data)
    console.log(props.data.projectId)
  
 // const rowData = props.rowData;
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async (e) => {
    const response = await axios.get(`clientProjectMapping/getAllProjectTeams/Active/${props.data.projectId}`);
    setData(response.data.data);
    console.log(response.data.data);
  };

 
  const [data, setData] = useState([]);
  //const [filteredData, setFileteredData] = useState([]);

  //const result = data.filter(emp => emp.status === "Active")
  //setFileteredData(result)

  return (
    <>
    <ListGroup as="ol" numbered>
          <h5>
          {data.map((team) => (
            <option value={team.employeeprojectId}>{team.employeeName}</option>
          ))}
          </h5>
</ListGroup>
    </>

  );
}

export default TeamMembersList;