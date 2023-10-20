"use client";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

type ToggleButtonProps = {
  firstOption: string;
  secondOption: string;
};

const ToggleButton = ({ firstOption, secondOption }: ToggleButtonProps) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <Button px="2rem" colorScheme="messenger" onClick={handleClick}>
      {toggle ? firstOption : secondOption}
    </Button>
  );
};

export default ToggleButton;
