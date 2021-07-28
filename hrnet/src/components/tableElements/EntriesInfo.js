import React from "react";
import PropTypes from "prop-types";
import { TableAsideItemContainer } from "../../assets/Theme";

export const EntriesInfo = ({
  maxEntriesAmmout,
  startIndex,
  employeeListLength,
  isFiltered,
  filteredListLength,
}) => {
  const startIndexText = isFiltered
    ? filteredListLength === 0
      ? 0
      : startIndex + 1
    : employeeListLength === 0
    ? 0
    : startIndex + 1;
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

EntriesInfo.propTypes = {
  maxEntriesAmmout: PropTypes.number,
  startIndex: PropTypes.number,
  employeeListLength: PropTypes.number,
  isFiltered: PropTypes.bool,
  filteredListLength: PropTypes.number,
};

EntriesInfo.defaultProps = {
  maxEntriesAmmout: 0,
  startIndex: 0,
  employeeListLength: 0,
  isFiltered: false,
  filteredListLength: 0,
};
