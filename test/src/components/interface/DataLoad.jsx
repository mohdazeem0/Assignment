import React from "react";
import { Card } from "react-bootstrap";
import "./DataLoad.css";

export const DataLoad = () => {
  return (
    <>
      <Card className="card__load">
        <h5>Name : </h5>
        <span>Ritesh Kumar</span>
        <h5>Designation : </h5>
        <span>Engineer</span>
        <h5>Joining Date</h5>
        <span>27/05/2021</span>
        <h5>Age : </h5>
        <span>22</span>
      </Card>
    </>
  );
};
