import {React, useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import {RiTeamFill} from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import AssignProbhitionDate from "./AssignProbhitionDate";


function ProbhitionTable() {
  const onboardingStatus = "HRApprovedDone";
  const [data, setData] = useState([]);
   const [updateStatus, setUpdateStatus] = useState(false);
  const loadData = async (e) => {
    const response = await axios.get(`/emp/getEmployeesByOnboardingStatus/${onboardingStatus}`);
    console.log(response.data.data);
    setData(response.data.data);
    
  };
  useEffect(() => {
    loadData();
  }, [updateStatus]);
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
 

  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);

  const handleShow = () => setShow(false);
  const viewHandleShow = () => setShow(false);

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };


  const [updateOnboard, setUpdateOnboard] = useState({});

    const [columns, setColumns] = useState([
        {
          title: "Employee ID",
          field: "employeeId"
        },
        {
          title: "Name",
          field: "firstName",
          type: "text"
        },
        {
          title: "DOJ",
          field: "dateOfJoining",
          type: 'date',
          dateSetting: { locale: "en-GB" },

        },
        {
          title: "Designation",
          field: "designationName"
        },
        {
          title: "IRM",
          field: "irm"
        },
        {
          title: "SRM",
          field: "srm"
        },
      ]);


  return (
    <div>
       <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e",paddingTop:"5px",paddingBottom:"5px",color:"white" }}>
          <Modal.Title style={{ color: "white" }}>
            Assign Probation Confirmation Date
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AssignProbhitionDate
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    
    
    <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title=""
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

              pageSize: 7,

              pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

              maxBodyHeight: 550,

              addRowPosition: "first",

              actionsColumnIndex: -1,

            //   grouping: true,

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
                      variant="info"
                      onClick={(event) => {
                        setShow(true);
                        console.log(props.data);
                        setUpdateOnboard(props.data);
                     
                      }}
                    >
                      {/* Edit */}
                      {/* <FiEdit /> */}
                      FeedBack

                      {/* <RiTeamFill style={{ color: "white" }} /> */}
                    </Button>{" "}
                
                  </Stack>
                </div>
              ),
            }}
          />
        </Grid>
        </div>
  )
}

export default ProbhitionTable;
