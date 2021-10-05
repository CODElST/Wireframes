import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { grey } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import animeList from "../Data/animeList.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    width: "100%",
    // height: "500px",
    backgroundColor: "#767676",
    overflowY: "scroll",
  },
  list: {
    padding: 0,
  },
  listItem: {
    // height: '',
  },
  listItemText: {
    color: "white",
    textAlign: "center",
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap'
  },
  button: {
    display: "flex",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    textTransform: "capitalize",
    padding: "3px 5px",
  },
  thumbnail: {
    height: "100px",
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "50px",
    },
  },
}));

export default function ListTopAnime(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <List className={classes.list}>
          {animeList.map((item) =>
            item.genres.map((name) =>
              name.name === props.genre ? (
                <Link to={`/anime-about/${item.slug}`}>
                  <ListItem className={classes.listItem} button>
                    <img
                      className={classes.thumbnail}
                      src={item.poster_image}
                      alt=""
                    />
                    <ListItemText
                      className={classes.listItemText}
                      secondaryTypographyProps={{ style: { color: grey[400] } }}
                      primary={item.name_en}
                    />
                  </ListItem>
                </Link>
              ) : null
            )
          )}

          {/* {animeList.map((item) => (
            <ListItem className={classes.listItem} button>
              <img
                className={classes.thumbnail}
                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <ListItemText
                className={classes.listItemText}
                secondaryTypographyProps={{ style: { color: grey[400] } }}
                primary="Lorem Ipsum Dolor Sit Amet"
              />
            </ListItem>
          ))} */}
        </List>
      </div>
      {/* <Button className={classes.button} variant="contained">
        View More
      </Button> */}
    </>
  );
}
