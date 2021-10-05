import React from "react";
import Header from "./Components/Header";
import Homepage from "./Homepage";
import AnimeAbout from "./AnimeAbout";
import Profile from "./Profile";
import {
  HashRouter,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import ProfileMedal from "./Profile/ProfileMedal";
import Login from "./Login";
import App from "./App";

import { Typography } from "@material-ui/core";

export default function Content() {
  let { path, url } = useRouteMatch();
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Homepage />
          </Route>

          <Route exact path={"/anime-about"}>
            <AnimeAbout />
          </Route>

          <Route path={`/anime-about/:animeName`}>
            <AnimeAbout />
          </Route>

          <Route path={"/profile"}>
            <Profile />
          </Route>
        </Switch>
      </div>
      <div
        style={{
          marginTop: 50,
          height: 300,
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Typography
          variant={"body1"}
          style={{
            position: "relative",
            top: "50%",
            textAlign: "center",
            transform: "translateY(-50%)",
          }}
        >
          © AniLite 2021, made with {"<3"} by Shivansh & Aarush
        </Typography>
      </div>
    </HashRouter>
  );
}
