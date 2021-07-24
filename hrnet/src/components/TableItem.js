/* eslint-disable react/prop-types */
import React from "react";
import { styled } from "../assets/Theme";

// eslint-disable-next-line react/prop-types
export const TableItem = ({ employee }) => {
  console.log(employee);
  return (
    <TableRow key={employee}>
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

const TableRow = styled.tr`
  :hover {
    background-color: blue;
  }
`;
