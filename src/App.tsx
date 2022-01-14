import { useState } from "react";
import "./App.css";
import AddExercise from "./components/AddExercise";
import AddRoutine from "./components/AddRoutine";
import Header from "./components/Header";
import AddFormat from "./components/AddFormat";
import styled from "styled-components";
import Home from "./components/Home";

export const HOME = "home";
export const EXERCISE = "exercise";
export const FORMAT = "format";
export const ROUTINE = "routine";

function App() {
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
      </Content>
    </div>
  );
}

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
