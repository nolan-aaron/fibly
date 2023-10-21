const isValidNumber = (numberValue: number, minThreshold: number) => {
  if (isNaN(numberValue) || numberValue < minThreshold) {
    return false;
  }
  return true;
};

export default isValidNumber;
