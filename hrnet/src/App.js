import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateEmployee } from "./pages/CreateEmployee";
import { CurrentEmployees } from "./pages/CurrentEmployees";
import { ContentArea } from "./components/ContentArea";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [employees, setUsers] = useState([
    {
      firstName: "Hugo",
      lastName: "Constant",
      startDate: "15/05/2021",
      department: "sales",
      dateOfBirth: "15/07/1996",
      street: "Koskenvayla",
      city: "Jamsa",
      state: "AK",
      zipCode: "42300",
    },
  ]);

  return (
    <ContentArea>
      <BrowserRouter>
        <div className="body">
          <Switch>
            <Route path="/list">
              <CurrentEmployees employeeList={employees} />
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
