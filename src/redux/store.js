// import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {autoRehydrate} from 'redux-persist'

import eventApp from './allReducers'

// const createStoreWithMiddleware = compose(

// 	)

export const store = compose(autoRehydrate(), applyMiddleware(thunk))(createStore)(eventApp) //reducers
