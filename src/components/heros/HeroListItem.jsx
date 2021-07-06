import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';
import { getHeroImage } from '../../helpers/loadImages';

const useStyles = makeStyles((theme) => ({
    avatarMarvel: {
        backgroundColor:
            theme.palette.type === 'dark'
                ? theme.palette.error.dark
                : theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
    avatarDC: {
        backgroundColor:
            theme.palette.type === 'dark'
                ? theme.palette.info.dark
                : theme.palette.info.main,
        color: theme.palette.info.contrastText,
    },
    cardTitle: {
        '& > div > span:first-child': {
            fontSize: '1rem',
        },
    },
}));

export const HeroListItem = ({
    id,
    superhero,
    publisher,
    alter_ego,
    characters,
    first_appearance,
}) => {
    const { avatarDC, avatarMarvel, cardTitle } = useStyles();

    const avatarColor = publisher.startsWith('DC') ? avatarDC : avatarMarvel;
    const avatarAcronym = superhero
        .match(/\b(\w)/g)
        .join('')
        .toUpperCase();

    return (
        <>
            <Card variant="outlined">
                <CardHeader
                    className={cardTitle}
                    avatar={
                        <Avatar className={avatarColor}>{avatarAcronym}</Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={superhero}
                    subheader={alter_ego}
                />
                <CardMedia
                    image={getHeroImage(`${id}.jpg`)}
                    title={superhero}
                    component="img"
                />
                <CardContent>
                    <Typography>{first_appearance}</Typography>
                    {alter_ego !== characters && (
                        <Typography>{characters}</Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button
                        aria-label="learn more"
                        component={NavLink}
                        to={`./hero/${id}`}
                        color="primary"
                        variant="contained"
                    >
                        ver más
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};
