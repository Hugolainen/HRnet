import React, { useState } from "react";
import { TableAsideItemContainer, Label, Input } from "../../assets/Theme";

// eslint-disable-next-line react/prop-types
export const Searchbar = ({ onSetInput }) => {
  const [value, setValue] = useState("");

  const translateInputToArray = (input) => {
    return input.split(" ");
  };

  return (
    <TableAsideItemContainer>
      <Label htmlFor="search"> Search: </Label>
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
