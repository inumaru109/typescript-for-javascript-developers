export {};
//typeAliasについて
type Mojiretsu = string; //別名(alias)をつけている、typeの後の最初の文字は大文字

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43
};

type Profile2 = typeof example1;
