"use client";
import { ChakraProvider, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import ToggleButton from "./components/ToggleButton";
import CustomTable from "./components/CustomTable";
import SetIntervalComponent from "./components/SetIntervalComponent";
import AddNumberComponent from "./components/AddNumberComponent";

const Fibly = () => {
  const [numbers, setNumbers] = useState<{ [key: string]: number }>({});
  const toast = useToast();

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
          <AddNumberComponent setNumbers={setNumbers} />
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
