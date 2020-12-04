import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore ,combineReducers,applyMiddleware } from 'redux';
import '../node_modules/fullcalendar/dist/fullcalendar.min.js';
 
import allReducers from './store/Reducers'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 

 
const store = createStore(allReducers,applyMiddleware(thunk));
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
