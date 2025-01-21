export {};
// typeAliasは'='が必要
type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'ham-san',
  age: 43,
};
