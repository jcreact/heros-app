import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Typography,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    makeStyles,
} from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import gray from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    appMenu: {
        flexGrow: 1,
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(2),
        '& > *': {
            color: gray[500],
        },
    },
    active: {
        color: 'white',
    },
}));

export const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">Asociaciones</Typography>

                    <div className={classes.appMenu}>
                        <Button
                            component={NavLink}
                            to="/marvel"
                            color="inherit"
                            activeClassName={classes.active}
                        >
                            Marvel
                        </Button>
                        <Button
                            component={NavLink}
                            to="/dc"
                            color="inherit"
                            activeClassName={classes.active}
                        >
                            DC
                        </Button>
                    </div>

                    <IconButton
                        component={NavLink}
                        to="/login"
                        color="inherit"
                        variant="contained"
                    >
                        <ExitToApp />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    );
};
