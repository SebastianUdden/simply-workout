import { useState } from "react";
import "./App.css";
import AddExercise from "./pages/AddExercise";
import AddRoutine from "./pages/AddRoutine";
import Header from "./components/Header";
import AddFormat from "./pages/AddFormat";
import styled from "styled-components";
import Home from "./pages/Home";
import Stickman, { DEFAULT_POSITION } from "./components/stickman/Stickman";
import { anim } from "./components/stickman/Animation";
import {
  burpee,
  jump,
  raiseArms,
  sitdown,
  squat,
  stand,
} from "./components/stickman/animations";
import { standingArmsHigh } from "./components/stickman/positions-side/standing";

export const HOME = "home";
export const EXERCISE = "exercise";
export const FORMAT = "format";
export const ROUTINE = "routine";

const App = () => {
  const [tab, setTab] = useState(HOME);

  const position = {
    ...DEFAULT_POSITION,
    // ...anim(anim(standingSide, sittingSide), standingSide),
    // ...anim(anim(standingSide, proneSide), standingSide),
    // ...anim(pushupHigh, pushupLow, true),
    ...anim(burpee),
    // ...anim([bearBack, squat, bearBack]),
    // ...standingArmsHigh,
  };
  return (
    <div>
      <Header onTabChange={(value: string) => setTab(value)} />
      {/* <Stickman position={position} duration={4} /> */}
      <Content>
        {tab === HOME && <Home />}
        {tab === EXERCISE && <AddExercise />}
        {tab === FORMAT && <AddFormat />}
        {tab === ROUTINE && (
          <AddRoutine onTabChange={(value: string) => setTab(value)} />
        )}
      </Content>
    </div>
  );
};

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  padding: 0 30px;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  font-size: calc(10px + 2vmin);
`;

export default App;
