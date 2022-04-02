import { useState } from "react";
import "./App.css";
import AddExercise from "./pages/AddExercise";
import AddRoutine from "./pages/AddRoutine";
import Header from "./pages/Header";
import AddFormat from "./pages/AddFormat";
import styled from "styled-components";
import Home from "./pages/Home";
import Tips from "./pages/Tips";

export const HOME = "home";
export const EXERCISE = "exercise";
export const FORMAT = "format";
export const ROUTINE = "routine";
export const TIPS = "tips";

const App = () => {
  const [tab, setTab] = useState(HOME);

  return (
    <div>
      <Header onTabChange={(value: string) => setTab(value)} />
      <Content>
        {tab === HOME && <Home />}
        {tab === EXERCISE && <AddExercise />}
        {tab === FORMAT && <AddFormat />}
        {tab === ROUTINE && (
          <AddRoutine onTabChange={(value: string) => setTab(value)} />
        )}
        {tab === TIPS && <Tips />}
      </Content>
    </div>
  );
};

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  font-size: calc(10px + 2vmin);
`;

export default App;
