export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'ishidfa';

  static work() {
    return `Hey,guys!This is ${this.firstName}! Are you interested in?Let is dive into TS`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer); //インスタンスを作らなくてもアクセスできる
console.log(Me.work());
