import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "../../../../Uri";
import "date-fns";

import {
 
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FcWebcam } from "react-icons/fc";



const EmployeeDashboardTask = () => {
 
   
   
    //   useEffect(() => {
    //     getTaskDetails();
    //   }, []);
    //   const getTaskDetails = async (e) => {
    //     const response = await axios.get(`timesheet/gettaskDetails/${employeeId}`);
    //     setTaskData(response.data);
    //     console.log(response.data);
    //   };
   
   
   
      const da = JSON.parse(sessionStorage.getItem("userdata"));
      const employeeId = da.data.employeeId;
      const [approval, setApproval] = useState();
      const [viewShow, setViewShow] = useState(false);
     
      const [taskData, setTaskData] = useState([]);
     
      const [selectedTask, setSelectedTask] = useState();
      console.log(selectedTask);
     
      const [columns1, setColumns1] = useState([
        {
          title: "Projects",
          field: "projectName",

        },
        {
          title: "Task Title",
          field: "taskTitle",
       
        },
        {
            title: "Planned Start Date",
            field: "plannedStartDate",
            type: "date",
            editable: "never",
            dateSetting: { locale: "en-GB" },
     
          },
          {
            title: "Planned End Date",
            field: "plannedEndDate",
            type:"date",
            dateSetting: { locale: "en-GB" },
         
           
          },
          {
            title: "Actual Start Date",
            field: "assignDate",
            type:  "date",
            dateSetting: { locale: "en-GB" },
           
           
          },
      ]);
   
   
   
   
  return (
    <div>
    <div>
      <Row>
       
       <Col style={{  fontWeight: "bold",paddingBottom:"20px"}}>
      <Form>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Select
            style={{
              width: "24%",
              height: "4%",
          //  paddingTop: "80px",
              marginLeft: "10px",
             
              cursor: "pointer",
              borderRadius: 10,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              axios
                .get(
                  `task/getByStatus/${employeeId}/${selectedTask}`
                )
                .then((res) => {
                  console.log(res);
                  setApproval(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
              // setApproval(response.data);
              // console.log(response);

              setSelectedTask(e.target.value);
            }}
          >
            <option>Select</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="On Hold">On Hold</option>
            <option value="Completed">Completed</option>
           
          </Form.Select>
        </Form.Group>
      </Form></Col>
      </Row>
    </div>

    <Row>
      <MaterialTable
        title=""
        columns={columns1}
        data={approval}
        options={{
          headerStyle: {
            backgroundColor: "white",
            color: "black",
            padding:"5px",
           
            fontSize: "bold",
          },

          pageSize: 10,
          pageSizeOptions: [7],
         
          addRowPosition: "first",
          actionsColumnIndex: -1,
          search: false
       
        }}
       
        actions={[
       
        ]}
        components={{
          Action: (props) => (
            <div>
           
            </div>
          ),
        }}
      />
</Row>
   
  </div>
);
};


export default EmployeeDashboardTask;