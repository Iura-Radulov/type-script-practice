// const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

//------------ HW2 ------------------

let age: number = 50;
let namePerson: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number
callback = (a) => { return 100 + a };

let anything: any = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === "string") {
  str = some;
}

let person: [string, number];
person = ['Max', 21];

enum ProcesOfLoading { LOADING, READY };
const page = {
  load: ProcesOfLoading.READY
}
if (page.load === ProcesOfLoading.LOADING) {
  console.log('Страница загружается');  
}
if (page.load === ProcesOfLoading.READY) {
  console.log('Страница загружена');
}


let strNum: string | number;
strNum = 10
strNum = "str";

let stat: 'enable' | 'disable';
stat = 'enable';

function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
};

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: string;
    updateAt: string;
  }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

