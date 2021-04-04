import "./GameRules.css";
import backbutton from "../../assets/back-button.png";
import pdf from "../../assets/game-rules-HU.pdf";
import { NavLink } from "react-router-dom";

export function GameRules() {
  return (
    <div id="gamerules">
      <NavLink to="/">
        <button className="back-button">
          <img height="100px" src={backbutton} alt="back-button" />
        </button>
      </NavLink>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 100 + "vh" }}
      >
        <div className="content-container">
          <div class="content-header">
            <h1>Game Rules</h1>
          </div>
          <div className="content-body">
            <h2>Components</h2>
            <p>Lorem ipsum...</p>
            <h2>Moves</h2>
            <p>Lorem ipsum...</p>
            <h2>Moves</h2>
            <p>Lorem ipsum...</p>
            <h2>Moves</h2>
            <p>Lorem ipsum...</p>
            <a
              type="button"
              class="btn btn-light download-button"
              href={pdf}
              download
            >
              Click to download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
