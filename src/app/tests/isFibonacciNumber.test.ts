import isFibonacciNumber from "../helpers/isFibonacciNumber";
import { BigNumber } from "bignumber.js";

test("The 100th fibonacci number returns true", () => {
  const numberToCheck = new BigNumber("354224848179261915075");
  expect(isFibonacciNumber(numberToCheck)).toBe(true);
});

test("The 1000th fibonacci number returns true", () => {
  const numberToCheck = new BigNumber(
    "43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875"
  );
  expect(isFibonacciNumber(numberToCheck)).toBe(true);
});

test("-1 is not a fibonacci number and returns false", () => {
  const numberToCheck = new BigNumber("-1");
  expect(isFibonacciNumber(numberToCheck)).toBe(false);
});

test("4 is not a fibonacci number and returns false", () => {
  const numberToCheck = new BigNumber("4");
  expect(isFibonacciNumber(numberToCheck)).toBe(false);
});
