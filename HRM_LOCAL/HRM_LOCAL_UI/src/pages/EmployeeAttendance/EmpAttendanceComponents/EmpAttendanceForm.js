import { React, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import axios from "../../../Uri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Stack, Container } from "react-bootstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";

const EmpAttendanceForm = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [punchinDate, setPunchinDate] = useState("");
  // const [date, setDate] = useState("");

  // var userStatus = null;

  // var tempDate = new Date(show.punchinDate);
  // var dob = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  // console.log(dob)

  function formatDate(punchinDate) {
    var datePart = punchinDate.match(/\d+/g),
      day = datePart[0], // get only two digits
      month = datePart[1],
      year = datePart[2];
    return day + "-" + month + "-" + year;
  }
  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  //reverseString('hello');

  useEffect(() => {
    loadData();
  }, []);

  const intialValues = {
    employeeId,
    // punchout
  };

  const loadData = async () => {
    const res = await axios
      .get(`/attendance/getAttendance/${obje.employeeId}`)
      .then((res) => {
        setShow(res.data.data);

        console.log(res.data.data);
      });
  };

  const notify = () => toast("Punch-In Successfully");

  const [show, setShow] = useState(false);


  // const handleClose = () => {
  //   setShow(false);
  //   // notify();
  // };

  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const daa = da.data.employeeId;

  const obje = { employeeId: daa };
  // const date = show.punchinDate;
  // console.log(date);

  const punchOutSubmit = async () => {
    const date = new Date()
    var datePart = date.getDate()
    var datePart1 = date.getMonth() + 1
    var datePart2 = date.getFullYear()
    var datePart3 = date.getTime()
    console.log(datePart3)
    const da = datePart + "-0" + datePart1 + "-" + datePart2
    console.log(da)
    //var da1 = reverseString(da) 
    //console.log(da1)
    show.map((m) => {
      console.log(m.punchinDate)
    })
    console.log(obje.employeeId);
    try {
      const punchOutResponse = await axios.put(
        `/attendance/addPunchOut/${obje.employeeId}?date=${da}`, obje);

      console.log(punchOutResponse);
      loadData();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const onSubmit = async () => {
    console.log(obje);
    try {
      const res = await axios.post(
        "/attendance/employeeAttendancePunchIn",
        obje
      );

      console.log(res.data);
      // handleClose(); //Close when click on submit
      loadData();
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };
  // const {
  //   register,
  //   handleSubmit,

  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });

  return (
    <div>
      <Row>
        <Col md={6}>
          <td>
            <Button
              variant="warning"
              onClick={onSubmit}
              style={{
                backgroundColor: "#f5896e",
                borderColor: "#f5896e",
                float: "right",
                borderRadius: "25px",
              }}
            >
              {" "}
              <BsPlusLg />
              Punch-In
            </Button>
          </td>
        </Col>
        <Col md={6}>
          <td>
            <Button
              variant="warning"
              onClick={punchOutSubmit}
              style={{
                backgroundColor: "#f5896e",
                borderColor: "#f5896e",
                float: "right",
                borderRadius: "25px",
              }}
            >
              {" "}
              <BsPlusLg />
              Punch-Out
            </Button>
          </td>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col md={12}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">SNo</th>
                  <th scope="col">Date</th>
                  <th scope="col">Punch-In Time</th>
                  <th scope="col">Punch-Out Time</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>

              <tbody>
                {show &&
                  show.map((h, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      {/* <td>{h.data.SNo}</td> */}
                      <td>{formatDate(h.punchinDate)}</td>
                      <td>{h.punchin}</td>
                      <td>{h.punchout}</td>
                      <td>{h.duration}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmpAttendanceForm;
