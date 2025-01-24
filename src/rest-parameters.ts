export {};
const reducer = (accumlator: number, currentValue: number): number => {
  console.log({ accumlator, currentValue });
  return accumlator + currentValue;
};
//rest parameter(...values)によって引数が配列に変換されている
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

// [1, 2, 3, 4].reduce(reducer);
