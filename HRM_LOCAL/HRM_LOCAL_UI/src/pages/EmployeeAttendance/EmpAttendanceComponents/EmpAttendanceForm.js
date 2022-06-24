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
  const [punchout, setPunchout] = useState("");
  // var userStatus = null;
  function formatDate(fromDate) {
    var datePart = fromDate.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];
    return day + "-" + month + "-" + year;
  }

  useEffect(() => {
    loadData();
  }, []);

  const intialValues = {
    employeeId, 
    punchout
  }

  const loadData = async () => {
    const res = await axios
      .get("/attendance/getAttendance", obje)
      .then((res) => {
        setShow(res.data.data);
        console.log(res.data.data);
      });
  };

  const notify = () => toast("Punch-In Successfully");

  const [show, setShow] = useState(false);
  const [holiday, setHoliday] = useState([]);
  // const validationSchema = Yup.object().shape({
  //   holidayTitle: Yup.string()
  //     .matches(/^[aA-zZ\s]+$/, "Invalid Name ")
  //     .required("holidayTitle is required"),
  //   holidayDate: Yup.string().required("Holiday Date is required"),
  // });

  // const handleClose = () => {
  //   setShow(false);
  //   // notify();
  // };

  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const daa = da.data.employeeId;
  const obje = { employeeId: daa };
  const punchOutSubmit = async () =>{
    console.log(obje);
    try{
      const punchOutResponse = await axios.put(`/attendance/addPunchOut/${obje}`, intialValues);
      console.log(punchOutResponse.data);
      loadData();
    }
    catch(error){
      console.log("Something went wrong",error);
    }
  }
  
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
        <Col md={12}>
          <Button
            variant="warning"
            onClick={onSubmit}
            style={{
              backgroundColor: "#ff9b44",
              color: "#F4F8F6",
              float: "right",
              borderRadius: "25px",
            }}
          >
            {" "}
            <BsPlusLg />
            Punch-In
          </Button>
        </Col>
        <Col md={12}>
          <Button
            variant="warning"
            onClick={punchOutSubmit}
            style={{
              backgroundColor: "#ff9b44",
              color: "#F4F8F6",
              float: "right",
              borderRadius: "25px",
            }}
          >
            {" "}
            <BsPlusLg />
            Punch-Out
          </Button>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col md={12}>
            <table class="table">
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
                      <td>{h.punchinDate}</td>
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
