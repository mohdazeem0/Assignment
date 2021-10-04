import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { DataLoad } from "./DataLoad";
import "./InputForm.css";

export const InputForm = () => {
  return (
    <>
      <Card className="card">
        <h1 className="crud__heading">CRUD Operations</h1>
        <Row>
          <Button className="add__button" variant="warning">
            Add New
          </Button>
        </Row>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="input" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Designation</Form.Label>
              <Form.Control type="input" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Joining Date</Form.Label>
              <Form.Control type="input" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Age</Form.Label>
              <Form.Control type="input" />
            </Form.Group>
          </Row>
          <Row>
            <div className="save__cancel">
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="danger" type="submit">
                Cancel
              </Button>
            </div>
          </Row>
        </Form>
      </Card>
      <Card>
        <DataLoad />
      </Card>
    </>
  );
};
