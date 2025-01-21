export {}; //module化するために行っている(書かないとmodule化できずグローバル空間になってしまう)

let name = 'Typescript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
