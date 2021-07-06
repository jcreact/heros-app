import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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

import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

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
    const {
        user: { name },
        dispatch,
    } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: types.logout,
        });
        history.replace('/login');
    };

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
                        <Button
                            component={NavLink}
                            to="/search"
                            color="inherit"
                            activeClassName={classes.active}
                        >
                            buscar
                        </Button>
                    </div>

                    <Typography variant="subtitle2" color="inherit">
                        {name}
                    </Typography>

                    <IconButton color="secondary" onClick={handleLogout}>
                        <ExitToApp />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    );
};
