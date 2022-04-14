import * as React from "react";
import styled from "styled-components";
import type { AriaSelectProps } from "@react-types/select";
import { useSelectState } from "react-stately";
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing
} from "react-aria";
import { SelectorIcon } from "@heroicons/react/solid";

import { ListBox } from "./ListBox";
import { Popover } from "./Popover";
import { Wrapper, Label } from "./shared";

export { Item } from "react-stately";

interface ButtonProps {
  isOpen?: boolean;
  isFocusVisible?: boolean;
}

const Button = styled.button<ButtonProps>`
  appearance: none;
  background: ${(props) => (props.isOpen ? "#eee" : "white")};
  border: 1px solid;
  padding: 6px 2px 6px 8px;
  margin-top: 6px;
  outline: none;
  border-color: ${(props) => (props.isFocusVisible ? "seagreen" : "lightgray")};
  box-shadow: ${(props) =>
    props.isFocusVisible ? "0 0 0 3px rgba(143, 188, 143, 0.5)" : ""};
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;
  text-align: left;
  font-size: 14px;
  color: black;
`;

const Value = styled.span`
  display: inline-flex;
  align-items: center;
`;

const StyledIcon = styled(SelectorIcon)`
  width: 18px;
  height: 18px;
  padding: 6px 2px;
  margin: 0 4px;
  background: seagreen;
  border-radius: 4px;
  color: white;
`;

export function Select<T extends object>(props: AriaSelectProps<T>) {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = React.useRef(null);
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  // Get props for the button based on the trigger props from useSelect
  let { buttonProps } = useButton(triggerProps, ref);

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Wrapper>
      <Label {...labelProps}>{props.label}</Label>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <Button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        isOpen={state.isOpen}
        isFocusVisible={isFocusVisible}
      >
        <Value {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : "Select an option"}
        </Value>
        <StyledIcon />
      </Button>
      {state.isOpen && (
        <Popover isOpen={state.isOpen} onClose={state.close}>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </Wrapper>
  );
}
