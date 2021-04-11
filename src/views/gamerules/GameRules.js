import "./GameRules.css";
import backbutton from "../../assets/elements/back-button.png";
import pdfHU from "../../assets/game-rules-HU.pdf";
import pdfEN from "../../assets/game-rules-EN.pdf";
import { NavLink } from "react-router-dom";

export function GameRules() {
  return (
    <div id="gamerules">
      <NavLink to="/">
        <button className="back-button">
          <img id="backbutton" src={backbutton} alt="back-button" />
        </button>
      </NavLink>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 100 + "vh" }}
      >
        <div className="content-container">
          <div className="content-header">
            <h1>Game Rules</h1>
            <h5>Ticket To Ride - Europe (simplified)</h5>
          </div>
          <div className="content-body">
            <h2>Components</h2>
            <ul>
              <li>1 Ticket To Ride - Map of Europe</li>
              <li>240 Colored Train Cars</li>
              <li>158 Game Cards</li>
            </ul>
            <h2>The Game Turn</h2>
            <p>A player chooses the following three options:</p>
            <ul>
              <li>
                <u>Draw a train card:</u> you can do this from the revealed
                cards, in which case the card must be replaced immediately after
                the draw...
              </li>
              <li>
                <u>Build a route:</u> then you must play out the amount of cards
                corresponding to the color of the path. Gray roads can be built
                in any but one color...
              </li>
              <li>
                <u>Draw new target cards:</u> 3 new target cards can be drawn,
                of which at least 1 (maximum 3) must be retained. We simplify
                this by skipping this phase and at the beginning of the game
                everyone gets 5 target cards to complete...
              </li>
            </ul>
            <h2>Game End</h2>
            <p>
              The game ends when one of the players in the warehouse has 2 or
              fewer wagons. Then all the players have one last round, including
              the one who lost so much for the first time. Then the points are
              calculated:
            </p>
            <ul>
              <li>(the length of the trips is calculated on the way)</li>
              <li>the score of the achieved goals is added</li>
              <li>the value of unfulfilled goals will be deducted</li>
              <li>the owner of the longest connected road gets +10 points</li>
            </ul>
            <br></br>
            <p>
              <i>
                For more information, download and read the original rules of
                the game:
              </i>
            </p>
          </div>
          <div className="content-footer">
            <a
              type="button"
              id="download-button"
              className="btn btn-light"
              href={pdfHU}
              download
              style={{ marginRight: 50 + "px" }}
            >
              Click to download (HU)
            </a>
            <a
              type="button"
              id="download-button"
              className="btn btn-light"
              href={pdfEN}
              download
            >
              Click to download (EN)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
