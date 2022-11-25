import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Card, FormControl, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../Uri";
import { FaFontAwesome } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
// import Employee from "../AllEmployees/AllEmployeesComponents/Employee";
import { toast } from "react-toastify";
import LeaveEmployee from "./LeaveToApply";
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import "./calender.css";
import Calendar from "react-calendar";
import moment from "moment";
import 'react-calendar/dist/Calendar.css';
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";
function IntegrateLeaveToApply() {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [dates, setDates] = useState([]);
    const [marks, setMarks] = useState([]);
    const [btwnDates, setBtwnDates] = useState([]);
    const [bdates, setBDates] = useState([]);
    const [color, setColor] = useState([]);
    const [state, setState] = useState(false);
    const [wfh, setWfh]=useState(0);
    const [leaveOrwfh,setLeaveOrwfh]=useState('');
    const [wbtwnDates, setWBtwnDates] = useState([]);
    const [wbdates, setWBDates] = useState([]);
    const [wcolor, setWColor] = useState([]);

        const current = new Date();
      const currentdate = `${current.getFullYear()},${current.getMonth()+1},${current.getDate()}`;
      console.log(currentdate);
    const BackDate = `${current.getFullYear()},${current.getMonth()-3},${current.getDate()}`;
    console.log(BackDate);
    const forms = useRef(null);

    function setField(field, value) {
        setForm({
            ...form,
            [field]: value,

        });
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            });
    }

    const validateForm = () => {
        const {
            leaveReason
        } = form;
        const newErrors = {};

        if (!leaveReason || leaveReason === "" || !leaveReason.match(/^[aA-zZ\s]+$/))
            newErrors.leaveReason = "Please Enter Leave Reason";
        return newErrors;
    };
    let mark = []
    let hclr = []
    let btwn = []
    let wbtwn = []
    let clr = []
    let wclr = []

    useEffect(() => {

        axios.get(`/holiday/getAllHolidays`).then((res) => {

            console.log(res.data.data);



            res.data.data.map((item) => {


                const harr = item.holidayDate.replace(/[-,]/g, ",");
                const hstr = harr.replace(/\b0/g, '').split('T0')[0];
                console.log(hstr);
                const da = moment.utc(item.holidayDate).format('YYYY-MM-DD')
                console.log(da);

                mark.push(da);
                hclr.push(new Date(hstr));

                setDates(mark);
                setBDates(hclr);
                console.log(hclr);

            });
        })
    }, []);

    useEffect(() => {
        colorDates();
        colorWFHDates();
    }, []);
    const colorDates = () => {
        axios.get(`/leave/getAllbetweenDates/${empID}/L`).then((resp) => {

            console.log(resp.data)
            resp.data.map((m) => {
                const arr = m.appliedDate.replace(/[-,]/g, ",");
                const str = arr.replace(/\b0/g, '');
                console.log(str);
                const bb = moment.utc(m.appliedDate).format('YYYY-MM-DD')
                console.log(bb);
                // btwn.push(m.appliedDate)
                btwn.push(new Date(str));
                clr.push(bb);

            })
            console.log(btwn)
            setBtwnDates(btwn);
            setColor(clr);
            // btwnDates.resp.data.map((item) => {

            //     var dd = item.appliedDate;


            //     btwn.push(dd)

            //     setBDates(btwn)
            // });


        })
    }
    const colorWFHDates = () => {
        axios.get(`/leave/getAllbetweenDates/${empID}/W`).then((resp) => {

            console.log(resp.data)
            resp.data.map((m) => {
                const warr = m.appliedDate.replace(/[-,]/g, ",");
                const wstr = warr.replace(/\b0/g, '');
                console.log(wstr);
                const wbb = moment.utc(m.appliedDate).format('YYYY-MM-DD')
                console.log(wbb);
                // btwn.push(m.appliedDate)
                wbtwn.push(new Date(wstr));
                wclr.push(wbb);

            })
            console.log(wbtwn)
            setWBtwnDates(wbtwn);
            setWColor(wclr);
            // btwnDates.resp.data.map((item) => {

            //     var dd = item.appliedDate;


            //     btwn.push(dd)

            //     setBDates(btwn)
            // });


        })
    }

    const obje = Object.assign({}, btwnDates);
    console.log(obje);
    // console.log(btwn);

    let applied = []


    // useEffect(() =>{
    // console.log(betweenDates);
    // const btwnd = moment.utc.format('YYYY-MM-DD')

    // setBtwnDates(btwn)
    // },[]);


    useEffect(() => {

        axios.get(`leave/getLeaveHistoryByEmployeeid/${empID}`).then((response) => {

            console.log(response.data);

            // const bb = moment.utc(betweenDates).format('YYYY-MM-DD')
            // console.log(bb);
            // btwn.push(bb);
            // setBtwnDates(btwn);



            response.data.map((item) => {

                const daa = moment.utc(item.fromDate).format('YYYY-MM-DD')
                const daaa = moment.utc(item.toDate).format('YYYY-MM-DD')
                // const sta = item.leaveStatus;
                //    console.log(btwn);
                applied.push(daa, daaa);

                setMarks(applied)







            });


        })
    }, []);

    const handleChange = (event) => {
        setLeaveOrwfh("L")
    }
    const handleChangee = (event) => {
        setLeaveOrwfh("W")
    }


    const [show, setShow] = useState(false);
    //const [fromDate, setFromDate] = useState(null);
    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);
    const [validated, setValidated] = useState(false);
    const [value, setValue] = useState();



    //useState for form
    const [employeeId, setEmployeeId] = useState();
    const [leaveType, setLeavetype] = useState("Annual");
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const [leaveReason, setReasonForLeaves] = useState();
    const [remainingLeaves, setRemainingLeaves] = useState();
    const [numberOfDays, setNoOfDays] = useState();
    const [days, setDays] = useState();
    const [typeofleave, setTypeOfLeave] = useState([]);
    const [entitle, setEntitle] = useState([]);
    const [entitlee, setEntitlee] = useState([])
    const [day, setDay] = useState('')
    const [remainingdata, setRemainingData] = useState([]);
    const [count, setCount] = useState();
    const [data, setData] = useState([]);
    const [appliedleaves, setTotalAppliedleaves] = useState(0);
    const [earnedData, setTotalEarnedData] = useState([]);
    //const userData1 = JSON.parse(userData);
    const userData = sessionStorage.getItem("userdata");
    var array = [];


    const userData1 = JSON.parse(userData);



    const employeeid = userData1.data.employeeId;



    const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);

    const disabledDates = [
        new Date(2022, 7, 8),
        new Date(2022, 7, 9),
    ];






    useEffect(() => {
        // loadData();
        axios



            .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)



            .then((response) => {
                setGetEmployeeDetails(response.data.data);
            });
    }, []);
    useEffect(() => {
        loadData();
    }, [])
    const loadData = () => {
        axios.get("/leave/getAllleavetypes").then((res) => {
            console.log(res.data);
            setTypeOfLeave(res.data);
            console.log("hello");
            setEntitlee(res.data.noOfDays)
        });
    };


    // useEffect(() => {
    //     axios.get(`leave/getremainingleaves/${employeeid}`).then((res) => {
    //         console.log(res.data);
    //         setRemainingData(res.data);
    //     });
    // }, []);


    useEffect(() => {
        axios.get(`leave/getLeaveHistoryByEmployeeid/${employeeid}`).then((res) => {
            console.log(res.data);
            res.data.map((m) => {
                console.log(m.numberOfDays);
                array.push(m.numberOfDays);
                console.log(array);
                let sum = 0;
                for (let i = 0; i < array.length; i++) {
                    sum += array[i];
                }
                setCount(sum);



                // const len = m.length()
                // for(i=0;i<=len;i+m.numberofdays){
                // console.log(i)
                // }
            });
            // setLeaveData(res.data);
        });
    }, []);



    // useEffect(() => {
    //     loadDataa();
    // }, []);
    // const loadDataa = () => {
    //     axios.get(`/leave/Annual`).then((res) => {
    //         console.log(res.data.noOfDays);
    //         setEntitle(res.data.noOfDays);
    //     });
    // };

    useEffect(() => {
        loadTable();
    }, []);

    const da = JSON.parse(sessionStorage.getItem('userdata'))
    const empID = da.data.employeeId;

    const loadTable = async () => {
        const res = await axios.get(`leave/getLeaveHistoryByEmployeeid/${empID}`);
        setData(res.data);
        console.log(res.data);
        LA();
        WFH();
        leaveBalanceCall();
    };

    useEffect(() => {

        axios.get(`emp/leavespermonth/${employeeid}`).then((res) => {

            console.log(res.data);

            setTotalEarnedData(res.data);

        });

    }, []);

    useEffect(() => {
        LA();
        WFH();
        leaveBalanceCall();

    }, []);


    const [leaveBalance, setLeaveBalance] = useState(0);

    const leaveBalanceCall = () => {

        axios.get(`leave/leaveBalanceByEmployeeId/${empID}`).then((res) => {



            console.log(res.data);

            console.log(res.data.leaveBalance);

            setLeaveBalance(res.data.leaveBalance);

        }

        )

    }
    const LA = () => {
        axios.get(`leave/getcountLeavesofApplyingLeaves/${empID}`).then((res) => {

            console.log(res.data);

            setTotalAppliedleaves(res.data);

        }
        )
    }

    const WFH = () => {
        axios.get(`leave/getcountWFHofApplyingLeaves/${empID}`).then((res) => {

            console.log(res.data);

            setWfh(res.data);

        }
        )
    }

    const LossOfPay = (appliedleaves - earnedData);

    console.log(LossOfPay);

    const LeaveBalanace = (earnedData - appliedleaves);

    console.log(LeaveBalanace);


    const [columns, setColumns] = useState([
        { title: 'Leave Type', field: 'leaveType' },
        { title: 'From', field: 'fromDate', type: 'date', dateSetting: { locale: "en-GB" } },
        { title: 'To', field: 'toDate', type: 'date', dateSetting: { locale: "en-GB" } },
        { title: 'Number of Days', field: 'numberOfDays' },
        // { title: 'Leave Reason', field: 'leaveReason' },
        { title: 'Leave/WFH', field: 'leaveOrwfh' },
        { title: 'Leave Status', field: 'leaveStatus' },
        // { title: 'SRM Reject Reason', field: 'rejectReason' },
        // { title: 'IRM Reject Reason', field: 'managersRejectReason' },
        // { title: 'Leave Type', field: 'leaveType', type:'date'}



    ]);


    const initialValues = {
        employeeId: getEmployeeDetails.employeeId,
        leaveType,
        fromDate,
        toDate,
        leaveReason,
        remainingLeaves,
        numberOfDays,
        setDays,
        leaveOrwfh
    };

    const [betweenDates, setBetweenDates] = useState([]);
    console.log(betweenDates)
    const handleButtonClick = async (e) => {
        console.log("button clicked 123");
        e.preventDefault();
        console.log(initialValues);
        const data = Object.assign(initialValues, obj);
        const data1 = Object.assign(data, obj1);
        const data2 = Object.assign(data1, obj2);

        console.log(data2);
        console.log(data);
        try {
            const res = await axios.post("/leave/applyLeave", data)
            console.log("response", res.data)
            setBetweenDates(res.data);
            if (res.status === 200) {
                console.log("success")
                notifySuccess("Leave Applied Successfully")
                loadTable();
                colorDates();
                colorWFHDates();
            }



        }
        catch (err) {
            console.log(err)
            notifyError("Leave Already Applied")
        }
        setDay('')
        setFromDate('')
        setState('')
        handleClose();



    };



    const handleClose = () => {
        setShow();
        setDay('')
        setFromDate('')
        setState('')
    };
    const getLeaveType = () => {
        console.log("");
    };



    const handleShow = () => setShow(true);



    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    } // test it
    const a = new Date(toDate);
    const b = new Date(fromDate);
    const difference = dateDiffInDays(b, a);
    //console.log(difference + 1);
    var numberOfDay = difference + 1;
    console.log(numberOfDays);
    var remainLeaves = 12 - numberOfDay;
    console.log(remainLeaves);
    const obj = { remainingLeaves: days };
    const obj1 = { numberOfDays: day };
    const obj2 = { remainingLeaves: remainLeaves };
    console.log(obj1);
    const handleSubmit = (ee) => {
        const form = ee.currentTarget;



        if (form.checkValidity() === false) {
            ee.preventDefault();



            ee.stopPropagation();
        }



        setValidated(true);



        console.log(employeeId);
        console.log(leaveType);
        console.log(fromDate);
        console.log(toDate);
        console.log(noOfDays);
        console.log(reasonForLeaves);
        console.log(remainingLeaves);
        console.log(numberOfDays);
    };
    console.log(typeofleave)


















    return (
        <div>
            {/* <Button
    onClick={handleShow}
    style={{ backgroundColor: "#9FD5E2", float: "right",marginLeft:"100px",borderRadius:'29px',paddingTop:"9px" }}
    >
    <h4 style={{color: 'black'}}>Add Leave</h4> </Button> */}
            <Card bg="white">
                <Row>
                    <Col xs={6} md={8}>
                        <Card.Body>
                            <Card.Title>Leaves/WFH</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">
                                Leaves/WFH
                            </Card.Subtitle> */}
                        </Card.Body>
                    </Col>










                    <Col  style={{
                                   
                                    paddingBottom: "11.5px",
                                   
                                }}>
                        <div class="p-3">
                            <Button
                                variant="warning"
                                onClick={handleShow}
                                style={{
                                    backgroundColor: "#f5896e",
                                    borderColor: "#f5896e",
                                    float: "right",
                                    borderRadius: "25px",
                                    paddingBottom: "11.5px",
                                    paddingTop: "11.5px",
                                }}
                            >
                                {" "}
                                <BsPlusLg />
                                Apply Leave/WFH
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row md={4}>
                    <Col style={{width:"250px"}} >
                        <Card>
                            <Card border="warning">
                                <Card.Body>
                                    <h5>
                                        {" "}
                                        <Card.Title style={{paddingLeft:"15%"}}>Annual Leaves</Card.Title>
                                        {earnedData > 0 ? (<Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"40%"}}>
                                            {earnedData}
                                        </Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"40%"}}>0</Card.Subtitle>)}

                                        {/* <Card.Text>12</Card.Text> */}
                                    </h5>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                    <Col style={{width:"250px"}}>
                        <Card>

                            <Card border="warning">
                                <Card.Body>
                                    <h5>
                                        {" "}
                                        <Card.Title style={{paddingLeft:"20%"}}>Leave Balance</Card.Title>
                                        {leaveBalance > 0 ? (<Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"40%"}}>{leaveBalance}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"40%"}}>0</Card.Subtitle>)}
                                        {/* */}
                                        {/* <Card.Text>12/60</Card.Text> */}
                                    </h5>
                                </Card.Body>
                            </Card>


                        </Card>
                    </Col>



                    <Col style={{width:"250px"}}>
                    <Card border="warning">
                        <Card.Body>
                            <h5>
                                {" "}
                                <Card.Title style={{paddingLeft:"25%"}}>Loss of Pay</Card.Title>
                                {LossOfPay > 0 ? (<Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"42%"}}>{LossOfPay}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"42%"}}>0</Card.Subtitle>)}
                                {/* */}
                                {/* <Card.Text>12/60</Card.Text> */}
                            </h5>
                        </Card.Body>
                    </Card>
</Col>

<Col style={{width:"250px"}}>
                        <Card>
                            <Card border="warning">

                                {count == undefined ? (<Card.Body>

                                    <h5>

                                        {" "}

                                        <Card.Title style={{paddingLeft:"15%"}}>Leaves Applied</Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"40%"}}>

                                            0

                                        </Card.Subtitle>

                                        {/* <Card.Text></Card.Text> */}

                                    </h5>

                                </Card.Body>) : (<Card.Body>

                                    <h5>

                                        {" "}

                                        <Card.Title style={{paddingLeft:"15%"}}>Leaves Applied</Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"40%"}}>

                                            {appliedleaves}

                                        </Card.Subtitle>

                                        {/* <Card.Text></Card.Text> */}

                                    </h5>

                                </Card.Body>)}
                            </Card>
                        </Card>
                    </Col>
                    <Col style={{width:"250px"}}>
                        <Card>
                            <Card border="warning">

                                {count == undefined ? (<Card.Body>

                                    <h5>

                                        {" "}

                                        <Card.Title style={{paddingLeft:"35%"}}>WFH</Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"45%"}}>

                                            0

                                        </Card.Subtitle>

                                        {/* <Card.Text></Card.Text> */}

                                    </h5>

                                </Card.Body>) : (<Card.Body>

                                    <h5>

                                        {" "}

                                        <Card.Title style={{paddingLeft:"35%"}}>WFH</Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted" style={{paddingLeft:"45%"}}>

                                            {wfh}

                                        </Card.Subtitle>

                                        {/* <Card.Text></Card.Text> */}

                                    </h5>

                                </Card.Body>)}
                            </Card>
                        </Card>
                    </Col>

                </Row>



            </Card>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false} 
            >
                <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
                    <Modal.Title>Apply Leave/WFH</Modal.Title>
                </Modal.Header>



                <Modal.Body >
                    <Form ref={forms} className="formone"
                        style={{ padding: 10 ,paddingLeft:"70px",paddingRight:"70px"}}
                        onSubmit={handleButtonClick}
                    >
                        {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
          required
            inline
            label="Apply Leave"
            name="leaveOrwfh"
            type={type}
            id={`inline-${type}-1`}
            // onChange={(event) => setLeaveOrwfh(event.target.value)}
            onChange={handleChange}
            value={leaveOrwfh}
          />
          <Form.Check
          required
            inline
            label="Apply Work From Home"
            name="leaveOrwfh"
            type={type}
            id={`inline-${type}-2`}
            // onChange={(event) => setLeaveOrwfh(event.target.value)}
            onChange={handleChangee}
            value={leaveOrwfh}
          />
          
        </div>
      ))}

                        <Row className="mb-2">

                            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                <Form.Label hidden>Leave Type</Form.Label>
                                <Form.Select
                                    // required
                                    hidden
                                    placeholder="Select Leave"
                                    // value={typeofleave.leaveType}
                                    value="Annual"
                                    onChange={(event) => {
                                        setLeavetype(event.target.value)

                                    }}>
                                    {/* <option value="" placeholder="Select Leave">Select Leave</option>
                                    {typeofleave.map((leave) => (
                                        <option>{leave.leaveType}</option>
                                    ))} */}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>From</Form.Label>
                                <Calendar
                                    //  minDate={
                                    //     new Date(BackDate)
                                    // }
                                    onChange={(e) => {
                                        console.log(e)
                                        const da = moment.utc(e + 1).format('YYYY-MM-DD')
                                        console.log(da)
                                        setFromDate(da)
                                        setState(true);

                                    }}
                                    tileClassName={({ date, view }) => {
                                        if (dates.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                            return 'highlight'
                                        }

                                        if (color.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                            return 'applied'
                                        }
                                        if (wcolor.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                            return 'wapplied'
                                        }

                                    }}

                                    tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6 ||
                                        btwnDates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        ) ||
                                        bdates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        ) ||
                                        wbtwnDates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        ) ||
                                        wbdates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        )
                                    }
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="6"
                                style={{ padding: 10 }}
                                controlid="validationCustom02"
                            >
                                <Form.Label>To</Form.Label>

                                {/* <Calendar
                                    onChange={(e) => {
                                        console.log(e);
                                        setToDate(e);
                                        console.log(e);
                                        const da = moment.utc(e + 1).format('YYYY-MM-DD')
                                        axios
                                            .get(`/holiday/${fromDate}/${da}`)
                                            .then((res) => {
                                                if (res.data > 30) {
                                                    alert("Limit exceeded");
                                                    const err = "Limit exceeded";
                                                } else {
                                                    setDay(res.data);
                                                }
                                            });
                                        console.log(e)
                                        //const da = moment.utc(e).format('YYYY-MM-DD')
                                        console.log(da)
                                        setToDate(da)


                                    }} tileClassName={({ date, view }) => {
                                        if (dates.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                            return 'highlight'
                                        }
                                        // if (marks.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                        //     return 'applied'
                                        // }
                                        if(color.find(x => x === moment(date).format("YYYY-MM-DD"))){
                                            return 'applied'
                                        }
                                    }}
                                    minDate={
                                        new Date(fromDate)
                                    }
                                    tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6 || 
                                btwnDates.some(disabledDate =>
                                        date.getFullYear() === disabledDate.getFullYear() &&
                                        date.getMonth() === disabledDate.getMonth() &&
                                        date.getDate() === disabledDate.getDate()
                                        ) ||
                                        bdates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                            ) }
                                /> */}

                                {state ? (
                                    <Calendar
                                        onChange={(e) => {
                                            console.log(e);
                                            setToDate(e);
                                            console.log(e);
                                            const da = moment.utc(e + 1).format('YYYY-MM-DD')
                                            axios
                                                .get(`/holiday/${fromDate}/${da}`)
                                                .then((res) => {
                                                    if (res.data > 30) {
                                                        alert("Limit exceeded");
                                                        const err = "Limit exceeded";
                                                    } else {
                                                        setDay(res.data);
                                                    }
                                                });
                                            console.log(e)
                                            //const da = moment.utc(e).format('YYYY-MM-DD')
                                            console.log(da)
                                            setToDate(da)


                                        }}
                                    tileClassName={({ date, view }) => {
                                        if (dates.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                            return 'highlight'
                                        }
                                        // if (marks.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                        //     return 'applied'
                                        // }
                                        if (color.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                            return 'applied'
                                        }
                                        if (wcolor.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                            return 'wapplied'
                                        }
                                    }}
                                    minDate={
                                        new Date(fromDate)
                                    }
                                    tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6 ||
                                        btwnDates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        ) ||
                                        bdates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        ) ||
                                        wbtwnDates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        ) ||
                                        wbdates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        )
                                    }
                                    />
                                ) : (
                                        <Calendar
                                        tileClassName={({ date, view }) => {
                                            if (dates.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                                return 'highlight'
                                            }
                                            if (color.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                                return 'applied'
                                            }
                                            if (wcolor.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                                                return 'wapplied'
                                            }
                                        }}
                                        tileDisabled={({ date }) =>
                                        bdates.some(disabledDate =>
                                            date.getFullYear() === disabledDate.getFullYear() &&
                                            date.getMonth() === disabledDate.getMonth() &&
                                            date.getDate() === disabledDate.getDate()
                                        ) 
                                        || currentdate
                                    }
                                        minDate={
                                            new Date()
                                        }
                                        maxDate={
                                            new Date()
                                        }
                                    />
                                    // <h6>
                                    //     {/* Click on FromDate */}
                                    //     </h6>
                                )}
                            </Form.Group>



                            <Form.Group as={Col} md="2" style={{ padding: 10 }}>
                                <Form.Label>No.of Days*</Form.Label>
                                <Form.Control
                                    required
                                    type=""
                                    placeholder=""
                                    value={day}
                                    onChange={(event) => {
                                        noOfdays(event);

                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="10" style={{ padding: 10 , paddingLeft: "50px"}}>
                                <Form.Group controlid="formFileMultiple" className="mb-3">
                                    <Form.Label>
                                        Upload Doctor's Certificate for Sick/Medical Condition
                                    </Form.Label>
                                    <Form.Control type="file" multiple />
                                </Form.Group>
                                </Form.Group>

                            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                <Form.Label>Reason *</Form.Label>
                                <Form.Control
                                    required
                                    className="leaveReason"
                                    as="textarea"
                                    type="text"
                                    rows={2}
                                    controlid="leaveReason"
                                    placeholder="Leave/WFH Reason"
                                    onChange={(event) => setReasonForLeaves(event.target.value)}
                                    isInvalid={!!errors.leaveReason}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">{errors.leaveReason}</Form.Control.Feedback>
                            </Form.Group>
                            {/* <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                                <Form.Group controlid="formFileMultiple" className="mb-3">
                                    <Form.Label>
                                        Upload Doctor's Certificate for Sick/Medical Leave
                                    </Form.Label>
                                    <Form.Control type="file" multiple />
                                </Form.Group> */}
                                <div className="col-md-12 text-center">
                                    <Button
                                        style={{ backgroundColor: "#f5896e",
                                        borderColor: "#f5896e", borderRadius: "15px" }}
                                        type="submit"
                                    // onClick={handleClose}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            {/* </Form.Group> */}
                        </Row>

                    </Form>
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
                />
            </Grid>


        </div>
    );
}

export default IntegrateLeaveToApply;
