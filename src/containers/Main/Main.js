import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { useStore } from "../../hooks-store/store";
import checkAccount from "../../components/auth/checkAccount";
import signIn from "../../components/auth/signIn";
import signOut from "../../components/auth/signOut";
import acquireToken from "../../components/auth/acquireToken";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 500,
    "& > *": {
      margin: theme.spacing(3),
    },
    padding: "10px 20px",
  },
  title: {
    fontSize: 14,
  },
}));

const Main = () => {
  const classes = useStyles();
  const [state, dispatch] = useStore(true);

  useEffect(() => {
    checkAccount().then((user) => {
      if (user !== "is_error_or_null") {
        dispatch("AUTH_SUCCESS", user);
      } else {
        dispatch("AUTH_CLEAR_STATUS");
      }
    });
  }, []);

  const signInHandler = () => {
    dispatch("AUTH_START");
    signIn();
  };

  const signOutHandler = () => {
    dispatch("AUTH_CLEAR_STATUS");
    signOut(state.auth.username);
  };

  const acquireTokenHandler = () => {
    if (state.auth.username !== null) {
      acquireToken(state.auth.username).then((response) => {
        dispatch("AUTH_UPDATE_TOKEN", response);
      });
    } else {
      console.error("No user logged in");
    }
  };

  let authButton = null;

  if (!state.auth.isAuthenticated) {
    authButton = (
      <Button variant="contained" onClick={signInHandler}>
        Sign in
      </Button>
    );
  } else {
    authButton = (
      <Button variant="contained" onClick={signOutHandler}>
        Sign out
      </Button>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Login Info
      </Typography>
      <Typography variant="body2" gutterBottom>
        Authentication Status: {state.auth.authStatus}
      </Typography>
      <Typography variant="body2" gutterBottom>
        ID: {state.auth.id}
      </Typography>
      <Typography variant="body2" gutterBottom>
        User Name: {state.auth.username}
      </Typography>
      <Card>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            ID Token
          </Typography>
          <Typography variant="body2" component="p">
            {state.auth.idToken}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Access Token
          </Typography>
          <Typography variant="body2" component="p">
            {state.auth.accessToken}
          </Typography>
        </CardContent>
      </Card>

      {authButton}
      <Button variant="contained" onClick={acquireTokenHandler}>
        Acquire token
      </Button>
    </div>
  );
};

export default Main;
