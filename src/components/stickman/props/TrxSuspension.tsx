import styled from "styled-components";
import { propColor } from "./propColor";

const barHeight = 82;
const floor = 94;
const grip = { x: 73, y: floor };
export const suspensionL = { x: [grip.x], y: [12] };
export const suspensionR = { x: [grip.x + 3], y: [12] };

const TrxSuspension = () => {
  return (
    <>
      <Line
        id="grip"
        x1={grip.x - 5}
        x2={grip.x + 5}
        y1={barHeight}
        y2={barHeight}
      />
    </>
  );
};

const Line = styled.line`
  stroke: ${propColor};
  stroke-width: 4;
`;

export default TrxSuspension;
