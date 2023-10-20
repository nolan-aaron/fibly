"use client";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

type InputButtonProps = {
  buttonText: string;
  buttonColour: string;
  inputPlaceholder: string;
  inputType: string;
  disabled?: boolean;
  handleClick: (inputValue: string) => void;
};

const InputWithButton = ({
  buttonText,
  buttonColour,
  inputPlaceholder,
  inputType,
  disabled,
  handleClick,
}: InputButtonProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick(inputValue);
      setInputValue("");
    }
  };

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={inputType}
        placeholder={inputPlaceholder}
        isDisabled={disabled}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          colorScheme={buttonColour}
          onClick={() => {
            handleClick(inputValue);
            setInputValue("");
          }}
          isDisabled={disabled}
        >
          {buttonText}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputWithButton;
