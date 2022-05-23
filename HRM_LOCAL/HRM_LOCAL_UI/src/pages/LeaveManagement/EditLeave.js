
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const EditLeave = () => {
  // const [smShow, setSmShow]  = useState(false);
  const [lgShow, setLgShow] = useState(false);

  

  // const [ option,setOption]=useState("");
  // const [date,setDate]=useState("");
  // const [date1,setDate1]=useState("");
  // const [number,setNumber]=useState("")
  // const [number1,setNumber1]=useState("")
  // const [number2,setNumber2]=useState("")
  // const [text,setText]=useState("")

 // const handleClose = () => setLgShow(false);

  // const initialvalues={option,date,date1,number,number1,number2,text}

  // const handlesubmit=()=>{
  //       console.log(lgShow)
  //       console.log(initialvalues)

  // //post call to the data base
  // axios.post("http://localhost:8084/", { initialvalues}).then(res => {
  //   const user = res.data;
  //   console.log(user);

  // })

  //     }
  //    useEffect(()=>{

  //    },[])

  const [show, setShow] = useState(false);

  const [validated, setValidated] = useState(false);

  const [employeeId, setEmployeeId] = useState();
  const [leaveType, setLeavetype] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [leavereason, setReasonForLeaves] = useState();
  const [remainingLeaves, setRemainingLeaves] = useState();
  const [noOfDays, setNoOfdays] = useState();
  const [days, setDays] = useState();
  const [dates, setDates] = useState();

  const initialValues = {
    employeeId,
    leaveType,
    fromDate,
    toDate,
    leavereason,
    remainingLeaves,
    noOfDays,
  };

  const handleButtonClick = async (e) => {
    console.log("button clicked 123");
    e.preventDefault();
    console.log(initialValues);
    // const data = Object.assign(initialValues, obj);
    // const data1 = Object.assign(data,obj1)
    // const data2 = Object.assign(data1,obj2)
   // console.log(data2);
    //  const res = await axios.post ("/leave/applyLeave",data);
  };
  const handleClose = () => {
    setShow();
  };
  const getLeaveType = () => {
    console.log("");
  };

  const handleShow = () => setShow(true);

  return (
    <div style={{ justifyContent: "center" }}>
      <Button
         onClick={handleShow}
        variant="white"
        className="rounded-pill"
      >
        {" "}
        <AiFillEdit /> Edit
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit Apply Leave
          </Modal.Title>
        </Modal.Header>
       <Modal.Body>
       <Form
            noValidate
            validated={validated}
            style={{ padding: 10 }}
            onSubmit={handleButtonClick}
          >
            <Row className="mb-5">
              <Form.Group
                as={Col}
                md="6"
                style={{ padding: 10 }}
                controlId="validationCustom01"
              >
                <Form.Label>Employee Id</Form.Label>
                <Form.Control
                  required
                  className="employeeId"
                  type="text"
                  placeholder="Employee Id"
                  onChange={(event) => setEmployeeId(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Leave Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(event) => setLeavetype(event.target.value)}
                >
                  <option>Select Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Compensatory Off">Compensatory Off</option>
                  <option value="Earned Leave">Earned Leave</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>From</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Date"
                  onChange={(event) => {
                    setFromDate(event.target.value);
                    console.log(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                style={{ padding: 15 }}
                controlId="validationCustom02"
              >
                <Form.Label>To</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="To Date"
                  onChange={(event) => {
                    setToDate(event.target.value);
                    console.log(event.target.value);
                    
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>No of Days</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  //value={noOfdays}
                  onChange={(event) => {
                    setNoOfdays(event.target.value);
                    setDays(12 - noOfdays);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Remaining Leaves</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                 // value={remainLeaves}
                   onChange={(event) => setRemainingLeaves(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Leave Reason</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  onChange={(event) => setReasonForLeaves(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>
                    Upload Doctor's Certificate for Sick/Medical Leave
                  </Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
              </Form.Group>
            </Row>
            <Button
              style={{ backgroundColor: "#FF9B44", float: "right" }}
              type="submit"
              onClick={handleClose}
            >
              Submit
            </Button>
          </Form>

       </Modal.Body>
      </Modal>
    </div>
  );
};


export default EditLeave;

