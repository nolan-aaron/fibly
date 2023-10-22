import isValidNumber from "../helpers/isValidNumber";

test("The number 1 with a minimum threshold of 1 returns true", () => {
  expect(isValidNumber(1, 1)).toBe(true);
});

test("The number 100 with a minimum threshold of 99 returns true", () => {
  expect(isValidNumber(100, 99)).toBe(true);
});

test("The number 5 with a minimum threshold of 6 returns false", () => {
  expect(isValidNumber(5, 6)).toBe(false);
});

test("The number -1 with a minimum threshold of 0 returns false", () => {
  expect(isValidNumber(-1, 0)).toBe(false);
});
