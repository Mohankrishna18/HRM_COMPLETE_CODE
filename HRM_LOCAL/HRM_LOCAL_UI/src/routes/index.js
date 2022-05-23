import React, { memo } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../utils/history";
import Auth from "./Auth";
//import history from 'utils/history';
import PrivateRoutes from "./PrivateRoutes";
//import Auth from './Auth';
import {Row, Col} from "react-bootstrap"

function Routes() {
  return (
    <Router history={history}>
      <Row>
        <Col>
          <Switch>
            <Route path="/app">
              <PrivateRoutes />
            </Route>
            <Route path="">
              <Auth />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default memo(Routes);
