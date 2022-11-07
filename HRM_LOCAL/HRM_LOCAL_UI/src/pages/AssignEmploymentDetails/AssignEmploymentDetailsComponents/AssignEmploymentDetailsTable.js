import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../../Uri";
import { Button, Stack, Modal } from "react-bootstrap";
import PMOApproved from '../../PMO/PMOApproved';
import PMORejected from '../../PMO/PMORejected';
import { FcWebcam } from "react-icons/fc";
import EmploymentDetailsTabbyPmo from '../../PMO/EmploymentDetailsTabbyPmo';



function AssignEmploymentDetailsTable(props) {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [rejectshow, setRejectShow] = useState(false);
    const [onboardID, setOnboardID] = useState({});
    const [update, setUpdate] = useState(false);
    const [reject, setReject] = useState(false);
    const [viewShow, setViewShow] = useState(false);
    const [viewOnboard, setViewOnboard] = useState({});
    const [empDetails, setEmpDetails]=useState({})
    const viewHandleClose = () => setViewShow(false);

    const handleClose = () => setShow(false);
    const approveHandleClose = () => setUpdate(false);

    const handleCloseReject = () => setRejectShow(false);
    const rejectHandleClose = () => setReject(false);

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

    const da = JSON.parse(sessionStorage.getItem('userdata'))
    const empID = da.data.employeeId;
    const onboardingStatus = "HRApproved";
    const loadData = async () => {
        const res = await axios.get(`/emp/getEmployeesByOnboardingStatus/${onboardingStatus}`);
        setData(res.data.data);
        console.log(res.data);
    };

    const [columns, setColumns] = useState([
        { title: 'Employee_ID', field: 'employeeId' },
        { title: 'FullName', field: 'firstName' },
        { title: 'Email', field: 'email' },
        { title: 'PhoneNumber', field: 'primaryPhoneNumber' },
        { title: 'Date of Joining', field: 'dateOfJoining', type: 'date', dateSetting: { locale: "en-GB" } },
        { title: 'Job Title', field: 'jobTitle' },
        { title: 'Experience', field: 'yearsOfExperience' },
        // { title: 'Status', field: 'status' }

    ]);
    console.log(data);


    return (
        <div>
            {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Documents to be Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HRAssign
            onboardID={onboardID}
            func={pull_data}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal> */}
 
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
                    <Modal.Title>Onboarding Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EmploymentDetailsTabbyPmo
                  viewOnboard={onboardID}
                  viewHandleClose={viewHandleClose}
                  />
                </Modal.Body>

            </Modal>

            <Grid>
                <MaterialTable
                    title=""
                    columns={columns}
                    data={data}

                    options={{
                        paging: true,
                        addRowPosition: 'first',
                        pageSize: 10,
                        pageSizeOptions: [10, 15,20, 30 ,50, 75, 100 ],
                        maxBodyHeight: 450,
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
                        exportButton: true
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
                                            console.log(props)
                                            setOnboardID(props.data);
                                        }}
                                    >
                                        Assign
                                    </Button>

                                    {/* <Button
                                        variant="outline-danger"
                                        onClick={() => {
                                            setRejectShow(true);
                                            console.log(props)
                                            setOnboardID(props.data);
                                        }}
                                    >
                                        Reject
                                    </Button>
                                    <Button
                                        variant="white "
                                        className="rounded-pill"
                                        onClick={(event) => {
                                            setViewShow(true);
                                            console.log(props);
                                            setViewOnboard(props.data);
                                        }}
                                    > {" "}
                                        <FcWebcam />{" "}
                                        View
                                    </Button> */}
                                </Stack>
                            </div>
                        ),
                    }}

                />
            </Grid>
        </div>
    )
}

export default AssignEmploymentDetailsTable;
