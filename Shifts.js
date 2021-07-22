import React from "react";
import { Container, Button, Modal } from "react-bootstrap";
import TimezonePicker from "react-bootstrap-timezone-picker";
import "react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import EditShift from "./EditShift";
export default class Group extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "1",
      isOpen: false,
      open: false,
      id: "",
      name: "",
    };
  }

  handleShow = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  showModal = () => {
    this.setState({ isOpen: true });
  };

  hideModal = () => {
    this.setState({ isOpen: false });
  };

  componentDidMount = () => {
    axios.get("/shift/").then((response) => {
      this.setState({
        data: response.data.data,
      });
      console.log(response.data.data[0]["icon"]);
    });
  };
  render() {
    const shifts = Object.keys(this.state.data).map((key) => (
      <tr>
        <td>{this.state.data[key]["shift_name"]}</td>
        <td>
          <img
            src={`data:image/png;base64,${this.state.data[key]["icon"]}`}
            alt="text"
          />
          {console.log(this.state.data[key]["icon"])}
        </td>
        <td>{this.state.data[key]["start"]}</td>
        <td>{this.state.data[key]["end"]}</td>
        <td>
          <Link to={`/grpShift/${this.state.data[key]["id_shift"]}`}>
            <Button className="AddBtn1">View groups</Button>
          </Link>
        </td>
        <td>
          {" "}
          <Button
            className="modalBtn"
            onClick={() => {
              this.handleShow();

              this.setState({ name: this.state.data[key]["shift_name"] });
              this.setState({ id: this.state.data[key]["id_shift"] });
              this.setState({ shift: this.state.data[key] });
            }}
          >
            <img
              src="https://image.flaticon.com/icons/png/512/1250/1250615.png"
              width="20 px"
              height="20 px"
            />
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            className="modalBtn"
            onClick={() => {
              this.showModal();
              this.setState({ name: this.state.data[key]["shift_name"] });
              this.setState({ id: this.state.data[key]["id_shift"] });
              this.setState({ shift: this.state.data[key] });
            }}
          >
            <img
              src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
              width="20 px"
              height="20 px"
            />
          </Button>
          <Modal
            show={this.state.open}
            animation={false}
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit {this.state.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditShift shift={this.state.shift} />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
          <Modal
            show={this.state.isOpen}
            animation={false}
            onHide={this.hideModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete Shift</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>
                Are you sure you want to delete the {this.state.name} shift ?
              </h4>
            </Modal.Body>
            <Modal.Footer>
              <Button className="CanBtn" onClick={this.hideModal}>
                No
              </Button>
              <Button
                className="SubBtn"
                onClick={() => {
                  axios.put("/shift/delete/" + this.state.id);
                  this.hideModal();
                }}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    ));

    return (
      <>
        <Container>
          <TimezonePicker
            absolute={false}
            defaultValue="Hong Kong"
            placeholder="Select timezone..."
          />
          <Link to="/addShift">
            <Button className="AddBtn">+ Add Shift</Button>
          </Link>
          <center>
            <h1>Shifts</h1>
          </center>
          <br />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Shift Name</th>
                <th scope="col">Shift Icon</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col"></th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{shifts} </tbody>
          </table>
        </Container>
      </>
    );
  }
}
