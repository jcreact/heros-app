import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardMedia,
    TextField,
    FormControl,
    Box,
    Button,
    Grid,
    CssBaseline,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../../theme/themes';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { getLoginImage } from '../../helpers/loadImages';

const useStyles = makeStyles((theme) => ({
    main: {
        height: '90vh',
    },
    card: {
        width: 300,
    },
    media: {
        paddingTop: '30%',
        marginInline: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    field: {
        marginBottom: theme.spacing(2),
    },
}));

export const LoginPage = ({ history }) => {
    const classes = useStyles();
    const { dispatch } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: types.login,
            payload: {
                name: 'José Palma',
                logged: true,
            },
        });
        history.replace(lastPath);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.main}
            >
                <form onSubmit={handleSubmit}>
                    <Card className={classes.card} variant="outlined">
                        <CardMedia
                            className={classes.media}
                            image={getLoginImage()}
                        />
                        <CardContent>
                            <FormControl fullWidth className={classes.field}>
                                <TextField
                                    label="Usuario"
                                    autoFocus
                                    autoComplete="off"
                                    value="jcpalma"
                                />
                            </FormControl>
                            {/* <FormControl fullWidth className={classes.field}>
                                <TextField
                                    type="password"
                                    label="Contraseña"
                                    autoComplete="off"
                                    value="123456"
                                />
                            </FormControl> */}
                        </CardContent>
                        <Box display="flex" justifyContent="center" mb={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Ingresar
                            </Button>
                        </Box>
                    </Card>
                </form>
            </Grid>
        </ThemeProvider>
    );
};
