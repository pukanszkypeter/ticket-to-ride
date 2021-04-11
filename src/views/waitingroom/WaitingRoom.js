import "./WaitingRoom.css";
import backbutton from "../../assets/elements/back-button.png";
import Spinner from "react-bootstrap/Spinner";

export function WaitingRoom() {
  // Generate Random Data
  const randomID = Math.floor(Math.random() * 9999) + 1000;
  const randomPlayers = Math.floor(Math.random() * 5) + 1;
  const randomPlayer = Math.floor(Math.random() * randomPlayers) + 1;
  // Timer
  let sec = 0;
  let min = 0;
  let hour = 0;

  function tick() {
    sec = sec + 1;
    if (min === 60) {
      hour = hour + 1;
      min = 0;
      sec = 0;
      document.getElementById("time").innerHTML =
        hour + " h - " + min + " m - " + sec + " s";
    } else {
      if (sec === 60) {
        min = min + 1;
        sec = 0;
        document.getElementById("time").innerHTML =
          hour + " h - " + min + " m - " + sec + " s";
      } else {
        document.getElementById("time").innerHTML =
          hour + " h - " + min + " m - " + sec + " s";
      }
    }
  }
  setInterval(tick, 1000);

  // Custom Logic for Redirect to Game after 10 sec
  function redirectGame() {
    if (sec === 10) {
      clearInterval(tick);
      window.location.replace("http://localhost:3000/game");
    }
  }
  setInterval(redirectGame, 1000);

  // Redirect to Home
  function redirectHome() {
    clearInterval(tick);
    clearInterval(redirectGame);
    window.location.replace("http://localhost:3000/");
  }

  return (
    <div id="waitingroom">
      <button className="back-button" onClick={() => redirectHome()}>
        <img id="backbutton" src={backbutton} alt="back-button" />
      </button>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 100 + "vh" }}
      >
        <div className="content-container">
          <div className="content-header">
            <h1>Waiting Room</h1>
            <h5>Ticket To Ride - Europe (simplified)</h5>
          </div>
          <div className="content-body">
            <br></br>
            <h4>You are in a waiting room now. The game starts soon...</h4>
            <br></br>
            <h4>Room ID: #{randomID}</h4>
            <br></br>
            <h4>
              Players in Room: {randomPlayer} / {randomPlayers}
            </h4>
            <br></br>
            <h4>
              Waiting Time: <span id="time">0 h - 0 m - 0 s</span>
            </h4>
          </div>
          <div className="content-footer-waiting-room">
            <Spinner animation="border" />
          </div>
        </div>
      </div>
    </div>
  );
}
