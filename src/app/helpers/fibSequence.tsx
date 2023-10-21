const getFibonacciNumbers = (numbersInSequence: number): number[] => {
  if (numbersInSequence < 1) return [];
  if (numbersInSequence === 1) return [0];
  if (numbersInSequence === 2) return [0, 1];

  const fibonacciNumbers: number[] = [0, 1];

  for (let i = 2; i < numbersInSequence; i++) {
    const nextFibonacci = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    fibonacciNumbers.push(nextFibonacci);
  }

  return fibonacciNumbers;
};

export default getFibonacciNumbers;