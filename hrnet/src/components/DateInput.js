import React, { useState } from "react";
import { Label, Input } from "../assets/Theme";

// eslint-disable-next-line react/prop-types
export const DateInput = ({ label, onSetInput }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type="date"
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => onSetInput(value)}
      />
    </>
  );
};
