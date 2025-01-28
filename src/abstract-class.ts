export {};

abstract class Animal {
  //抽象メソッドは必ずオーバーライドをしないといけない
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
