import React, { useState } from "react";
import { Label, Select } from "../assets/Theme";

// eslint-disable-next-line react/prop-types
export const SelectInput = ({ label, options, onSetInput }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <Select
        value={value}
        name={label}
        onInput={(e) => {
          setValue(e.target.value);
          onSetInput(e.target.value);
        }}
      >
        {
          // eslint-disable-next-line react/prop-types
          options.map((option) => {
            const name = typeof option === "object" ? option.name : option;
            const value =
              typeof option === "object" ? option.abbreviation : option;
            return (
              <option key={name} value={value}>
                {name}
              </option>
            );
          })
        }
      </Select>
    </>
  );
};
