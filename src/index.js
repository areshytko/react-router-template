/**
 * Created by areshytko on 27.01.17.
 */

import { render } from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
), document.getElementById('app'));