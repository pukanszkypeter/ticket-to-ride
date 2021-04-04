import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./home/Home";
import { GameRules } from "./gamerules/GameRules";

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
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
