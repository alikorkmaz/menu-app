import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu/:id" exact component={Menu} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
