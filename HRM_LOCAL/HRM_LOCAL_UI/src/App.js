import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const App = () => {
  return (
    <div className="AppComponent">
      <Container-fluid>
        <Row>
          <Col>
            <Routes/>
          </Col>
        </Row>
      </Container-fluid>
    </div>
  );
};

export default App;
