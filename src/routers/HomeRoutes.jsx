import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';

import { Navbar } from '../components/ui/Navbar';

import { MarvelPage } from '../components/marvel/MarvelPage';
import { DCPage } from '../components/dc/DCPage';
import { HeroPage } from '../components/heros/HeroPage';

import { darkTheme } from '../theme/themes';

export const HomeRoutes = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <Navbar />
                <Container maxWidth="xl">
                    <Switch>
                        <Route exact path="/marvel" component={MarvelPage} />
                        <Route exact path="/dc" component={DCPage} />
                        <Route exact path="/hero/:id" component={HeroPage} />
                        <Redirect to="/marvel" />
                    </Switch>
                </Container>
            </ThemeProvider>
        </>
    );
};
