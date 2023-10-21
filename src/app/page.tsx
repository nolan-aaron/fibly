"use client";
import { ChakraProvider, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import InputWithButton from "./components/InputWithButton";
import ToggleButton from "./components/ToggleButton";
import CustomTable from "./components/CustomTable";
import getFibonacciNumbers from "./helpers/getFibonacciNumbers";
import isValidNumber from "./helpers/isValidNumber";
import SetIntervalComponent from "./components/SetIntervalComponent";

const Fibly = () => {
  const fibonacciNumbers = getFibonacciNumbers(1000);
  const toast = useToast();
  const [numbers, setNumbers] = useState<{ [key: number]: number }>({});

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

  const listNumbers = () => {
    const numberEntries = Object.entries(numbers);
    if (numberEntries.length <= 0) {
      return toast({ title: "No numbers to display", status: "warning" });
    }

    numberEntries.sort((a, b) => b[1] - a[1]);
    toast({
      description: (
        <CustomTable
          keyTitle={"Number"}
          valueTitle={"Frequency"}
          data={numberEntries}
        />
      ),
      status: "info",
    });
  };

  return (
    <ChakraProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="max-w-5xl w-full font-mono lg:flex">
          <SetIntervalComponent />
          <InputWithButton
            buttonText="Add"
            buttonColour="purple"
            inputPlaceholder="Input a number"
            inputType="number"
            handleClick={addNumber}
          />
          <ToggleButton
            firstOption="Resume"
            secondOption="Halt"
            handleClick={() => console.log("Toggle clicked")}
          />
          <Button colorScheme="red" onClick={listNumbers}>
            Quit
          </Button>
        </div>
      </main>
    </ChakraProvider>
  );
};

export default Fibly;
