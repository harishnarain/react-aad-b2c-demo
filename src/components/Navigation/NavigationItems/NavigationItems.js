import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Aux from "../../../hoc/Auxilary/Auxilary";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavigationItems = (props) => {
  const classes = useStyles();
  return (
    <Aux>
      <Typography variant="h6" className={classes.title}>
        Azure AD B2C React Demo
      </Typography>
    </Aux>
  );
};

export default NavigationItems;
