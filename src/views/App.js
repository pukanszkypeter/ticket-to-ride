import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./home/Home";
import { GameRules } from "./gamerules/GameRules";
import { WaitingRoom } from "./waitingroom/WaitingRoom";
import { Game } from "./game/Game";

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game-rules">
            <GameRules />
          </Route>
          <Route path="/waiting-room">
            <WaitingRoom />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
