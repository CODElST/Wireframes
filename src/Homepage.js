import React from "react";
import CarouselFinal from "./Components/CarouselNew";
import ListCarousel from "./Components/ListCarousel";
import SimpleList from "./Components/List";
import PopularAnime from "./Components/Popular";
import AirSchedule from "./Components/AirSchedule";
import { Hidden, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import animeList from "./Data/animeList.json";

export default function Homepage() {
  return (
    <>
      <CarouselFinal />
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={10} sm={10}>
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Latest Animes
          </Typography>
          <ListCarousel
            data={animeList
              .map((item) => [item.started, item])
              .sort()
              .reverse()
              .slice(0, 10)}
          />
          <Hidden xsDown>
            <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
              Top Animes
            </Typography>
            <ListCarousel
              data={animeList
                .map((item) => [item.rating, item])
                .sort()
                .reverse()
                .slice(0, 10)}
            />
          </Hidden>
          {/* <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            News and Announcements
          </Typography>
          <SimpleList />
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Latest Discussions
          </Typography>
          <SimpleList /> */}
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Popular Animes
          </Typography>
          <PopularAnime />
          {/* <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Weekly Air Schedule
          </Typography>
          <AirSchedule /> */}
        </Grid>
      </Grid>
    </>
  );
}
