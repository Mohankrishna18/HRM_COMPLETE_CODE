import React from "react";

import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/esm/Button";

import { FcCancel } from "react-icons/fc";

const Reject = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const rejectOnboardedEmp = () => {};

  const handlechnge = () => {
    async (onboardingId) => {
      // await axios.delete(`http://localhost:8081/deleteById/${onboardingId}`);
    };

    handleClose();
  };

  return (
    <>
      <Button
        className="rounded-pill"
        variant="white"
        onClick={rejectOnboardedEmp}
      >
        <FcCancel /> &nbsp; Reject
      </Button>
    </>
  );
};

export default Reject;
