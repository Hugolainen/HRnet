import React from "react";
import { CurrentEmployeeContainer, PageTitle, NavLink } from "../assets/Theme";
import { Table } from "../components/Table";

export const CurrentEmployees = (employeeList) => {
  return (
    <CurrentEmployeeContainer>
      <PageTitle>HRnet</PageTitle>
      <div> Show + Search </div>
      <Table employeeList={employeeList.employeeList} />
      <div> Showing + nav </div>
      <NavLink to="/"> Home </NavLink>
    </CurrentEmployeeContainer>
  );
};
