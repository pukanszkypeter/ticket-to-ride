import "./Home.css";
import logo from "../../assets/logo.png";
import button from "../../assets/button.jpg";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div id="home">
      {/* Ticket To Ride Logo */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 30 + "vh" }}
      >
        <img className="img-fluid" src={logo} alt="ticket-to-ride-logo" />
      </div>

      {/* Menu */}
      <div
        className="d-flex justify-content-center align-items-start"
        style={{ height: 70 + "vh" }}
      >
        <ul className="menu-list">
          <li>
            <button className="menu-button">
              <div id="image-container">
                <img width="250px" src={button} alt="menu-button" />
                <div id="text-container">New Game</div>
              </div>
            </button>
          </li>
          <li>
            <button className="menu-button">
              <div id="image-container">
                <img width="250px" src={button} alt="menu-button" />
                <div id="text-container">Join Room</div>
              </div>
            </button>
          </li>
          <li>
            <NavLink to="/game-rules">
              <button className="menu-button">
                <div id="image-container">
                  <img width="250px" src={button} alt="menu-button" />
                  <div id="text-container">Game Rules</div>
                </div>
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
