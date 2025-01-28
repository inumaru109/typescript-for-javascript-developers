export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

let me = new Person('ham', 43);
console.log(me);
