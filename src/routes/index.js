import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './routeWrapper';

import Login from '../pages/login';
import HomeCard from '../pages/homeCards';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/" exact component={HomeCard} />
            </Switch>
        </BrowserRouter>
    )
}