import React from "react";
import ProfileMenu from "./Components/ProfileMenu";
import ProfileMain from "./Profile/ProfileMain";
import ProfileMedal from "./Profile/ProfileMedal";
import ProfileContent from "./Profile/ProfileContent";
import ProfileMyList from "./Profile/ProfileMyList";
import ProfileBucketList from "./Profile/ProfileBucketList";
import ProfileMenuMobile from "./Components/ProfileMenuMobile";
import { HashRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { Hidden } from "@material-ui/core";
import ProfilePublic from "./Profile/ProfilePublic";

export default function Profile() {
  let { path, url } = useRouteMatch();
  return (
    <HashRouter>
      <ScrollToTop />

      <Hidden mdUp>
        <ProfileMenuMobile />
      </Hidden>
      <Hidden smDown>
        <ProfileMenu />
      </Hidden>

      <div>
        <Switch>
          <Route exact path={"/profile"}>
            <ProfileMain />
          </Route>

          <Route exact path={"/profile/medal"}>
            <ProfileMedal />
          </Route>

          <Route exact path={"/profile/content"}>
            <ProfileContent />
          </Route>

          <Route exact path={`/profile/mylist`}>
            <ProfileMyList />
          </Route>

          <Route exact path={`/profile/bucketlist`}>
            <ProfileBucketList />
          </Route>

          <Route exact path={`profile/public`}>
            <ProfilePublic />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
