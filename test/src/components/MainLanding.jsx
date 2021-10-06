import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { InputForm } from "./1_create/InputForm";
import { DataLoad } from "./2_read/DataLoad";
import { UpdateInput } from "./3_update/UpdateInput";

export const MainLanding = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/inputform">
            <InputForm />
          </Route>
          <Route path="/updateinput">
            <UpdateInput />
          </Route>
          <Route path="/">
            <DataLoad />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
