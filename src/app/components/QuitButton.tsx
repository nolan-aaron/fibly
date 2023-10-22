import { Button, useToast } from "@chakra-ui/react";

type QuitButtonProps = {
  data: { [key: string]: number };
  handleClick: (numbers: { [key: string]: number }) => void;
  pageReloadSeconds: number;
};

const QuitButton = ({
  data,
  handleClick,
  pageReloadSeconds,
}: QuitButtonProps) => {
  const toast = useToast();

  const localClick = () => {
    handleClick(data);
    toast({
      title: "Thanks for playing!",
      description: `This page will reload shortly.`,
      status: "success",
    });
    setTimeout(() => {
      window.location.reload();
    }, pageReloadSeconds * 1000);
  };

  return (
    <Button colorScheme="red" onClick={localClick}>
      Quit
    </Button>
  );
};

export default QuitButton;
