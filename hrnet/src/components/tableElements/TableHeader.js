/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ScTableHeader, TableHeaderCell } from "../../assets/Theme";

// eslint-disable-next-line react/prop-types
export const TableHeader = ({ attributes, onUpdateSorting }) => {
  const [sorter, setSorter] = useState("firstName");
  const [order, setOrder] = useState(true);

  const handleSorterChange = (value) => {
    if (sorter === value) {
      setOrder(!order);
      onUpdateSorting(sorter, !order);
    } else {
      setSorter(value);
      setOrder(true);
      onUpdateSorting(value, true);
    }
  };

  const children = attributes.length
    ? attributes.map((attribute) => (
        <TableHeaderCell
          isSorter={attribute.value === sorter ? true : false}
          key={attribute.value}
          onClick={() => handleSorterChange(attribute.value)}
        >
          {attribute.name}
          {attribute.value === sorter ? (
            order ? (
              <i className="fas fa-sort-down"></i>
            ) : (
              <i className="fas fa-sort-up"></i>
            )
          ) : (
            <i className="fas fa-sort"></i>
          )}
        </TableHeaderCell>
      ))
    : [];

  return (
    <ScTableHeader>
      <tr>{children}</tr>
    </ScTableHeader>
  );
};
