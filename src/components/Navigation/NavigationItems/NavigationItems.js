import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

import Aux from '../../../hoc/Aux/Aux';

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

const NavigationItems = props => {
    
    const classes = useStyles();

    return(
        <Aux>
            <Typography variant="h6" className={classes.title}>
                Azure AD B2C React Demo
            </Typography>

            {props.isAuthenticated
                ? <Button color="inherit">Admin</Button>
                : null}
            {!props.isAuthenticated
                ? <Button color="inherit" component={Link} to="/auth">Sign in</Button>
                : <Button color="inherit" component={Link} to="/logout">Logout</Button>}
        </Aux>
    );
};

export default NavigationItems;
