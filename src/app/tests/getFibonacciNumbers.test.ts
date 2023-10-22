import getFibonacciNumbers from "../helpers/getFibonacciNumbers";

let fibonacciNumbers: number[];

beforeAll(() => {
  fibonacciNumbers = getFibonacciNumbers(1000);
});

test("The number 0 exists in the Fibonacci sequence", () => {
  expect(fibonacciNumbers.includes(0)).toBe(true);
});

test("The number 610 exists in the Fibonacci sequence", () => {
  expect(fibonacciNumbers.includes(610)).toBe(true);
});

test("The number -1 is not in the Fibonacci sequence", () => {
  expect(fibonacciNumbers.includes(-1)).toBe(false);
});

test("The number 234 is not in the Fibonacci sequence", () => {
  expect(fibonacciNumbers.includes(234)).toBe(false);
});

