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
       
        <Col style={{paddingLeft:"700px",paddingBottom:"80px",paddingTop:"-1000px"}}>
      <Form>
        <Form.Group>
          <Form.Label>Select Tasks</Form.Label>
          <Form.Select
            style={{
              width: "94%",
              height: "4%",
              padding: "9px",
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

    <Row styles={{ paddingTop: "20%" }}>
      <MaterialTable
        title=""
        columns={columns1}
        data={approval}
        options={{
          headerStyle: {
            backgroundColor: "white",
            color: "black",
            fontSize: "16px",
            paddingTop: "0px",
            paddingBottom: "2px",
          },

          pageSize: 10,
          pageSizeOptions: [7],
          // maxBodyHeight: 450,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          search: false
          //grouping: true,
         // exportButton: true,
        }}
        // onSelectionChange={(rows) => {
        //   rows.map((items) => {
        //     console.log(items.actualHours);
        //     console.log(items);

        //     setOutput([{ ...objectData, ...items }]);
        //     ot.push({ ...objectData, ...items });
        //     console.log(output);
        //     rows.push(objectData);
        //     console.log(rows);
        //     time.push(parseInt(items.actualHours));
        //   });
        //   setOtt(ot);
        //   let s = 0;
        //   time.forEach(myFunction);

        //   function myFunction(item) {
        //     s += item;
        //   }
        //   console.log(s);
        //   setTotalHours(s);

        //   console.log(time);
        // }}
        actions={[
        //   {
        //     icon: "button",

        //     tooltip: "Save User",
        //     onClick: (event, rowData) =>
        //       alert("You want to delete " + rowData.firstName),
        //   },
        ]}
        components={{
          Action: (props) => (
            <div>
              {/* <Button
                variant="white "
                className="rounded-pill"
                onClick={(event) => {
                  setViewShow(true);

                  // console.log(props);
                  // setViewOnboard(props.data);
                }}
              >
                {" "}
                <FcWebcam /> View
              </Button> */}
            </div>
          ),
        }}
      />
      {/* <Modal show={viewShow} onHide={viewHandleClose} size="xl">
        <Modal.Header style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Timesheet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Estimated Hours</th>
                <th>Actual Hours</th>
                <th>Remaining Hours</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {taskData.map((item) => (
                <tr>
                  <td>{item.taskTitle}</td>
                  <td>{item.estimatedHours}</td>
                  <td>{item.actualHours}</td>
                  <td>{item.remainingHours}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal> */}
    </Row>
  </div>
);
};


export default EmployeeDashboardTask;