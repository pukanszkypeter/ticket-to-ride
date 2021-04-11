import "./Home.css";
import { NavLink } from "react-router-dom";
import { GameConfigModal } from "./modals/GameConfigModal.js";
import { JoinRoomModal } from "./modals/JoinRoomModal.js";
import React from "react";
import logo from "../../assets/elements/logo.png";
import button from "../../assets/elements/button.jpg";

export function Home() {
  const [gameConfigModalShow, setGameConfigModalShow] = React.useState(false);
  const [joinRoomModalShow, setJoinRoomModalShow] = React.useState(false);

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
            <button
              className="menu-button"
              onClick={() => setGameConfigModalShow(true)}
            >
              <div id="image-container">
                <img width="250px" src={button} alt="menu-button" />
                <div id="text-container">New Game</div>
              </div>
            </button>
            <GameConfigModal
              show={gameConfigModalShow}
              onHide={() => setGameConfigModalShow(false)}
            />
          </li>
          <li>
            <button
              className="menu-button"
              onClick={() => setJoinRoomModalShow(true)}
            >
              <div id="image-container">
                <img width="250px" src={button} alt="menu-button" />
                <div id="text-container">Join Room</div>
              </div>
            </button>
            <JoinRoomModal
              show={joinRoomModalShow}
              onHide={() => setJoinRoomModalShow(false)}
            />
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
