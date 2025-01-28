export {};

class Mahotsukai {}
class Souryo {}
//typescriptでは一つのクラスしか継承できないが複数のIFを継承することはできる
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}
//複数のIFを実装できる
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    return console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
