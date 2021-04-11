import "./JoinRoomModal.css";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function JoinRoomModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Join Game Room
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              <h5>Game Room ID</h5>
            </Form.Label>
            <Form.Control type="password" placeholder="Give Room ID" />
            <Form.Text className="text-muted">
              This ID can be obtained when starting a new game.
            </Form.Text>
          </Form.Group>
          <br></br>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <NavLink to="/waiting-room">
          <Button variant="dark">Join Game</Button>
        </NavLink>
        <Button variant="dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
