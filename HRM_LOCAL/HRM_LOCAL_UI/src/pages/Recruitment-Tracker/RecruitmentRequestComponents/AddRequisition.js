import React, { useEffect, useState, useRef } from 'react'
import { Modal, FloatingLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../../Uri";
import { Row, Col } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import {useHistory} from 'react-router-dom'


export default function AddRequisition(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [departments, setDepartments] = useState([]);
  const handleClose = () => setShow();
  const handleShow = () => setShow(true);
  const [comment, setComment] = useState([]);
  const forms = useRef(null);
  const history = useHistory();
  
function gotoStepperForm(){
  history.push('/app/StepperForm');
}
  const sessionData = JSON.parse(sessionStorage.getItem('userdata'));

  const employeeId = sessionData.data.employeeId;

  const userType = sessionData.data.userType;

  console.log(employeeId);

  console.log(userType);



  return (

    <div>

      {(userType === "taa") ?

        <div></div>

        :

        <Button

          variant="warning"

          onClick={gotoStepperForm}

          style={{

            backgroundColor: "#f5896e",

            borderColor: "#ff9b44",

            float: "right",

            borderRadius: "25px",

            // paddingBottom: "11.5px",

            // marginTop: "100px",

          }}

        >

          {" "}

          <MdOutlinePersonAddAlt />

          {/* <BsPlusLg />  */}

          &nbsp; Raise Requisition

        </Button>

        }



      {/* <Modal

        style={{ maxHeight: "1350px", maxWidth: "1550px", }}

        size="xl"

        show={show}

        onHide={handleClose}

        backdrop="static"

        keyboard={false}

      >

        <Modal.Header closeButton style={{

          backgroundColor: "#FF9E14", paddingTop: "7px",

          paddingBottom: "4px",

        }}>

          <Modal.Title style={{ fontSize: "22px" }}>Raise Job Requirement Request</Modal.Title>

        </Modal.Header>



        <Modal.Body >

          <StepperForm func={props.func} send={props.onHide} />

        </Modal.Body>

      </Modal> */}

    </div>

  );

}


