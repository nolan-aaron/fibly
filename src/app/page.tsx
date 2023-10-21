"use client";
import { ChakraProvider, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import InputWithButton from "./components/InputWithButton";
import ToggleButton from "./components/ToggleButton";
import CustomTable from "./components/CustomTable";
import getFibonacciNumbers from "./helpers/getFibonacciNumbers";

const Home = () => {
  const fibonacciNumbers = getFibonacciNumbers(1000);
  const toast = useToast();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<{ [key: number]: number }>({});

  const isValidNumber = (numberValue: number) => {
    if (isNaN(numberValue) || numberValue <= 0) {
      toast({
        title: "Input must be a positive number",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      return false;
    }
    return true;
  };

  const setTimer = (inputValue: string) => {
    const numberValue = parseFloat(inputValue);
    if (!isValidNumber(numberValue)) {
      return;
    }
    setButtonDisabled(!buttonDisabled);

    toast({
      title: `Interval set for ${numberValue} ${
        numberValue > 1 ? "seconds" : "second"
      }`,
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  };

  const addNumber = (inputValue: string) => {
    const numberValue = parseFloat(inputValue);
    if (!isValidNumber(numberValue)) {
      return;
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
      toast({
        title: "FIB",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "Number added",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const listNumbers = () => {
    const numberEntries = Object.entries(numbers);

    if (numberEntries.length <= 0) {
      toast({
        title: "No numbers to display",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else {
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
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="max-w-5xl w-full font-mono lg:flex">
          <InputWithButton
            buttonText="Set"
            buttonColour="green"
            inputPlaceholder="Set interval time (seconds)"
            inputType="number"
            disabled={buttonDisabled}
            handleClick={setTimer}
          />
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

export default Home;
