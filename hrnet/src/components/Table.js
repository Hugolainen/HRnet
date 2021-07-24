/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { styled } from "../assets/Theme";
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
          <TableItem key={employee.name} employee={employee} />
        ))
    : [];

  console.log(children);
  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <TableHeaderCell>First Name</TableHeaderCell>
          <TableHeaderCell>Last Name</TableHeaderCell>
          <TableHeaderCell>Start Date</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Date of Birth</TableHeaderCell>
          <TableHeaderCell>Street</TableHeaderCell>
          <TableHeaderCell>City</TableHeaderCell>
          <TableHeaderCell>State</TableHeaderCell>
          <TableHeaderCell>Zip Code</TableHeaderCell>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </StyledTable>
    </TableContainer>
  );
};

const TableContainer = styled.div``;

const StyledTable = styled.table`
  width: 100%;
  font-size: 14px;
  color: black;
  border-bottom: 1px solid grey;
  border-spacing: 0px;
`;

const TableHeader = styled.tr`
  color: blue;
  background-color: white;
  font-weight: bold;
`;

const TableHeaderCell = styled.th`
  cursor: pointer;
  border-bottom: 1px solid grey;
`;

const TableBody = styled.tbody`
  background-color: lightgrey;
  color: black;
`;
