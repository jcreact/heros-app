import React from 'react';
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

    const handleSubmit = (evt) => {
        evt.preventDefault();
        history.replace('/');
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
                            image="./assets/login.png"
                        />
                        <CardContent>
                            <FormControl fullWidth className={classes.field}>
                                <TextField
                                    label="Usuario"
                                    autoFocus
                                    autoComplete="off"
                                    value="test"
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
