import styled from "styled-components";
import { propColor } from "./propColor";

const StabilityBall = () => {
  const ball = { x: 80, y: 87 };
  return <Circle cx={ball.x} cy={ball.y} r="3" />;
};

const Circle = styled.circle`
  fill: ${propColor};
  stroke: ${propColor};
`;

export default StabilityBall;
