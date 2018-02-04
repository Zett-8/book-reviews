import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import rootReducer from './reducers';
import PostsIndex from './containers/post-index';
import PostShow from './containers/post-show';
import PostNew from './containers/post-new';

import './style/index.css';
import './style/bootstrap.min.css';

const store = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
    <Provider store={store(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/post/new' component={PostNew} />
                    <Route path='/post/:id' component={PostShow} />
                    <Route path='/' component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
