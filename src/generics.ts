export {};

//以下の似た関数をどうにか1つで表したい、、、

// const echo = (arg: number): number => {
//   return arg;
// };
// const echo = (arg: string): string => {
//   return arg;
// };

//慣習としてT(型引数)が使われる。引数と戻り値の型が一緒のことを示している
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('taro'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<string>('test').echo());
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<boolean>(true).echo());
