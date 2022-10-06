import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "../../../src/styles/GlobalStyles.css";
import "./userAccess.css";
// import './styles/GlobalStyles.css';
import RoleMain from "./UserAccessComponents/RoleMain";
// import ModuleMain from "./UserAccessComponents/module/ModuleMain";
import PermissionTable from "../UserAccess/UserAccessComponents/Permissions/PermissionTable";
import PermissionMain from "./UserAccessComponents/Permissions/PermissionMain";
const UserAccessMain = () => {
  return (
    <div className="example">
      <Card
        style={{
          paddingTop: "20px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>User Access</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dashboard / User Access{" "}
              </Card.Subtitle>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <RoleMain />
            </Col>
            <Col xs={8}>
              {/* <Row>
                <ModuleMain />
              </Row>
              <Row> */}
                
                <PermissionMain />
              {/* </Row> */}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserAccessMain;
