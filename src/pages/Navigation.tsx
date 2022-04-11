import styled from "styled-components";
import SVG from "../icons/SVG";

interface Icon {
  viewBox?: string;
  path: JSX.Element;
  color?: string;
  size?: number;
  onClick?: Function;
}

interface TabProps {
  icon: Icon;
  text: string;
}

interface Props {
  tabs: TabProps[];
  tab: string;
  onTabChange: Function;
}

const Navigation = ({ tabs, tab, onTabChange }: Props) => {
  return (
    <Wrapper>
      {tabs.map(({ icon, text }) => (
        <Tab onClick={() => onTabChange(text)} selected={tab === text}>
          <SVG
            {...icon}
            color={tab === text ? "#000" : "#999"}
            onClick={() => null}
          />
          {text}
        </Tab>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Tab = styled.button<{ selected?: boolean }>`
  text-transform: capitalize;
  font-size: 11px;
  font-family: sans-serif;
  padding: 20px 0;
  border: none;
  width: 100%;
  color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(p) =>
    p.selected &&
    `
    color: #000;
  `}
`;

export default Navigation;
