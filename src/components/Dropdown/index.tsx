import { forwardRef } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

import {
  StyledDropdown,
  StyledDropdownContent,
  StyledDropdownSelectItem,
} from "./Dropdown.styled";


interface DropdownProps {
  id?: string;
  className?: string;
  ariaLabel: string;
  placeholder?: string;
  items: string[];
  size?: "trigger-width" | "max-content";
  required?: boolean;
  defaultValue?: string;
  value?: string;
  setValue?: (arg: string | undefined) => void;
  disabled?: boolean;
  align?: "center" | "end" | "start";
}

export const Dropdown = ({
  id,
  ariaLabel,
  placeholder,
  items,
  className,
  size = "trigger-width",
  required = false,
  defaultValue,
  value,
  setValue,
  disabled,
  align = "center",
}: DropdownProps) => {
  return (
    <StyledDropdown className={className} id={id}>
      <Select.Root
        required={required}
        defaultValue={defaultValue}
        value={value}
        onValueChange={value => {
          setValue && setValue(value);
        }}
        disabled={disabled}>
        <Select.Trigger
          className={`SelectTrigger ${disabled ? "disabled" : ""}`}
          aria-label={ariaLabel}>
          <Select.Value
            style={{ textTransform: "capitalize" }}
            placeholder={placeholder}>
            {value ?? null}
          </Select.Value>
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <StyledDropdownContent
            className={`${
              size === "trigger-width" ? "trigger-width" : "max-content"
            }`}
            position="popper"
            sideOffset={5}
            align={align}>
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="SelectViewport">
              {items.map((item, id) => (
                <SelectItem value={item} className="SelectItem" key={id}>
                  {item}
                </SelectItem>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </StyledDropdownContent>
        </Select.Portal>
      </Select.Root>
    </StyledDropdown>
  );
};

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}

// eslint-disable-next-line react/display-name
export const SelectItem = forwardRef<
  HTMLDivElement,
  SelectItemProps & React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }: SelectItemProps, forwardedRef) => {
  return (
    <StyledDropdownSelectItem ref={forwardedRef} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </StyledDropdownSelectItem>
  );
});
