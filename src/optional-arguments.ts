export {};

let bmi: (weight: number, height: number, printable?: boolean) => number = (
  weight: number,
  height: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable === true) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(70, 1.8);

// ゴールはbmi(身長、体重、console.logで出力するかどうか)
// bmi(1.8, 70, true);出力
// bmi(1.8, 70, false);出力しない
// bmi(1.8, 70);console.logの引数無
