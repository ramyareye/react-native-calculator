export const isInt = (n: number) => n % 1 === 0;

export const calculateByOperator = (
  num1: number,
  num2: number,
  operator: string,
) => {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }

  return result ?? 0;
};
