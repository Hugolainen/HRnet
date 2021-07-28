import React from "react";
import PropTypes from "prop-types";
import { InputCategoryBorder, InputCategoryTitle } from "../assets/Theme";

export const InputCategory = ({ children, name }) => {
  return (
    <InputCategoryBorder>
      <InputCategoryTitle> {name} </InputCategoryTitle> {children}
    </InputCategoryBorder>
  );
};

InputCategory.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  name: PropTypes.string,
};

InputCategory.defaultProps = {
  children: <div> default </div>,
  name: "",
};
