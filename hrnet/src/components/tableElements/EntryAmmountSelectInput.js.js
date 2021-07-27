import React, { useState } from "react";
import { TableAsideItemContainer, Select, styled } from "../../assets/Theme";

// eslint-disable-next-line react/prop-types
export const EntryAmmountSelectInput = ({ onSetInput }) => {
  const [value, setValue] = useState(10);

  const options = [10, 25, 50, 100];

  return (
    <TableAsideItemContainer>
      <ScSpan> Show </ScSpan>
      <Select
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
          onSetInput(e.target.value);
        }}
      >
        {
          // eslint-disable-next-line react/prop-types
          options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })
        }
      </Select>
      <ScSpan> entries </ScSpan>
    </TableAsideItemContainer>
  );
};

const ScSpan = styled.span`
  margin-top: 6px;
`;
