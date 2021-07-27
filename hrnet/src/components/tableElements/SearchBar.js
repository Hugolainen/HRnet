import React, { useState } from "react";
import {
  TableAsideItemContainer,
  Label,
  Input,
  styled,
} from "../../assets/Theme";

// eslint-disable-next-line react/prop-types
export const Searchbar = ({ onSetInput }) => {
  const [value, setValue] = useState("");

  const translateInputToArray = (input) => {
    return input.split(" ");
  };

  return (
    <TableAsideItemContainer>
      <ScLabel htmlFor="search"> Search: </ScLabel>
      <Input
        type="text"
        name="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSetInput(translateInputToArray(e.target.value));
        }}
      />
    </TableAsideItemContainer>
  );
};

const ScLabel = styled(Label)`
  margin-top: 6px;
`;
