import React from 'react';
import queryString from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Divider,
    Fade,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';
import { useState } from 'react';

import { HeroListItem } from '../heros/HeroListItem';
import { getHerosByFilter } from '../../selectors/getHeroByFilter';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

export const SearchPage = ({ history }) => {
    const cls = useStyles();

    const { search: query } = useLocation();
    const { q = '' } = queryString.parse(query);

    const [search, setSearch] = useState(q);

    const heros = useMemo(() => getHerosByFilter(q), [q]);

    const handleChange = (value) => {
        setSearch(value);
    };

    const handleSumit = (evt) => {
        evt.preventDefault();
        history.push(`?q=${search}`);
    };

    return (
        <Box mt={4}>
            <form onSubmit={handleSumit}>
                <TextField
                    label="Buscador"
                    placeholder="Nombre de héroe..."
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={search}
                    variant="outlined"
                    autoComplete="off"
                    onChange={(e) => handleChange(e.target.value)}
                />
            </form>
            {heros.length > 0 && (
                <Fade in timeout={500}>
                    <Box mt={2}>
                        <Typography variant="h5">Resultados</Typography>
                        <Divider className={cls.divider} />
                        <Grid container spacing={2}>
                            {heros.map((hero) => (
                                <Grid item xs={12} sm={4} md={3} key={hero.id}>
                                    <HeroListItem {...hero} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Fade>
            )}
        </Box>
    );
};
