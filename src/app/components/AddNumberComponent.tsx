"use client";
import { useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import InputWithButton from "./InputWithButton";
import isValidNumber from "../helpers/isValidNumber";
import getFibonacciNumbers from "../helpers/getFibonacciNumbers";

type AddNumberComponentProps = {
  setNumbers: Dispatch<SetStateAction<{ [key: number]: number }>>;
};

const AddNumberComponent = ({ setNumbers }: AddNumberComponentProps) => {
  const fibonacciNumbers = getFibonacciNumbers(1000);
  const toast = useToast();

  const addNumber = (inputValue: string) => {
    const numberValue = parseFloat(inputValue);
    if (!isValidNumber(numberValue, 0)) {
      return toast({
        title: "Input must be a non-negative number",
        status: "error",
        position: "top-right",
      });
    }

    setNumbers((prevNumbers) => {
      const updatedNumbers = { ...prevNumbers };
      if (updatedNumbers.hasOwnProperty(numberValue)) {
        updatedNumbers[numberValue] += 1;
      } else {
        updatedNumbers[numberValue] = 1;
      }
      return updatedNumbers;
    });

    if (fibonacciNumbers.includes(numberValue)) {
      toast({ title: "FIB", status: "success", position: "top-right" });
    } else {
      toast({ title: "Number added", status: "info", position: "top-right" });
    }
  };

  return (
    <InputWithButton
      buttonText="Add"
      buttonColour="purple"
      inputPlaceholder="Input a number"
      inputType="number"
      handleClick={addNumber}
    />
  );
};

export default AddNumberComponent;
