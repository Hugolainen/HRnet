import React, { useState } from "react";
import { Label, Select } from "../assets/Theme";

// eslint-disable-next-line react/prop-types
export const SelectInput = ({ label, options, onSetInput }) => {
  const [value, setValue] = useState();

  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <Select
        value={value}
        name={label}
        onChange={(e) => {
          setValue(e.target.value);
          onSetInput(value);
        }}
      >
        {
          // eslint-disable-next-line react/prop-types
          options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))
        }
      </Select>
    </>
  );
};
