import React, { useState } from "react";
import PropTypes from "prop-types";
import { Label, Input, InputContainer } from "../assets/Theme";

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

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onSetInput: PropTypes.func,
};

TextInput.defaultProps = {
  label: "",
  type: "text",
};
