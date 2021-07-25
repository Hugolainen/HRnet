import React from "react";
import { CurrentEmployeeContainer, PageTitle, NavLink } from "../assets/Theme";
import { Table } from "../components/Table";

export const CurrentEmployees = (employeeList) => {
  return (
    <CurrentEmployeeContainer>
      <PageTitle>Current Employees</PageTitle>
      <Table employeeList={employeeList.employeeList} />
      <NavLink to="/">
        <i className="fas fa-home"></i> Home
      </NavLink>
    </CurrentEmployeeContainer>
  );
};
