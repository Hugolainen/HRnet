import React, { useState } from "react";
import { Label, Input, InputContainer } from "../assets/Theme";

// eslint-disable-next-line react/prop-types
export const TextInput = ({ label, type, onSetInput }) => {
  const [value, setValue] = useState("");

  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type={type}
        name={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSetInput(e.target.value);
        }}
      />
    </InputContainer>
  );
};
