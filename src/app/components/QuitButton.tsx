import { Button, useToast } from "@chakra-ui/react";

type QuitButtonProps = {
  data: { [key: string]: number };
  handleClick: (numbers: { [key: string]: number }) => void;
  pageReloadSeconds: number;
  disabled: boolean;
};

const QuitButton = ({
  data,
  handleClick,
  pageReloadSeconds,
  disabled,
}: QuitButtonProps) => {
  const toast = useToast();

  const localClick = () => {
    handleClick(data);
    toast({
      title: "Thanks for playing!",
      description: `This page will reload shortly.`,
      status: "success",
      position: "top-right",
    });
    setTimeout(() => {
      window.location.reload();
    }, pageReloadSeconds * 1000);
  };

  return (
    <Button
      onClick={localClick}
      colorScheme="red"
      variant="outline"
      className="w-full mt-1"
      isDisabled={disabled}
    >
      Quit
    </Button>
  );
};

export default QuitButton;
