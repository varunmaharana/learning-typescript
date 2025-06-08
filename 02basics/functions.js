"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return 'Hello'
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myVal = addTwo(5);
getUpper("4");
signUpUser("Varun", "varun", false);
loginUser("Varun", "varun@gmail.com");
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var hello = function (s) {
    return "";
};
var heros = ["supermap", "batman", "flash"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
