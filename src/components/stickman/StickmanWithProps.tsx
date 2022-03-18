import styled from "styled-components";
import Bench from "./props/Bench";
import BosuBall from "./props/BosuBall";
import CurlBench from "./props/CurlBench";
import DipsBar from "./props/DipsBar";
import Pulldown from "./props/Pulldown";
import PullupsBar from "./props/PullupBar";
import SidewaysBench from "./props/SidewaysBench";
import TrxSuspension from "./props/TrxSuspension";
import Stickman, { Positions } from "./Stickman";
import StickmanHolding from "./StickmanHolding";

interface AnimationProps {
  positions?: Positions;
  duration?: number;
  prop?: string;
  hands?: string;
  left?: boolean;
  right?: boolean;
}

interface Props {
  direction?: "Forward" | "Side";
  size?: string;
  category?: string;
  animationProps?: AnimationProps | null;
}

const getProp = (prop: string | undefined) => {
  if (prop === "bench") return <Bench angle={0} />;
  if (prop === "sideways-bench") return <SidewaysBench />;
  if (prop === "curl-bench") return <CurlBench angle={0} />;
  if (prop === "pulldown") return <Pulldown />;
  if (prop === "dips-bar") return <DipsBar />;
  if (prop === "pullups-bar") return <PullupsBar />;
  if (prop === "bosu-ball") return <BosuBall />;
  if (prop === "trx-suspension") return <TrxSuspension />;
  return null;
};

const StickmanWithProps = ({ direction, size, animationProps }: Props) => {
  if (!animationProps) return null;
  const { duration, positions, hands, left, right } = animationProps;
  const background = getProp(animationProps.prop);
  return (
    <Wrapper>
      {hands && (
        <StickmanHolding
          size={size}
          positions={positions}
          duration={duration}
          direction={direction}
          background={background}
          left={left}
          right={right}
          hands={hands}
        />
      )}
      {!hands && (
        <Stickman
          size={size}
          positions={positions}
          duration={duration}
          direction={direction}
          background={background}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StickmanWithProps;