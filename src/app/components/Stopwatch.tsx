import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { useToast, Button, ToastId } from "@chakra-ui/react";
import InputWithButton from "./InputWithButton";
import isValidNumber from "../helpers/isValidNumber";

type StopwatchProps = {
  onStartAction: Dispatch<SetStateAction<boolean>>;
  onExpireAction: (numbers: { [key: string]: number }) => ToastId | undefined;
  data: { [key: string]: number };
};

const Stopwatch = ({ onStartAction, onExpireAction, data }: StopwatchProps) => {
  const toast = useToast();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [toggled, setToggled] = useState<boolean>(false);
  const [intervalTimer, setIntervalTimer] = useState<number>(0);
  const { seconds, start, pause, reset } = useStopwatch();

  const handleHaltButton = () => {
    setToggled(true);
    pause();
  };

  const handleResumeButton = () => {
    setToggled(false);
    start();
  };

  const handleSetButton = (inputValue: string) => {
    const numberValue = parseFloat(inputValue);
    const suffix: string = numberValue > 1 ? "seconds" : "second";

    if (!isValidNumber(numberValue, 1)) {
      return toast({
        title: "Interval must be greater than 0 seconds",
        status: "error",
        position: "top-right",
      });
    }

    setButtonDisabled(true);
    onStartAction(true);
    setIntervalTimer(numberValue);
    toast({
      title: `Interval set to ${numberValue} ${suffix}`,
      status: "info",
      position: "top-right",
    });
    start();
  };

  useEffect(() => {
    if (intervalTimer > 0 && seconds >= intervalTimer) {
      onExpireAction(data);
      reset();
    }
  }, [seconds]);

  return (
    <>
      <InputWithButton
        buttonText="Set"
        buttonColour="green"
        inputPlaceholder={`${
          intervalTimer > 0 ? intervalTimer - seconds : "Set interval (seconds)"
        }`}
        inputType="number"
        disabled={buttonDisabled}
        handleClick={handleSetButton}
      />
      {toggled ? (
        <Button
          onClick={handleResumeButton}
          isDisabled={!buttonDisabled}
          colorScheme="purple"
          variant="outline"
          className="w-full mt-1"
        >
          Resume
        </Button>
      ) : (
        <Button
          onClick={handleHaltButton}
          isDisabled={!buttonDisabled}
          colorScheme="purple"
          variant="outline"
          className="w-full mt-1"
        >
          Halt
        </Button>
      )}
    </>
  );
};

export default Stopwatch;
