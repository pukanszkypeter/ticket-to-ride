import "./Game.css";
import { EndGameModal } from "./modals/EndGameModal";
import React from "react";
import map from "../../assets/elements/map.jpg";
import backbutton from "../../assets/elements/back-button.png";
import cards from "../../assets/wagons/cards.png";
import blue from "../../assets/wagons/blue.png";
import green from "../../assets/wagons/green.png";
import joker from "../../assets/wagons/joker.png";
import red from "../../assets/wagons/red.png";
import black from "../../assets/wagons/black.png";
import destinations from "../../assets/wagons/destinations.png";
import { NavLink } from "react-router-dom";
import { UserStatistics } from "./UserStatistics";
import { GameHistory } from "./GameHistory";
import { RiCopperCoinLine } from "react-icons/ri";
import { MdTrain } from "react-icons/md";
import { CgArrowLongRightC } from "react-icons/cg";
import { WiTrain } from "react-icons/wi";

export function Game() {
  const [endGameModalShow, setEndGameModalShow] = React.useState(false);

  // End Game after 30 sec (TODO)
  let sec = 0;
  function endGame() {
    sec = sec + 1;
    if (sec === 30) {
      clearInterval(endGame);
      setEndGameModalShow(true);
    }
  }
  setInterval(endGame, 1000);

  return (
    <div id="game">
      <NavLink to="/">
        <button className="back-button">
          <img id="backbutton" src={backbutton} alt="back-button" />
        </button>
      </NavLink>
      <div
        className="row"
        style={{
          height: 80 + "vh",
          width: 100 + "%",
        }}
      >
        <div className="col-2">
          <ul className="current-player-list">
            <li className="current-player-list-item">
              <div className="current-player-statistics">
                <div className="card-header">#Current Player</div>
                <div className="row current-player-row">
                  <div className="col">
                    Points: 10 <RiCopperCoinLine />
                  </div>
                  <div className="col">
                    Wagons: 25 <MdTrain />
                  </div>
                </div>
                <ul className="current-player-list-list">
                  <li
                    className="current-player-list-list-item"
                    style={{ backgroundColor: "green" }}
                  >
                    Amsterdam <CgArrowLongRightC /> Essen
                  </li>
                  <li
                    className="current-player-list-list-item"
                    style={{ backgroundColor: "green" }}
                  >
                    Berlin <CgArrowLongRightC /> Essen
                  </li>
                  <li
                    className="current-player-list-list-item"
                    style={{ backgroundColor: "green" }}
                  >
                    London <CgArrowLongRightC /> Amsterdam
                  </li>
                  <li
                    className="current-player-list-list-item"
                    style={{ backgroundColor: "red" }}
                  >
                    Wien <CgArrowLongRightC /> Budapest
                  </li>
                  <li
                    className="current-player-list-list-item"
                    style={{ backgroundColor: "red" }}
                  >
                    München <CgArrowLongRightC /> Wien
                  </li>
                </ul>
              </div>
            </li>
            <li className="current-player-list-item">
              <div className="current-player-cards">
                <div className="card-header">Your Cards</div>
                <ul className="current-player-cards-list">
                  <li className="current-player-blue-card">
                    <WiTrain /> Blue card: x pieces
                  </li>
                  <li className="current-player-black-card">
                    <WiTrain /> Black card: x pieces
                  </li>
                  <li className="current-player-green-card">
                    <WiTrain /> Green card: x pieces
                  </li>
                  <li className="current-player-orange-card">
                    <WiTrain /> Orange card: x pieces
                  </li>
                  <li className="current-player-pink-card">
                    <WiTrain /> Pink card: x pieces
                  </li>
                  <li className="current-player-red-card">
                    <WiTrain /> Red card: x pieces
                  </li>
                  <li className="current-player-white-card">
                    <WiTrain /> White card: x pieces
                  </li>
                  <li className="current-player-yellow-card">
                    <WiTrain /> Yellow card: x pieces
                  </li>
                  <li className="current-player-joker-card">
                    <WiTrain /> Joker card: x pieces
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-8">
          <div className="map-container">
            <img id="map" src={map} alt="Map of Europe" />
          </div>
        </div>
        <div className="col-2 cards">
          <ul className="cardsList">
            <li className="cardsElem">
              <img className="cardsItem" src={cards} alt="Cards" />
            </li>
            <li className="cardsElem">
              <img className="cardsItem" src={blue} alt="Cards" />
            </li>
            <li className="cardsElem">
              <img className="cardsItem" src={green} alt="Cards" />
            </li>
            <li className="cardsElem">
              <img className="cardsItem" src={joker} alt="Cards" />
            </li>
            <li className="cardsElem">
              <img className="cardsItem" src={red} alt="Cards" />
            </li>
            <li className="cardsElem">
              <img className="cardsItem" src={black} alt="Cards" />
            </li>
            <li className="cardsElem">
              <img className="cardsItem" src={destinations} alt="Cards" />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="row"
        style={{
          height: 20 + "vh",
          width: 100 + "%",
        }}
      >
        <UserStatistics />
        <UserStatistics />
        <UserStatistics />
        <UserStatistics />
        <GameHistory />
      </div>
      <EndGameModal
        show={endGameModalShow}
        onHide={() => setEndGameModalShow(false)}
      />
    </div>
  );
}
