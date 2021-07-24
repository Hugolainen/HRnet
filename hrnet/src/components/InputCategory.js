import React from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const InputCategory = ({ children, name }) => {
  return (
    <CategoryBorder>
      <CategoryTitle> {name} </CategoryTitle> {children}
    </CategoryBorder>
  );
};

const CategoryBorder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 10px 0;
  padding: 15px 10px 5px 10px;
  border: 1px solid grey;
`;

const CategoryTitle = styled.div`
  position: absolute;
  background-color: white;
  top: -10px;
`;
