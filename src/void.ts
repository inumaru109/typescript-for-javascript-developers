export {};

// 関数からのreturnがない時はvoid(returnを書かなくて良い)

function returnNothing(): void {
  console.log(`I don't return anything!`);
}

console.log(returnNothing());
