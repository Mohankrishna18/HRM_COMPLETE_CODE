import React from "react";
import { Row, Col, Navbar, Container} from "react-bootstrap";


import HolidayModal from "./HolidayModal";

const Heading = () => {
  return (
    <div>
      <Row>
        <Col md={12}>
          {/* <h5 className="mb-3">Holidays Management
          </h5> */}
        
        </Col>
        <HolidayModal />
      </Row>
    </div>
  );
};
export default Heading;
