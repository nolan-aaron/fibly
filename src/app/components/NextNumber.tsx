"use client";
import { useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { BigNumber } from "bignumber.js";
import InputWithButton from "./InputWithButton";
import isValidNumber from "../helpers/isValidNumber";
import isFibonacciNumber from "../helpers/isFibonacciNumber";

type NextNumberProps = {
  setNumbers: Dispatch<SetStateAction<{ [key: string]: number }>>;
};

const NextNumber = ({ setNumbers }: NextNumberProps) => {
  const toast = useToast();

  const addNumber = (inputValue: string) => {
    if (!isValidNumber(parseFloat(inputValue), 0)) {
      return toast({
        title: "Number must be equal to or greater than 0",
        status: "error",
        position: "top-right"
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
    }
  };

  return (
    <InputWithButton
      buttonText="Add"
      buttonColour="green"
      inputPlaceholder="Input the next number"
      inputType="number"
      handleClick={addNumber}
    />
  );
};

export default NextNumber;
