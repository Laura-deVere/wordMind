import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Using thunk and apply middleware to handle promise in action creator
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import App from "./App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
