export {};

namespace Japanese {
  //exportすることで外の空間からアクセスできるようにする
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastNmae: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('ハムさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('ハムやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
