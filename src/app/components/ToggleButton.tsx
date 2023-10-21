"use client";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

type ToggleButtonProps = {
  firstOption: string;
  secondOption: string;
  handleClick: () => void;
};

const ToggleButton = ({
  firstOption,
  secondOption,
  handleClick,
}: ToggleButtonProps) => {
  const [toggle, setToggle] = useState(false);
  const localClick = () => {
    setToggle(!toggle);
    handleClick();
  };

  return (
    <Button px="2rem" colorScheme="messenger" onClick={localClick}>
      {toggle ? firstOption : secondOption}
    </Button>
  );
};

export default ToggleButton;
