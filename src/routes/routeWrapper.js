import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Comment, isPrivate, ...rest}) => {

    const autorizado = true;

    if (!autorizado && isPrivate){
        return <Redirect to="/login" />;
    }

    if (autorizado && !isPrivate){
        return <Redirect to="/" />;
    }

    return <Route {...rest} render={(props) => <Component {...props} /> }/>;
};