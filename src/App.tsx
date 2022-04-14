import * as React from "react";
import styled from "styled-components";
import { ComboBox, Item } from "./ComboBox";
import { Select } from "./Select";
import { Label, Description } from "./ListBox";
import "./styles.css";

const people = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Gilberto Miguel",
    username: "@gilberto_miguel"
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Maia Pettegree",
    username: "@mpettegree"
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Wade Redington",
    username: "@redington"
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Kurtis Gurrado",
    username: "@kurtis"
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Sonja Balmann",
    username: "@sbalmann"
  },
  {
    id: 6,
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Brent Mickelwright",
    username: "@brent_m"
  }
];

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
`;

export default function App() {
  return (
    <>
      {/* prettier-ignore */}
      <p>This sandbox shows examples of <strong><code>ComboBox</code></strong> and <strong><code>Select</code></strong> components built with <a href="https://react-spectrum.adobe.com/react-aria/" rel="noreferrer" target="_blank" className="text-blue-700 underline">React Aria</a> and <a href="https://styled-components.com/" rel="noreferrer" target="_blank" className="text-blue-700 underline">Styled Components</a>. They share the same <code>Popover</code> and <code>ListBox</code> components, which are used to show their options.</p>
      <ComboBox label="Assignee" defaultItems={people}>
        {(item) => (
          <Item textValue={item.name}>
            <Avatar src={item.avatar} alt={item.name} />
            <div>
              <Label>{item.name}</Label>
              <Description>{item.username}</Description>
            </div>
          </Item>
        )}
      </ComboBox>
      <Select label="Reviewer" items={people}>
        {(item) => (
          <Item textValue={item.name}>
            <Avatar src={item.avatar} alt={item.name} />
            <div>
              <Label>{item.name}</Label>
              <Description>{item.username}</Description>
            </div>
          </Item>
        )}
      </Select>
    </>
  );
}
