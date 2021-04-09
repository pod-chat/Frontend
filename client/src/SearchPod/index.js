import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store'
import logger from "redux-logger";
import thunk from "redux-thunk";

// TODO: remove redux store from this component

//Import Components
import View from './View'

// STORE // 
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default function SearchPod() {
    return (
        <Provider store={store} >
            <View />
        </Provider>
    )
}

