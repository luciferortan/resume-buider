import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Createaccount from './createaccount';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import account from './store';
import {createStore} from "redux";

const  store = createStore(account,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const routing=(
    <Provider store={store}>
        <Router>
            <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/create" component={Createaccount}/>
            </Switch>
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
