import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export function EndGameModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Game Results
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anonym</td>
              <td>20</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Anonym</td>
              <td>19</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Anonym</td>
              <td>18</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Anonym</td>
              <td>17</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Anonym</td>
              <td>16</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <NavLink to="/">
          <Button variant="dark">Home Page</Button>
        </NavLink>
      </Modal.Footer>
    </Modal>
  );
}
