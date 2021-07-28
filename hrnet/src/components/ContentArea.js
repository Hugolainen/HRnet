import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ContentArea = ({ children }) => {
  return (
    <FullArea>
      <CenterArea>{children}</CenterArea>
    </FullArea>
  );
};

ContentArea.propTypes = {
  children: PropTypes.element,
};

ContentArea.defaultProps = {
  children: <div> default </div>,
};

const FullArea = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const CenterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  height: 100%;
  padding-left: 1em;
  padding-right: 1em;
`;
