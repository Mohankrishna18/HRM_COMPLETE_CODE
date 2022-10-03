

import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Card, Container, Row, Col, Table, Tabs, Tab, Button, Modal, Stack, Form } from "react-bootstrap";
import { FcWebcam } from "react-icons/fc";

import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Approve from "./Approve";
import RejectHandler from "./Reject";



function ApprovalTable() {

  const [viewShow, setViewShow] = useState(false);
  const[show,setShow]=useState(false);
  const[rejectShow,setRejectShow]=useState(false);
  const viewHandleClose = () => setViewShow(false);
  const [approval, setApproval] = useState();
  const handleClose = () => setShow(false);
  const rejectHandleClose = () => setRejectShow(false);
  const [updateapproval, setUpdateApproval] = useState({});
  console.log(updateapproval);
  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const employeeId = da.data.employeeId;
  const emp = updateapproval.employeeId;
  console.log(updateapproval);

  useEffect(() => {
    getEmployeeDataApproval();
  }, []);
  const getEmployeeDataApproval = async (e) => {
    const response = await axios.get(`timesheet/getEmployeesTask/${employeeId}`);
    setApproval(response.data);
    console.log(response);
    console.log("dataupdated");
  };
  console.log(approval)

  // {approval.map((item) => (
  //  console.log(item.employeeId)

  // ))}


// console.log(approval.employeeId)
  //View data
  const [taskData, setTaskData] = useState([]);
  // useEffect(() => {
  //   getTaskDetails();
  // }, []);
  // const getTaskDetails = async (e) => {
  //   const response = await axios.get(`timesheet/gettaskDetails/${emp}`);
  //   setTaskData(response.data);
  //   console.log(response.data);
  // };
const loadData =(id)=>{
  console.log(id)
  axios
      .get(`timesheet/gettaskDetails/${id.employeeId}`)
      .then((response) => {
        console.log(response.data)
        setTaskData(response.data);
      });

}
console.log(emp)

  // useEffect(() => {
    
  // }, []);
  console.log(taskData)

  const [columns1, setColumns1] = useState([
    {
      title: "Employee Id",
      field: "employeeId",
      type: "text",
      editable: "never",

    },
  
  
    {
      title: "Timesheet Date",
      field: "timeSheetDate",
      type: "date",
      editable: "never",
      dateSetting: { locale: "en-GB" }
    },
    {
      title: "Total Hours",
      field: "totalHours",
      type: "text",
      editable: "never",

    },

  ]);
  


  return (
    <div>
      <Modal show={viewShow} onHide={viewHandleClose} size="xl">
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
                  <td>{item.taskName}</td>
                  <td>{item.estimatedHours}</td>
                  <td>{item.actualHours}</td>
                  <td>{item.remainingHours}</td>
                  <td>{item.status}</td>
                </tr>
              ))}


            </tbody>
          </Table>

        </Modal.Body>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Approve Timesheet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Approve
           updateApproval={updateapproval}
           // func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Modal show={rejectShow} onHide={rejectHandleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Reject Timesheet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RejectHandler
            updateApproval={updateapproval}
            //unc={pull_reject}
            handleClose1={rejectHandleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

      <MaterialTable
        title=""
        columns={columns1}
        data={approval}
        options={{
          headerStyle: {
            backgroundColor: "#FF9E14",
            color: "white",
            fontSize: "20px",
            paddingTop: "5px",
            paddingBottom: "2px",
            paddingLeft: "20px",
            maxWidth: 200,
            // actionsColumnIndex: -1,
          },


          pageSize: 5,
          pageSizeOptions: [5],
          // maxBodyHeight: 450,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          //grouping: true,
          exportButton: true,

        }}

        onSelectionChange={(rows) => {

          rows.map((items) => {
            console.log(items.actualHours);
            console.log(items);

            setOutput([{ ...objectData, ...items }]);
            ot.push({ ...objectData, ...items })
            console.log(output)
            rows.push(objectData);
            console.log(rows);
            time.push(parseInt(items.actualHours));
          });
          setOtt(ot)
          let s = 0;
          time.forEach(myFunction);

          function myFunction(item) {
            s += item;
          }
          console.log(s);
          setTotalHours(s);

          console.log(time);
        }}
        actions={[
          {
            icon: "button",

            tooltip: "Save User",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.firstName),
          },
        ]}
        components={{
          Action: (props) => (
            <div>
              <Stack direction="horizontal" gap={3}>
                <Button
                  variant="white "
                  className="rounded-pill"
                  onClick={(event) => {
                    setViewShow(true);
                    // console.log(props);
                    setUpdateApproval(props.data);
                    loadData(props.data)
                  }}
                > {" "}
                  <FcWebcam />{" "}
                  View 
                </Button>

                <Button
                  variant="outline-success"
                  onClick={() => {
                    setShow(true);
                    console.log(props)
                    setUpdateApproval(props.data);
                  }}

                >

                  Approve
                </Button>
                {/* <Button
                                        variant="white "
                                        className="rounded-pill"
                                        onClick={() => {
                                            setShow(true);
                                            console.log(props)
                                            setLeaveID(props.data);
                                        }}
                                    >
                                        <FcApproval /> Approve
                                    </Button> */}





                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setRejectShow(true);
                    console.log(props)
                    setUpdateApproval(props.data);
                  }}
                >
                  Reject
                </Button>
                {/* <Button
                                        variant="white "
                                        className="rounded-pill"
                                        onClick={() => {
                                            setRejectShow(true);
                                            console.log(props)
                                            setLeaveID(props.data);
                                        }}
                                    >
                                        {" "}
                                        <FcCancel /> Reject
                                    </Button> */}

              </Stack>

            </div>
          ),
        }}
      />

    </div>
  )
}

export default ApprovalTable