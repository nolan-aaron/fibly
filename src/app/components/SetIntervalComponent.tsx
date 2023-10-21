"use client";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import InputWithButton from "./InputWithButton";
import isValidNumber from "../helpers/isValidNumber";

const IntervalComponent = () => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const toast = useToast();

  const setInterval = (inputValue: string) => {
    const numberValue = parseFloat(inputValue);
    if (!isValidNumber(numberValue, 1)) {
      return toast({
        title: "Interval must be a positive number",
        status: "error",
        position: "top-right",
      });
    }

    setButtonDisabled(true);
    toast({
      title: `Interval set for ${numberValue} ${
        numberValue > 1 ? "seconds" : "second"
      }`,
      status: "info",
      position: "top-right",
    });
  };

  return (
    <InputWithButton
      buttonText="Set"
      buttonColour="green"
      inputPlaceholder="Set interval time (seconds)"
      inputType="number"
      disabled={buttonDisabled}
      handleClick={setInterval}
    />
  );
};

export default IntervalComponent;
