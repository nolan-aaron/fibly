import { BigNumber } from "bignumber.js";

const isFibonacciNumber = (number: BigNumber): boolean => {
  if (number.isNegative()) {
    return false;
  }
  const term1 = number.multipliedBy(number).multipliedBy(5).plus(4);
  const term2 = number.multipliedBy(number).multipliedBy(5).minus(4);
  return isPerfectSquare(term1) || isPerfectSquare(term2);
};

const isPerfectSquare = (number: BigNumber): boolean => {
  const sqrt = number.sqrt();
  return sqrt.isInteger() && sqrt.multipliedBy(sqrt).isEqualTo(number);
};

export default isFibonacciNumber;
