import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateEmployee } from "./pages/CreateEmployee";
import { CurrentEmployees } from "./pages/CurrentEmployees";
import { ContentArea } from "./components/ContentArea";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([1, 2]);

  return (
    <ContentArea>
      <BrowserRouter>
        <div className="body">
          <Switch>
            <Route path="/list">
              <CurrentEmployees />
            </Route>
            <Route path="/">
              <CreateEmployee />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ContentArea>
  );
};

export default App;
