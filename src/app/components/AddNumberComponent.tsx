"use client";
import { useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { BigNumber } from "bignumber.js";
import InputWithButton from "./InputWithButton";
import isValidNumber from "../helpers/isValidNumber";
import isFibonacciNumber from "../helpers/isFibonacciNumber";

type AddNumberComponentProps = {
  setNumbers: Dispatch<SetStateAction<{ [key: string]: number }>>;
};

const AddNumberComponent = ({ setNumbers }: AddNumberComponentProps) => {
  const toast = useToast();

  const addNumber = (inputValue: string) => {
    if (!isValidNumber(parseFloat(inputValue), 0)) {
      return toast({
        title: "Input must be a non-negative number",
        status: "error",
        position: "top-right",
      });
    }

    setNumbers((prevNumbers) => {
      const updatedNumbers: { [key: string]: number } = { ...prevNumbers };
      if (updatedNumbers.hasOwnProperty(inputValue)) {
        updatedNumbers[inputValue] += 1;
      } else {
        updatedNumbers[inputValue] = 1;
      }
      return updatedNumbers;
    });

    if (isFibonacciNumber(BigNumber(inputValue))) {
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
