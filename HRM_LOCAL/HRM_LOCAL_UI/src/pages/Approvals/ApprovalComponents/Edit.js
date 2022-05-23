import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import axios from "../../../Uri";
import ApproveForm from "./ApproveForm";


const Edit = (props) => {
  const [status, setStatus] = useState({});
  let onboardingid = props.onboardingid;
  // console.log(props.onboardingid);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const approveOnboardedEmp = async (onboardingid) => {
    let approveOnboardedEmpStatus = await axios.put(
      `/emp/updateApprovStatus/${props.onboardingid}`
    );
    console.log(approveOnboardedEmpStatus.data).then((res) => {
      console.log(res.data);
      setStatus(res.data);
      res.data.map((m) => {
        console.log(m);
      });
    });
  };

  // const approveOnboardedEmp = async (onboardingid) => {

  // let approveOnboardedEmpStatus = await axios.put("/emp/updateApprovStatus/{onboardingId}");
  // console.log(approveOnboardedEmpStatus.data)

  //approve an onboarded employee
  //1. get the obid
  //2. make the api call
  // let approveOnboardedEmpStatus = await axios.put("http://localhost:8989/emp/updateApprovStatus/{onboardingId}");
  // console.log(approveOnboardedEmpStatus.data)
  //3. handle response

  return (
    <>
      <Button
        className="rounded-pill"
        variant="white"
        id={onboardingid}
        onClick={handleShow}
      >
        <FiEdit />
        &nbsp; Edit
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Approve Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ApproveForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;




