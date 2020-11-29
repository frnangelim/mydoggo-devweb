import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import MainLayout from './layouts/Main';
import UnsignedLayout from './layouts/Unsigned';

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/app" render={props => <MainLayout {...props} />}/>
                <Route path="/auth" render={props => <UnsignedLayout {...props} />}/>
                <Redirect from="/" to="/app/home"/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
