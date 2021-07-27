/* eslint-disable react/prop-types */
import React from "react";
import { TableAsideItemContainer } from "../../assets/Theme";

export const EntriesInfo = ({
  maxEntriesAmmout,
  startIndex,
  employeeListLength,
  isFiltered,
  filteredListLength,
}) => {
  const startIndexText = employeeListLength === 0 ? 0 : startIndex + 1;
  const ammountOfEntries = isFiltered ? filteredListLength : employeeListLength;
  const endIndexText =
    +startIndex + +maxEntriesAmmout >= ammountOfEntries
      ? ammountOfEntries
      : +startIndex + +maxEntriesAmmout;
  const ammountOfEntriesTotal = employeeListLength;

  return (
    <TableAsideItemContainer>
      <span>
        Showing {startIndexText} to {endIndexText} of {ammountOfEntries} entries
      </span>
      {isFiltered && (
        <span> (filtered from {ammountOfEntriesTotal} total entries) </span>
      )}
    </TableAsideItemContainer>
  );
};
