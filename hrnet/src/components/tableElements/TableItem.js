/* eslint-disable react/prop-types */
import React from "react";
import { TableRow } from "../../assets/Theme";

// eslint-disable-next-line react/prop-types
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
