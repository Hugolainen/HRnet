import React from "react";
import PropTypes from "prop-types";
import { TableRow } from "../../assets/Theme";

export const TableItem = ({ employee }) => {
  return (
    <TableRow isEvenIndex={employee.id % 2 === 0 ? true : false}>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.startDate}</td>
      <td>{employee.department}</td>
      <td>{employee.dateOfBirth}</td>
      <td>{employee.street}</td>
      <td>{employee.city}</td>
      <td>{employee.state}</td>
      <td>{employee.zipCode}</td>
    </TableRow>
  );
};

TableItem.propTypes = {
  employee: PropTypes.shape({
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
  }),
};

TableItem.defaultProps = {
  employee: {},
};
