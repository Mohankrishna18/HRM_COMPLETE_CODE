import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
import { Button, Stack, Modal } from "react-bootstrap";
import { FcWebcam, FcApproval, FcCancel } from "react-icons/fc";
import { BsFillEyeFill } from "react-icons/bs";
import PMORequisitionApprove from "./PMORequisitionApprove";
import PMORequisitionRejected from "./PMORequisitionRejected";
import PMORequisitionView from "./PMORequisitionView";

function PMORequisitionApprovals(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [rejectshow, setRejectShow] = useState(false);
  const [onboardID, setOnboardID] = useState({});
  const [update, setUpdate] = useState(false);
  const [reject, setReject] = useState(false);
  const [approve, setApprove] = useState(false);

  const [viewShow, setViewShow] = useState(false);
  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});
  const viewHandleClose = () => setViewShow(false);

  const handleClose = () => setShow(false);
  const approveHandleClose = () => setApprove(false);

  const handleCloseReject = () => setRejectShow(false);
  const rejectHandleClose = () => setReject(false);
  // const handleShow = () => {

  // }
  const pull_data = () => {
    setUpdate(!update);
  };
  const pull_dataReject = () => {
    setReject(!reject);
  };
  const pull_dataApprove = () => {
    setOnboardID(!onboardID);
  };

  useEffect(() => {
    loadData();
  }, [update, onboardID, reject]);

  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const empID = da.data.userType;
  console.log(empID);

  const loadData = async () => {
    const res = await axios.get(
      `/recruitmentTracker/getAllRequisitions/${empID}`
    );
    setData(res.data);
    console.log(res.data);
  };
  const [columns, setColumns] = useState([
    { title: "AERF ID", field: "requisitionId" },
    { title: "Business Unit", field: "departmentName","defaultGroupOrder":0 },
    { title: "Client", field: "clientName" },
    { title: "Project", field: "projectName" },
    { title: "Job Title", field: "jobTitle" },
    { title: "Technology", field: "technology" },
    { title: "Role", field: "role" },
    { title: "Work Location", field: "sSkills" },
    { title: "YOE", field: "yoe" },
    { title: "Job Status", field: "rrStatus" },
    { title: "Workflow Status", field: "yoe" },
    { title: "Positions", field: "positions" },
    // { title: "Primary Skills", field: "pSkills" },
    // { title: "Working Hours", field: "workingHours" },
    // { title: "Rate", field: "rate" },
    // { title: "Employment Type", field: "empType" },
    // { title: "Raised By", field: "raisedBy" },
    // { title: "Raised On", field: "raisedOn" },
  ]);
  console.log(data);

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#f5896e",
            paddingTop: "5px",
            paddingBottom: "5px",
            color: "white",
          }}
        >
          <Modal.Title style={{ color: "white" }}>
            Job-Pending for Approval
          </Modal.Title>
        </Modal.Header>
        <PMORequisitionView
          data={onboardID}
          func={pull_data}
          handleClose={handleClose}
        />
      </Modal>

      <Modal show={approve} onHide={approveHandleClose} size="md" centered>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#f5896e",
            paddingTop: "5px",
            paddingBottom: "5px",
            color: "white",
          }}
        >
          <Modal.Title style={{ color: "white" }}>
            Requisition Approval
          </Modal.Title>
        </Modal.Header>
        <PMORequisitionApprove
          data={onboardID}
          func={pull_data}
          handleClose={approveHandleClose}
        />
      </Modal>

      <Modal show={rejectshow} onHide={handleCloseReject} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to Reject</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <PMORequisitionRejected
            data={onboardID}
            func={pull_dataReject}
            handleClose={handleCloseReject}
          />
        </Modal.Footer>
      </Modal>

      <Grid>
        <MaterialTable
          title="Requisition Approvals"
          columns={columns}
          style={{ color: "black", fontSize: "13px" }}
          data={data ? data : []}
          editable={{}}
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

            maxBodyHeight: 500,

            addRowPosition: "first",

            actionsColumnIndex: -1,

            grouping: true,

            exportButton: true,
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
                    className="rounded-pill"
                    variant="white"
                    // style={{
                    //   backgroundColor: "#FFFFFF",
                    //   // borderColor: "#ff9b44",
                    //   float: "right",
                    //   fontSize:"12px",
                    //   // height: "60px",
                    // }}
                    onClick={() => {
                      setShow(true);
                      console.log(props);
                      setOnboardID(props.data);
                    }}
                  >
                    <BsFillEyeFill style={{ fontSize: "25px" }} />{" "}
                  </Button>
                  <Button
                    variant="white"
                    className="rounded-pill"
                    // style={{
                    //   backgroundColor: "#FFFFFF",
                    //   // borderColor: "#60A917",
                    //   float: "right",
                    //   fontSize:"12px"
                    //   // height: "60px",
                    //   // width: "130px",
                    // }}
                    onClick={() => {
                      setApprove(true);
                      console.log(props);
                      setOnboardID(props.data);
                    }}
                  >
                    <FcApproval style={{ fontSize: "25px" }} />
                  </Button>
                  <Button
                    variant="white"
                    className="rounded-pill"
                    // style={{
                    //   backgroundColor: "#FFFFFF",
                    //   // borderColor: "#ff9b44",
                    //   float: "right",
                    //   borderRadius: "10px",
                    //   fontSize:"12px"
                    //   // height: "60px",
                    //   // width: "130px",
                    // }}
                    onClick={() => {
                      setRejectShow(true);
                      console.log(props);
                      setOnboardID(props.data);
                    }}
                  >
                    <FcCancel style={{ fontSize: "25px" }} />
                  </Button>
                </Stack>
              </div>
            ),
          }}
        />
      </Grid>
    </div>
  );
}

export default PMORequisitionApprovals;
