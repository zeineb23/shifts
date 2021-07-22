import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Formulaire() {
  const [name, setName] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [icon, setIcon] = useState();

  const UploadImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    //console.log("test" + base64);
    setIcon(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("IIIMAAGREEEEE FIIINAAALEEEE" + icon);

    // get our form data out of state
    axios.post("/shift/", {
      shift_name: name,
      start: start,
      end: end,
      icon: icon,
    });
  };

  return (
    <>
      <Form>
        <Form.Group as={Row} controlId="sname">
          <Form.Label column sm="2">
            Shift name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="shift_name"
              placeholder="Enter shift name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="start">
          <Form.Label column sm="2">
            Start Time
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="start"
              type="time"
              placeholder="Choose start time"
              onChange={(e) => setStart(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="end">
          <Form.Label column sm="2">
            End Time
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="time"
              name="end"
              placeholder="Choose end time"
              onChange={(e) => setEnd(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="icon">
          <Form.Label column sm="2">
            Shift Icon
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="icon"
              type="file"
              placeholder="Choose shift icon"
              onChange={(e) => UploadImg(e)}
              required
            />
          </Col>
        </Form.Group>

        <Row className="justify-content-md-center">
          <center>
            <Link to="/shifts">
              <Button className="SubBtn" onClick={handleSubmit}>
                Submit{" "}
              </Button>
            </Link>
            <Link to="/shifts">
              <Button type="cancel" className="CanBtn">
                Cancel
              </Button>
            </Link>
          </center>
        </Row>
      </Form>
      {console.log("theeee iccoonn" + icon)}
      <img src={icon} />
    </>
  );
}
export default Formulaire;
