import React, { useEffect, useState } from "react";
import axios from "../../../Uri";
import { Button, Modal, Stack } from "react-bootstrap";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import Approve from "./Approve";
import Reject from "./Reject";

const EmployeeTablee = () => {
  
  const [show, setShow] = useState(false);
  const [rejectShow, setRejectShow] = useState(false);

  const handleClose = () => setShow(false);
  const rejectHandleClose = () => setRejectShow(false);

  const [updateOnboard, setUpdateOnboard] = useState({});
  const [reject, setReject] = useState({});

  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [rejectStatus, setRejectStatus] = useState(false);

  const pull_reject = () => {
    setRejectStatus(!rejectStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  useEffect(() => {
    loadData();
  }, [rejectStatus, updateStatus]);

  const loadData = async (e) => {
    const response = await axios.get("/emp/getApprovedOnboardedData");
    setData(response.data.data);
    console.log(response.data);
  };

  const [columns, setColumns] = useState([
    {
      title: "OBD ID",
      field: "onboardingId",
      editable: false,
    },
    {
      title: "Name",
      field: "firstName",
      type: "text",
    },

    {
      title: "Email",
      field: "email",
    },

    {
      title: "Contact",
      field: "phoneNumber",
      type: "number",
    },
    {
      title: "DOJ",
      field: "dateOfJoining",
      type: "date",
    },

    {
      title: "Job Title",
      field: "jobTitle",
    },

    {
      title: "Experience",
      field: "yearsOfExperience",
    },
    {
      title: "Status",
      field: "status",
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Approve an Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Approve
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Modal show={rejectShow} onHide={rejectHandleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Reject an Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Reject
            updateOnboard={reject}
            func={pull_reject}
            handleClose={rejectHandleClose}
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

      <Card
        style={{
          paddingTop: "20px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Onboarded Shortlisted Candidates"
            columns={columns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
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
              addRowPosition: "first",
              actionsColumnIndex: -1,
              // grouping: true,
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
                      onClick={() => {
                        setShow(true);
                        console.log(props);
                        setUpdateOnboard(props.data);
                      }}
                      variant="white "
                      className="rounded-pill"
                    >
                      {" "}
                      <FcApproval /> Approve
                    </Button>{" "}
                    <Button
                      variant="white "
                      className="rounded-pill"
                      onClick={() => {
                        setRejectShow(true);
                        console.log(props);
                        setReject(props.data);
                      }}
                    >
                      {" "}
                      <FcCancel /> Reject
                    </Button>
                  </Stack>
                </div>
              ),
            }}
          />
        </Grid>
      </Card>
      {/* <Example /> */}
    </div>
  );
};
export default EmployeeTablee;
