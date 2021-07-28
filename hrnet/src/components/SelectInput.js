import React, { useState } from "react";
import PropTypes from "prop-types";
import { Label, Select, InputContainer } from "../assets/Theme";

export const SelectInput = ({ label, options, onSetInput }) => {
  const [value, setValue] = useState("");

  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <Select
        value={value}
        name={label}
        onInput={(e) => {
          setValue(e.target.value);
          onSetInput(e.target.value);
        }}
      >
        {options.map((option) => {
          const name = typeof option === "object" ? option.name : option;
          const value =
            typeof option === "object" ? option.abbreviation : option;
          return (
            <option key={name} value={value}>
              {name}
            </option>
          );
        })}
      </Select>
    </InputContainer>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onSetInput: PropTypes.func,
};

SelectInput.defaultProps = {
  label: "",
  options: [],
};
