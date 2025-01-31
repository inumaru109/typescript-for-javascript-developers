export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible; //any型はstring型を代入されるとstring型になる

console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible = barInCompatible;//型の互換性がない

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'; //fooStringLiteralしか受け入れないという型
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

//classにinterfaceのプロパティがなくてもエラーにならない。
let me: Animal;
me = new Person(43, 'Taro');
console.log({ me });
