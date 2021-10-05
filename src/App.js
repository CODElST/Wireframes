import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Content from "./Content";
import LoginSignup from "./Login";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>

        <Route path="/profile">
          <Content />
        </Route>

        {/* <Route path="/about">
          <Content />
        </Route> */}

        <Route path="/anime-about">
          <Content />
        </Route>

        <Route exact path="/login">
          <LoginSignup />
        </Route>

        <Route exact path="/signup">
          <LoginSignup />
        </Route>
      </Switch>
    </HashRouter>
  );
}
