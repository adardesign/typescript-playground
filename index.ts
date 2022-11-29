// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const playground: HTMLElement = document.getElementById('playground');
const phrase: string = `this is a dummy phrase that i am using to test lodash`;

function tap<T>(arg: T, fn: (arg: T) => void): T {
  fn(arg);
  return arg;
}

type ObjectLiteralType = {
  prop0: 2;
  first: 1;
  second: 2;
};
type ObjType = ObjectLiteralType;

// Inferred Type: "first" | "second"
type Result = keyof ObjectLiteralType;

const obj: ObjectLiteralType = {
  prop0: 2,
  first: 1,
  second: 2,
};

type Obj = {
  0: 'a';
  1: 'b';
  prop0: 'c';
  prop1: 'd';
};

// Inferred Type: "c"
type Result0 = Obj['prop0'];

// Inferred Type: "a" | "b"
type Result1 = Obj[0 | 1];

// Inferred Type: "c" | "d"
type Result2 = Obj['prop0' | 'prop1'];

type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

// Inferred Type: "b" | "c"
type Intersection = A & B;
const testProp: Result0 = 'c';

type Extract<T, U> = T extends U ? T : never;

// Inferred Type: 1 | 2
type ResultEX = Extract<1 | 'a' | 2 | 'b', number>;

// Inferred Type: 1 | "b"
type ResultEX2 = Extract<1 | 'a' | 2 | 'b', 1 | 'b' | 'c'>;

type UppercaseWes = Uppercase<'wes'>;
type LowercaseWes = Lowercase<'Wes'>;
type CapitalizeWes = Capitalize<'wes'>;
type UncapitalizeWes = Uncapitalize<'Wes'>;

const popped = tap([1, 2, 3], (n) => n.pop());

const test: UncapitalizeWes = 'wes';

type Mask = {
  [K in keyof ObjectLiteralType]: boolean;
};

playground.innerHTML = '' + popped;
