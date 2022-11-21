import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
import { Button, Stack, Modal } from "react-bootstrap";
import ManagerEmployeeApprove from "./ManagerEmployeeApprove";
import ManagerEmployeeReject from "./ManagerEmployeeReject";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

function ManagerEmployeesLeavesWaitingForApproval(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [rejectshow, setRejectShow] = useState(false);
  const [leaveID, setLeaveID] = useState({});
  const [update, setUpdate] = useState(false);
  const [reject, setReject] = useState(false);

  const handleClose = () => setShow(false);
  const approveHandleClose = () => setUpdate(false);

  const handleCloseReject = () => setRejectShow(false);
  const rejectHandleClose = () => setReject(false);
  const handleShow = () => {};
  const pull_data = () => {
    setUpdate(!update);
  };
  const pull_dataReject = () => {
    setReject(!reject);
  };
  const pull_dataApprove = () => {
    setLeaveID(!leaveID);
  };

  useEffect(() => {
    loadData();
  }, [update, leaveID, reject]);

  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const empID = da.data.employeeId;

  const loadData = async () => {
    const res = await axios.get(`/leave/getUserByReportingManager/${empID}`);
    // setData(res.data);
    // console.log(res.data);
    console.log(res.data);
    const dat = res.data.filter((m) => m.leaveStatus == "pending");
    console.log(dat);
    setData(dat);
  };
  const [columns, setColumns] = useState([
    { title: "Employee ID", field: "employeeId" },
    { title: "Name", field: "name" },
    { title: "Leave Type", field: "leaveType" },
    { title: "Leave/WFH", field: "leaveOrwfh" },


    {
      title: "From",
      field: "fromDate",
      type: "date",
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "To",
      field: "toDate",
      type: "date",
      dateSetting: { locale: "en-GB" },
    },
    { title: "No Of Days", field: "numberOfDays" },
    { title: "Reason", field: "leaveReason" },
    // { title: "Status", field: "managerApproval" },
    // { title: 'Leave Type', field: 'leaveType', type:'date'}
  ]);

  // const [data, setData] = useState([
  //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  //     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  // ]);

  return (
    <div >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: "#f5896e"}}>
          <Modal.Title>Are you sure you want to Approve</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ManagerEmployeeApprove
            leaveID={leaveID}
            func={pull_data}
            handleClose={handleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Approve
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer> */}
      </Modal>
      <Modal show={rejectshow} onHide={handleCloseReject}>
        <Modal.Header closeButton  style={{backgroundColor: "#f5896e"}}>
          <Modal.Title>Are you sure you want to Reject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ManagerEmployeeReject
            leaveID={leaveID}
            func={pull_dataReject}
            handleClose={handleCloseReject}
          />
        </Modal.Body>
      </Modal>

      <Grid>
        <MaterialTable
           title="Leaves/WFH Approvals"
        // title=""
          columns={columns}
          data={data}
          options={{
            pageSize: 10,
            pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],
            maxBodyHeight: 350,
            paging: true,
            addRowPosition: "first",
            actionsColumnIndex: -1,
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
            exportButton: true,
          }}
          actions={[
            {
              icon: "button",

              tooltip: "Save User",

              onClick: (event, rowData) =>
                alert("You saved " + rowData.firstName),
            },
          ]}
          components={{
            Action: (props) => (
              <div>
                <Stack direction="horizontal" gap={3}>
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      setShow(true);
                      console.log(props);
                      setLeaveID(props.data);
                      
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
                      console.log(props);
                      setLeaveID(props.data);
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
      </Grid>
    </div>
  );
}

export default ManagerEmployeesLeavesWaitingForApproval;
