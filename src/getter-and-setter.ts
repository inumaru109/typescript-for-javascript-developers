export {};

// *owner
//  *所有者
//  *初期化時に設定できる
//  *途中で変更できない
//  *参照できる
// *SeacretNumber
//  *個人番号
//  *初期化時に設定できる
//  *途中で変更できる
//  *参照できない

class MyNumberCard {
  private _owner: string; //_プロパティ名はそういうもの
  private _secretNumber: number;
  constructor(_owner: string, seacretNumber: number) {
    (this._owner = _owner), (this._secretNumber = seacretNumber);
  }
  //getterはprivateのアクセス修飾子がついていてもメンバ変数にアクセスできるようにする
  //呼び出す際に()が不要なため、プロパティのように呼び出せる
  get owner() {
    return this._owner;
  }
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  debugPrint() {
    return `secretNumber:${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ham', 12345678910);
// card.owner='Ham'
console.log(card.owner);
// card.secretNumber;
card.secretNumber = 1234;
console.log(card.debugPrint());
console.log(card.secretNumber); //secretNumberは除くことができない
