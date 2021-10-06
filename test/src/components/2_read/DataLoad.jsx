import React, { useState, useEffect } from "react";
import { Card, Table, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DataLoad.css";
import axios from "axios";
import { dataServer } from "./dataServer";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";

export const DataLoad = ({ handleId }) => {
  const [resData, setResData] = useState([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const handleDelete = (id) => {
    const newData = resData.filter((item) => !(item.id === id));
    setResData([...newData]);

    //Delete Operation
    axios.delete(`https://615ad2eb4a360f0017a812bb.mockapi.io/test/emp/${id}`);
  };

  //Read Fetching Operation
  useEffect(() => {
    const getResData = async () => {
      try {
        const response = await axios.get(
          "https://615ad2eb4a360f0017a812bb.mockapi.io/test/emp"
        );
        const myResData = response.data;
        console.log("Response Data--->", myResData);
        setResData(myResData);
        handleId(myResData);
      } catch (error) {
        console.log(error);
      }
    };
    getResData();
  }, []);

  return (
    <>
      <Row>
        <Button className="add__button" variant="warning" href="/inputform">
          <VscAdd /> Add New
        </Button>
      </Row>
      <div id="main__table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Date of Joining</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resData &&
              resData.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Designation}</td>
                  <td>{item.DOB}</td>
                  <td>{item.Age}</td>
                  <td>
                    <Link to={`/updateinput/id=${item.id}`}>
                      <Button variant="info">
                        <FiEdit />
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <RiDeleteBin2Line />
                    </Button>
                  </td>
                </tr>
              ))}
            ;
          </tbody>
        </Table>
      </div>
    </>
  );
};
