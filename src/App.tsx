import { useState } from "react";
import "./App.css";
import AddExercise from "./pages/AddExercise";
import AddRoutine from "./pages/AddRoutine";
import Header from "./components/Header";
import AddFormat from "./pages/AddFormat";
import styled from "styled-components";
import Home from "./pages/Home";
// import Stickman from "./components/stickman/Stickman";
// import {
//   burpee,
//   jump,
//   pullup,
//   pushup,
//   raiseArms,
//   sitdown,
//   situp,
//   squat,
//   stand,
//   plank,
//   gluteBridge,
//   calfRaise,
//   sidePlank,
//   birdDog,
//   running,
//   getAnimation,
// } from "./components/stickman/animations";
// import {
//   birdDogHigh,
//   birdDogLow,
// } from "./components/stickman/positions-side/birdDog";
// import {
//   runningPart1,
//   runningPart2,
//   runningPart3,
//   runningPart4,
//   runningPart5,
//   runningPart6,
//   runningPart7,
//   runningPart8,
//   runningPart9,
// } from "./components/stickman/positions-side/running";
// import { dipLow } from "./components/stickman/positions-side/dip";
// import {
//   lungeHigh,
//   lungeLow,
// } from "./components/stickman/positions-side/lunge";

export const HOME = "home";
export const EXERCISE = "exercise";
export const FORMAT = "format";
export const ROUTINE = "routine";

const App = () => {
  const [tab, setTab] = useState(HOME);

  return (
    <div>
      <Header onTabChange={(value: string) => setTab(value)} />
      {/* <Stickman
        position={lungeHigh}
        duration={0.7}
        direction="Side"
        size="40%"
      />
      <Stickman
        position={getAnimation("lunge")?.positions}
        duration={getAnimation("lunge")?.speed}
        direction="Side"
        size="40%"
      /> */}
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
