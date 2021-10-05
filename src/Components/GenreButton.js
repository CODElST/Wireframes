import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 3,
    margin: "0 10px 0 0",
    textTransform: "capitalize",
    fontSize: "0.7rem",
    borderRadius: 30,
  },
}));

export default function GenreButton(props) {
  const [state, setState] = React.useState("transparent");
  const handleClick = () => {
    state === "transparent" ? setState(grey[500]) : setState("transparent");
    console.log(state);
  };
  const classes = useStyles();
  return (
    <Button
      style={{ backgroundColor: `${state}`, marginBottom: 5 }}
      className={classes.button}
      variant="outlined"
      color="default"
      onClick={handleClick}
    >
      {props.text}
    </Button>
  );
}
