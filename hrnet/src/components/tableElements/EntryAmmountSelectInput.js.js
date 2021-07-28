import React, { useState } from "react";
import PropTypes from "prop-types";
import { TableAsideItemContainer, Select, styled } from "../../assets/Theme";

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
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
      <ScSpan> entries </ScSpan>
    </TableAsideItemContainer>
  );
};

EntryAmmountSelectInput.propTypes = {
  onSetInput: PropTypes.func,
};

const ScSpan = styled.span`
  margin-top: 6px;
`;
