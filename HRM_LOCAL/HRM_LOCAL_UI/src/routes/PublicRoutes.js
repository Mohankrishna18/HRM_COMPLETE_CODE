import React, { Fragment, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sign from "../pages/LoginPage/Sign-in";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

function PublicRoutes() {
  return (
    <Fragment>
      <Switch>
      <Route path="/resetPassword">
          <ResetPassword />
        </Route>
        <Route path=""> 
           <Sign /> 
        </Route>
        
      </Switch>
    </Fragment>
  );
}

export default memo(PublicRoutes);
