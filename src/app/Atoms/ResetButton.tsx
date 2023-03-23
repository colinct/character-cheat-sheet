import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #999999;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 80px;

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
