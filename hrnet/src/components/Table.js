import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  TableContainer,
  StyledTable,
  TableBody,
  TableAside,
} from "../assets/Theme";
import { TableItem } from "./tableElements/TableItem";
import { EntryAmmountSelectInput } from "./tableElements/EntryAmmountSelectInput.js";
import { Searchbar } from "./tableElements/SearchBar";
import { EntriesInfo } from "./tableElements/EntriesInfo";
import { TablePageNavigation } from "./tableElements/TablePageNavigation";
import { TableHeader } from "./tableElements/TableHeader";

import { employeeAttributeList } from "../assets/data/employeeAttributeList";

function itemMatchesFilter(employee, word) {
  let res = false;
  Object.keys(employee).some((key) => {
    if (key !== "id") {
      if (employee[key].toLowerCase().includes(word.toLowerCase())) {
        res = true;
      }
    }
  });
  return res;
}

function listFiltering(employee, searchedWords) {
  let res = false;

  for (const word of searchedWords) {
    res = itemMatchesFilter(employee, word);
    if (res === false) return false;
  }
  return res;
}

function listSorting(a, b, attribute, order) {
  const textA = a[attribute].toLowerCase();
  const textB = b[attribute].toLowerCase();
  var res;
  if (textA === "" || textB === "") {
    // Empty valued items will always be at the end
    return textA === "" ? (textB === "" ? 0 : 1) : -1;
  } else {
    res = textA < textB ? -1 : textA > textB ? 1 : 0;
  }
  return res === 0 ? res : order ? res : -res;
}

export const Table = ({ employeeList }) => {
  const [filter, setFilter] = useState([""]);
  const [sorterAtttribute, setSorterAtttribute] = useState("firstName");
  const [sorterOrder, setSorterOrder] = useState(true);
  const [maxEntryNumber, setMaxEntryNumber] = useState(10);
  const [startIndex, setStartIndex] = useState(0);

  const filteredEmployeeList = employeeList.length
    ? employeeList.filter((employee) => listFiltering(employee, filter))
    : [];

  const onUpdateSorting = (sortingAttribute, sortingOrder) => {
    setSorterAtttribute(sortingAttribute);
    setSorterOrder(sortingOrder);
  };

  const children = filteredEmployeeList.length
    ? filteredEmployeeList
        .filter((employee) => listFiltering(employee, filter))
        .sort(function (a, b) {
          return listSorting(a, b, sorterAtttribute, sorterOrder);
        })
        .slice(startIndex, +startIndex + +maxEntryNumber)
        .map((employee) => <TableItem key={employee.id} employee={employee} />)
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
          employeeListLength={employeeList.length}
          isFiltered={filter.length && filter[0] !== "" ? true : false}
          filteredListLength={filteredEmployeeList.length}
        />
        <TablePageNavigation
          maxEntriesAmmout={maxEntryNumber}
          listLength={filteredEmployeeList.length}
          onSetPage={(value) => setStartIndex(value * maxEntryNumber)}
        />
      </TableAside>
    </TableContainer>
  );
};

Table.propTypes = {
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

Table.defaultProps = {
  employeeList: [],
};
