export {};
//rate:number=1.1デフォルト引数
const nextYearSlary = (currentSlary: number, rate: number = 1.1): number => {
  return currentSlary * rate;
};

console.log(nextYearSlary(1000));
