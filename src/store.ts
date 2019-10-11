import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewareWithDevTool =  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
);
const store = createStore(reducer, middlewareWithDevTool);

sagaMiddleware.run(rootSaga);
export default store;