// import createStore and applyMiddleware
import { createStore, applyMiddleware } from "redux";
// for redux-dev-tools chrome extension
import { composeWithDevTools } from "redux-devtools-extension";
// import redux logger to catch changes to state
import logger from "redux-logger";
// import thunk
import thunk from "redux-thunk";
// import reducers
import reducers from "./reducers";

//apply all middleware
let middleware = applyMiddleware(logger, thunk);

export default createStore(reducers, composeWithDevTools(middleware));
