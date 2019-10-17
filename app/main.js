import React from "react"
import ReactDOM from "react-dom"
import {createStore,applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux"
import rootSaga from "./sagas/rootSaga"
import App from "./App"

import reducer from "./reducers/all"
const sagaMiddleware = createSagaMiddleware()
const store=createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
// console.log(store.getState())
ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>
    ,
    document.querySelector("#app")
)
