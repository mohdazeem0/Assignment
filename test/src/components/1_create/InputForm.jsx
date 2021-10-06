import axios from "axios";
import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./InputForm.css";

export const InputForm = () => {
  //functionality

  let history = useHistory();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const postData = () => {
    axios
      .post(`https://615ad2eb4a360f0017a812bb.mockapi.io/test/emp`, {
        name,
        designation,
        dob,
        age,
      })
      .then(() => {
        history.push("/RecordSheet");
      });
  };

  return (
    <>
      <Card id="card">
        <h1 className="crud__heading">CRUD Operations</h1>

        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                id="name"
                required={true}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDesignation(e.target.value)}
                id="des"
                required={true}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDob(e.target.value)}
                id="dob"
                required={true}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setAge(e.target.value)}
                id="age"
                required={true}
              />
            </Form.Group>
          </Row>
          <Row>
            <div className="save__cancel">
              <Button variant="success" onClick={postData} href="/">
                Save
              </Button>
              <Button variant="danger">Cancel</Button>
            </div>
          </Row>
        </Form>
      </Card>
    </>
  );
};
