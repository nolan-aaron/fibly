"use client";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { useState } from "react";
import CustomTable from "./components/CustomTable";
import NextNumber from "./components/NextNumber";
import QuitButton from "./components/QuitButton";
import Stopwatch from "./components/Stopwatch";

const Fibly = () => {
  const [numbers, setNumbers] = useState<{ [key: string]: number }>({});
  const toast = useToast();

  const listNumbers = (numbers: { [key: string]: number }) => {
    const numberEntries = Object.entries(numbers);
    if (numberEntries.length <= 0) {
      return toast({
        title: "No numbers to display",
        status: "info",
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
    });
  };

  return (
    <ChakraProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="max-w-5xl w-full font-mono lg:flex">
          <Stopwatch onExpireAction={listNumbers} data={numbers} />
          <NextNumber setNumbers={setNumbers} />
          <QuitButton handleClick={listNumbers} data={numbers} pageReloadSeconds={5}
          />
        </div>
      </main>
    </ChakraProvider>
  );
};

export default Fibly;
