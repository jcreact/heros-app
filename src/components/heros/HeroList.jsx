import React from 'react';
import { Grid, Fade } from '@material-ui/core';

import { HeroListItem } from './HeroListItem';

import { getHerosByPublisher } from '../../selectors/getHerosByPublisher';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {
    // const heros = getHerosByPublisher(publisher);
    const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

    return (
        <Fade in timeout={500}>
            <Grid container spacing={2}>
                {heros.map((hero) => (
                    <Grid item xs={12} sm={4} md={3} key={hero.id}>
                        <HeroListItem {...hero} />
                    </Grid>
                ))}
            </Grid>
        </Fade>
    );
};
