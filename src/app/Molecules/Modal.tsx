import React, { useRef, useState, ReactNode } from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const Modal = ({ children }: ModalProps) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    console.log("OUTSIDE CLICKED");
  });

  return (
    <ModalContainer ref={ref}>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;
