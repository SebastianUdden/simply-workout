import { useEffect, useState } from "react";
import "./App.css";
import AddExercise from "./pages/AddExercise";
import AddRoutine from "./pages/AddRoutine";
import Header from "./pages/Header";
import AddFormat from "./pages/AddFormat";
import styled from "styled-components";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Exercises from "./pages/Exercises";
import Progams from "./pages/Programs";
import Navigation from "./pages/Navigation";
import { insertChart } from "./icons/insert-chart";
import { assignmentTurnedIn } from "./icons/assignment-turnet-in";
import { home } from "./icons/home";
import { dynamicFeed } from "./icons/dynamic-feed";
import { assignment } from "./icons/assignment";
import Activity from "./pages/Activity";
import Routines from "./pages/Routines";

export const HOME = "home";
export const PROGRAMS = "programs";
export const ROUTINES = "routines";
export const EXERCISES = "exercises";
export const EXERCISE = "exercise";
export const FORMAT = "format";
export const ROUTINE = "routine";
export const TIPS = "tips";
export const ACTIVITY = "activity";

const tabs = [
  { icon: home, text: HOME },
  { icon: assignmentTurnedIn, text: EXERCISES },
  { icon: assignment, text: ROUTINES },
  { icon: dynamicFeed, text: PROGRAMS },
  { icon: insertChart, text: ACTIVITY },
];

const App = () => {
  const [tab, setTab] = useState(localStorage.getItem("tab") || ROUTINES);

  useEffect(() => {
    localStorage.setItem("tab", tab);
  }, [tab]);

  return (
    <div>
      <Header tab={tab} onTabChange={(value: string) => setTab(value)} />
      <Content>
        {tab === HOME && <Home />}
        {tab === EXERCISES && <Exercises />}
        {tab === ROUTINES && <Routines />}
        {tab === PROGRAMS && <Progams />}
        {tab === ACTIVITY && <Activity />}
        {tab === EXERCISE && <AddExercise />}
        {tab === FORMAT && <AddFormat />}
        {tab === ROUTINE && (
          <AddRoutine onTabChange={(value: string) => setTab(value)} />
        )}
        {tab === TIPS && <Tips />}
      </Content>
      <Navigation
        tabs={tabs}
        tab={tab}
        onTabChange={(value: string) => setTab(value)}
      />
    </div>
  );
};

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  padding: 0 10px 60px;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  font-size: calc(10px + 2vmin);
`;

export default App;
