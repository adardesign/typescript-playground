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

const popped = tap([1, 2, 3], (n) => n.pop());

playground.innerHTML = '' + popped;
