import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { logger } from 'redux-logger';

const feelingReducer = (state = '', action) => {
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
    }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
