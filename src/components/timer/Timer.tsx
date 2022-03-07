import { useEffect, useState } from "react";
import styled from "styled-components";
import { Close } from "../Close";
import ProgressCircle from "./ProgressCircle";

interface Props {
  time: number;
  onClose: () => void;
}

const Timer = ({ time, onClose }: Props) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [isEven, setIsEven] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  useEffect(() => {
    if (count === 0) return;
    setRatio(Math.round((count / time) * 100) / 100);
    setTimeout(() => {
      setIsEven(!isEven);
      setCount(count + 1);
    }, 1000);
  }, [time, count, isEven]);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setCount(1);
    }, 1000);
  }, []);

  return (
    <Wrapper
      onClick={() => ratio > 1 && handleClose()}
      show={show}
      isButton={ratio > 1}
    >
      <Close onClick={handleClose}>&times;</Close>
      <ProgressCircle
        count={count}
        time={time}
        ratio={ratio}
        size={300}
        isEven={isEven}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ show?: boolean; isButton: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 700ms ease, background-color 10000ms ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  ${(p) =>
    p.show ? "transform: translateX(0);" : "transform: translateX(100%);"}
  ${(p) =>
    p.isButton &&
    `
    cursor: pointer;
    background-color: #fff;
  `}
`;

export default Timer;
