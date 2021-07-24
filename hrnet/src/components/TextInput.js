import React, { useState } from "react";
import { Label, Input } from "../assets/Theme";

// eslint-disable-next-line react/prop-types
export const TextInput = ({ label, onSetInput }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type="text"
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => onSetInput(value)}
      />
    </>
  );
};
