export {};

enum Months {
  January = 1, //=1を設定することで先頭の値(要素番号)を1に変更することができる
  Febraary,
  March,
  April,
  May,
  June,
  July,
  Augusut,
  September,
  Octorber,
  November,
  December
}

console.log(Months.January);
console.log(Months.Febraary);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#00000'
}

let green = COLORS.GREEN;
console.log(green);

enum COLORS {
  YELLOW = '#FFFF00'
}
