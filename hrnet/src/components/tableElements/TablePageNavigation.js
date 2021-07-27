/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TableAsideItemContainer, TableNavButton } from "../../assets/Theme";

export const TablePageNavigation = ({
  maxEntriesAmmout,
  listLength,
  onSetPage,
}) => {
  const [page, setPage] = useState(1);

  const ammountOfPage =
    listLength > maxEntriesAmmout
      ? Math.ceil(listLength / maxEntriesAmmout)
      : 1;
  const pageButtons = generatePageButtonList(ammountOfPage, page);

  if (page > ammountOfPage) {
    setPage(ammountOfPage);
    onSetPage(ammountOfPage - 1);
  }

  return (
    <TableAsideItemContainer>
      <TableNavButton
        disabled={page === 1 ? true : false}
        onClick={() => {
          const prevPage = page > 1 ? page - 1 : page;
          setPage(prevPage);
          onSetPage(prevPage - 1);
        }}
      >
        Previous
      </TableNavButton>

      {pageButtons.map((value, index) => (
        <TableNavButton
          disabled={value === "..." ? true : false}
          onClick={() => {
            setPage(value);
            onSetPage(value - 1);
          }}
          isActive={value === page ? true : false}
          key={index + 1}
        >
          {value}
        </TableNavButton>
      ))}

      <TableNavButton
        disabled={page === ammountOfPage ? true : false}
        onClick={() => {
          const nextPage = page < ammountOfPage ? page + 1 : page;
          setPage(nextPage);
          onSetPage(nextPage - 1);
        }}
      >
        Next
      </TableNavButton>
    </TableAsideItemContainer>
  );
};

const generatePageButtonList = (pageAmmount, actualPage) => {
  if (pageAmmount <= 5) {
    const res = [];
    for (let i = 0; i < pageAmmount; i++) {
      res.push(i + 1);
    }
    return res;
  } else {
    if (actualPage <= 2) {
      return [1, 2, 3, "...", pageAmmount];
    } else if (actualPage >= pageAmmount - 1) {
      return [1, 2, "...", pageAmmount - 1, pageAmmount];
    } else {
      return [1, "...", actualPage, "...", pageAmmount];
    }
  }
};
