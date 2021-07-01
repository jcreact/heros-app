import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardMedia,
    Chip,
    Divider,
    Fade,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';

import { getHeroById } from '../../selectors/getHeroById';

const useStyles = makeStyles((theme) => ({
    chips: {
        margin: theme.spacing(0.5),
    },
}));

export const HeroPage = ({ history }) => {
    const { chips } = useStyles();
    const { id } = useParams();
    const hero = getHeroById(id);

    const theme = useMemo(() => {
        if (!hero) {
            return createMuiTheme();
        }
        if (hero?.publisher.startsWith('DC')) {
            return createMuiTheme({
                palette: {
                    primary: blue,
                },
            });
        } else {
            return createMuiTheme({
                palette: {
                    primary: red,
                },
            });
        }
    }, [hero]);

    if (!hero) {
        return <Redirect to="/" />;
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } =
        hero;

    const charactersChips = () => {
        return characters
            .split(',')
            .map((c) => [
                c
                    .match(/\b(\w)/g)
                    .join('')
                    .toUpperCase(),
                c,
            ])
            .map(([x, c], i) => (
                <Chip
                    key={i}
                    label={c}
                    color="default"
                    variant="outlined"
                    className={chips}
                    avatar={<Avatar>{x}</Avatar>}
                />
            ));
    };

    const handleClick = (_) => {
        if (history.length <= 2) {
            const back = `/${publisher.startsWith('DC') ? 'dc' : 'marvel'}`;
            console.log(back);
            history.push(back);
        } else {
            history.goBack();
        }
    };

    return (
        <Fade in timeout={400}>
            <Box
                display="flex"
                justifyContent="center"
                alignContent="center"
                mt={4}
            >
                <Grid container spacing={2} style={{ maxWidth: '110vh' }}>
                    <Grid item xs={12} sm={6}>
                        <Card variant="outlined">
                            <CardMedia
                                image={`./assets/heros/${id}.jpg`}
                                component="img"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-start"
                            style={{ height: '100%' }}
                        >
                            <Typography variant="h2">
                                <span>{superhero}</span>
                                <ThemeProvider theme={theme}>
                                    <Box clone ml={1}>
                                        <Chip
                                            size="small"
                                            label={publisher}
                                            variant="outlined"
                                            color="primary"
                                        />
                                    </Box>
                                </ThemeProvider>
                            </Typography>
                            <Box mt={2} mb={2}>
                                <Divider />
                            </Box>
                            <Box mt={2}>
                                <Typography variant="h5">
                                    <b style={{ textTransform: 'capitalize' }}>
                                        Alter ego:{' '}
                                    </b>
                                    {alter_ego}
                                </Typography>
                            </Box>
                            <Box mt={2} css={{ flexGrow: 1 }}>
                                <Typography variant="h5">
                                    <b style={{ textTransform: 'capitalize' }}>
                                        First Appearance:{' '}
                                    </b>
                                    {first_appearance}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="center"
                                flexWrap="wrap"
                                mt={2}
                            >
                                {charactersChips()}
                            </Box>
                            <Box mt={4} mb={2}>
                                <Divider />
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="flex-end"
                            >
                                <Button
                                    color="primary"
                                    startIcon={<ArrowBackIos />}
                                    onClick={handleClick}
                                >
                                    regresar
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Fade>
    );
};
