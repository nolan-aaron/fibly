import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { useToast, Button, ToastId } from "@chakra-ui/react";
import InputWithButton from "./InputWithButton";
import isValidNumber from "../helpers/isValidNumber";

type StopwatchProps = {
  onExpireAction: (numbers: { [key: string]: number }) => ToastId | undefined;
  data: { [key: string]: number };
};

const Stopwatch = ({ onExpireAction, data }: StopwatchProps) => {
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
    if (!isValidNumber(numberValue, 1)) {
      return toast({
        title: "Interval must be a positive number",
        status: "error",
      });
    }
    setButtonDisabled(true);
    setIntervalTimer(numberValue);
    toast({
      title: `Interval set for ${numberValue} ${
        numberValue > 1 ? "seconds" : "second"
      }`,
      status: "info",
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
          intervalTimer > 0 ? intervalTimer : "Set interval time (seconds)"
        }`}
        inputType="number"
        disabled={buttonDisabled}
        handleClick={handleSetButton}
      />
      {toggled ? (
        <Button onClick={handleResumeButton}>Resume</Button>
      ) : (
        <Button onClick={handleHaltButton}>Halt</Button>
      )}
    </>
  );
};

export default Stopwatch;
