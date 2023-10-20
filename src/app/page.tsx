"use client";
import { ChakraProvider, Button } from "@chakra-ui/react";
import InputWithButton from "./components/InputWithButton";
import ToggleButton from "./components/ToggleButton";
import { useState, useEffect } from "react";

const Home = () => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    console.log(numbers);
  }, [numbers]);

  const setTimer = (inputValue: string) => {
    const numberValue = parseFloat(inputValue);

    if (isNaN(numberValue) || numberValue <= 0) {
      console.log("Invalid input");
      return;
    }

    setButtonDisabled(!buttonDisabled);
  };

  const addNumber = (inputValue: string) => {
    const numberValue = parseFloat(inputValue);

    if (isNaN(numberValue) || numberValue < 0) {
      console.log("Invalid input");
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
  };

  const listNumbers = () => {
    const numberEntries = Object.entries(numbers);

    numberEntries.map(([key, value]) =>
      console.log(`Number: ${key}, Quantity: ${value}`)
    );
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
          <ToggleButton firstOption="Resume" secondOption="Halt" />
          <Button colorScheme="red" onClick={listNumbers}>
            Quit
          </Button>
        </div>
      </main>
    </ChakraProvider>
  );
};

export default Home;
