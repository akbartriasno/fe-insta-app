import { createStore } from "redux";
import reducer from "../reducers/ClientReducer";

const env = process.env.NODE_ENV.toLowerCase() || 'development'

let store = null

if(env === 'development') {
    store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
} else {
    store = createStore(reducer)
}

export default store
