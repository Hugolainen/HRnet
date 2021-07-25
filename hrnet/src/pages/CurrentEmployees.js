import React from "react";
import { CurrentEmployeeContainer, PageTitle, NavLink } from "../assets/Theme";
import { Table } from "../components/Table";

export const CurrentEmployees = (employeeList) => {
  return (
    <CurrentEmployeeContainer>
      <PageTitle>HRnet</PageTitle>
      <Table employeeList={employeeList.employeeList} />
      <NavLink to="/"> Home </NavLink>
    </CurrentEmployeeContainer>
  );
};
