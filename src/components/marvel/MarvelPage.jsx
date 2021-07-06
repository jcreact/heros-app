import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';

import { HeroList } from '../heros/HeroList';

export const MarvelPage = () => {
    return (
        <Box mt={1}>
            <Typography variant="h3">Marvel</Typography>
            <Box mt={1} mb={2}>
                <Divider />
            </Box>
            <HeroList publisher="Marvel Comics" />
        </Box>
    );
};
