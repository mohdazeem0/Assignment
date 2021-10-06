import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button, Row, Form, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./UpdateInput.css";

export const UpdateInput = () => {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setDesignation(localStorage.getItem("Designation"));
    setDob(localStorage.getItem("dob"));
    setAge(localStorage.getItem("age"));
  }, []);

  const update = () => {
    axios
      .put(`https://615ad2eb4a360f0017a812bb.mockapi.io/test/emp/${id}`, {
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
        <h1 className="crud__heading">Update Info</h1>

        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                required={true}
                id="name"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDesignation(e.target.value)}
                required={true}
                id="des"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDob(e.target.value)}
                required={true}
                id="dob"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setAge(e.target.value)}
                required={true}
                id="age"
              />
            </Form.Group>
          </Row>
          <Row>
            <div className="save__cancel">
              <Button variant="success" onClick={update} href="/">
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
