/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  TableContainer,
  StyledTable,
  TableBody,
  styled,
} from "../assets/Theme";
import { TableItem } from "./tableElements/TableItem";
import { EntryAmmountSelectInput } from "./tableElements/EntryAmmountSelectInput.js";
import { Searchbar } from "./tableElements/SearchBar";
import { EntriesInfo } from "./tableElements/EntriesInfo";
import { TablePageNavigation } from "./tableElements/TablePageNavigation";
import { TableHeader } from "./tableElements/TableHeader";

import { employeeAttributeList } from "../assets/data/employeeAttributeList";

function filter(employee, word) {
  let res = false;
  Object.keys(employee).some((key) => {
    if (key !== "id") {
      if (employee[key].toLowerCase().includes(word)) {
        res = true;
      }
    }
  });
  return res;
}

function itemMatchesFilter(employee, searchedWords) {
  let res = false;

  for (const word of searchedWords) {
    res = filter(employee, word);
    if (res === false) return false;
  }
  return res;
}

// eslint-disable-next-line react/prop-types
export const Table = (employeeList) => {
  const [filter, setFilter] = useState([]);
  const [sorterAtttribute, setSorterAtttribute] = useState("firstName");
  const [sorterOrder, setSorterOrder] = useState(true);
  const [maxEntryNumber, setMaxEntryNumber] = useState(10);
  const [startIndex, setStartIndex] = useState(0);

  const filterTester = employeeList.employeeList.length
    ? employeeList.employeeList.filter((employee) =>
        itemMatchesFilter(employee, filter)
      )
    : [];

  const sorterTester = employeeList.employeeList.length
    ? employeeList.employeeList.sort(function (a, b) {
        var textA = a[sorterAtttribute].toLowerCase();
        var textB = b[sorterAtttribute].toLowerCase();
        return sorterOrder
          ? textA < textB
            ? -1
            : textA > textB
            ? 1
            : 0
          : textA < textB
          ? 1
          : textA > textB
          ? -1
          : 0;
      })
    : [];

  const slicerTester = employeeList.employeeList.length
    ? employeeList.employeeList.filter((employee) =>
        itemMatchesFilter(employee, filter)
      )
    : [];
  console.log(slicerTester);

  const onUpdateSorting = (sortingAttribute, sortingOrder) => {
    setSorterAtttribute(sortingAttribute);
    setSorterOrder(sortingOrder);
  };

  const children = employeeList.employeeList.length
    ? employeeList.employeeList
        //.filter(pot => itemMatchesFilter(pot, potStatusFilter, slagStatusFilter, slagTypeFilter))  //Keep as template
        //.sort
        //.slice
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
        <TableHeader
          attributes={employeeAttributeList}
          onUpdateSorting={onUpdateSorting}
        />
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
