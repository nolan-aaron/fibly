import { Button, useToast } from "@chakra-ui/react";

type QuitButtonComponentProps = {
  data: { [key: string]: number };
  handleClick: (numbers: { [key: string]: number }) => void;
  pageReloadSeconds: number;
};

const QuitButtonComponent = ({
  data,
  handleClick,
  pageReloadSeconds,
}: QuitButtonComponentProps) => {
  const toast = useToast();
  const localClick = () => {
    toast({
      title: "Thanks for playing!",
      description: `This page will reload in ${pageReloadSeconds} seconds.`,
      status: "success",
      position: "bottom",
    });
    handleClick(data);
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

export default QuitButtonComponent;
