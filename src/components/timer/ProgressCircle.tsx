import styled from "styled-components";
import { getZero } from "../../utils";

const formatCount = (count: number) => {
  const minutes = getZero(Math.floor(count / 60));
  const seconds = getZero(count % 60);
  return `${minutes}:${seconds}`;
};

interface Props {
  count: number;
  time: number;
  ratio: number;
  isEven: boolean;
  size: number;
}

const ProgressCircle = ({ count, time, ratio, isEven, size = 100 }: Props) => (
  <Wrapper size={size}>
    <Inner size={size} />
    <Number size={size}>{formatCount(count)}</Number>
    <Circle>
      <Left size={size}>
        <ProgressLeft
          flash={ratio < 1 && ratio > 0.7 && isEven}
          size={size}
          time={time / 2}
          isComplete={count > time}
        />
      </Left>
      <Right size={size}>
        <ProgressRight
          flash={ratio < 1 && ratio > 0.7 && isEven}
          size={size}
          time={time / 2}
          isComplete={count > time}
        />
      </Right>
    </Circle>
  </Wrapper>
);

const Wrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
`;
const Inner = styled.div<{ size: number }>`
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  height: ${(p) => p.size * 0.8}px;
  width: ${(p) => p.size * 0.8}px;
  margin: ${(p) => `-${p.size * 0.4}px 0 0 -${p.size * 0.4}px`};
  background: #000;
  border-radius: 100%;
`;
const Number = styled.div<{ size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: ${(p) => p.size * 0.26}px;
  font-weight: 500;
  width: ${(p) => p.size * 0.71}px;
  color: #fff;
`;
const Circle = styled.div``;
const Bar = styled.div<{ size: number }>`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
  -webkit-border-radius: 100%;
  clip: ${(p) => `rect(0px, ${p.size}px, ${p.size}px, ${p.size / 2}px)`};
`;
const Left = styled(Bar)``;
const Right = styled(Bar)`
  transform: rotate(180deg);
  z-index: 3;
`;
const Progress = styled.div<{
  isComplete: boolean;
  flash: boolean;
  time: number;
  size: number;
}>`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  clip: ${(p) => `rect(0px, ${p.size / 2}px, ${p.size}px, 0px)`};
  background-color: magenta;
  transition: background-color 1s ease;
  ${(p) =>
    p.flash &&
    `
    background-color: yellow;
  `}
  ${(p) =>
    p.isComplete &&
    `
    background-color: limegreen;
  `}
`;
const ProgressLeft = styled(Progress)`
  z-index: 1;
  animation: ${(p) => `left ${p.time}s linear both`};
  @keyframes left {
    100% {
      transform: rotate(180deg);
    }
  }
`;
const ProgressRight = styled(Progress)`
  animation: ${(p) => `right ${p.time}s linear both`};
  animation-delay: ${(p) => `${p.time}s`};
  @keyframes right {
    100% {
      transform: rotate(180deg);
    }
  }
`;

export default ProgressCircle;
