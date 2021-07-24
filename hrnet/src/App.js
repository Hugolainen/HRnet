import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([1, 2]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="body">
          <Switch>
            <Route path="/">
              <div> user form {users} </div>
            </Route>
            <Route path="/list">
              <div> user list </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
