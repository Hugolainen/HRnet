/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableHeaderCell,
  TableBody,
} from "../assets/Theme";
import { TableItem } from "./TableItem";

// eslint-disable-next-line react/prop-types
export const Table = (employeeList) => {
  const [sorting, setSorting] = useState();
  const [filter, setFilter] = useState();
  const [maxEntryNumber, setMaxEntryNumber] = useState();

  const children = employeeList.employeeList.length
    ? employeeList.employeeList
        //.filter(pot => itemMatchesFilter(pot, potStatusFilter, slagStatusFilter, slagTypeFilter))  //Keep as template
        .map((employee) => (
          // eslint-disable-next-line react/jsx-key
          <TableItem key={employee.id} employee={employee} />
        ))
    : [];
  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <tr>
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell>Last Name</TableHeaderCell>
            <TableHeaderCell>Start Date</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Date of Birth</TableHeaderCell>
            <TableHeaderCell>Street</TableHeaderCell>
            <TableHeaderCell>City</TableHeaderCell>
            <TableHeaderCell>State</TableHeaderCell>
            <TableHeaderCell>Zip Code</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </StyledTable>
    </TableContainer>
  );
};
