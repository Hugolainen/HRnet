import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TableAsideItemContainer,
  Label,
  Input,
  styled,
} from "../../assets/Theme";

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

Searchbar.propTypes = {
  onSetInput: PropTypes.func,
};

const ScLabel = styled(Label)`
  margin-top: 6px;
`;
