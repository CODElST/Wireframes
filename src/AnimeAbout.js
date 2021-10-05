import React from "react";
import Description from "./Components/Description";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import EpisodeListCarousel from "./Components/EpisodeListCarousel";
import NewListCarousel from "./Components/NewListCarousel";
import { Hidden } from "@material-ui/core";
import SimpleList from "./Components/List";
import SeriesList from "./Components/SeriesList";
import CastListCarousel from "./Components/NormalCastListCarousel";
import { useParams } from "react-router";
import animeDetail from "./Data/animeDetail.json";
import animeList from "./Data/animeList.json";

const useStyles = makeStyles((theme) => ({
  listItemText: {
    color: "black",
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  ListItem: {
    padding: "5px 0px",
  },
}));

export default function AnimeAbout() {
  let { animeName } = useParams();
  // const loadData = () => JSON.parse(JSON.stringify(animeDetail));
  // console.log(animeDetail.id);
  // let a = null;
  // for (let i = 0; i < animeList.length; i++) {
  //   if (animeName === animeList[i].slug) {
  //     console.log(animeList[i].id);
  //     a = animeList[i];
  //     break;
  //   }
  // }
  // console.log(a);

  const classes = useStyles();
  console.log(
    animeList
      .map((item) => [item.rating, item])
      .sort()
      .reverse()
      .slice(0, 10)
  );
  return (
    <>
      <Description
        cover={
          "https://media.kitsu.io/anime/cover_images/24/original.jpg?1597604326="
        }
        poster={
          "https://media.kitsu.io/anime/poster_images/24/original.jpg?1597604321="
        }
        name={animeDetail.name_en}
        type={animeDetail.type}
        is_completed={animeDetail.is_completed}
        num_of_eps={animeDetail.num_of_eps}
        description={animeDetail.about}
      />
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={10} sm={10}>
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Info
          </Typography>

          <List>
            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Name :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" color="initial">
                {animeDetail.name_en}
              </Typography>
            </ListItem>

            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Other Names
              </Typography>
              <pre> : </pre>
              <Typography variant="body1" color="initial">
                {animeDetail.name_jp}
              </Typography>
            </ListItem>

            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Type :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" color="initial">
                {animeDetail.type}
              </Typography>
            </ListItem>

            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Status :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" color="initial">
                {animeDetail.is_completed ? "Completed" : "On Going"}
              </Typography>
            </ListItem>

            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Aired :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" color="initial">
                {animeDetail.started}
              </Typography>
            </ListItem>

            {animeDetail.is_completed ? (
              <ListItem className={classes.ListItem}>
                <Typography variant="h6" color="initial">
                  Ended :
                </Typography>
                <pre> </pre>
                <Typography variant="body1" color="initial">
                  {animeDetail.ended}
                </Typography>
              </ListItem>
            ) : null}

            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Episode Count :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" color="initial">
                {animeDetail.num_of_eps}
              </Typography>
            </ListItem>

            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Studio :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" color="initial">
                {animeDetail.studio}
              </Typography>
            </ListItem>

            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Rating :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" color="initial">
                {animeDetail.rating}
              </Typography>
            </ListItem>

            <ListItem className={classes.ListItem}>
              <Typography variant="h6" color="initial">
                Genres
              </Typography>
              <pre> : </pre>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {animeDetail.genres.map((item) => (
                  <>
                    <Typography variant="body1" color="initial">
                      {item.name}
                    </Typography>
                    <pre> </pre>
                  </>
                ))}
              </div>
            </ListItem>
          </List>
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Episode Summary
          </Typography>
          <Hidden xsDown>
            <EpisodeListCarousel data={animeDetail.episode_summary} />
          </Hidden>
          <Hidden smUp>
            <SimpleList />
          </Hidden>
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            In This Series
          </Typography>
          <SeriesList />
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Cast
          </Typography>
          <CastListCarousel data={animeDetail.characters} />
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            News
          </Typography>
          <SimpleList />
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Disqus and Notes
          </Typography>
          <SimpleList />
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Latest Mentions
          </Typography>
          <SimpleList />
          <Typography style={{ margin: "20px 0px 10px 0" }} variant="h4">
            Recommended Animes
          </Typography>
          <NewListCarousel data={animeList} />
        </Grid>
      </Grid>
    </>
  );
}
