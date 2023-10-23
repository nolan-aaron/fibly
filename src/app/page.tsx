"use client";
import { ChakraProvider, useToast, Heading } from "@chakra-ui/react";
import { useState } from "react";
import CustomTable from "./components/CustomTable";
import NextNumber from "./components/NextNumber";
import QuitButton from "./components/QuitButton";
import Stopwatch from "./components/Stopwatch";

const Fibly = () => {
  const [numbers, setNumbers] = useState<{ [key: string]: number }>({});
  const [intervalSelected, setIntervalSelected] = useState<boolean>(false);
  const toast = useToast();

  const listNumbers = (numbers: { [key: string]: number }) => {
    const numberEntries = Object.entries(numbers);
    if (numberEntries.length <= 0) {
      return toast({
        title: "No numbers to display",
        status: "info",
        position: "top-right",
      });
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
      position: "top-right",
    });
  };

  return (
    <ChakraProvider>
      <main className="flex min-h-screen flex-col items-center justify-center mx-10">
        <div className="max-w-lg w-full font-mono lg:flex flex-col">
          <Heading as="h1" size="lg" className="mb-5">
            <code>Fibly</code> 🌀
          </Heading>
          <Stopwatch
            onStartAction={setIntervalSelected}
            onExpireAction={listNumbers}
            data={numbers}
          />
          <div className="pt-5">
            <NextNumber
              setNumbers={setNumbers}
              disabled={!intervalSelected}
              maxFibPosition={1000}
            />
            <QuitButton
              handleClick={listNumbers}
              data={numbers}
              pageReloadSeconds={3}
              disabled={!intervalSelected}
            />
          </div>
        </div>
      </main>
    </ChakraProvider>
  );
};

export default Fibly;
