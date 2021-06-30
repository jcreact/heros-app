import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';

import { HeroList } from '../heros/HeroList';

export const DCPage = () => {
    return (
        <Box mt={1}>
            <Typography variant="h3">DC</Typography>
            <Box mt={1} mb={2}>
                <Divider />
            </Box>
            <HeroList publisher="DC Comics" />
        </Box>
    );
};
