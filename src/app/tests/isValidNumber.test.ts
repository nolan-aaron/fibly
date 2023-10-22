import isValidNumber from "../helpers/isValidNumber";

test("The number 1 with a minimum threshold of 1 is valid", () => {
  expect(isValidNumber(1, 1)).toBe(true);
});

test("The number 100 with a minimum threshold of 99 is valid", () => {
  expect(isValidNumber(100, 99)).toBe(true);
});

test("The number 5 with a minimum threshold of 6 is invalid", () => {
  expect(isValidNumber(5, 6)).toBe(false);
});

test("The number -1 with a minimum threshold of 0 is invalid", () => {
  expect(isValidNumber(-1, 0)).toBe(false);
});
