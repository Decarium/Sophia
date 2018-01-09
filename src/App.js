import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Helmet } from "react-helmet";

// This files styles - need to import before anything else to get the css first.
import styles from "./index.css";

import Login from "./Screens/Login";

const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <div className={styles.content}>
        <Helmet>
          <title>Decarium | Sophia</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
