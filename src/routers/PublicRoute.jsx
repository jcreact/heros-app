import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({ isAuth, component: Component, ...others }) => {
    return (
        <Route
            {...others}
            component={(props) =>
                !isAuth ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

PublicRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};
