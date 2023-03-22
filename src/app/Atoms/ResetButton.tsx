import React from "react";
import styled from "styled-components";

interface ButtonProps {}

const StyledButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
    border: 1px solid #e0e0e0;
  }
`;

const CancelButton = () => {
  return (
    <div>
      <StyledButton type="reset">Clear Form</StyledButton>
    </div>
  );
};

export default CancelButton;
