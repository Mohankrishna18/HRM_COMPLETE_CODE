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
        <DesignationTable />
      </Container-fluid>
    </div>
  );
};

export default Designation;
