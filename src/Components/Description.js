import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 64,
    height: "600px",
    width: "100%",
    // minHeight: '50vh',
    // maxHeight: '100vh',
    background: "black",
    backgroundSize: "cover",
    background:
      "#000000" /* fallback colour. Make sure this is just one solid colour. */,
    // background:
    //   "-webkit-linear-gradient(to right, rgba(0,0,0, 1) 10%, rgba(0,0,0, 0.8) 50%, rgba(0, 0, 0, 0)), url('https://bit.ly/2rlzaXi')",
    // background:
    //   "linear-gradient(to right, rgba(0,0,0, 1) 10%, rgba(0,0,0, 0.8) 50%, rgba(0, 0, 0, 0)), url('https://bit.ly/2rlzaXi')",
    background: (styleprops) => styleprops.background,
    [theme.breakpoints.down("xs")]: {
      marginTop: 56,
      background:
        "-webkit-linear-gradient(to bottom, rgba(0,0,0, 1) 10%, rgba(0,0,0, 0.8) 50%, rgba(0, 0, 0, 0)), url('https://bit.ly/2rlzaXi')",
      background:
        "linear-gradient(to bottom, rgba(0,0,0, 1) 10%, rgba(0,0,0, 0.8) 70%, rgba(0, 0, 0, 0)), url('https://bit.ly/2rlzaXi')",
    },
  },
  img: {
    width: "100%",
    maxHeight: "100vh",
  },

  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    // height: '100%',
  },

  box: {
    position: "absolute",
    top: 100,
  },
  thumbnail: {
    height: "150px",
    margin: "0 5%",
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "50px",
    },
  },

  listItemText: {
    color: "black",
    fontSize: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  ListItem: {
    padding: "2px 0px",
  },
}));

export default function Description(props) {
  const styleprops = {
    background:
      "linear-gradient(to right, rgba(0,0,0, 0) 10%, rgba(0,0,0, 0.7) 50%, rgba(0, 0, 0, 0)), url(" +
      props.cover +
      ")",
  };
  const classes = useStyles(styleprops);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          item
          xs={12}
        >
          <img className={classes.thumbnail} src={props.poster} alt="" />
          <List>
            <ListItem className={classes.ListItem}>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Name :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" style={{ color: "white" }}>
                {props.name}
              </Typography>
            </ListItem>
            <ListItem className={classes.ListItem}>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Type :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" style={{ color: "white" }}>
                {props.type}
              </Typography>
            </ListItem>
            <ListItem className={classes.ListItem}>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Status :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" style={{ color: "white" }}>
                {props.is_completed ? "Completed" : "On Going"}
              </Typography>
            </ListItem>
            <ListItem className={classes.ListItem}>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Episodes :
              </Typography>
              <pre> </pre>
              <Typography variant="body1" style={{ color: "white" }}>
                {props.num_of_eps}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} style={{ height: "5%" }} />
        <Grid item xs={1} />
        <Grid item xs={10} md={6}>
          <Typography
            style={{
              position: "relative",
              whiteSpace: "pre-wrap",
              maxHeight: 360,
              overflowY: "scroll",
            }}
            variant="subtitle1"
            color="secondary"
            noWrap={true}
          >
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
