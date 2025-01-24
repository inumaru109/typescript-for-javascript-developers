export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

let bmi1 = (height: number, weight: number): number =>
  weight / (height * height);

console.log(bmi(1.8, 70));
console.log(bmi(1.9, 80));
