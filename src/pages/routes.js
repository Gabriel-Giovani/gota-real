import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import AuthService from '../services/auth';
import 'antd/dist/antd.css';

// Pages
import HomeLandingPage from './HomeLandingPage';

const Routes = () => {
    return (
        <BrowserRouter forceRefresh={false}>
            <Switch>
                <Route exact path='/' render={HomeLandingPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;