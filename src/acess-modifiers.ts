export {};

class Person {
  public name: string; //クラス内のプロパティのことをメンバー変数と呼ぶ
  // private age: number; //Personクラス内でのみ呼び出せる、Androidクラスでは呼べない
  protected age: number; //Personクラス内でのみ呼び出せる、Androidクラスでは呼べない
  protected nationality: string; //Person/Androidどちらのクラスでも呼び出せる

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name:${this.name} , age:${this.age} `;
    //ageはprivateのメンバー変数だが表示できる
  }
}
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    //親クラスのメソッドをオーバライドしている
    return `name:${this.name} , age:${this.age} , nationality:${this.nationality} `;
  }
}

let hanako = new Person('hanako', 11, 'Japan');
let taro = new Android('Taro', 11, 'Japan');
// let hanako = new Person();
console.log(taro.name);
console.log(taro.profile());
