import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import creactSagaMiddleware from "redux-saga";
import mySages from "./sagas";

const sagaMiddleware = creactSagaMiddleware();
// 创建一个增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enchance = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enchance);
sagaMiddleware.run(mySages)
export default store;
