import React, { Fragment, memo, useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { getAllowedRoutes, isLoggedIn } from "../utils/index";
import { Row, Col, Accordion } from "react-bootstrap";
import MapAllowedRoutes from "./MapAllowedRoutes";
import PrivateRouteConfig from "../config/PrivateRouteConfig";
import NavBar from "../commonComponents/Navbar";
import Sidebar from "../NavBar/Sidebar";

function PrivateRoutes() {
  const match = useRouteMatch("/app");
  let allowedRoutes = [];

  if (isLoggedIn()) {
    allowedRoutes = getAllowedRoutes(PrivateRouteConfig); //you are sending an array of two objects
  } else {
    return <Redirect to="/" />;
  }


  return (
    <>
      <Row>
        <Col xs={12} xxl={12} xl={12} lg={12} md={12} sm={12} >
          <NavBar />
        </Col>
      </Row>
      <Row>

        <Col xs={2} xxl={2} xl={2} lg={2} md={2} sm={2} style={{backgroundColor:"black"}}>
          <Sidebar
            routes={allowedRoutes}
            prefix={match.path}
            className="reports"
          />                                     
        </Col>
        <Col xs={10} xxl={10} xl={10} lg={10} md={10} sm={10}>

          <div className="PagesOfTheApp">
            {<MapAllowedRoutes routes={allowedRoutes} basePath="/app" />}
          </div>
        </Col>

      </Row>
    </>
  );
}

export default memo(PrivateRoutes);

