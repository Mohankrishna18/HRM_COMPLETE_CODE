import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";

import DesignationModal from "./DesignationModal";
import DesignationTable from "./DesignationTable";

const Designation = () => {
 
  return (
    <div>
      <Container-fluid>
        <DesignationModal />
      </Container-fluid>
    </div>
  );
};

export default Designation;
