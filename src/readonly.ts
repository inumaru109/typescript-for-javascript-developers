export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ham');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'test';

class Person {
  protected readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let test = new Person('test');
console.log(test.name);
