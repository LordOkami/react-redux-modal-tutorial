import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRoutes } from "./components";

const App = () => (
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
);

export default App;
