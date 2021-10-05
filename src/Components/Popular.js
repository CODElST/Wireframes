import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuPopularAnime from "./MenuPopularAnime";
import { grey } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import ListTopAnime from "./ListTopAnime";
import genreList from "../Data/genreList.json";

const useStyles = makeStyles((theme) => ({
  buttongroup: {
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "row",
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      msOverflowStyle: "none",
      scrollbarWidth: "none",
    },
  },
  button: {
    padding: 3,
    margin: "0 10px 0 0",
    textTransform: "capitalize",
    fontSize: "0.7rem",
    borderRadius: 30,
  },
}));

export default function PopularAnime(props) {
  const [state, setState] = React.useState();
  const handleClick = (name, event) => {
    setState(name);
  };

  const classes = useStyles();
  return (
    <>
      <MenuPopularAnime />
      <div className={classes.buttongroup}>
        {genreList.map((item) => (
          <Button
            style={{ marginBottom: 5 }}
            className={classes.button}
            variant="outlined"
            color="default"
            onClick={(event) => handleClick(item.name, event)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <ListTopAnime genre={state} />
    </>
  );
}
