import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { grey } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "500px",
    backgroundColor: "#767676",
    overflowY: "scroll",
  },
  list: {
    padding: 0,
  },
  listItem: {
    height: 80,
  },
  listItemText: {
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  button: {
    display: "flex",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    textTransform: "capitalize",
    padding: "3px 5px",
  },
}));

export default function SimpleList(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <List className={classes.list}>
          {[...Array(15)].map(() => (
            <ListItem className={classes.listItem} button>
              <ListItemText
                className={classes.listItemText}
                secondaryTypographyProps={{ style: { color: grey[400] } }}
                primary="Lorem Ipsum Dolor Sit Amet"
                secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Button className={classes.button} variant="contained">
        View More
      </Button>
    </>
  );
}
