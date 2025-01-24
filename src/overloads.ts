export {};

//シグネチャーの定義(関数の概略みたいなイメージ)
function double(value: number): number;
function double(value: string): string;

//any型にしたとしてもシグネチャーで定義したnumber型、string型で型制約されている
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go'));
