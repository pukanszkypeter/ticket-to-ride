import "./GameConfigModal.css";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function GameConfigModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Game Configuration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              <h5>Player Name</h5>
            </Form.Label>
            <Form.Control placeholder="Enter name" />
            <Form.Text className="text-muted">
              Remember, it's just a game name, you don't have to enter your real
              name.
            </Form.Text>
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>
              <h5>How many players?</h5>
            </Form.Label>
            <Form.Control as="select" placeholder="Number of players">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Select the number of players.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <NavLink to="/waiting-room">
          <Button variant="dark">Start Game</Button>
        </NavLink>
        <Button variant="dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
