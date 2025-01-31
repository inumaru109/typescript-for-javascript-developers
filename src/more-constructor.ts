export {};

class Person {
  //アクセス修飾子をconstructorの引数につけることで初期化処理が行われる
  constructor(public name: string, protected age: number) {}
}

let me = new Person('ham', 43);
console.log(me);
