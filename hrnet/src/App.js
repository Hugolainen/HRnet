import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateEmployee } from "./pages/CreateEmployee";
import { CurrentEmployees } from "./pages/CurrentEmployees";
import { ContentArea } from "./components/ContentArea";

const App = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const onCreateNewEmployee = (newEmployee) => {
    const newList = employeeList;
    const employeeToCreate = {
      id: employeeList.length,
      firstName: newEmployee.firstName ? newEmployee.firstName : "",
      lastName: newEmployee.lastName ? newEmployee.lastName : "",
      startDate: newEmployee.startDate ? newEmployee.startDate : "",
      department: newEmployee.department ? newEmployee.department : "Sales",
      dateOfBirth: newEmployee.dateOfBirth ? newEmployee.dateOfBirth : "",
      street: newEmployee.street ? newEmployee.street : "",
      city: newEmployee.city ? newEmployee.city : "",
      state: newEmployee.state ? newEmployee.state : "AL",
      zipCode: newEmployee.zipCode ? newEmployee.zipCode : "",
    };
    newList.push(employeeToCreate);
    setEmployeeList(newList);
  };

  return (
    <ContentArea>
      <BrowserRouter>
        <div className="body">
          <Switch>
            <Route path="/list">
              <CurrentEmployees employeeList={employeeList} />
            </Route>
            <Route path="/">
              <CreateEmployee createNewEmployee={onCreateNewEmployee} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ContentArea>
  );
};

export default App;
