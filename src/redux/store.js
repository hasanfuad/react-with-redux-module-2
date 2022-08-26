import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";

import { composeWithDevTools } from "redux-devtools-extension";
import myLogger from "./middlewares/myLogger";

// redux logger
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger, logger))
);

export default store;
