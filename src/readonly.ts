export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ham');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'test';
