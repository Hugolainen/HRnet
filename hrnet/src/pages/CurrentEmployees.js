import React from "react";
import PropTypes from "prop-types";
import { CurrentEmployeeContainer, PageTitle, NavLink } from "../assets/Theme";
import { Table } from "../components/Table";

export const CurrentEmployees = ({ employeeList }) => {
  return (
    <CurrentEmployeeContainer>
      <PageTitle>Current Employees</PageTitle>
      <Table employeeList={employeeList} />
      <NavLink to="/">
        <i className="fas fa-home"></i> Home
      </NavLink>
    </CurrentEmployeeContainer>
  );
};

CurrentEmployees.propTypes = {
  employeeList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      startDate: PropTypes.string,
      department: PropTypes.string,
      dateOfBirth: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zipCode: PropTypes.string,
    })
  ),
};

CurrentEmployees.defaultProps = {
  employeeList: [],
};
