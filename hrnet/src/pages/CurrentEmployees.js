import React from "react";
import {
  CurrentEmployeeContainer,
  PageTitle,
  Button,
  NavLink,
} from "../assets/Theme";
import { Table } from "../components/Table";

export const CurrentEmployees = (employeeList) => {
  const setFirstName = (value) => {
    console.log(value);
  };

  return (
    <CurrentEmployeeContainer>
      <PageTitle>HRnet</PageTitle>
      <div> Show + Search </div>
      <Table employeeList={employeeList.employeeList} />
      <div> Showing + nav </div>
      <Button onClick={setFirstName}> Save </Button>
      <NavLink to="/"> View Current Employees </NavLink>
    </CurrentEmployeeContainer>
  );
};
