import styled from "styled-components";

interface Props {
  x: number;
  y: number;
}

const Dumbbell = ({ x, y }: Props) => {
  return (
    <>
      <LeftDisc id="left-disc" cx={x - 1} cy={y - 1} r="5" />
      <RightDisc id="right-disc" cx={x + 1} cy={y + 1} r="5" />
    </>
  );
};

export const LeftDisc = styled.circle`
  stroke: #555;
  fill: #777;
`;
export const RightDisc = styled.circle`
  stroke: #333;
  fill: #777;
`;

export default Dumbbell;
