import React from "react";
import { Container, Col, Row, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Formulaire from "./Formulaire";

export class ShiftForm extends React.Component {
  constructor() {
    super();
    this.state = {
      shift_name: "",
      start: "",
      end: "",
      icon: "",
      isOpen: false,
    };
  }
  showModal = () => {
    this.setState({ isOpen: true });
  };

  hideModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Container>
        <center>
          <h1>Add Shift</h1>
        </center>
        <Modal
          show={this.state.isOpen}
          animation={false}
          onHide={this.hideModal}
        >
          <Modal.Header>
            <Modal.Title>Shift added</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Your shift has been added !</h4>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/shifts">
              <Button className="SubBtn">Okay</Button>
            </Link>
          </Modal.Footer>
        </Modal>
        <Formulaire />
      </Container>
    );
  }
}
export default ShiftForm;
