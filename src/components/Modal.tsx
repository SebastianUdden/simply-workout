import { useEffect, useState } from "react";
import styled from "styled-components";
import { Close } from "./Close";

interface Props {
  onClose: Function;
  isButton?: boolean;
  bgColor?: string;
  children: any;
}

const Modal = ({ onClose, isButton, bgColor, children }: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    const body = document.getElementsByTagName("body")[0];
    body.style.position = "static";
    body.style.left = "default";
    body.style.right = "default";
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      const body = document.getElementsByTagName("body")[0];
      body.style.position = "fixed";
      body.style.left = "0";
      body.style.right = "0";
      document.getElementById("filter-exercises")?.focus();
    }, 500);
    return () => {
      const body = document.getElementsByTagName("body")[0];
      body.style.overflow = "auto";
      body.style.position = "static";
      body.style.left = "default";
      body.style.right = "default";
    };
  }, []);

  return (
    <Wrapper show={show} isButton={isButton} bgColor={bgColor}>
      <Close onClick={() => handleClose()}>&times;</Close>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  show?: boolean;
  bgColor?: string;
  isButton?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(p) => p.bgColor || "#000"};
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 700ms ease, background-color 10000ms ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 15px;
  ${(p) =>
    p.show ? "transform: translateX(0);" : "transform: translateX(100%);"}
  ${(p) =>
    p.isButton &&
    `
    cursor: pointer;
    background-color: #fff;
  `}
`;

export default Modal;
