import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { TextField, Button, makeStyles } from "@material-ui/core";
import {
  HashRouter,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "0 10px 0 0",
  },
  Typography: {
    marginTop: 10,
  },
  button: {
    display: "flex",
    margin: 10,
    textTransform: "capitalize",
    padding: "3px 5px",
  },
}));

export default function LoginSignup() {
  let { path, url } = useRouteMatch();
  return (
    <HashRouter>
      <Switch>
        <Route exact path={"/login"}>
          <Signin />
        </Route>
        <Route exact path={"/signup"}>
          <Signup />
        </Route>
      </Switch>
    </HashRouter>
  );
}

function Signin() {
  const classes = useStyles();
  function loginHandler() {
    localStorage.setItem("isLogged", true);
  }
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Sign In
          </Typography>
          <Typography
            className={classes.Typography}
            variant="subtitle1"
            color="textSecondary"
          >
            Username
          </Typography>
          <TextField required />
          <Typography
            className={classes.Typography}
            variant="subtitle1"
            color="textSecondary"
          >
            Password
          </Typography>
          <TextField required type="password" />
        </CardContent>
        <Link to="/" exact>
          <Button
            className={classes.button}
            variant="contained"
            onClick={(event) => loginHandler(event)}
          >
            Login
          </Button>
        </Link>
        <Link to="/signup" exact>
          <Button className={classes.button} variant="contained">
            Create Account
          </Button>
        </Link>
        <Link to="/" exact>
          <Button className={classes.button} variant="contained">
            Homepage
          </Button>
        </Link>
      </Card>
    </div>
  );
}

function Signup() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Sign Up
          </Typography>
          <Typography
            className={classes.Typography}
            variant="subtitle1"
            color="textSecondary"
          >
            Username
          </Typography>
          <TextField required />
          <Typography
            className={classes.Typography}
            variant="subtitle1"
            color="textSecondary"
          >
            Password
          </Typography>
          <TextField required type="password" />
        </CardContent>
        <Button className={classes.button} variant="contained">
          Create
        </Button>
        <Link to="/login" exact>
          <Button className={classes.button} variant="contained">
            Already Have an Account? Sign In here
          </Button>
        </Link>
        <Link to="/" exact>
          <Button className={classes.button} variant="contained">
            Homepage
          </Button>
        </Link>
      </Card>
    </div>
  );
}
