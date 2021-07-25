/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableHeaderCell,
  TableBody,
  styled,
} from "../assets/Theme";
import { TableItem } from "./tableElements/TableItem";
import { EntryAmmountSelectInput } from "./tableElements/EntryAmmountSelectInput.js";
import { Searchbar } from "./tableElements/SearchBar";
import { EntriesInfo } from "./tableElements/EntriesInfo";
import { TablePageNavigation } from "./tableElements/TablePageNavigation";

// eslint-disable-next-line react/prop-types
export const Table = (employeeList) => {
  const [sorting, setSorting] = useState();
  const [filter, setFilter] = useState([]);
  const [maxEntryNumber, setMaxEntryNumber] = useState(10);
  const [startIndex, setStartIndex] = useState(0);

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
      <TableAside>
        <EntryAmmountSelectInput
          onSetInput={(value) => setMaxEntryNumber(value)}
        />
        <Searchbar onSetInput={(value) => setFilter(value)} />
      </TableAside>
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
      <TableAside>
        <EntriesInfo
          maxEntriesAmmout={maxEntryNumber}
          startIndex={startIndex}
          employeeListLength={children.length}
          isFiltered={filter.length ? true : false}
          filteredListLength={children.length}
        />
        <TablePageNavigation
          maxEntriesAmmout={maxEntryNumber}
          listLength={children.length}
          onSetPage={(value) => setStartIndex(value * maxEntryNumber)}
        />
      </TableAside>
    </TableContainer>
  );
};

const TableAside = styled.div`
  display: flex;
  justify-content: space-between;
`;
