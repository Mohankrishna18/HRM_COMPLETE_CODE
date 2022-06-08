import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import SearchFields from "./SearchFields";
import UserTable from "./UserTable";

const UserName = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Body>
                <Card.Title>Users</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Administration/Users{" "}
                </Card.Subtitle>
              </Card.Body>
            </Card.Header>
          </Card>
          <SearchFields />
          <UserTable />
        </Col>
      </Row>
    </div>
  );
};

export default UserName;
