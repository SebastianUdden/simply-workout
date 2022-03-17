import { propColor } from "./propColor";

const BosuBall = () => {
  const barHeight = 82;
  return (
    <>
      <path
        d={`M65,${barHeight} a16,16 20 0,0 30,-2`}
        fill={propColor}
        stroke={propColor}
        strokeWidth="2"
      />
    </>
  );
};

export default BosuBall;
