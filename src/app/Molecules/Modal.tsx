import React, { useRef, useState, ReactNode } from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";

const StyledModal = styled.div`
  background: grey;
`;

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    console.log("clicked away");
  });

  return <>{isOpen && <StyledModal ref={ref}>{children}</StyledModal>}</>;
};

export default Modal;
