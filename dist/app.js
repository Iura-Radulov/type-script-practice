"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
let age = 50;
let namePerson = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback;
callback = (a) => { return 100 + a; };
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ['Max', 21];
var ProcesOfLoading;
(function (ProcesOfLoading) {
    ProcesOfLoading[ProcesOfLoading["LOADING"] = 0] = "LOADING";
    ProcesOfLoading[ProcesOfLoading["READY"] = 1] = "READY";
})(ProcesOfLoading || (ProcesOfLoading = {}));
;
const page = {
    load: ProcesOfLoading.READY
};
if (page.load === ProcesOfLoading.LOADING) {
    console.log('Страница загружается');
}
if (page.load === ProcesOfLoading.READY) {
    console.log('Страница загружена');
}
let strNum;
strNum = 10;
strNum = "str";
let stat;
stat = 'enable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
;
//# sourceMappingURL=app.js.map