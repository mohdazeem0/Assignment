import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { InputForm } from "./1_create/InputForm";
import { DataLoad } from "./2_read/DataLoad";
import { UpdateInput } from "./3_update/UpdateInput";

export const MainLanding = () => {
  const handleId = (myResData) => {
    myResData.map((item) => {
      console.log("heyyyyyyyyyyyyyy", item);
      return item.id;
    });
  };
  return (
    <>
      <Router>
        <Switch>
          <Route path="/inputform">
            <InputForm />
          </Route>
          <Route path="/updateinput">
            <UpdateInput ID={handleId} />
          </Route>
          <Route path="/">
            <DataLoad handleId={handleId} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
